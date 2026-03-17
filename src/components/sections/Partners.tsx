"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const Partners = () => {
  const logos = [
    { src: "/logo (1).png", alt: "Partner 1", width: '110px', height: '64px' },
    { src: "/logo (3).png", alt: "Partner 3", width: '135px', height: '135px' },
    { src: "/logo (4).png", alt: "Partner 4", width: '82px', height: '63.08px' },
    { src: "/logo (5).png", alt: "Partner 5", width: '134px', height: '88px' },
    { src: "/logo (6).png", alt: "Partner 6", width: '164px', height: '59px' },
    { src: "/logo (7).png", alt: "Partner 7", width: '110px', height: '64px' },
  ];

  return (
    <section className="flex flex-col justify-center items-center py-24 px-4 md:px-12 gap-16 w-full min-h-[737px] bg-[#FCFCFC] relative z-[5] overflow-hidden font-poppins">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-container {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }
          .marquee-container:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Partners Section */}
      <div className="flex flex-col items-center gap-8 w-full">
        <h5 className="max-w-[1110px] w-full text-center text-lg md:text-xl font-medium text-[#494949] leading-normal">
          Trusted by industry-leading companies around the world
        </h5>

        {/* Logo Row - Animated Marquee */}
        <div className="w-full overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="marquee-container">
            {/* Double the logos for seamless loop */}
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="flex justify-center items-center px-8 md:px-12 flex-shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    width: 'auto',
                    height: logo.height === '135px' ? '80px' : '40px', // Scale down slightly for mobile if needed, but here we just make them fit
                    maxWidth: logo.width,
                    objectFit: 'contain',
                  }}
                  className="md:h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-6 max-w-[934px] w-full text-center"
      >
        <h2 className="text-3xl md:text-4xl font-normal text-black leading-tight">
          What is <span className="text-[#0023E8]">BigCradle?</span>
        </h2>

        <p className="text-lg md:text-xl text-[#676767] leading-relaxed">
          At BigCradle, we turn raw data into intelligence through a continuous data flywheel. 
          Using our Task/Survey platform, we crowdsource real-world data at scale, then transform it 
          through data labeling and high-integrity metadata generation to power AI model training, 
          autonomous systems, and advanced analytics. This allows us to support AI companies 
          with model training data, autonomous vehicle companies with labeled datasets, and 
          organizations and NGOs with analytics and impact assessment—turning raw information 
          into decisions that drive real outcomes.
        </p>
      </motion.div>
    </section>
  );
};
