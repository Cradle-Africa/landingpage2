"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const useCasesData = [
  {
    caseNumber: 1,
    mainTitle: "Trusted by Companies and Organizations Driving Real Impact",
    mainDesc: "Discover how organizations across industries use BigCradle’s data flywheel to collect insights, drive smarter decisions, and power continuous growth.",
    category: "AI Companies",
    subDesc: "We provide high-quality, labeled datasets and curated data to train AI models efficiently, helping companies build smarter and more reliable AI solutions.",
    buttonText: "Get Your Training Data",
    image: "/usecase1.png"
  },
  {
    caseNumber: 2,
    mainTitle: "Trusted by Companies and Organizations Driving Real Impact",
    mainDesc: "Discover how organizations across industries use BigCradle’s data flywheel to collect insights, drive smarter decisions, and power continuous growth.",
    category: "Hospitals",
    subDesc: "Leverage your hospital data to optimize operations, improve patient outcomes, and make informed healthcare decisions.",
    buttonText: "Create account",
    image: "/usecase2.png"
  },
  {
    caseNumber: 3,
    mainTitle: "Trusted by Companies and Organizations Driving Real Impact",
    mainDesc: "Discover how organizations across industries use BigCradle’s data flywheel to collect insights, drive smarter decisions, and power continuous growth.",
    category: "Companies",
    subDesc: "Harness data to streamline operations, understand your market, uncover new opportunities, and power sustainable growth across your business.",
    buttonText: "Create account",
    image: "/usecase3.png"
  },
  {
    caseNumber: 4,
    mainTitle: "Trusted by Companies and Organizations Driving Real Impact",
    mainDesc: "Discover how organizations across industries use BigCradle’s data flywheel to collect insights, drive smarter decisions, and power continuous growth.",
    category: "Autonomous System",
    subDesc: "Access high-quality, labelled datasets to train autonomous vehicles and robotics, enabling safer, smarter, and more reliable systems.",
    buttonText: "Create account",
    image: "/usecase4.png"
  },
  {
    caseNumber: 5,
    mainTitle: "Trusted by Companies and Organizations Driving Real Impact",
    mainDesc: "Discover how organizations across industries use BigCradle’s data flywheel to collect insights, drive smarter decisions, and power continuous growth.",
    category: "NGOs and Organization",
    subDesc: "Leverage data to evaluate programs, improve outcomes, and create meaningful impact for communities and stakeholders.",
    buttonText: "Create account",
    image: "/usecase5.png"
  },
  {
    caseNumber: 6,
    mainTitle: "Trusted by Companies and Organizations Driving Real Impact",
    mainDesc: "Discover how organizations across industries use BigCradle’s data flywheel to collect insights, drive smarter decisions, and power continuous growth.",
    category: "Telecoms",
    subDesc: "Unlock insights from network and customer data to optimize operations, improve service quality, and drive subscriber growth.",
    buttonText: "Create account",
    image: "/usecase6.png"
  },
  {
    caseNumber: 7,
    mainTitle: "Trusted by Companies and Organizations Driving Real Impact",
    mainDesc: "Discover how organizations across industries use BigCradle’s data flywheel to collect insights, drive smarter decisions, and power continuous growth.",
    category: "FMCG",
    subDesc: "Leverage data to understand consumer behavior, forecast demand, and drive sales growth across fast-moving products.",
    buttonText: "Create account",
    image: "/usecase7.png"
  },
  {
    caseNumber: 8,
    mainTitle: "Trusted by Companies and Organizations Driving Real Impact",
    mainDesc: "Discover how organizations across industries use BigCradle’s data flywheel to collect insights, drive smarter decisions, and power continuous growth.",
    category: "Informal Market",
    subDesc: "Gain insights into consumer trends, spending patterns, and market behavior to make informed business decisions in the informal sector.",
    buttonText: "Create account",
    image: "/usecase8.png"
  }
];

export const UseCases = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const next = () => setCurrentIdx((prev) => (prev + 1) % useCasesData.length);
  const prev = () => setCurrentIdx((prev) => (prev - 1 + useCasesData.length) % useCasesData.length);

  const current = useCasesData[currentIdx];

  return (
    <section id="usecases" className="w-full flex flex-col items-center py-[70px] px-6 lg:px-0 bg-white font-poppins overflow-hidden">
      {/* Top Graphic Icon */}
      <div className="flex items-center justify-center mb-6">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="6" cy="6" r="1" fill="#0023E8" />
          <path d="M6 0V12" stroke="#8A9CFF" strokeWidth="0.5" strokeDasharray="2 2" />
          <path d="M0 6H12" stroke="#8A9CFF" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-[1.5px] border-dashed border-[#8A9CFF] px-8 py-2 mb-12"
      >
        <h2 className="text-[#0C0C0C] font-medium text-[32px] leading-[50px] text-center tracking-[0.01em]">
          BigCradle’s Use Cases
        </h2>
      </motion.div>

      {/* Content Layout */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[1240px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-5 border-t border-b border-dashed border-[#8A9CFF] py-12"
      >
        
        {/* Left Column: Main Title & Desc */}
        <div className="flex flex-col items-start gap-12 lg:w-[488px]">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#0023E8] rounded-full" />
              <span className="font-inter font-normal text-sm text-[#0023E8]">
                Use Case {current.caseNumber}
              </span>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`left-${currentIdx}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                <h3 className="font-inter font-medium text-[30px] leading-[38px] text-[#181D27]">
                  {current.mainTitle}
                </h3>
                <p className="font-inter font-normal text-[16px] leading-[24px] text-[#676767]">
                  {current.mainDesc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button 
              onClick={prev}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors ${
                currentIdx > 0 
                  ? 'bg-[#0023E8] hover:bg-[#0019A8]'
                  : 'bg-[#B0BCFF] hover:bg-[#8A9CFF]'
              }`}
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full bg-[#0023E8] flex items-center justify-center text-white hover:bg-[#0019A8] transition-colors"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Center Column: Large Image */}
        <div className="relative lg:w-[410px] h-[520px] rounded-[32px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={`img-${currentIdx}`}
              src={current.image}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              alt={current.category}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Right Column: Category & Sub-CTA */}
        <div className="flex flex-col items-start gap-12 lg:w-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`right-${currentIdx}`}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              <h4 className="font-inter font-medium text-[20px] leading-[30px] text-[#0023E8]">
                {current.category}
              </h4>
              <p className="font-inter font-normal text-[16px] leading-[24px] text-[#535862]">
                {current.subDesc}
              </p>

              <a 
                href="https://app.bigcradle.com"
                className="flex items-center justify-center w-[192px] h-[40px] bg-[linear-gradient(90deg,#0546D2_0%,#94B2FF_50.42%,#0546D2_100%)] text-white rounded-[6px] font-poppins font-medium text-[14px] leading-[21px] tracking-[0.01em] transition-transform hover:scale-105"
              >
                {current.buttonText}
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

      </motion.div>
    </section>
  );
};
