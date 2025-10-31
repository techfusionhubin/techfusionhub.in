import React, { useRef, useEffect } from "react";
import Header from "../../components/Header/Header";
import Logo from "../../assets/logo.webp";
import { gsap } from "gsap";

const About = () => {
  const [showTeam, setShowTeam] = React.useState(false);
  const teamGridRef = useRef(null);
  const logoRef = useRef(null);

  // Optimize performance on component mount
  useEffect(() => {
    // Set initial CSS properties for better performance
    if (logoRef.current) {
      gsap.set(logoRef.current, {
        transformOrigin: "center center",
        force3d: true,
      });
    }

    // Cleanup function to kill animations on unmount
    return () => {
      gsap.killTweensOf([logoRef.current, teamGridRef.current?.children]);
    };
  }, []);

  const handleLogoClick = () => {
    // Kill any existing animations to prevent conflicts
    gsap.killTweensOf([logoRef.current, teamGridRef.current?.children]);

    if (!showTeam) {
      // Logo pulse animation with better performance
      gsap.to(logoRef.current, {
        scale: 1.1,
        duration: 0.15,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
        force3d: true, // Enable hardware acceleration
      });

      // Set showTeam immediately for faster DOM update
      setShowTeam(true);

      // Use requestAnimationFrame for smoother animation timing
      requestAnimationFrame(() => {
        if (teamGridRef.current) {
          const cards = Array.from(teamGridRef.current.children);

          // Set initial state with hardware acceleration
          gsap.set(cards, {
            opacity: 0,
            y: 20, // Reduced distance for smoother animation
            scale: 0.95, // Less scale change for smoother performance
            force3d: true,
          });

          // Optimized card animation with better easing
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4, // Slightly faster for snappier feel
            ease: "back.out(1.1)", // Less aggressive bounce
            stagger: 0.15, // Faster stagger for quicker completion
            force3d: true,
          });
        }
      });
    } else {
      // Hide animation - animate first, then update state
      if (teamGridRef.current) {
        const cards = Array.from(teamGridRef.current.children);

        gsap.to(cards, {
          opacity: 0,
          y: -15, // Reduced distance
          scale: 0.95, // Less scale change
          duration: 0.25, // Faster hide animation
          ease: "power2.in",
          stagger: 0.05, // Quicker stagger for faster hiding
          force3d: true,
          onComplete: () => {
            setShowTeam(false);
          },
        });
      } else {
        setShowTeam(false);
      }
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <section className="pt-20 pb-16 bg-gradient-to-br from-[#000b1d] to-[#1a1f2e] text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="text-[#f98619]">TechFusion</span>Hub
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Learn more about our mission, vision, and the passionate team behind
            TechFusion.
          </p>
        </div>
      </section>

      {/* Community Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#000b1d] mb-6">
                Our Community Vision
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                TechFusionHub is more than just a community - we're a movement
                dedicated to democratizing technology education and creating
                opportunities for everyone to participate in the digital
                revolution.
              </p>
              <div className="flex w-full gap-4 mb-6 justify-center">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm w-full">
                  <div className="text-3xl font-bold text-[#f98619] mb-2">
                    85+
                  </div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
               
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#f98619] to-[#2596be] rounded-2xl p-8 text-white">
                <div className="text-center">
                  {/* Community Illustration */}
                  <div className="w-64 h-48 mx-auto mb-6 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <div className="grid grid-cols-3 gap-3">
                      {/* Community icons representing people */}
                      {[...Array(9)].map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 bg-white/30 rounded-full flex items-center justify-center"
                        >
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    Building Tomorrow's Tech Community
                  </h3>
                  <p className="text-white/90">
                    Connecting minds, sharing knowledge, and growing together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Members Section (moved from Community) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#000b1d] mb-8">
            Meet Our Team
          </h2>

          {/* Logo to reveal team */}
          <div className="flex justify-center mb-12">
            <div
              ref={logoRef}
              onClick={handleLogoClick}
              className="cursor-pointer transform hover:scale-110 transition-transform duration-300 hover:drop-shadow-[0_0_20px_rgba(249,134,25,0.8)] p-4 rounded-full bg-gradient-to-r from-[#f98619] to-[#2596be] shadow-2xl"
            >
              <img
                src={Logo}
                alt="Click to reveal team"
                className="h-20 w-20 object-contain bg-[#000b1d] rounded-full p-2"
              />
            </div>
          </div>

          {!showTeam && (
            <p className="text-center text-gray-600 text-lg mb-8">
              Click the logo above to meet our amazing team! ✨
            </p>
          )}

          {showTeam && (
            <div
              ref={teamGridRef}
              className="flex  gap-10 max-w-5xl mx-auto"
              style={{
                transform: "translateZ(0)", // Force hardware acceleration
                backfaceVisibility: "hidden", // Optimize for animations
              }}
            >
              {/* Member 1 */}
              <div
                className="flex flex-col items-center bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#f98619] to-[#e07612] flex items-center justify-center text-white mb-4 shadow-lg">
                  {/* Community Leader Icon */}
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#2596be] rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#000b1d]">
                  Venkat Ragav N
                </h3>
                <p className="text-[#2596be] mb-2 font-medium">
                  Community Lead
                </p>
                <p className="text-gray-600 text-center text-sm">
                  Guides and nurtures the community by managing conversations, organizing activities, and ensuring members feel welcome, supported, and engaged.
                </p>
              </div>
              {/* Member 2 */}
              <div
                className="flex flex-col items-center bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#2596be] to-[#1e7a9a] flex items-center justify-center text-white mb-4 shadow-lg">
                  {/* Camera Media Icon */}
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 15.2c-2.35 0-4.2-1.85-4.2-4.2s1.85-4.2 4.2-4.2 4.2 1.85 4.2 4.2-1.85 4.2-4.2 4.2zm0-6.4c-1.22 0-2.2.98-2.2 2.2s.98 2.2 2.2 2.2 2.2-.98 2.2-2.2-.98-2.2-2.2-2.2z"/>
                    <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>
                  </svg>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#f98619] rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
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
                </div>
                <h3 className="text-xl font-semibold text-[#000b1d]">
                  Sabarivasan M
                </h3>
                <p className="text-[#f98619] mb-2 font-medium">Media Head</p>
                <p className="text-gray-600 text-center text-sm">
                  Leads our media and communication efforts by overseeing content creation, announcements, visuals, and brand storytelling across platforms.
                </p>
              </div>
              {/* Member 3 */}
              <div
                className="flex flex-col items-center bg-gray-50 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#000b1d] to-[#1a1f2e] flex items-center justify-center text-white mb-4 shadow-lg">
                  {/* World/Globe Webmaster Icon */}
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#f98619] to-[#2596be] rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#000b1d]">
                  Sukant R
                </h3>
                <p className="text-[#2596be] mb-2 font-medium">Webmaster</p>
                <p className="text-gray-600 text-center text-sm">
                  Maintains, updates, and manages the website to ensure it remains secure, user-friendly, and consistently up to date.
                </p>
              </div>
              
            </div>
          )}
        </div>
      </section>
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

export default About;
