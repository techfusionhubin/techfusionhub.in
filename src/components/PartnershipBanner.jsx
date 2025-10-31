// PartnershipBanner.jsx
import React from "react";
import handshake from "../assets/handshake.png";
import paranoxLogo from "../assets/paranox.png";
import techfusionLogo from "../assets/techfusion_logo.webp";

const PartnershipBanner = () => (
  <div className="flex flex-col items-center justify-center my-10">
    <div className="flex items-center gap-8 bg-white rounded-2xl p-6 shadow-2xl">
      <div className="bg-black rounded-xl p-3 flex items-center justify-center">
        <img
          src={techfusionLogo}
          alt="TechFusion Hub"
          className="h-48 w-80 object-contain"
        />
      </div>
      <img
        src={handshake}
        alt="Partnership"
        className="h-40 w-40 object-contain mx-4"
      />
      <div className="bg-black rounded-xl p-3 flex items-center justify-center">
        <a
          href="https://paranox.techxninjas.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={paranoxLogo}
            alt="Paranox 2.0"
            className="h-48 w-80 object-contain cursor-pointer"
          />
        </a>
      </div>
    </div>
    <p className="mt-4 text-lg font-semibold text-[#000b1d]">
      Community Partnership: Paranox 2.0 × TechFusion Hub
    </p>
  </div>
);

export default PartnershipBanner;
