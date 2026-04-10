"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ADIAWStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-4 px-5 py-4 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-[0_-4px_32px_rgba(0,0,0,0.08)] font-poppins"
        >
          <div className="hidden sm:flex flex-col">
            <span className="text-[13px] font-semibold text-[#0C0C0C]">
              Africa Data Integrity &amp; Annotation Fellowship
            </span>
            <span className="text-[12px] text-[#676767]">
              April 23 · Digital Transformation Center, Kigali
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="https://app.bigcradle.com/talents"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex h-[42px] px-5 items-center justify-center rounded-[6px] border border-[#0023E8] text-[#0023E8] text-[13px] font-medium hover:bg-[#EEF2FF] transition-colors whitespace-nowrap"
            >
              Apply for Fellowship
            </a>
            <a
              href="https://app.bigcradle.com/workshop"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex h-[42px] px-5 items-center justify-center rounded-[6px] bg-gradient-to-r from-[#0546D2] via-[#0D8AFF] to-[#0546D2] text-white text-[13px] font-medium hover:shadow-lg hover:shadow-[#0D8AFF]/30 transition-all whitespace-nowrap"
            >
              Register for Workshop
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
