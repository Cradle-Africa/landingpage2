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
    image: "/usecase-ai.png"
  },
  {
    caseNumber: 2,
    mainTitle: "Revolutionizing Retail with Real-Time Consumer Data",
    mainDesc: "Tracking shopper preferences across African urban centers to enable hyper-local inventory management and reduced waste.",
    category: "Market Research",
    subDesc: "Gain deep visibility into market trends and emerging consumer habits before your competitors do.",
    buttonText: "Explore Market Insights",
    image: "/usecase-market.png"
  },
  {
    caseNumber: 3,
    mainTitle: "Empowering Smallholder Farmers with Precision Data",
    mainDesc: "Connecting rural production with urban demand through real-time logistical insights and soil health monitoring.",
    category: "Agri-Tech",
    subDesc: "Our datasets help optimize planting cycles and reduce post-harvest losses across regional supply chains.",
    buttonText: "Grow Your Impact",
    image: "/usecase-agri.png"
  },
  {
    caseNumber: 4,
    mainTitle: "Building the Future of Digital Banking in Africa",
    mainDesc: "Identifying underserved regions and tailoring digital financial products to the unique needs of local economies.",
    category: "Fintech",
    subDesc: "Highly granular demographic data enables more accurate credit scoring and risk assessment.",
    buttonText: "Scale Your Fintech",
    image: "/usecase-fintech.png"
  },
  {
    caseNumber: 5,
    mainTitle: "Optimizing the Last-Mile Delivery Infrastructure",
    mainDesc: "Mapping neighborhood complexity and traffic bottlenecks to create efficient distribution networks in growing cities.",
    category: "Logistics",
    subDesc: "Hyper-local navigation data reduces fuel consumption and boosts delivery speed.",
    buttonText: "Optimize Delivery",
    image: "/usecase-logistics.png"
  },
  {
    caseNumber: 6,
    mainTitle: "Proactive Healthcare Through Community Insights",
    mainDesc: "Tracking disease trends and resource needs to ensure life-saving supplies reach the right place at the right time.",
    category: "Public Health",
    subDesc: "Real-time reporting helps NGOs and health ministries respond faster to community needs.",
    buttonText: "Strengthen Healthcare",
    image: "/usecase-health.png"
  },
  {
    caseNumber: 7,
    mainTitle: "Scaling E-Commerce Across Diverse Borders",
    mainDesc: "Understanding local payment cultures and logistics expectations to build seamless shopping experiences.",
    category: "E-Commerce",
    subDesc: "Localized data reduces cart abandonment and improves cross-border customer satisfaction.",
    buttonText: "Expand Your Store",
    image: "/usecase-ecommerce.png"
  },
  {
    caseNumber: 8,
    mainTitle: "Capturing the Pulse of Modern African Fashion",
    mainDesc: "Visual data from local markets helps designers stay ahead of style trends and cultural shifts.",
    category: "Fast Fashion",
    subDesc: "Predict demand for specific styles and fabrics to minimize overproduction and maximize sales.",
    buttonText: "Design the Trend",
    image: "/usecase-fashion.png"
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
      <div className="border-[1.5px] border-dashed border-[#8A9CFF] px-8 py-2 mb-12">
        <h2 className="text-[#0C0C0C] font-medium text-[32px] leading-[50px] text-center tracking-[0.01em]">
          BigCradle’s Use Cases
        </h2>
      </div>

      {/* Content Layout */}
      <div className="relative w-full max-w-[1240px] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-5 border-t border-b border-dashed border-[#8A9CFF] py-12">
        
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
                <h3 className="font-inter font-medium text-[36px] lg:text-[40px] leading-[44px] lg:leading-[48px] text-[#181D27]">
                  {current.mainTitle}
                </h3>
                <p className="font-inter font-normal text-base lg:text-lg leading-[24px] lg:leading-[27px] text-[#676767]">
                  {current.mainDesc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full bg-[#B0BCFF] flex items-center justify-center text-white hover:bg-[#8A9CFF] transition-colors"
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
              <h4 className="font-inter font-medium text-[22px] text-[#0023E8]">
                {current.category}
              </h4>
              <p className="font-inter font-normal text-sm leading-[22px] text-[#676767]">
                {current.subDesc}
              </p>

              <a 
                href="https://app.bigcradle.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#0546D2] to-[#3C6FE3] text-white rounded-lg font-medium text-sm transition-transform hover:scale-105"
              >
                {current.buttonText}
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
