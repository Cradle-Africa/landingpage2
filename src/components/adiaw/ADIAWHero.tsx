"use client";

import React from "react";
import { motion } from "framer-motion";

/* ─── Badge configuration ─────────────────────────────────── */
interface BadgeConfig {
  label: string;
  color: string;
  bg: string;
  glow: string;          // rgba glow colour for the drop-shadow
  side: "left" | "right";
  top: string;           // % from top of section
  offset: string;        // % from edge
  floatY: number;        // amplitude of vertical float (px)
  floatX: number;        // amplitude of horizontal drift (px)
  floatDuration: number; // seconds for one full float cycle
  delay: number;         // entrance delay
  icon: React.ReactNode;
}

const badges: BadgeConfig[] = [
  /* ── LEFT ── */
  {
    label: "Data Governance",
    color: "#0023E8",
    bg: "#EEF2FF",
    glow: "rgba(0,35,232,0.25)",
    side: "left",
    top: "26%",
    offset: "4%",
    floatY: 10,
    floatX: 4,
    floatDuration: 5.8,
    delay: 0.7,
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 1L12 4V8C12 10.8 9.8 13.4 7 14C4.2 13.4 2 10.8 2 8V4L7 1Z"
          stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M5 7L6.5 8.5L9 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "AI Data Labeling",
    color: "#0BAD2E",
    bg: "#EDFAF1",
    glow: "rgba(11,173,46,0.25)",
    side: "left",
    top: "45%",
    offset: "2%",
    floatY: 14,
    floatX: -5,
    floatDuration: 6.4,
    delay: 0.95,
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M1 1H8.5L13 5.5V13H1V1Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M8 1V6H13" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M3.5 8.5H8.5M3.5 10.5H7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Data Annotation",
    color: "#FF760D",
    bg: "#FFF4EC",
    glow: "rgba(255,118,13,0.25)",
    side: "left",
    top: "65%",
    offset: "4%",
    floatY: 8,
    floatX: 6,
    floatDuration: 5.2,
    delay: 1.2,
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M9.5 2L12 4.5L5 11.5H2.5V9L9.5 2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M7.5 3.5L10.5 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  /* ── RIGHT ── */
  {
    label: "Data Operations",
    color: "#9747FF",
    bg: "#F5EDFF",
    glow: "rgba(151,71,255,0.25)",
    side: "right",
    top: "26%",
    offset: "4%",
    floatY: 12,
    floatX: -4,
    floatDuration: 6.1,
    delay: 0.85,
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 1V2.5M7 11.5V13M13 7H11.5M2.5 7H1M11.2 2.8L10.1 3.9M3.9 10.1L2.8 11.2M11.2 11.2L10.1 10.1M3.9 3.9L2.8 2.8"
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Data Analytics",
    color: "#D30000",
    bg: "#FFEDED",
    glow: "rgba(211,0,0,0.22)",
    side: "right",
    top: "45%",
    offset: "2%",
    floatY: 16,
    floatX: 5,
    floatDuration: 7.0,
    delay: 1.05,
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="1.5" y="8" width="2.5" height="4.5" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
        <rect x="5.5" y="5" width="2.5" height="7.5" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
        <rect x="9.5" y="1.5" width="2.5" height="11" rx="0.5" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    label: "Data Science",
    color: "#0D8AFF",
    bg: "#EBF5FF",
    glow: "rgba(13,138,255,0.25)",
    side: "right",
    top: "65%",
    offset: "4%",
    floatY: 10,
    floatX: -6,
    floatDuration: 5.6,
    delay: 1.3,
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 11L5 6L8 8.5L11 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="11.5" cy="2.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

/* ─── Animated Badge ──────────────────────────────────────── */
function AnimatedBadge({ badge }: { badge: BadgeConfig }) {
  const posStyle: React.CSSProperties =
    badge.side === "left"
      ? { left: badge.offset, top: badge.top }
      : { right: badge.offset, top: badge.top };

  return (
    /* Entrance animation wrapper */
    <motion.div
      className="absolute hidden lg:block pointer-events-none select-none"
      style={posStyle}
      initial={{ opacity: 0, scale: 0.6, y: badge.side === "left" ? -20 : 20, x: badge.side === "left" ? -30 : 30 }}
      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
      transition={{ duration: 0.7, delay: badge.delay, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {/* Continuous float oscillation */}
      <motion.div
        animate={{
          y: [0, -badge.floatY, 0, badge.floatY * 0.4, 0],
          x: [0, badge.floatX, badge.floatX * 0.3, -badge.floatX * 0.5, 0],
          rotate: [0, 1.5, 0, -1, 0],
        }}
        transition={{
          duration: badge.floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: badge.delay * 0.5,
        }}
      >
        {/* Outer glow ring — pulses */}
        <motion.div
          className="absolute inset-0 rounded-full -z-10"
          style={{ background: badge.color, filter: `blur(14px)`, opacity: 0 }}
          animate={{ opacity: [0, 0.35, 0] }}
          transition={{ duration: badge.floatDuration * 0.8, repeat: Infinity, ease: "easeInOut", delay: badge.delay }}
        />

        {/* Badge pill */}
        <div
          className="relative flex items-center gap-2 px-4 py-2 rounded-full border border-white/70 backdrop-blur-sm text-[13px] font-semibold font-poppins shadow-lg"
          style={{
            background: badge.bg,
            color: badge.color,
            boxShadow: `0 4px 20px ${badge.glow}, 0 1px 4px rgba(0,0,0,0.06)`,
          }}
        >
          {/* Animated dot */}
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <motion.span
              className="absolute inline-flex h-full w-full rounded-full opacity-60"
              style={{ background: badge.color }}
              animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
            <span
              className="relative inline-flex h-2 w-2 rounded-full"
              style={{ background: badge.color }}
            />
          </span>

          {/* Icon */}
          <span className="flex-shrink-0">{badge.icon}</span>

          {/* Label */}
          {badge.label}

          {/* Shimmer sweep */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden"
            aria-hidden
          >
            <motion.div
              className="absolute top-0 left-[-60%] h-full w-[40%] skew-x-[-20deg]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
              }}
              animate={{ left: ["-60%", "160%"] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: badge.floatDuration - 2.2,
                ease: "easeInOut",
                delay: badge.delay + 1,
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Hero Section ────────────────────────────────────────── */
export function ADIAWHero() {
  return (
    <section
      id="adiaw-hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white pt-[100px] pb-20 px-4 font-poppins"
    >
      {/* ── Animated background blobs ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central blue halo */}
        <motion.div
          className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, #0023E8 0%, #0D8AFF 45%, transparent 75%)",
            opacity: 0.055,
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.055, 0.08, 0.055] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Bottom-left purple blob */}
        <motion.div
          className="absolute bottom-[-60px] left-[-60px] w-[420px] h-[420px] rounded-full"
          style={{
            background: "radial-gradient(circle, #9747FF 0%, transparent 70%)",
            opacity: 0.05,
          }}
          animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Bottom-right green blob */}
        <motion.div
          className="absolute bottom-[-60px] right-[-60px] w-[420px] h-[420px] rounded-full"
          style={{
            background: "radial-gradient(circle, #0BAD2E 0%, transparent 70%)",
            opacity: 0.05,
          }}
          animate={{ scale: [1, 1.12, 1], x: [0, -20, 0], y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* ── Subtle grid ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(#0023E8 1px, transparent 1px), linear-gradient(90deg, #0023E8 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Floating data badges ── */}
      {badges.map((b) => (
        <AnimatedBadge key={b.label} badge={b} />
      ))}

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[900px] w-full gap-6">
        {/* Program badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#0023E8]/20 bg-[#EEF2FF] text-[#0023E8] text-[13px] font-semibold"
        >
          <span className="w-2 h-2 rounded-full bg-[#0023E8] animate-pulse" />
          Fellowship &amp; Workshop · Kigali, Rwanda · April 2025
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight tracking-[-0.02em] text-[#0C0C0C]"
        >
          Africa Data Integrity{" "}
          <span className="bg-gradient-to-r from-[#0023E8] via-[#0D8AFF] to-[#9747FF] bg-clip-text text-transparent">
            &amp; Annotation
          </span>{" "}
          Fellowship
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl font-medium text-[#0023E8]"
        >
          Building Trusted Data Infrastructure for Africa&apos;s Digital Economy
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="text-[17px] md:text-lg text-[#676767] leading-relaxed max-w-[680px]"
        >
          Artificial Intelligence systems rely heavily on high-quality labeled and
          structured data. This fellowship equips African talent with practical
          skills to work in the global AI data ecosystem.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto"
        >
          <a
            id="adiaw-apply-fellowship-hero"
            href="https://app.bigcradle.com/talents"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 h-[52px] px-8 rounded-[8px] bg-gradient-to-r from-[#0546D2] via-[#0D8AFF] to-[#0546D2] text-white font-semibold text-[15px] hover:shadow-xl hover:shadow-[#0D8AFF]/25 hover:scale-[1.02] transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1L17 9L9 17M17 9H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Apply for Fellowship
          </a>
          <a
            id="adiaw-register-workshop-hero"
            href="https://app.bigcradle.com/workshop"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 h-[52px] px-8 rounded-[8px] border-2 border-[#0023E8] text-[#0023E8] font-semibold text-[15px] hover:bg-[#EEF2FF] hover:scale-[1.02] transition-all duration-200"
          >
            Register for Workshop
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-8 pt-8 border-t border-gray-100 w-full"
        >
          {[
            { value: "100", label: "Data Fellows" },
            { value: "6 Wks", label: "Program Duration" },
            { value: "Apr 23", label: "Executive Workshop" },
            { value: "Free", label: "Fellowship Cost" },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center gap-1"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + idx * 0.1 }}
            >
              <span className="text-2xl md:text-3xl font-bold text-[#0C0C0C]">
                {item.value}
              </span>
              <span className="text-[13px] text-[#676767]">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Decorative bottom wave ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40C360 80 1080 0 1440 40V80H0V40Z" fill="#F6F9FF" fillOpacity="0.6" />
        </svg>
      </div>
    </section>
  );
}
