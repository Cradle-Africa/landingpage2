"use client";

import React from 'react';

export const Trust = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto bg-[#FCFCFC] py-24 px-4 md:px-12 flex flex-col items-center overflow-hidden font-poppins">
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .trust-marquee {
            display: flex;
            width: max-content;
            animation: slide 40s linear infinite;
          }
        `}
      </style>

      {/* Header Container */}
      <div className="flex flex-col items-center gap-2 mb-16 text-center max-w-[578px] w-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#0C0C0C]">
          Data You Can Trust
        </h2>
        <p className="text-base md:text-lg text-[#676767]">
          Every response comes from a verified human contributor
        </p>
      </div>

      {/* Image Row Container - Animated Marquee for full width feel */}
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="trust-marquee">
          {[1, 2, 3, 1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="w-[300px] h-[210px] md:w-[500px] md:h-[350px] lg:w-[700px] lg:h-[498px] mx-4 bg-[url('/Overview_page_(1).png')] bg-cover bg-center border border-[#F8F8F8] shadow-lg rounded-xl flex-shrink-0 transition-transform hover:scale-[1.02]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
