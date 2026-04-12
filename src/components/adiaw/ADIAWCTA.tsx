"use client";

import React from "react";
import { motion } from "framer-motion";

export function ADIAWCTA() {
  return (
    <section
      id="adiaw-cta"
      className="w-full bg-white py-12 px-4 md:px-12 font-poppins"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-[1240px] mx-auto rounded-[32px] overflow-hidden bg-[#001A30] px-8 md:px-16 py-16 md:py-20 flex flex-col items-center text-center gap-8"
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(ellipse, #0D8AFF 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Decorative dots pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-[700px]">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/15 text-[#94B2FF] text-[13px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D8AFF] animate-pulse" />
            Registration Now Open
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white leading-tight">
            Shape the future of Africa&apos;s{" "}
            <span className="bg-gradient-to-r from-[#0D8AFF] to-[#94B2FF] bg-clip-text text-transparent">
              data infrastructure.
            </span>
          </h2>

          <p className="text-[17px] text-[#8FA8C8] leading-relaxed">
            Whether you are a young professional ready to build your career, or a
            senior leader shaping your organization&apos;s AI strategy — ADIAW has your spot.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              id="adiaw-register-workshop-cta"
              href="https://app.bigcradle.com/workshop"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 h-[54px] px-8 rounded-[10px] bg-gradient-to-r from-[#0546D2] via-[#0D8AFF] to-[#0546D2] text-white font-semibold text-[15px] hover:shadow-2xl hover:shadow-[#0D8AFF]/30 hover:scale-[1.02] transition-all duration-200"
            >
              Register for Executive Workshop
            </a>
            <a
              id="adiaw-apply-fellowship-cta"
              href="https://app.bigcradle.com/talents"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 h-[54px] px-8 rounded-[10px] bg-white/10 border border-white/20 text-white font-semibold text-[15px] hover:bg-white/15 hover:scale-[1.02] transition-all duration-200"
            >
              Apply for Fellowship
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
