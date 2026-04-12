"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Globe, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function ADIAWContact() {
  return (
    <footer
      id="adiaw-contact"
      className="w-full bg-[#001A30] py-16 px-4 md:px-12 font-poppins"
    >
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Brand column */}
          <div className="flex flex-col gap-5 max-w-[320px]">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 hover:opacity-80 transition-opacity w-fit"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-[10px] bg-gradient-to-br from-[#0023E8] to-[#0D8AFF]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1L17 9L9 17M17 9H1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-[16px]">BigCradle</p>
                <p className="text-[#8FA8C8] text-[12px]">ADIAW 2026</p>
              </div>
            </Link>
            <p className="text-[14px] text-[#8FA8C8] leading-relaxed">
              Building trusted data infrastructure for Africa&apos;s digital economy through
              skilled talent and purposeful partnerships.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: "https://facebook.com/bigcradle" },
                { icon: Instagram, href: "https://instagram.com/bigcradle" },
                { icon: Twitter, href: "https://twitter.com/bigcradle" },
                { icon: Linkedin, href: "https://linkedin.com/company/bigcradle" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-[#0D8AFF] hover:border-[#0D8AFF] transition-all group"
                >
                  <Icon className="w-4 h-4 text-[#8FA8C8] group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-5">
            <h5 className="text-white font-semibold text-[16px]">Contact</h5>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:adminoffice@bigcradle.com"
                className="flex items-center gap-3 text-[14px] text-[#8FA8C8] hover:text-white transition-colors group"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/8 border border-white/8 group-hover:bg-[#0023E8]/20 group-hover:border-[#0023E8]/30 transition-all flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                adminoffice@bigcradle.com
              </a>
              <a
                href="https://www.bigcradle.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[14px] text-[#8FA8C8] hover:text-white transition-colors group"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/8 border border-white/8 group-hover:bg-[#0023E8]/20 group-hover:border-[#0023E8]/30 transition-all flex-shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                www.bigcradle.com
              </a>
            </div>
          </div>

          {/* Quick links column */}
          <div className="flex flex-col gap-5">
            <h5 className="text-white font-semibold text-[16px]">Quick Links</h5>
            <div className="flex flex-col gap-3">
              {[
                { label: "Apply for Fellowship", href: "https://app.bigcradle.com/talents" },
                { label: "Register for Workshop", href: "https://app.bigcradle.com/workshop" },
                { label: "BigCradle Platform", href: "https://app.bigcradle.com" },
                { label: "Back to Main Site", href: "/" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[14px] text-[#8FA8C8] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-[13px] text-[#4B6082]">
            &copy; {new Date().getFullYear()} BigCradle. Africa Data Integrity &amp; Annotation Fellowship.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="text-[13px] text-[#4B6082] hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="https://app.bigcradle.com" className="text-[13px] text-[#4B6082] hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
