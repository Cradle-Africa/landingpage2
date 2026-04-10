"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { adiawFeatures } from "@/lib/adiaw-data";

const icons: Record<string, React.ReactNode> = {
  shield: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L4 6V12C4 16.418 7.582 20 12 22C16.418 20 20 16.418 20 12V6L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  tag: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M20.59 13.41L13.42 20.58C13.05 20.95 12.55 21.16 12.03 21.16C11.51 21.16 11.01 20.95 10.64 20.58L3 13V3H13L20.59 10.59C21.37 11.37 21.37 12.63 20.59 13.41Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" />
    </svg>
  ),
  pencil: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10218 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  settings: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M19.4 15C19.1 15.6 19.2 16.3 19.7 16.8L19.8 16.9C20.2 17.3 20.4 17.8 20.4 18.4C20.4 19 20.2 19.5 19.8 19.9C19.4 20.3 18.9 20.5 18.3 20.5C17.7 20.5 17.2 20.3 16.8 19.9L16.7 19.8C16.2 19.3 15.5 19.2 14.9 19.5C14.3 19.8 14 20.4 14 21V21.2C14 22.2 13.2 23 12.2 23C11.2 23 10.4 22.2 10.4 21.2V21.1C10.3 20.4 9.9 19.9 9.3 19.7C8.7 19.4 8 19.5 7.5 20L7.4 20.1C7 20.5 6.5 20.7 5.9 20.7C5.3 20.7 4.8 20.5 4.4 20.1C4 19.7 3.8 19.2 3.8 18.6C3.8 18 4 17.5 4.4 17.1L4.5 17C5 16.5 5.1 15.8 4.8 15.2C4.5 14.6 3.9 14.3 3.3 14.3H3C2 14.3 1.2 13.5 1.2 12.5C1.2 11.5 2 10.7 3 10.7H3.1C3.8 10.6 4.3 10.2 4.5 9.6C4.8 9 4.7 8.3 4.2 7.8L4.1 7.7C3.7 7.3 3.5 6.8 3.5 6.2C3.5 5.6 3.7 5.1 4.1 4.7C4.5 4.3 5 4.1 5.6 4.1C6.2 4.1 6.7 4.3 7.1 4.7L7.2 4.8C7.7 5.3 8.4 5.4 9 5.1C9.6 4.8 9.9 4.2 9.9 3.6V3.4C9.9 2.4 10.7 1.6 11.7 1.6C12.7 1.6 13.5 2.4 13.5 3.4V3.5C13.5 4.1 13.8 4.7 14.4 5C15 5.3 15.7 5.2 16.2 4.7L16.3 4.6C16.7 4.2 17.2 4 17.8 4C18.4 4 18.9 4.2 19.3 4.6C19.7 5 19.9 5.5 19.9 6.1C19.9 6.7 19.7 7.2 19.3 7.6L19.2 7.7C18.7 8.2 18.6 8.9 18.9 9.5C19.2 10.1 19.8 10.4 20.4 10.4H20.6C21.6 10.4 22.4 11.2 22.4 12.2C22.4 13.2 21.6 14 20.6 14H20.5C19.9 14 19.4 14.3 19.1 14.9L19.4 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),
  "bar-chart": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="12" width="4" height="9" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="10" y="7" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="17" y="3" width="4" height="18" rx="1" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  flask: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 3H15M9 3V10L4 20H20L15 10V3M9 3H15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 17H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function ADIAWFeatures() {
  return (
    <section
      id="adiaw-features"
      className="w-full bg-[#F6F9FF] py-20 px-4 md:px-12 font-poppins"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-4 text-center max-w-[680px]"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0023E8]/15 text-[#0023E8] text-[13px] font-semibold shadow-sm">
            Curriculum Overview
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C0C0C] leading-tight">
            What You Will Learn
          </h2>
          <p className="text-[17px] text-[#676767] leading-relaxed">
            A practical, hands-on curriculum designed to launch your career in
            Africa&apos;s fast-growing AI data infrastructure space.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {adiawFeatures.map((feature, idx) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              className="relative flex flex-col gap-5 p-7 bg-white rounded-[20px] border border-gray-100 cursor-default overflow-hidden group transition-shadow duration-300"
            >
              {/* Number watermark */}
              <span
                className="absolute top-4 right-5 text-[64px] font-bold opacity-[0.04] leading-none select-none"
                style={{ color: feature.color }}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className="flex items-center justify-center w-[52px] h-[52px] rounded-[14px] flex-shrink-0"
                style={{ background: feature.bg, color: feature.color }}
              >
                {icons[feature.icon]}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] font-semibold text-[#0C0C0C]">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-[#676767] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 rounded-b-[20px]"
                style={{ background: feature.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
