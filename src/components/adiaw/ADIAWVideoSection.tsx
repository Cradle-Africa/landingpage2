"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export function ADIAWVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      videoRef.current?.play().catch((err) => {
        console.warn("Video auto-play failed:", err);
      });
    } else {
      videoRef.current?.pause();
    }
  }, [isInView]);

  return (
    <section
      id="adiaw-data-flow"
      className="relative w-full bg-white py-24 px-4 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#0023E8] opacity-[0.03] blur-[100px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[#9747FF] opacity-[0.03] blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto flex flex-col items-center gap-12">
        {/* Header content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-[800px] space-y-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EEF2FF] border border-[#0023E8]/10 text-[#0023E8] text-[13px] font-semibold tracking-wide">
            THE DATA VALUE CHAIN
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C0C0C] tracking-tight">
            From Raw Data to <span className="text-[#0023E8]">Intelligent Decisions</span>
          </h2>
          <p className="text-lg text-[#676767] leading-relaxed">
            Witness how ADIAW transforms fragmented data into the foundational
            infrastructure for Africa's most advanced AI models and business insights.
          </p>
        </motion.div>

        {/* Video Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-[24px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,35,232,0.12)] border border-gray-100 bg-black group"
        >
          {/* Glass Overlay for depth */}
          <div className="absolute inset-0 z-10 pointer-events-none border-[1px] border-white/20 rounded-[24px]" />
          
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="auto"
            poster="/adiaw/datavideo/video-poster.jpg" // Placeholder if needed
          >
            <source src="/adiaw/datavideo/updated%202d%20data%20animation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video controls hint (visual only) */}
          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium tracking-wider uppercase">
              2D Animation
            </div>
            <div className="flex px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium tracking-wider uppercase">
              Data Insights
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
    </section>
  );
}
