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
      className="fixed left-1/2 top-[16px] md:top-[24px] z-50 flex h-[56px] sm:h-[60px] w-[calc(100%-16px)] sm:w-[calc(100%-32px)] md:w-[calc(100%-48px)] max-w-[1392px] -translate-x-1/2 items-center justify-between rounded-full border border-white/20 bg-white/10 px-3 sm:px-4 md:px-6 backdrop-blur-md"
    >
      {/* Logo Container */}
      <div className="flex h-[28px] sm:h-[30px] md:h-[37px] w-[100px] sm:w-[130px] md:w-[160px] flex-none items-center">
        <Logo />
      </div>

      {/* Desktop navigation links */}
      <nav className="hidden flex-row items-center gap-8 lg:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="group relative font-poppins text-[16px] font-normal tracking-[0.01em] text-[#494949] transition-colors hover:text-black"
          >
            {link.label}
            <svg 
              className="absolute -bottom-1.5 -left-1 w-[calc(100%+8px)] h-[8px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              viewBox="0 0 102 10" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            >
              <path 
                className="stroke-[#3C6FE3] stroke-[2px] [stroke-linecap:round] [stroke-dasharray:150] [stroke-dashoffset:150] group-hover:[stroke-dashoffset:0] transition-all duration-500 ease-out"
                d="M1 2.14777C1.15865 2.14777 1.31731 2.14777 6.31731 2.14777C11.3173 2.14777 21.1538 2.14777 26.9351 2.08819C34.1475 2.01386 40.375 1.78668 48.1418 1.66751C52.2862 1.60393 54.0385 0.945322 54.6034 1.0031C57.6588 1.3156 48.9327 3.82326 45.3245 5.4518C43.5561 6.24996 41.5577 7.43783 39.3966 8.51931C38.4799 8.97808 38.0288 9.36247 46.113 8.41459C54.1971 7.46672 70.8558 5.20264 80.1514 4.0363C90.875 2.86996 93.4567 2.7508 96.012 2.57025C97.4567 2.50887 99.2019 2.50887 101 2.50887" 
              />
            </svg>
          </a>
        ))}
      </nav>

      {/* Action buttons & Toggle */}
      <div className="flex flex-row items-center gap-2 sm:gap-4 md:gap-6">
        <a
          href="https://app.bigcradle.com"
          className="hidden sm:block font-poppins text-[13px] sm:text-[14px] font-medium leading-[21px] tracking-[0.01em] text-[#000000] hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          Log in
        </a>
        <a
          href="https://app.bigcradle.com"
          className="flex h-[32px] sm:h-[36px] md:h-[40px] px-2 min-[400px]:px-3 sm:px-4 md:px-6 items-center justify-center shrink-0 rounded-[6px] border border-[#0067C7] bg-[#0D8AFF] transition-all hover:bg-[#0B7AE6] hover:shadow-lg"
        >
          <span className="text-center font-poppins text-[12px] md:text-[14px] font-medium text-white whitespace-nowrap">
            Create account
          </span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="inline-flex h-[32px] w-[32px] sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-white/20 p-1.5 sm:p-2 text-[#494949] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-[18px] w-[18px] sm:h-5 sm:w-5" /> : <Menu className="h-[18px] w-[18px] sm:h-5 sm:w-5" />}
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
                
                {/* Mobile Log in fallback */}
                <div className="mt-2 flex flex-col border-t border-gray-100 pt-4 sm:hidden">
                  <a
                    href="https://app.bigcradle.com"
                    className="rounded-lg px-4 py-3 font-poppins text-[16px] font-medium text-[#494949] transition-colors hover:bg-gray-100/50 hover:text-black"
                    onClick={() => setMobileOpen(false)}
                  >
                    Log in
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
