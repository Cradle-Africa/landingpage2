"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section className="w-full flex justify-center py-6 px-6 bg-[#F2F5F9] font-sans overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full max-w-[1392px] h-[493px] bg-[#0D8AFF] rounded-[24px] overflow-hidden"
      >
        
        {/* Background Blur Shapes */}
        <div className="absolute left-[293px] top-[318px] w-[201.32px] h-[231.82px] opacity-40 pointer-events-none hidden lg:block">
          <div className="absolute left-0 top-0 w-[211.6px] h-[50px] bg-white blur-[58.8px] -rotate-[35.48deg] origin-top-left" />
          <div className="absolute left-0 top-[82px] w-[211.6px] h-[33.15px] bg-white blur-[58.8px] -rotate-[35.48deg] origin-top-left" />
        </div>

        {/* Left Content */}
        <div className="absolute left-6 lg:left-[60px] top-1/2 -translate-y-1/2 flex flex-col items-start gap-6 w-full max-w-[466px] z-10">
          <h2 className="font-semibold text-[24px] lg:text-[32px] leading-[1.3] tracking-[-0.03em] text-white">
            Turn your free time into rewards. Download BigCradle now
          </h2>
          
          <div className="flex flex-row items-start gap-3 flex-wrap">
            {/* Google Play Button */}
            <button className="flex flex-row items-center gap-2 px-4 py-3 bg-[#242326] hover:bg-black transition-colors rounded-xl h-[52px]">
              <svg width="20" height="22" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.61051 24.3149C2.20392 24.086 1.95654 23.6331 1.95654 23.109L1.95654 2.89098C1.95654 2.36688 2.20392 1.91404 2.61051 1.68512C3.01711 1.4562 3.52739 1.488 3.9069 1.76751L21.3634 11.8765C21.7259 12.1448 21.9333 12.5562 21.9333 13C21.9333 13.4437 21.7259 13.8552 21.3634 14.1235L3.9069 24.2325C3.52739 24.512 3.01711 24.5438 2.61051 24.3149Z" fill="white"/>
              </svg>
              <div className="flex flex-col justify-end items-start gap-[2px]">
                <span className="font-normal text-[10px] leading-[1] tracking-[-0.03em] text-white/80">Get it on</span>
                <span className="font-medium text-[16px] leading-[1] tracking-[-0.03em] text-white">Google Play</span>
              </div>
            </button>

            {/* Apple Store Button */}
            <button className="flex flex-row items-center gap-2 px-4 py-3 bg-[#242326] hover:bg-black transition-colors rounded-xl h-[52px]">
              <svg width="20" height="24" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.3262 5.068C17.3888 3.73117 18.0673 1.95547 17.8821 0.177734C16.3571 0.8173 14.3315 1.78923 13.2104 3.16109C12.2217 4.36435 11.4363 6.22307 11.6661 7.95759C13.364 8.08115 15.2227 7.02636 16.3262 5.068ZM23.4921 21.9669C23.1517 22.9961 22.0366 25.1388 20.3541 27.6433C18.8142 29.8973 17.228 32.1311 14.6548 32.1706C12.1466 32.2096 11.3364 30.6406 8.52741 30.6406C5.71838 30.6406 4.80165 32.1311 2.39958 32.2096C-0.0815469 32.2882 -1.50348 29.8188 0.0577909 27.5252C1.56494 25.3344 3.7501 22.1818 4.20846 21.3653C5.55018 18.986 6.78652 17.8593 8.35645 17.8988C10.7423 17.9383 12.3912 19.5542 14.6548 19.5542C16.8916 19.5542 18.3245 18.2393 21.1332 18.4752C22.0104 18.5937 24.3204 18.9912 25.6837 21.3258C25.5661 21.3653 23.5833 22.2736 23.4921 21.9669Z" fill="#DDDDDD"/>
                <path d="M12.7533 13.882C14.7618 13.882 17.0691 12.4468 18.3244 10.9572C18.0684 10.518C17.3061 9.40003 16.0392 8.78912 14.6548 8.78912C12.433 8.78912 10.6698 10.3703 10.4262 10.6385C10.6453 11.396 11.3644 13.882 12.7533 13.882Z" fill="#DDDDDD" />
              </svg>
              <div className="flex flex-col justify-end items-start gap-[2px]">
                <span className="font-normal text-[10px] leading-[1] tracking-[-0.03em] text-white/80">Get it on</span>
                <span className="font-medium text-[16px] leading-[1] tracking-[-0.03em] text-white">Apple Store</span>
              </div>
            </button>
          </div>
        </div>

        {/* Right Content - Phones / Mockups */}
        <div className="hidden md:block absolute left-0 top-0 w-full h-full pointer-events-none overflow-hidden xl:overflow-visible">
          
          {/* Login 1 */}
          <div 
            className="absolute left-[494px] top-[121.08px] w-[319px] h-[563px] border-[6px] border-black rounded-[24px] bg-[#1c1c1e] shadow-2xl"
            style={{ backgroundImage: "url('/Login.png')", backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}
          />
          
          {/* mobile 2 1 */}
          <div 
            className="absolute left-[805px] top-[104.08px] w-[260px] h-[563px] border-[6px] border-black rounded-[24px] bg-[#1c1c1e] shadow-lg overflow-hidden"
            style={{ backgroundImage: "url('/mobile 2.png')", backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}
          />

          {/* mobile 2 2 */}
          <div 
            className="absolute left-[1079px] top-[121.08px] w-[260px] h-[563px] border-[6px] border-black rounded-[24px] bg-[#1c1c1e] shadow-lg"
            style={{ backgroundImage: "url('/mobile 2.png')", backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}
          />

          {/* mobile 1 (Topmost) */}
          <div 
            className="absolute left-[775px] top-[61.6px] w-[320px] h-[648.95px] border-[6px] border-black rounded-[24px] bg-[#1c1c1e] z-10 shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
            style={{ backgroundImage: "url('/mobile.png')", backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}
          />
        </div>

      </motion.div>
    </section>
  );
}
