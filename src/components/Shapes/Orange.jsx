import React from "react";

const Orange = () => {
  return (
    <>
      {/* Primary decorative shape - Orange */}
      <div className="fixed w-80 h-80 bg-[#f98619] rounded-full -top-40 -right-40 -z-10 opacity-80"></div>

      {/* Secondary decorative shape - Blue */}
      <div className="fixed w-64 h-64 bg-[#2596be] rounded-full top-20 -left-32 -z-10 opacity-70"></div>

      {/* Tertiary decorative shape - Dark Navy */}
      <div className="fixed w-48 h-48 bg-[#000b1d] rounded-full bottom-20 right-20 -z-10 opacity-60"></div>

      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50 -z-20"></div>
    </>
  );
};

export default Orange;
