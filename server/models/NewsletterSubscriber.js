import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

const NewsletterSubscriber = mongoose.model(
  "NewsletterSubscriber",
  newsletterSchema
);

export default NewsletterSubscriber;
