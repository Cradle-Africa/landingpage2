"use client";

import React from "react";
import { motion } from "framer-motion";
import { adiawExecutiveTopics, adiawExecutiveAudience } from "@/lib/adiaw-data";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

const topicColors = [
  { color: "#0023E8", bg: "#EEF2FF" },
  { color: "#9747FF", bg: "#F5EDFF" },
  { color: "#0BAD2E", bg: "#EDFAF1" },
  { color: "#FF760D", bg: "#FFF4EC" },
  { color: "#D30000", bg: "#FFEDED" },
  { color: "#0D8AFF", bg: "#EBF5FF" },
];

export function ADIAWExecutive() {
  return (
    <section
      id="adiaw-executive"
      className="w-full bg-[#001A30] py-20 px-4 md:px-12 font-poppins overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #0D8AFF 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, #9747FF 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto flex flex-col gap-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-5 max-w-[680px]"
        >
          <span className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#94B2FF] text-[13px] font-semibold">
            Executive Program
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight">
            Executive Leadership{" "}
            <span className="bg-gradient-to-r from-[#0D8AFF] to-[#94B2FF] bg-clip-text text-transparent">
              Workshop
            </span>
          </h2>
          <p className="text-[17px] text-[#8FA8C8] leading-relaxed">
            A high-impact session designed for senior leaders navigating the intersection
            of AI, data governance, and organizational strategy.
          </p>

          {/* Target audience */}
          <div className="flex flex-wrap gap-2 mt-1">
            {adiawExecutiveAudience.map((role) => (
              <span
                key={role}
                className="px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white text-[13px] font-medium"
              >
                {role}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Main grid: Topics + Event Info */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
          {/* Key Topics */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[13px] font-semibold uppercase tracking-widest text-[#8FA8C8] mb-6">
              Key Topics
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {adiawExecutiveTopics.map((topic, idx) => {
                const palette = topicColors[idx % topicColors.length];
                return (
                  <motion.div
                    key={topic.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex flex-col gap-3 p-5 bg-white/5 rounded-[16px] border border-white/8 hover:bg-white/8 hover:border-white/12 transition-all duration-300 group"
                  >
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-[10px] flex-shrink-0"
                      style={{ background: `${palette.color}22` }}
                    >
                      <span
                        className="text-[16px] font-bold"
                        style={{ color: palette.color }}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-white leading-snug mb-1">
                        {topic.title}
                      </h4>
                      <p className="text-[13px] text-[#8FA8C8] leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Event Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white/8 border border-white/10 rounded-[24px] p-8 flex flex-col gap-6 sticky top-[100px]">
              <p className="text-[13px] font-semibold uppercase tracking-widest text-[#8FA8C8]">
                Event Details
              </p>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-[#0023E8]/20 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#94B2FF]" />
                  </div>
                  <div>
                    <p className="text-[13px] text-[#8FA8C8] mb-0.5">Location</p>
                    <p className="text-[15px] font-semibold text-white leading-snug">
                      Digital Transformation Center
                    </p>
                    <p className="text-[13px] text-[#8FA8C8]">
                      Kacyiru, Kigali, Rwanda
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-[#0BAD2E]/20 flex-shrink-0 mt-0.5">
                    <Calendar className="w-5 h-5 text-[#4ADE80]" />
                  </div>
                  <div>
                    <p className="text-[13px] text-[#8FA8C8] mb-0.5">Date</p>
                    <p className="text-[22px] font-bold text-white">April 23</p>
                    <p className="text-[13px] text-[#8FA8C8]">2025</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/8" />

              <a
                id="adiaw-register-workshop-executive"
                href="https://app.bigcradle.com/workshop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full h-[52px] rounded-[10px] bg-gradient-to-r from-[#0546D2] via-[#0D8AFF] to-[#0546D2] text-white font-semibold text-[15px] hover:shadow-xl hover:shadow-[#0D8AFF]/30 hover:scale-[1.02] transition-all duration-200"
              >
                Register for Executive Workshop
                <ExternalLink className="w-4 h-4" />
              </a>

              <p className="text-center text-[12px] text-[#8FA8C8]">
                app.bigcradle.com/workshop
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
