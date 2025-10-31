import React from "react";
import Header from "../../components/Header/Header";
import PartnershipBanner from "../../components/PartnershipBanner";

// Direct LinkedIn redirect when Join Community is clicked
const CommunityJoinLinks = () => {
  const handleJoinCommunity = () => {
    // Redirect to LinkedIn page
    window.open(
      "https://www.linkedin.com/company/techfusionhub/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      <button
        className="bg-[#f98619] hover:bg-[#e07612] px-8 py-3 rounded-lg font-semibold text-white flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
        onClick={handleJoinCommunity}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        Join Community
      </button>
    </div>
  );
};

const Community = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-[#000b1d] to-[#1a1f2e] text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Join the <span className="text-[#f98619]">TechFusion</span>Hub{" "}
            Community
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Connect with curious minds, tech enthusiasts, and knowledge seekers.
            Share insights, attend tech talks, and grow together in our
            inclusive tech awareness community. Now partnered with{" "}
            <span className="text-[#f98619] font-semibold">
              Paranox 2.O by TechXNinjas
            </span>{" "}
            for exclusive educational sessions and tech awareness workshops.
          </p>
          <CommunityJoinLinks />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center place-content-center gap-8 text-center">
            <div className="bg-gradient-to-r from-[#2596be] to-[#000b1d] p-6 rounded-lg shadow-md w-full text-white border-2 border-transparent">
              <div className="text-3xl font-bold text-[#f98619] mb-2">24/7</div>
              <div className="text-gray-200">Community Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#000b1d] mb-12">
            What Makes Our Community Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#f98619] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#000b1d] mb-3">
                Expert Guidance
              </h3>
              <p className="text-gray-600">
                Learn from tech professionals and industry experts who share
                insights about technology's impact on society.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#2596be] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
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
              <h3 className="text-xl font-semibold text-[#000b1d] mb-3">
                Knowledge Sharing
              </h3>
              <p className="text-gray-600">
                Participate in discussions about emerging tech trends and their
                real-world applications and implications.
              </p>
            </div>
            <div className="text-center p-6">
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
                Digital Literacy
              </h3>
              <p className="text-gray-600">
                Access educational resources and workshops designed to improve
                understanding of modern technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-[#000b1d] mb-4">
            Our Community Partners
          </h2>

          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We collaborate with leading tech communities and organizations to
            provide the best learning and networking experiences for our
            members.
          </p>

          {/* <div className="flex gap-8 mb-12 items-center justify-center">
            <div className="flex justify-center items-center w-full">
              <div className="bg-gradient-to-br from-[#000b1d] to-[#1a1f2e] rounded-lg p-8 text-white text-center transform hover:scale-105 transition-transform max-w-lg w-full">
                <div className="w-20 h-20 bg-[#f98619] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-white"
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
                <h3 className="text-2xl font-bold mb-3">Paranox 2.O</h3>
                <p className="text-gray-300 mb-4">by TechXNinjas</p>
                <p className="text-sm leading-relaxed mb-6">
                  Strategic partnership for hosting AI workshops, tech awareness
                  sessions, and educational programs. Together we're building
                  digital literacy and tech understanding for everyone.
                </p>
                <div className="flex justify-center space-x-4">
                  <span className="px-3 py-1 bg-[#f98619] text-xs rounded-full">
                    Workshops
                  </span>
                  <span className="px-3 py-1 bg-[#2596be] text-xs rounded-full">
                    Education
                  </span>
                  <span className="px-3 py-1 bg-white text-[#000b1d] text-xs rounded-full">
                    Partnership
                  </span>
                </div>
              </div>
            </div>
          </div> */}
          {/* Partnership Banner */}
          <PartnershipBanner />

          {/* Partnership Benefits */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center text-[#000b1d] mb-8">
              Partnership Benefits for Our Members
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#f98619] rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#000b1d] mb-2">
                  Exclusive Workshops
                </h4>
                <p className="text-sm text-gray-600">
                  Access to premium AI and tech awareness workshops
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#2596be] rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#000b1d] mb-2">
                  Learning Resources
                </h4>
                <p className="text-sm text-gray-600">
                  Shared educational content and digital literacy materials
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#000b1d] rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#000b1d] mb-2">
                  Career Guidance
                </h4>
                <p className="text-sm text-gray-600">
                  Tech career guidance and professional development support
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#f98619] rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#000b1d] mb-2">
                  Networking Events
                </h4>
                <p className="text-sm text-gray-600">
                  Joint meetups and tech awareness community events
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#000b1d] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your journey with thousands of curious minds and tech
            enthusiasts in our awareness community.
          </p>

          {/* Social Media Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* LinkedIn */}
            <button
              className="bg-[#0077b5] hover:bg-[#005885] px-6 py-3 rounded-lg font-semibold text-white flex items-center gap-3 transition-all duration-300 transform hover:scale-105 min-w-[160px]"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/techfusionhub/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </button>

            {/* WhatsApp */}
            <button
              className="bg-[#25d366] hover:bg-[#1da851] px-6 py-3 rounded-lg font-semibold text-white flex items-center gap-3 transition-all duration-300 transform hover:scale-105 min-w-[160px]"
              onClick={() =>
                window.open(
                  "https://wa.me/919876543210",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
              </svg>
              WhatsApp
            </button>

            {/* Instagram */}
            <button
              className="bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#515bd4] hover:from-[#e96443] hover:to-[#904e95] px-6 py-3 rounded-lg font-semibold text-white flex items-center gap-3 transition-all duration-300 transform hover:scale-105 min-w-[160px]"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/techfusion.hub/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.98.98-1.274 2.092-1.333 3.374C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.282.353 2.394 1.333 3.374.98.98 2.092 1.274 3.374 1.333C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.059 2.394-.353 3.374-1.333.98-.98 1.274-2.092 1.333-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.282-.353-2.394-1.333-3.374-.98-.98-2.092-1.274-3.374-1.333C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
              Instagram
            </button>
          </div>
        </div>
      </section>

      {/* Team Members Section moved to About page */}
      <footer className="py-8 bg-gray-100">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>
            &copy; 2025 TechFusionHub. Building awareness in the tech community.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Community;
