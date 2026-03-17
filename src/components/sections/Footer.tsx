"use client";

import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

/**
 * Footer component
 */
export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/bigcradle" },
    { icon: Instagram, href: "https://instagram.com/bigcradle" },
    { icon: Twitter, href: "https://twitter.com/bigcradle" },
    { icon: Linkedin, href: "https://linkedin.com/company/bigcradle" },
  ];

  return (
    <footer className="w-full bg-[#001A30] py-16 px-6 md:px-12 lg:px-20 font-poppins text-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
        {/* Company Column */}
        <div className="flex flex-col gap-4 max-w-[400px]">
          <div className="h-[64px] flex items-center">
            <img src="/footerlogo.png" alt="BigCradle Logo" className="h-[37px] w-auto object-contain" />
          </div>
          <p className="text-sm text-[#676767] leading-relaxed">
            African Consumer Insights. Delivered. Executed.
          </p>
        </div>

        {/* Contact Us Column */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1 w-fit">
            <h5 className="text-xl font-medium tracking-wide">Contact Us</h5>
            <svg width="102" height="10" viewBox="0 0 102 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 2.14777C1.15865 2.14777 1.31731 2.14777 6.31731 2.14777C11.3173 2.14777 21.1538 2.14777 26.9351 2.08819C34.1475 2.01386 40.375 1.78668 48.1418 1.66751C52.2862 1.60393 54.0385 0.945322 54.6034 1.0031C57.6588 1.3156 48.9327 3.82326 45.3245 5.4518C43.5561 6.24996 41.5577 7.43783 39.3966 8.51931C38.4799 8.97808 38.0288 9.36247 46.113 8.41459C54.1971 7.46672 70.8558 5.20264 80.1514 4.0363C90.875 2.86996 93.4567 2.7508 96.012 2.57025C97.4567 2.50887 99.2019 2.50887 101 2.50887" stroke="#3C6FE3" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex shrink-0 justify-center items-center w-8 h-8 bg-[#F7F7F7] rounded-full">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13L13 3M3 3L13 13" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-base text-white">+250 796-338-327, +234 816-433-8001</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex shrink-0 justify-center items-center w-8 h-8 bg-[#F7F7F7] rounded-full">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4L8 8L14 4M2 12V4H14V12H2Z" stroke="#141B34" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-base text-white">big@cradle.africa</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex shrink-0 justify-center items-center w-8 h-8 bg-[#F7F7F7] rounded-full">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 14C8 14 3 9.5 3 6C3 3.23858 5.23858 1 8 1C10.7614 1 13 3.23858 13 6C13 9.5 8 14 8 14Z" stroke="#141B34" strokeWidth="1.5"/>
                  <circle cx="8" cy="6" r="1.5" stroke="#141B34" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className="text-base text-white">Nyakabanda, KK 114 Kigali, Rwanda</span>
            </div>
          </div>
        </div>

        {/* Follow Us Column */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1 w-fit">
            <h5 className="text-xl font-medium tracking-wide">Follow Us</h5>
            <svg width="102" height="10" viewBox="0 0 102 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 2.14777C1.15865 2.14777 1.31731 2.14777 6.31731 2.14777C11.3173 2.14777 21.1538 2.14777 26.9351 2.08819C34.1475 2.01386 40.375 1.78668 48.1418 1.66751C52.2862 1.60393 54.0385 0.945322 54.6034 1.0031C57.6588 1.3156 48.9327 3.82326 45.3245 5.4518C43.5561 6.24996 41.5577 7.43783 39.3966 8.51931C38.4799 8.97857 38.0288 9.36247 46.113 8.41459C54.1971 7.46672 70.8558 5.20264 80.1514 4.0363C90.875 2.86996 93.4567 2.7508 96.012 2.57025C97.4567 2.50887 99.2019 2.50887 101 2.50887" stroke="#3C6FE3" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#F7F7F7] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#3C6FE3] group transition-all"
              >
                <social.icon className="w-4 h-4 text-[#141B34] group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1240px] mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-[#92989F]">
          &copy; {new Date().getFullYear()} BigCradle. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          {['Privacy Policy', 'Terms of Service', 'Cookies'].map((link) => (
            <a
              key={link}
              href={link === 'Privacy Policy' ? '/privacy-policy' : "https://app.bigcradle.com"}
              className="text-sm text-[#92989F] hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
