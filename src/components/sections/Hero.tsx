"use client";

import React from 'react';
import { DashedArrow } from '../shared/DashedArrow';

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
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0px',
          gap: '292px',
          width: '1297px',
          height: '40px',
          left: '72px',
          top: '52px',
          zIndex: 50,
        }}
      >
        {/* Logo */}
        <div style={{ width: '161px', height: '37px', position: 'relative', flex: 'none', order: 0, flexGrow: 0 }}>
          <img 
            src="/logo.png" 
            alt="BigCradle Logo" 
            style={{ 
              position: 'absolute',
              left: '0%',
              right: '0%',
              top: '0%',
              bottom: '0%',
              width: '100%', 
              height: '100%', 
              objectFit: 'contain' 
            }}
          />
        </div>

        {/* Nav links - Frame 115 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0px',
            gap: '69px',
            width: '464px',
            height: '24px',
            flex: 'none',
            order: 1,
            flexGrow: 0,
          }}
        >
          {[
            { name: 'Home', width: '49px' },
            { name: 'Services', width: '68px' },
            { name: 'Teams', width: '55px' },
            { name: 'Use Cases', width: '85px' }
          ].map((item, idx) => (
            <a
              key={item.name}
              href="#"
              style={{
                width: item.width,
                height: '24px',
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0.01em',
                color: '#494949',
                textDecoration: 'none',
                flex: 'none',
                order: idx,
                flexGrow: 0,
                whiteSpace: 'nowrap'
              }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Auth Buttons - Frame 1618868677 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0px',
            gap: '16px',
            width: '219px',
            height: '40px',
            flex: 'none',
            order: 2,
            flexGrow: 0,
          }}
        >
          {/* Log in */}
          <a
            href="https://app.bigcradle.com"
            style={{
              width: '42px',
              height: '21px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '21px',
              letterSpacing: '0.01em',
              color: '#000000',
              textDecoration: 'none',
              flex: 'none',
              order: 0,
              flexGrow: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Log in
          </a>

          <a
            href="https://app.bigcradle.com"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0px',
              gap: '12px',
              width: '161px',
              height: '40px',
              background: '#0D8AFF',
              border: '1px solid #0067C7',
              borderRadius: '6px',
              flex: 'none',
              order: 1,
              flexGrow: 0,
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            <span
              style={{
                width: '113px',
                height: '21px',
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '21px',
                letterSpacing: '0.01em',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap'
              }}
            >
              Create account
            </span>
          </a>
        </div>
      </div>

      {/* Background patterns and abstract shapes */}
      <DecorativeCluster side="left" />
      <DecorativeCluster side="right" />

      {/* Hero center text and CTA region */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          gap: '20px',
          position: 'absolute',
          width: '1069px',
          height: '434px',
          left: '186px',
          top: '318px',
          zIndex: 10,
        }}
      >
        {/* Heading, Buttons, and Description section - Frame 2095586481 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            gap: '16px',
            width: '1069px',
            height: '366px',
            flex: 'none',
            order: 0,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          {/* Frame 121 - Heading */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0px', gap: '4px', width: '1069px', height: '126px', flex: 'none', order: 0, alignSelf: 'stretch', flexGrow: 0 }}>
            <h1
              style={{
                width: '1069px',
                height: '126px',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '40px',
                lineHeight: '156.77%',
                textAlign: 'center',
                letterSpacing: '0.01em',
                color: '#0023E8',
                margin: 0,
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              Get High-Integrity Data for High-Performance AI and Team
            </h1>
          </div>

          {/* Call to Action group - Frame 125 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0px',
              gap: '16px',
              width: '460px',
              height: '48px',
              flex: 'none',
              order: 2,
              flexGrow: 0,
            }}
          >
            {/* Primary CTA */}
            <a
              href="https://app.bigcradle.com"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                gap: '12px',
                width: '222px',
                height: '48px',
                background: 'linear-gradient(90deg, #0546D2 0%, #94B2FF 50.42%, #0546D2 100%)',
                borderRadius: '6px',
                textDecoration: 'none',
                flex: 'none',
                order: 0,
                flexGrow: 0,
              }}
            >
              <span style={{ width: '135px', height: '24px', fontFamily: 'Poppins', fontWeight: 500, fontSize: '16px', lineHeight: '24px', letterSpacing: '0.01em', color: '#FFFFFF', textAlign: 'center' }}>
                Create account
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href="https://app.bigcradle.com"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                gap: '12px',
                width: '222px',
                height: '48px',
                background: '#F7F7F7',
                borderRadius: '6px',
                textDecoration: 'none',
                flex: 'none',
                order: 1,
                flexGrow: 0,
              }}
            >
              <span style={{ width: '135px', height: '24px', fontFamily: 'Poppins', fontWeight: 500, fontSize: '16px', lineHeight: '24px', letterSpacing: '0.01em', color: '#868686', textAlign: 'center' }}>
                Book a demo
              </span>
            </a>
          </div>

          {/* Description Text */}
          <p
            style={{
              width: '719px',
              height: '108px',
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '27px',
              textAlign: 'center',
              letterSpacing: '0.01em',
              color: '#676767',
              margin: 0,
              flex: 'none',
              order: 1,
              flexGrow: 0,
            }}
          >
            BigCradle provides human-verified high integrity crowd sourced data & annotation, consumer insights, and research intelligence across Africa—your business make informed decisions and your models ship on time, retain relevant context, and work in production.
          </p>
        </div>
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0px',
          gap: '12px',
          position: 'absolute',
          width: '1196.26px',
          height: '173.3px',
          left: 'calc(50% - 1196.26px/2 + 0.13px)',
          top: '720px',
        }}
      >
        {[
          { src: '/image(0).png', border: '#0D8AFF' },
          { src: '/image (1).png', border: '#0BAD2E' },
          { src: '/image (2).png', border: '#FF760D' },
          { src: '/image (3).png', border: '#D30000' },
          { src: '/image (4).png', border: '#FF0DFF' },
          { src: '/image (5).png', border: '#9747FF' }
        ].map((img, idx) => (
          <div
            key={idx}
            style={{
              boxSizing: 'border-box',
              width: '170px',
              height: '151.11px',
              backgroundImage: `url("${img.src}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: `1px dashed ${img.border}`,
              borderRadius: '12px',
              transform: 'rotate(8deg)',
              flex: 'none',
              order: idx,
              flexGrow: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
