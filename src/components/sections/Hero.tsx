"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { DashedArrow } from '../shared/DashedArrow';
import { Navbar } from './Navbar';

const DecorativeCluster = ({ side }: { side: 'left' | 'right' }) => (
  <div
    style={{
      position: 'absolute',
      width: '497px', 
      height: '390px',
      top: '166px',
      zIndex: 1,
      pointerEvents: 'none',
      ...(side === 'left' ? {
        left: '-201px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        transform: 'rotate(180deg)',
      } : {
        right: '-201px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        transform: 'rotate(0deg)',
      })
    }}
  >
    <svg width="350" height="390" viewBox="0 0 350 390" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M200 100C200 73.4784 189.464 48.043 170.711 29.2893C151.957 10.5357 126.522 2.00233e-06 100 0C73.4784 -2.00233e-06 48.043 10.5357 29.2893 29.2893C10.5357 48.0429 4.00466e-06 73.4783 0 100L51.4936 100C51.4936 87.1353 56.6041 74.7975 65.7008 65.7008C74.7975 56.604 87.1353 51.4936 100 51.4936C112.865 51.4936 125.203 56.6041 134.299 65.7008C143.396 74.7975 148.506 87.1353 148.506 100H200Z" fill="#FFEDCC"/>
      <path d="M150 107C150 133.522 160.536 158.957 179.289 177.711C198.043 196.464 223.478 207 250 207C276.522 207 301.957 196.464 320.711 177.711C339.464 158.957 350 133.522 350 107L298.506 107C298.506 119.865 293.396 132.203 284.299 141.299C275.202 150.396 262.865 155.506 250 155.506C237.135 155.506 224.797 150.396 215.701 141.299C206.604 132.203 201.494 119.865 201.494 107L150 107Z" fill="#F8D3F0"/>
      <path d="M200 290C200 316.522 189.464 341.957 170.711 360.711C151.957 379.464 126.522 390 100 390C73.4784 390 48.043 379.464 29.2893 360.711C10.5357 341.957 4.00466e-06 316.522 0 290L51.4936 290C51.4936 302.865 56.6041 315.203 65.7008 324.299C74.7975 333.396 87.1353 338.506 100 338.506C112.865 338.506 125.203 333.396 134.299 324.299C143.396 315.203 148.506 302.865 148.506 290H200Z" fill="#FFEDCC"/>
      <path d="M150 283C150 256.478 160.536 231.043 179.289 212.289C198.043 193.536 223.478 183 250 183C276.522 183 301.957 193.536 320.711 212.289C339.464 231.043 350 256.478 350 283L298.506 283C298.506 270.135 293.396 257.797 284.299 248.701C275.202 239.604 262.865 234.494 250 234.494C237.135 234.494 224.797 239.604 215.701 248.701C206.604 257.797 201.494 270.135 201.494 283H150Z" fill="#F8D3F0"/>
    </svg>
  </div>
);

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '1024px',
        background: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background element */}
      <div
        style={{
          position: 'absolute',
          width: '251.5px',
          height: '139.5px',
          left: '152px',
          top: '93px',
          border: '1px solid #F2F2F2',
          transform: 'rotate(90deg)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Pulsing arrow indicators */}
      <DashedArrow
        style={{
          position: 'absolute',
          left: '1004px',
          top: '530px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
        flipX
      />
      <DashedArrow
        style={{
          position: 'absolute',
          left: '302px',
          top: '530px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Main navigation header */}
      <Navbar />

      {/* Background patterns and abstract shapes */}
      <DecorativeCluster side="left" />
      <DecorativeCluster side="right" />

      {/* Hero center text and CTA region */}
      <div
        className="relative z-10 flex flex-col items-center px-4 pt-[180px] md:pt-[240px] text-center"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[1069px] w-full flex flex-col items-center gap-6"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0023E8] leading-tight font-poppins"
          >
            Get High-Integrity Data for High-Performance AI and Team
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="max-w-[719px] text-lg md:text-xl text-[#676767] font-poppins mt-4"
          >
            BigCradle provides human-verified high integrity crowd sourced data & annotation, consumer insights, and research intelligence across Africa—your business make informed decisions and your models ship on time, retain relevant context, and work in production.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-8"
          >
            <a
              href="https://app.bigcradle.com"
              className="w-full sm:w-[222px] h-[48px] flex items-center justify-center rounded-[6px] bg-gradient-to-r from-[#0546D2] via-[#94B2FF] to-[#0546D2] text-white font-medium font-poppins transition-transform hover:scale-105 hover:shadow-lg hover:shadow-[#0546D2]/20"
            >
              Create account
            </a>
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1W4hBLoJ6naXavKGHQItXsnT5FB-BVF2c9yCO7sKje9hEAnUH1IwKdnf3KPq9cx-K2y42uKIkp"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-[222px] h-[48px] flex items-center justify-center rounded-[6px] bg-[#F7F7F7] text-[#868686] font-medium font-poppins transition-transform hover:scale-105"
            >
              Book a demo
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom circular decorative element */}
      <div
        style={{
          position: 'absolute',
          width: '1170px',
          height: '297px',
          left: 'calc(50% - 1170px/2)',
          bottom: '0px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <svg width="1170" height="297" viewBox="0 0 1170 297" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.4" filter="url(#filter0_i_2183_20294)">
            <circle cx="585" cy="376" r="300" fill="#F6F9FF"/>
          </g>
          <g opacity="0.2" filter="url(#filter1_i_2183_20294)">
            <circle cx="585" cy="450" r="450" fill="#F6F9FF"/>
          </g>
          <g filter="url(#filter2_i_2183_20294)">
            <circle cx="585" cy="292" r="150" fill="#F6F9FF"/>
          </g>
          <defs>
            <filter id="filter0_i_2183_20294" x="285" y="76" width="600" height="604" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="5" operator="erode" in="SourceAlpha" result="effect1_innerShadow_2183_20294"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="17.5"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.9 0 0 0 0 0.912 0 0 0 0 1 0 0 0 1 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2183_20294"/>
            </filter>
            <filter id="filter1_i_2183_20294" x="135" y="0" width="900" height="904" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="5" operator="erode" in="SourceAlpha" result="effect1_innerShadow_2183_20294"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="17.5"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.9 0 0 0 0 0.912 0 0 0 0 1 0 0 0 1 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2183_20294"/>
            </filter>
            <filter id="filter2_i_2183_20294" x="435" y="142" width="300" height="304" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feMorphology radius="5" operator="erode" in="SourceAlpha" result="effect1_innerShadow_2183_20294"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="17.5"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.9 0 0 0 0 0.912 0 0 0 0 1 0 0 0 1 0"/>
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2183_20294"/>
            </filter>
          </defs>
        </svg>
      </div>

      {/* Scrolling image row for brand/feature highlights */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mt-20 overflow-hidden py-10"
      >
        <div className="flex flex-row justify-center items-center gap-6 md:gap-12">
          {[
            { src: '/image(0).png', border: '#0D8AFF' },
            { src: '/image (1).png', border: '#0BAD2E' },
            { src: '/image (2).png', border: '#FF760D' },
            { src: '/image (3).png', border: '#D30000' },
            { src: '/image (4).png', border: '#FF0DFF' },
            { src: '/image (5).png', border: '#9747FF' }
          ].map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-[120px] h-[100px] md:w-[170px] md:h-[150px] shrink-0 rounded-xl border border-dashed rotate-6 md:rotate-12 cursor-pointer"
              style={{
                backgroundImage: `url("${img.src}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderColor: img.border,
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
