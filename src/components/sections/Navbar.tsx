"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { navLinks } from "@/features/navLinks";

/**
 * Navbar component for the landing page.
 * Handles desktop navigation and mobile menu toggle.
 */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed left-1/2 top-[16px] md:top-[24px] z-50 flex h-[60px] w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-[1392px] -translate-x-1/2 items-center justify-between rounded-full border border-white/20 bg-white/10 px-4 md:px-6 backdrop-blur-md"
    >
      {/* Logo Container */}
      <div className="flex h-[30px] md:h-[37px] w-[130px] md:w-[160px] flex-none items-center">
        <Logo />
      </div>

      {/* Desktop navigation links */}
      <nav className="hidden flex-row items-center gap-8 lg:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-poppins text-[16px] font-normal tracking-[0.01em] text-[#494949] transition-colors hover:text-black"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Action buttons & Toggle */}
      <div className="flex flex-row items-center gap-2 md:gap-4">
        <a
          href="https://app.bigcradle.com"
          className="flex h-[36px] md:h-[40px] w-[120px] md:w-[160px] items-center justify-center rounded-[6px] border border-[#0067C7] bg-[#0D8AFF] transition-all hover:bg-[#0B7AE6] hover:shadow-lg"
        >
          <span className="text-center font-poppins text-[12px] md:text-[14px] font-medium text-white whitespace-nowrap px-2">
            Create account
          </span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 p-2 text-[#494949] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 top-[70px] w-full lg:hidden"
          >
            <div className="mx-auto w-[calc(100%-8px)] rounded-2xl border border-white/20 bg-white/95 p-6 shadow-2xl backdrop-blur-xl">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-lg px-4 py-3 font-poppins text-[16px] font-medium text-[#494949] transition-colors hover:bg-gray-100/50 hover:text-black"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
