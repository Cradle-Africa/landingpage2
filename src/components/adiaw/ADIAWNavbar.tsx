"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const adiawNavLinks = [
  { label: "Overview", href: "#adiaw-hero" },
  { label: "What You'll Learn", href: "#adiaw-features" },
  { label: "Partners", href: "#adiaw-partners" },
  { label: "Workshop", href: "#adiaw-executive" },
  { label: "Speakers", href: "#adiaw-speakers" },
  { label: "Fellowship", href: "#adiaw-fellowship" },
];

export function ADIAWNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-[16px] md:top-[24px] z-50 flex h-[56px] sm:h-[60px] w-[calc(100%-16px)] sm:w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-[1392px] -translate-x-1/2 items-center justify-between rounded-full border border-white/30 bg-white/80 px-3 sm:px-4 md:px-6 backdrop-blur-xl shadow-sm font-poppins">
      {/* Logo */}
      <a href="/adiaw" className="flex items-center gap-2 flex-shrink-0">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#0023E8] to-[#0D8AFF]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1L14 5V11L8 15L2 11V5L8 1Z" fill="white" fillOpacity="0.9" />
          </svg>
        </div>
        <span className="font-bold text-[14px] text-[#0C0C0C] hidden sm:block">
          ADIAW <span className="text-[#0023E8]">2025</span>
        </span>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden xl:flex flex-row items-center gap-6">
        {adiawNavLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[14px] font-medium text-[#494949] hover:text-[#0023E8] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTAs */}
      <div className="flex items-center gap-2 sm:gap-3">
        <a
          href="https://app.bigcradle.com/talents"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex h-[36px] px-4 items-center justify-center rounded-[6px] border border-[#0023E8] text-[#0023E8] text-[13px] font-medium hover:bg-[#EEF2FF] transition-colors whitespace-nowrap"
        >
          Apply for Fellowship
        </a>
        <a
          href="https://app.bigcradle.com/workshop"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[36px] px-4 items-center justify-center rounded-[6px] bg-[#0D8AFF] text-white text-[13px] font-medium hover:bg-[#0B7AE6] transition-colors whitespace-nowrap"
        >
          Register Workshop
        </a>
        <button
          className="inline-flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-gray-100 xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 top-[70px] w-full xl:hidden"
          >
            <div className="mx-auto w-[calc(100%-8px)] rounded-2xl border border-white/30 bg-white/95 p-6 shadow-2xl backdrop-blur-xl">
              <nav className="flex flex-col gap-4">
                {adiawNavLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-lg px-4 py-3 text-[15px] font-medium text-[#494949] hover:bg-gray-50 hover:text-[#0023E8] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-2 flex flex-col gap-2 border-t border-gray-100 pt-4">
                  <a
                    href="https://app.bigcradle.com/talents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-[44px] items-center justify-center rounded-[6px] border border-[#0023E8] text-[#0023E8] text-[14px] font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    Apply for Fellowship
                  </a>
                  <a
                    href="https://app.bigcradle.com/workshop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-[44px] items-center justify-center rounded-[6px] bg-[#0D8AFF] text-white text-[14px] font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    Register for Workshop
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
