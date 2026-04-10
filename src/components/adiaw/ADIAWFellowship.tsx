"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  adiawFellowshipDetails,
  adiawFellowshipHighlights,
  adiawTimeline,
} from "@/lib/adiaw-data";
import { ExternalLink, Check } from "lucide-react";

export function ADIAWFellowship() {
  return (
    <section
      id="adiaw-fellowship"
      className="w-full bg-[#F6F9FF] py-20 px-4 md:px-12 font-poppins overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col gap-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDFAF1] border border-[#0BAD2E]/15 text-[#0BAD2E] text-[13px] font-semibold">
            Youth Program
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0C0C0C] leading-tight">
            Youth Fellowship Program
          </h2>
          <p className="text-[17px] text-[#676767] max-w-[680px] leading-relaxed">
            Training 100 young professionals in AI data infrastructure skills including
            analytics, annotation, labeling, and data science.
          </p>
        </motion.div>

        {/* Highlights Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {adiawFellowshipHighlights.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center gap-2 p-6 bg-white rounded-[20px] border border-gray-100 shadow-sm text-center"
            >
              <span
                className="text-[40px] md:text-[48px] font-bold leading-none"
                style={{ color: item.color }}
              >
                {item.stat}
              </span>
              <span className="text-[13px] text-[#676767] leading-snug font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10">
          {/* Left: Program details + highlights */}
          <div className="flex flex-col gap-8">
            {/* Program Highlights */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[24px] border border-gray-100 p-8 flex flex-col gap-6"
            >
              <h3 className="text-[20px] font-semibold text-[#0C0C0C]">
                Program Highlights
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  { text: "Train 100 Data Fellows", color: "#0BAD2E" },
                  { text: "Secure 100 Job Opportunities", color: "#0023E8" },
                  { text: "Direct Talent Matching with Organizations", color: "#9747FF" },
                  { text: "Talent Partner: Kazi Konekt (Rwanda & USA)", color: "#FF760D" },
                ].map((item, idx) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 mt-0.5"
                      style={{ background: `${item.color}20` }}
                    >
                      <Check
                        className="w-3.5 h-3.5"
                        style={{ color: item.color }}
                        strokeWidth={2.5}
                      />
                    </div>
                    <span className="text-[15px] text-[#374151] font-medium leading-snug">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Program Details Table */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-[24px] border border-gray-100 p-8 flex flex-col gap-6"
            >
              <h3 className="text-[20px] font-semibold text-[#0C0C0C]">
                Program Details
              </h3>
              <div className="flex flex-col divide-y divide-gray-50">
                {adiawFellowshipDetails.map((item, idx) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                  >
                    <span className="text-[14px] text-[#676767] font-medium">
                      {item.label}
                    </span>
                    <span className="text-[15px] font-semibold text-[#0C0C0C]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Timeline + Apply CTA */}
          <div className="flex flex-col gap-8">
            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-[24px] border border-gray-100 p-8 flex flex-col gap-6"
            >
              <h3 className="text-[20px] font-semibold text-[#0C0C0C]">
                Fellowship Timeline
              </h3>
              <div className="flex flex-col gap-0">
                {adiawTimeline.map((item, idx) => {
                  const isActive = item.status === "active";
                  const isLast = idx === adiawTimeline.length - 1;
                  return (
                    <div key={item.step} className="flex items-start gap-4">
                      {/* Dot + line */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold border-2 ${
                            isActive
                              ? "bg-[#0023E8] border-[#0023E8] text-white"
                              : "bg-white border-gray-200 text-[#9CA3AF]"
                          }`}
                        >
                          {isActive ? (
                            <span className="w-2.5 h-2.5 rounded-full bg-white" />
                          ) : (
                            item.step
                          )}
                        </motion.div>
                        {!isLast && (
                          <div
                            className={`w-[2px] h-8 ${
                              isActive ? "bg-[#0023E8]/30" : "bg-gray-100"
                            }`}
                          />
                        )}
                      </div>
                      {/* Content */}
                      <div className="pb-8 last:pb-0">
                        <p
                          className={`text-[14px] font-semibold leading-snug ${
                            isActive ? "text-[#0023E8]" : "text-[#374151]"
                          }`}
                        >
                          {item.label}
                          {isActive && (
                            <span className="ml-2 px-2 py-0.5 bg-[#EEF2FF] text-[#0023E8] text-[11px] rounded-full">
                              Open Now
                            </span>
                          )}
                        </p>
                        <p className="text-[13px] text-[#9CA3AF] mt-0.5">
                          {item.date}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Apply CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#0023E8] to-[#0D8AFF] rounded-[24px] p-8 flex flex-col gap-5 text-white"
            >
              <div className="flex flex-col gap-2">
                <p className="text-[22px] font-bold">Ready to Apply?</p>
                <p className="text-[14px] text-white/75 leading-relaxed">
                  Join 100 young African professionals building the future of
                  AI data infrastructure.
                </p>
              </div>
              <a
                id="adiaw-apply-fellowship-section"
                href="https://app.bigcradle.com/talents"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full h-[52px] rounded-[10px] bg-white text-[#0023E8] font-semibold text-[15px] hover:bg-white/90 hover:shadow-lg transition-all duration-200"
              >
                Apply Now
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-center text-[12px] text-white/50">
                app.bigcradle.com/talents
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
