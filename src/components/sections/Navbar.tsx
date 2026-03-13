"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
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
      className="absolute left-[24px] top-[24px] z-50 flex h-[40px] w-[1392px] items-center max-xl:w-[calc(100%-48px)]"
      style={{ gap: '286px' }}
    >
      {/* Logo - 160x37 */}
      <div className="flex h-[37px] w-[160px] flex-none items-center">
        <Logo />
      </div>

      {/* Desktop navigation links */}
      <nav 
        className="hidden h-[24px] w-[500px] flex-row items-center lg:flex" 
        style={{ gap: '42px' }}
      >
        <a href="#" className="flex h-[24px] w-[49px] items-center whitespace-nowrap font-poppins text-[16px] font-normal leading-[24px] tracking-[0.01em] text-[#494949] transition-colors hover:text-black">
          Home
        </a>
        <a href="#features" className="flex h-[24px] w-[71px] items-center whitespace-nowrap font-poppins text-[16px] font-normal leading-[24px] tracking-[0.01em] text-[#494949] transition-colors hover:text-black">
          Features
        </a>
        <a href="#use-cases" className="flex h-[24px] w-[85px] items-center whitespace-nowrap font-poppins text-[16px] font-normal leading-[24px] tracking-[0.01em] text-[#494949] transition-colors hover:text-black">
          Use Cases
        </a>
        <a href="#about" className="flex h-[24px] w-[72px] items-center whitespace-nowrap font-poppins text-[16px] font-normal leading-[24px] tracking-[0.01em] text-[#494949] transition-colors hover:text-black">
          About us
        </a>
        <a href="#pricing" className="flex h-[24px] w-[55px] items-center whitespace-nowrap font-poppins text-[16px] font-normal leading-[24px] tracking-[0.01em] text-[#494949] transition-colors hover:text-black">
          Pricing
        </a>
      </nav>

      {/* Action buttons (Sign up/Create account) */}
      <div className="ml-auto flex flex-row items-center lg:ml-0 lg:flex">
        <a
          href="https://app.bigcradle.com"
          className="flex h-[40px] w-[160px] flex-row items-center justify-center gap-[12px] rounded-[6px] border border-[#0067C7] bg-[#0D8AFF] p-0 transition-all hover:bg-[#0B7AE6] hover:shadow-lg"
        >
          <span className="w-[113px] text-center font-poppins text-[14px] font-medium leading-[21px] tracking-[0.01em] text-white">
            Create account
          </span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="ml-4 inline-flex items-center justify-center p-2 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu overlay */}
      {mobileOpen && (
        <div className="absolute left-0 top-[60px] w-full rounded-lg border border-border bg-white p-6 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-poppins text-[18px] font-normal text-[#494949]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
