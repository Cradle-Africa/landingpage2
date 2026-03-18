"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingCard = ({ 
  title, 
  price, 
  period = '/month',
  description, 
  features, 
  isPopular = false,
  ctaText = "Create account"
}: { 
  title: string; 
  price: string; 
  period?: string;
  description: string; 
  features: string[]; 
  isPopular?: boolean;
  ctaText?: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`relative flex flex-col items-start p-8 lg:p-10 w-full max-w-[400px] bg-white rounded-[32px] mx-auto ${
        isPopular 
          ? 'shadow-[0px_20px_60px_-15px_rgba(0,0,0,0.12)] z-10 lg:scale-[1.05] border-transparent' 
          : 'shadow-[0px_4px_20px_-8px_rgba(0,0,0,0.06)] border border-gray-100 z-0'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 flex flex-row justify-center items-center px-6 py-2 bg-[#0C32E6] rounded-full shadow-md z-20">
          <span className="font-inter font-semibold text-[13px] text-white whitespace-nowrap">
            Most Popular
          </span>
        </div>
      )}

      <div className="flex flex-col items-start gap-8 self-stretch h-full">
        {/* Header */}
        <div className="flex flex-col items-start gap-5 self-stretch">
          <h3 className="font-inter font-bold text-[26px] text-[#1A1A1A]">
            {title}
          </h3>
          
          <div className="flex flex-row items-baseline gap-1 self-stretch font-inter">
            <span className="text-[58px] font-bold leading-none tracking-[-0.03em] text-[#1A1A1A]">
              {price}
            </span>
            <span className="text-[17px] font-medium text-[#4B5563]">
              {period}
            </span>
          </div>
          <p className="text-[15px] font-normal leading-[1.6] text-[#4B5563] min-h-[72px]">
            {description}
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col items-start gap-4 self-stretch flex-grow mt-2">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-row items-center gap-3.5 self-stretch">
              <div className="flex items-center justify-center min-w-[20px] min-h-[20px] w-[20px] h-[20px] rounded-full border-[1px] border-[#374151]">
                <Check className="w-3 h-3 text-[#374151]" strokeWidth={2.5} />
              </div>
              <span className="font-inter font-medium text-[14.5px] leading-snug text-[#374151]">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-6 w-full">
          <a 
            href="https://app.bigcradle.com" 
            className="flex flex-row justify-center items-center gap-[12px] p-0 w-full h-[60px] bg-gradient-to-r from-[#0546D2] via-[#94B2FF] to-[#0546D2] rounded-[6px] transition-all hover:scale-[1.02] hover:shadow-lg"
          >
            <span className="font-poppins font-medium text-[14px] leading-[21px] tracking-[0.01em] text-white">
              {ctaText}
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const Results = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 px-6 md:px-10 lg:px-20 gap-16 bg-[#FAFAFA] font-poppins relative overflow-hidden">
      
      {/* Header Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 w-full max-w-[983px]"
      >
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[20px] font-medium leading-8 text-center tracking-[0.02em] text-[#676767] uppercase">
              Pricing Plans
            </span>
            <div className="flex flex-col items-center gap-1">
              <h2 className="text-[40px] md:text-[48px] font-semibold leading-tight tracking-[0.01em] bg-gradient-to-r from-[#0546D2] via-[#5C8BFC] to-[#0546D2] bg-clip-text text-transparent text-center">
                Tailored for every scale
              </h2>
            </div>
          </div>
        </div>
        <p className="text-lg font-normal leading-[1.6] text-center tracking-[0.01em] text-[#676767] max-w-[800px] mt-2">
          BigCradle provides flexible models to transform raw data into intelligence. Whether you are an individual explorer or an enterprise building custom AI, choose the plan that suits you best.
        </p>
      </motion.div>

      {/* Pricing Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-6 z-10"
      >
        <PricingCard 
          title="Basic"
          price="$10"
          period="/month"
          description="Get started with essential health tracking and basic AI insights — completely free."
          features={[
            "Limited datasets access",
            "Basic analytics dashboards",
            "Community support",
            "1 project per month",
            "Standard data export"
          ]}
          ctaText="Basic Plan"
        />
        
        <PricingCard 
          title="Pro Plan"
          price="$100"
          period="/month"
          isPopular={true}
          description="Get full access to personalized workouts, meal plans, and advanced daily AI health insights"
          features={[
            "Curated datasets access",
            "Advanced analytics dashboards",
            "Priority support",
            "10 projects per month",
            "Enhanced data export & API"
          ]}
          ctaText="Upgrade to Pro"
        />

        <PricingCard 
          title="Premium"
          price="$1000"
          period="/month"
          description="Unlock advanced AI guidance, exclusive programs, complete health experience."
          features={[
            "Unlimited datasets access",
            "AI model-ready data",
            "Dedicated account manager",
            "Unlimited projects & surveys",
            "Custom integrations & real-time data"
          ]}
          ctaText="Go Premium"
        />
      </motion.div>
    </section>
  );
};

