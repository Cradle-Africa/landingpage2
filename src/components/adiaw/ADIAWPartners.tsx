"use client";

import React from "react";
import { motion } from "framer-motion";
import { adiawPartners } from "@/lib/adiaw-data";

const partnerColors = [
  { color: "#0023E8", bg: "#EEF2FF" },
  { color: "#9747FF", bg: "#F5EDFF" },
  { color: "#0BAD2E", bg: "#EDFAF1" },
  { color: "#FF760D", bg: "#FFF4EC" },
];

export function ADIAWPartners() {
  const host = adiawPartners.find((p) => p.isHost);
  const partners = adiawPartners.filter((p) => !p.isHost);

  return (
    <section
      id="adiaw-partners"
      className="w-full bg-white py-20 px-4 md:px-12 font-poppins"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EEF2FF] border border-[#0023E8]/15 text-[#0023E8] text-[13px] font-semibold">
            Hosted By &amp; Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C0C0C] leading-tight">
            Backed by Leading Organizations
          </h2>
          <p className="text-[17px] text-[#676767] max-w-[560px] leading-relaxed">
            ADIAW is made possible through collaboration with forward-thinking
            organizations committed to Africa&apos;s digital future.
          </p>
        </motion.div>

        {/* Hosted By */}
        {host && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-[13px] font-semibold uppercase tracking-widest text-[#676767]">
              Hosted By
            </span>
            <div className="flex items-center justify-center gap-4 px-10 py-6 bg-gradient-to-r from-[#EEF2FF] to-[#EBF5FF] rounded-[20px] border border-[#0023E8]/10">
              <div className="flex items-center justify-center w-[56px] h-[56px] rounded-[16px] bg-gradient-to-br from-[#0023E8] to-[#0D8AFF]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" fill="white" fillOpacity="0.9" />
                </svg>
              </div>
              <div>
                <p className="text-[22px] font-bold text-[#0C0C0C]">BigCradle</p>
                <p className="text-[14px] text-[#676767]">
                  The Intelligence Engine for Africa
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Divider */}
        <div className="flex items-center gap-4 w-full max-w-[600px]">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-[13px] font-semibold uppercase tracking-widest text-[#9CA3AF]">
            Partners
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {partners.map((partner, idx) => {
            const palette = partnerColors[idx % partnerColors.length];
            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-4 p-6 bg-white rounded-[20px] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                {/* Avatar */}
                <div
                  className="flex items-center justify-center w-[60px] h-[60px] rounded-full text-[18px] font-bold"
                  style={{ background: palette.bg, color: palette.color }}
                >
                  {partner.shortName
                    ? partner.shortName.slice(0, 2).toUpperCase()
                    : partner.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[15px] font-semibold text-[#0C0C0C] leading-snug">
                    {partner.shortName || partner.name}
                  </p>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[12px] font-medium"
                    style={{ background: palette.bg, color: palette.color }}
                  >
                    {partner.role}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
