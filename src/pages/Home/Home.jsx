import React, { useState, useEffect } from "react";
import Orange from "../../components/Shapes/Orange";
import Header from "../../components/Header/Header";
import Logo from "../../assets/logo.webp";
import BadgeTemplate from "../../assets/techfusionhub_batch.webp";

const Home = () => {
  const [showGameified, setShowGameified] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [collectedBadges, setCollectedBadges] = useState([]);
  const [showBadgePopup, setShowBadgePopup] = useState(false);
  const [userName, setUserName] = useState("");
  const [generatedBadge, setGeneratedBadge] = useState(null);

  const gameSteps = [
    {
      id: 1,
      title: "🚀 Welcome Explorer!",
      content: "You've discovered TechFusion Hub! Click to start your journey.",
      action: "Start Adventure",
      points: 10,
      badge: "🎯 Explorer",
    },
    {
      id: 2,
      title: "🌟 Our Mission",
      content:
        "We democratize technology education and create opportunities for everyone to participate in the digital revolution.",
      action: "Accept Mission",
      points: 20,
      badge: "🎓 Learning Enthusiast",
    },
    {
      id: 3,
      title: "👥 Community Power",
      content:
        "Join 1000+ active members, attend 50+ tech workshops, and connect with curious minds worldwide!",
      action: "Join Forces",
      points: 30,
      badge: "🤝 Community Builder",
    },
    {
      id: 4,
      title: "💡 Innovation Hub",
      content:
        "Cutting-edge solutions, forward-thinking approaches, and continuous learning in our ever-evolving tech landscape.",
      action: "Innovate Now",
      points: 40,
      badge: "⚡ Tech Innovator",
    },
    {
      id: 5,
      title: "🎉 Welcome to the Family!",
      content:
        "Congratulations! You're now part of the TechFusion Hub community. Ready to build the future together?",
      action: "Explore Community",
      points: 50,
      badge: "👑 TechFusion Champion",
    },
  ];

  const handleGameStart = () => {
    setShowBadgePopup(true);
  };

  const generateBadge = () => {
    if (!userName.trim()) {
      alert("Please enter your name!");
      return;
    }

    const badgeData = {
      name: userName.trim(),
      title: "TechFusion Hub Explorer",
      date: new Date().toLocaleDateString(),
      id: `TFH-${Date.now()}`,
      color: "#f98619",
    };

    setGeneratedBadge(badgeData);
  };

  const downloadBadge = () => {
    if (!generatedBadge) return;

    // Create canvas to draw the badge
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Load the badge template image
    const img = new Image();
    img.onload = () => {
      // Set canvas dimensions to match the image
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the background image
      ctx.drawImage(img, 0, 0);

      // Configure text properties
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Calculate responsive text positioning to match preview
      const imageHeight = canvas.height;
      const imageWidth = canvas.width;

      // Position text lower in the white space area to avoid hexagon overlap
      const centerX = imageWidth * 0.525; // Slightly right of center (52.5% from left)
      const nameY = imageHeight * 0.85; // 85% down from top (moved lower)
      const dateY = imageHeight * 0.92; // 92% down from top (moved lower)

      // Calculate responsive font sizes based on image dimensions
      const baseFontSize = Math.max(16, canvas.width * 0.04); // Minimum 16px, scales with width
      const nameFontSize = baseFontSize * 1.4;
      const dateFontSize = baseFontSize * 0.7;

      // Set text shadow for better visibility
      ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
      ctx.shadowBlur = 2;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;

      // Draw user name
      ctx.font = `bold ${nameFontSize}px Arial, sans-serif`;
      ctx.fillStyle = "#000b1d";
      ctx.fillText(generatedBadge.name.toUpperCase(), centerX, nameY);

      // Reset shadow for date
      ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
      ctx.shadowBlur = 1;

      // Draw issued date
      ctx.font = `${dateFontSize}px Arial, sans-serif`;
      ctx.fillStyle = "#666666";
      ctx.fillText(`Issued: ${generatedBadge.date}`, centerX, dateY);

      // Convert canvas to blob and download
      canvas.toBlob(
        (blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = `TechFusion-Badge-${generatedBadge.name.replace(
            /\s+/g,
            "_"
          )}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);

          // Show success message
          alert("🎉 Badge downloaded successfully as PNG!");
        },
        "image/png",
        0.9
      );
    };

    img.onerror = () => {
      console.error("Failed to load badge template:", BadgeTemplate);
      alert("❌ Error loading badge template. Please try again.");
    };

    // Ensure proper CORS handling for the image
    img.crossOrigin = "anonymous";

    // Load the badge template image
    img.src = BadgeTemplate;
  };

  const closeBadgePopup = () => {
    setShowBadgePopup(false);
    setUserName("");
    setGeneratedBadge(null);
  };

  const handleNextStep = () => {
    const step = gameSteps[currentStep];
    setScore((prev) => prev + step.points);
    setCollectedBadges((prev) => [...prev, step.badge]);

    if (currentStep < gameSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Game completed - redirect to community page
      setTimeout(() => {
        window.location.href = "/community";
      }, 2000);
    }
  };

  const handleCloseGame = () => {
    setShowGameified(false);
    setCurrentStep(0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Orange />

      {/* Hero Section styled like Community page */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#000b1d] to-[#1a1f2e] text-white">
        <div className="container mx-auto px-6 text-center flex flex-col items-center justify-center">
          <img
            src={Logo}
            alt="TechFusion Logo"
            className="w-40 h-40 lg:w-56 lg:h-56 mx-auto mb-6 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
          <h1 className="text-5xl font-bold mb-6">
            Welcome to <span className="text-[#f98619]">TechFusion</span>Hub
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
            Where technology meets innovation. Join our thriving community of
            developers, designers, and tech enthusiasts building the future
            together.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={handleGameStart}
              className="bg-[#f98619] hover:bg-[#e07612] px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-[#f98619] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#000b1d] mb-3">
                Innovation First
              </h3>
              <p className="text-gray-600">
                Cutting-edge solutions and forward-thinking approaches to
                technology.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-[#2596be] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#000b1d] mb-3">
                Community Driven
              </h3>
              <p className="text-gray-600">
                Built by the community, for the community. Your voice matters.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-[#000b1d] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#000b1d] mb-3">
                Always Learning
              </h3>
              <p className="text-gray-600">
                Continuous growth and skill development in the ever-evolving
                tech landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Badge Generation Popup */}
      {showBadgePopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#f98619] to-[#2596be] text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">🏆 Create Your Badge</h2>
                  <p className="text-sm opacity-90 mt-1">
                    Join the TechFusion community!
                  </p>
                </div>
                <button
                  onClick={closeBadgePopup}
                  className="text-white hover:text-gray-200 text-2xl transition-colors"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {!generatedBadge ? (
                /* Name Input Form */
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#f98619] to-[#2596be] rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                    <img
                      src={BadgeTemplate}
                      alt="Badge Template"
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-[#000b1d] mb-3">
                    Enter Your Name
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We'll create a personalized badge for you to download and
                    share!
                  </p>

                  <div className="space-y-4">
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f98619] focus:border-transparent text-center text-lg"
                      onKeyPress={(e) => e.key === "Enter" && generateBadge()}
                    />

                    <button
                      onClick={generateBadge}
                      disabled={!userName.trim()}
                      className="w-full bg-gradient-to-r from-[#f98619] to-[#2596be] hover:from-[#e07612] hover:to-[#1e7a9a] text-white px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      Generate My Badge
                    </button>
                  </div>
                </div>
              ) : (
                /* Badge Preview & Download */
                <div className="text-center">
                  <div className="relative mb-6">
                    <img
                      src={BadgeTemplate}
                      alt="Badge Template"
                      className="w-full max-w-sm mx-auto rounded-xl shadow-lg"
                    />
                    {/* Name overlay preview - positioned to match canvas positioning (lower in white space) */}
                    <div
                      className="absolute inset-0 flex flex-col justify-center items-center"
                      style={{ paddingTop: "85%", paddingLeft: "2.5%" }}
                    >
                      <div className="text-center">
                        <h3
                          className="text-sm sm:text-base lg:text-lg font-bold text-[#000b1d] mb-1"
                          style={{
                            textShadow: "1px 1px 3px rgba(255,255,255,0.9)",
                            letterSpacing: "0.5px",
                          }}
                        >
                          {generatedBadge.name.toUpperCase()}
                        </h3>
                        <p
                          className="text-xs text-gray-600"
                          style={{
                            textShadow: "1px 1px 2px rgba(255,255,255,0.8)",
                          }}
                        >
                          Issued: {generatedBadge.date}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={downloadBadge}
                      className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Download Badge
                    </button>
                  </div>

                  <div className="mt-4 text-xs text-gray-500">
                    <p>
                      🎉 Share your badge on social media to show your
                      membership!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <footer className="bg-[#000b1d] text-white py-8">
          <div className="max-w-6xl mx-auto px-8 text-center">
            <p className="mb-4">
              &copy; 2025 TechFusionHub. Building awareness in the tech
              community.
            </p>
            <div className="flex justify-center space-x-6"></div>
          </div>
        </footer>
    </div>
  );
};

export default Home;
