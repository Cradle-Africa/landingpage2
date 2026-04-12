"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { adiawSpeakers } from "@/lib/adiaw-data";

export function ADIAWSpeakers() {
  return (
    <section
      id="adiaw-speakers"
      className="w-full bg-white py-20 px-4 md:px-12 font-poppins"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5EDFF] border border-[#9747FF]/15 text-[#9747FF] text-[13px] font-semibold">
            Featured Speakers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C0C0C] leading-tight">
            Meet the Speakers
          </h2>
          <p className="text-[17px] text-[#676767] max-w-[560px] leading-relaxed">
            Industry leaders and decision-makers shaping Africa&apos;s digital economy
            will share their insights and expertise.
          </p>
        </motion.div>

        {/* Speaker Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {adiawSpeakers.map((speaker, idx) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center gap-5 p-8 bg-white rounded-[24px] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 group"
            >
              {/* Avatar */}
              <div className="relative">
                {speaker.image ? (
                  <div className="w-[80px] h-[80px] rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div
                    className="w-[80px] h-[80px] rounded-full flex items-center justify-center text-[26px] font-bold transition-transform duration-300 group-hover:scale-110"
                    style={{ background: speaker.bg, color: speaker.color }}
                  >
                    {speaker.initials}
                  </div>
                )}
                {/* Accent ring */}
                <div
                  className="absolute inset-[-4px] rounded-full border-2 border-dashed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderColor: speaker.color }}
                />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[17px] font-semibold text-[#0C0C0C]">
                  {speaker.name}
                </h3>
                <p className="text-[13px] text-[#676767] leading-snug">
                  {speaker.role}
                </p>
              </div>

              {/* Color dot indicator */}
              <div
                className="w-8 h-1 rounded-full transition-all duration-300 group-hover:w-12"
                style={{ background: speaker.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Speaking at note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center gap-3 px-6 py-3 bg-[#F6F9FF] rounded-full border border-[#0023E8]/10"
        >
          <div className="w-2 h-2 rounded-full bg-[#0023E8] animate-pulse" />
          <p className="text-[14px] text-[#676767]">
            Speaking at the{" "}
            <span className="font-semibold text-[#0023E8]">Executive Leadership Workshop</span>
            {" "}— April 23, Kigali
          </p>
        </motion.div>
      </div>
    </section>
  );
}
