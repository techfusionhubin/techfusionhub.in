import React, { useEffect, useState } from "react";

const OngoingEventPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show popup after a short delay for better UX
    const timer = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative animate-fade-in">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          onClick={() => setShow(false)}
          aria-label="Close popup"
        >
          &times;
        </button>
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-bold uppercase text-[#f98619] mb-2">
            Upcoming Event
          </span>
          <h2 className="text-2xl font-bold mb-2 text-[#000b1d]">
            Paranox 2.0 Hackathon
          </h2>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold text-[#f98619]">
              24 Hours National Hackathon
            </span>{" "}
            by TechXNinjas.
            <br />
            <span className="text-[#2596be] font-semibold">
              ₹16 Lakh+ Prize Pool
            </span>{" "}
            · Free Meals · Swags · Networking · Internship Access.
            <br />
            <span className="font-semibold">
              Open to all college/school students (17-25 yrs).
            </span>
          </p>
          <div className="mb-4 flex flex-col items-center gap-2">
            <span className="inline-block bg-[#f98619] text-white px-4 py-1 rounded-full text-sm font-semibold">
              Delhi-NCR Grand Finale
            </span>
            <span className="inline-block bg-[#2596be] text-white px-4 py-1 rounded-full text-sm font-semibold">
              Register by: paranox.techxninjas.com/techfusionhub
            </span>
          </div>
          <a
            href="https://paranox.techxninjas.com/techfusionhub"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f98619] hover:bg-[#e07612] text-white px-6 py-2 rounded-lg font-semibold shadow transition-all duration-200"
          >
            Register Now
          </a>
        </div>
      </div>
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.4s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default OngoingEventPopup;
