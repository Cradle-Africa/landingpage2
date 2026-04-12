"use client";

import React from "react";
import Image from "next/image";
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
              <div className="flex items-center justify-center w-[56px] h-[56px] rounded-[16px] bg-white border border-[#0023E8]/10 overflow-hidden shadow-sm">
                <Image
                  src="/logo.png"
                  alt="BigCradle"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
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

        {/* Partners Marquee */}
        <div className="relative w-full overflow-hidden py-2 select-none group/marquee">
          <motion.div
            className="flex gap-6 w-max"
            animate={{
              x: [0, -280 * partners.length - 24 * partners.length], // (width + gap) * count
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, // Smooth slow movement
                ease: "linear",
              },
            }}
            whileHover={{ transition: { duration: 10000 } }} // Effectively pause on hover
          >
            {[...partners, ...partners].map((partner, idx) => {
              const palette = partnerColors[idx % partnerColors.length];
              return (
                <div
                  key={`${partner.id}-${idx}`}
                  className="flex flex-col items-center justify-center gap-4 p-8 min-w-[280px] bg-white rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-center"
                >
                  {/* Logo Container */}
                  <div
                    className="flex items-center justify-center w-[80px] h-[80px] rounded-[20px] overflow-hidden p-2"
                    style={{ background: palette.bg }}
                  >
                    {partner.image ? (
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        width={60}
                        height={60}
                        className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div
                        className="text-[20px] font-bold"
                        style={{ color: palette.color }}
                      >
                        {partner.name.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-[16px] font-bold text-[#0C0C0C] leading-snug tracking-tight">
                      {partner.name}
                    </p>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase"
                      style={{ background: palette.bg, color: palette.color }}
                    >
                      {partner.role}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Faded edges for smooth entry/exit */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
