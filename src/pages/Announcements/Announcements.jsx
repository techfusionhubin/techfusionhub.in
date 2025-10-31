import React from "react";
import Header from "../../components/Header/Header";

// Toast Notification Component
function Toast({ message, type, onClose }) {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Auto close after 5 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-6 right-6 z-50">
      <div
        className={`px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 transform transition-all duration-300 ease-in-out ${
          type === "success"
            ? "bg-green-600 text-white"
            : type === "error"
            ? "bg-red-600 text-white"
            : "bg-blue-600 text-white"
        }`}
      >
        <div className="flex items-center gap-2">
          {type === "success" && (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
          {type === "error" && (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <span className="font-medium">{message}</span>
        </div>
        <button
          onClick={onClose}
          className="ml-2 hover:bg-black hover:bg-opacity-20 rounded p-1 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function NewsletterForm({ onShowToast }) {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setEmail("");
        onShowToast("🎉 Successfully subscribed to our newsletter!", "success");
      } else {
        setStatus("error");
        // Handle specific error messages from server
        if (res.status === 409) {
          onShowToast(
            "📧 Email already subscribed to our newsletter!",
            "error"
          );
        } else if (res.status === 400) {
          onShowToast(
            `❌ ${data.error || "Please enter a valid email address"}`,
            "error"
          );
        } else {
          onShowToast(
            "❌ Failed to subscribe. Please try again later.",
            "error"
          );
        }
      }
    } catch (error) {
      setStatus("error");
      onShowToast(
        "❌ Unable to connect to server. Please check your connection.",
        "error"
      );
      console.error("Newsletter subscription error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto w-full"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter your email address"
        className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f98619] placeholder-gray-300 placeholder:font-medium bg-[#000b1d] border border-[#1a1f2e]"
        style={{ color: "#fff", background: "#000b1d" }}
      />
      <button
        type="submit"
        className="bg-[#f98619] hover:bg-[#e07612] px-6 py-3 rounded-lg font-semibold"
        disabled={loading}
      >
        {loading ? "Subscribing..." : "Subscribe"}
      </button>
    </form>
  );
}

const Announcements = () => {
  const [toast, setToast] = React.useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  const announcements = [
    {
      id: 0,
      title: "LIVE NOW: TechFusion Community Meetup - Building Tomorrow's Tech",
      date: "Not Yet",
      category: "Live",
      isLive: true,
      content:
        "Join us LIVE for our monthly community meetup! Tonight we're discussing the latest trends in technology, sharing success stories from our community members, and unveiling exciting new initiatives. Special guest speakers from leading tech companies will share their insights on emerging technologies and career opportunities. Don't miss this interactive session with live Q&A, networking opportunities, and exclusive announcements about upcoming workshops and events.",
      author: "TechFusion Hub",
      liveUrl: "https://www.youtube.com/watch?v=example", // Replace with actual live stream URL
      viewerCount: "Waiting",
      tags: [
        "live",
        "community",
        "meetup",
        "networking",
        "tech-trends",
        "career",
      ],
    },
    {
      id: 1,
      title: "EXCLUSIVE AI Workshop for Students - FREE Registration Now Open!",
      date: "September 22, 2025",
      category: "Workshop",
      content:
        "Calling all students! Join our comprehensive AI Workshop designed specifically for students who want to dive into the exciting world of Artificial Intelligence. Learn Machine Learning fundamentals, build your first AI project, and get hands-on experience with popular AI tools and frameworks. This 3-day intensive workshop includes: • Introduction to AI & Machine Learning • Python for AI programming • Building your first neural network • Real-world AI applications • Career guidance in AI field • Free AI toolkit and resources • Certificate of completion. Limited seats available - only 50 spots for students! Register now with your student ID.",
      author: "TechFusion AI Team",
      tags: [
        "AI",
        "workshop",
        "students",
        "machine-learning",
        "free",
        "certification",
        "python",
      ],
    },
    // ...other announcements (keep your existing array)
  ];

  // Category color function
  const getCategoryColor = (category) => {
    switch (category) {
      case "Live":
        return "bg-red-600 text-white animate-pulse";
      case "Event":
        return "bg-[#f98619] text-white";
      case "Program":
        return "bg-[#2596be] text-white";
      case "Results":
        return "bg-[#000b1d] text-white";
      case "System":
        return "bg-gray-600 text-white";
      case "Feature":
        return "bg-purple-600 text-white";
      case "Spotlight":
        return "bg-green-600 text-white";
      case "Partnership":
        return "bg-gradient-to-r from-[#f98619] to-[#2596be] text-white";
      case "Workshop":
        return "bg-gradient-to-r from-[#2596be] to-[#000b1d] text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };
  const [activeFilter, setActiveFilter] = React.useState("All");
  const filteredAnnouncements = React.useMemo(() => {
    if (activeFilter === "All") return announcements;
    if (activeFilter === "Events")
      return announcements.filter(
        (a) => a.category === "Event" || a.category === "Workshop"
      );
    if (activeFilter === "Live")
      return announcements.filter((a) => a.tags.includes("live"));
    if (activeFilter === "Ongoing")
      return announcements.filter((a) => a.tags.includes("ongoing"));
    if (activeFilter === "Upcoming")
      return announcements.filter((a) => a.tags.includes("upcoming"));
    return announcements;
  }, [activeFilter, announcements]);

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Toast Notification */}
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-[#000b1d] to-[#1a1f2e] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">
              Community <span className="text-[#f98619]">Announcements</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest news, events, and developments in our
              TechFusion community. Never miss important updates and
              opportunities.
            </p>
          </div>
          {/* Quick Stats */}
          <div className="flex items-center place-content-center gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-[#2596be] mb-2">
                {announcements.length -
                  announcements.filter((a) => a.isLive).length}
              </div>
              <div className="text-sm">Total Announcements</div>
            </div>

            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-white mb-2">2</div>
              <div className="text-sm">Upcomming events</div>
            </div>
          </div>
        </div>
      </section>
      {/* Filter Section (with logic) */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {["All", "Events", "Live", "Ongoing", "Upcoming"].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-150 ${
                  activeFilter === filter
                    ? "bg-[#f98619] text-white hover:bg-[#e07612]"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                type="button"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Announcements List as Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredAnnouncements.length === 0 ? (
              <div className="col-span-2 text-center text-gray-500 text-lg py-12">
                No announcements found for this filter.
              </div>
            ) : (
              filteredAnnouncements.map((announcement) => (
                <div
                  key={announcement.id}
                  className={`bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow flex flex-col ${
                    announcement.isLive
                      ? "border-red-500 border-2"
                      : "border-gray-200"
                  }`}
                >
                  {/* Live Stream Template */}
                  {announcement.isLive ? (
                    <>
                      {/* Live Indicator Header */}
                      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                              <span className="font-bold text-lg">🔴 LIVE</span>
                            </div>
                            <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
                              👥 {announcement.viewerCount}
                            </div>
                          </div>
                          <div className="text-sm font-medium">
                            {announcement.date}
                          </div>
                        </div>
                      </div>

                      {/* Live Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold text-[#000b1d] mb-3">
                          {announcement.title}
                        </h3>

                        {/* Live Stream Placeholder */}
                        <div className="bg-black rounded-lg mb-4 aspect-video flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-purple-600/20"></div>
                          <div className="text-center text-white z-10">
                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                              <svg
                                className="w-8 h-8"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                            <p className="text-lg font-semibold">Live Stream</p>
                            <p className="text-sm opacity-80">Click to join</p>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {announcement.content}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {announcement.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-red-50 text-red-600 text-xs rounded font-medium"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="text-xs text-gray-500 mb-4">
                          By {announcement.author}
                        </div>

                        {/* Live Action Buttons */}
                        <div className="flex gap-3 mt-auto">
                          <button
                            onClick={() =>
                              window.open(announcement.liveUrl, "_blank")
                            }
                            className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                            Join Live Stream
                          </button>
                          <button className="px-4 py-3 border border-red-600 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-all">
                            📱 Share
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Regular Announcement Template */
                    <>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                              announcement.category
                            )}`}
                          >
                            {announcement.category}
                          </span>
                          <span className="text-sm text-gray-500 ml-auto">
                            {announcement.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-[#000b1d] mb-2 hover:text-[#f98619] cursor-pointer">
                          {announcement.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                          {announcement.content}
                        </p>
                        <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                          <div className="flex flex-wrap gap-2">
                            {announcement.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <div className="text-xs text-gray-500">
                            By {announcement.author}
                          </div>
                        </div>
                      </div>
                      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
                        <button className="text-[#2596be] hover:text-[#1e7a9a] font-medium text-sm">
                          Read More →
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      {/* Newsletter Subscription */}
      <section className="py-16 bg-[#000b1d] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Never Miss an Update</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest announcements
            delivered straight to your inbox.
          </p>
          <NewsletterForm onShowToast={showToast} />
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 bg-gray-100">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>&copy; 2025 TechFusionHub. Stay connected, stay informed.</p>
        </div>
      </footer>
    </div>
  );
};
export default Announcements;
