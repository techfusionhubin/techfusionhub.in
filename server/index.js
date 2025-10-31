import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import dotenv from "dotenv";
import NewsletterSubscriber from "./models/NewsletterSubscriber.js";

// Load environment variables
// dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const mongoUri =
  "mongodb+srv://sukantonmongodb:sukantravi@cluster0.nkcbio9.mongodb.net/techfusionhub?retryWrites=true&w=majority";

// MongoDB connection with better configuration
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 30000, // 30 seconds timeout
      socketTimeoutMS: 45000, // 45 seconds socket timeout
      maxPoolSize: 10, // Maximum number of connections
      minPoolSize: 5, // Minimum number of connections
      maxIdleTimeMS: 30000, // Close connections after 30 seconds of inactivity
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // Handle connection events
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });

    mongoose.connection.on("reconnected", () => {
      console.log("MongoDB reconnected");
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    // Don't exit the process, let it retry
    setTimeout(connectDB, 5000); // Retry after 5 seconds
  }
};

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("TechFusion backend is running!");
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  const dbStatus =
    mongoose.connection.readyState === 1 ? "Connected" : "Disconnected";
  res.json({
    status: "Server running",
    database: dbStatus,
    timestamp: new Date().toISOString(),
  });
});

// Newsletter subscription endpoint
app.post("/api/newsletter", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .json({ error: "Please enter a valid email address" });
  }

  try {
    // Check if MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      console.log("MongoDB not connected, attempting to reconnect...");
      return res.status(503).json({
        error:
          "Database temporarily unavailable. Please try again in a moment.",
      });
    }

    // Check if email already exists with timeout
    const existing = await NewsletterSubscriber.findOne({
      email: email.toLowerCase(),
    }).maxTimeMS(5000); // 5 second timeout for this operation

    if (existing) {
      return res.status(409).json({ error: "Email already subscribed" });
    }

    // Create new subscriber with timeout
    const subscriber = new NewsletterSubscriber({
      email: email.toLowerCase(),
      subscribedAt: new Date(),
    });

    await subscriber.save({ maxTimeMS: 5000 }); // 5 second timeout for save operation

    console.log(`New subscriber: ${email}`);
    res.status(201).json({ message: "Successfully subscribed to newsletter!" });
  } catch (err) {
    console.error("Newsletter subscription error:", err);

    // Handle specific MongoDB errors
    if (err.name === "MongooseError" || err.name === "MongoTimeoutError") {
      return res.status(503).json({
        error: "Database connection issue. Please try again in a moment.",
      });
    }

    if (err.code === 11000) {
      return res.status(409).json({ error: "Email already subscribed" });
    }

    res.status(500).json({ error: "Server error. Please try again later." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
