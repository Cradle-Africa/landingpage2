"use client";

import React from 'react';
import { DashedArrow } from '../shared/DashedArrow';

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
            href="#"
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

          {/* Create account btn */}
          <div
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
          </div>
        </div>
      </div>

      {/* Background patterns and abstract shapes */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0px',
          gap: '542px',
          position: 'absolute',
          width: '1636px',
          height: '390px',
          left: 'calc(50% - 1636px/2)',
          top: '206px',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        {/* Left-side decorative cluster */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px', width: '497px', height: '390px', flex: 'none', order: 0, flexGrow: 0 }}>
          <svg width="497" height="390" viewBox="0 0 399 390" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMinYMid meet">
            <path d="M-97.9984 100C-97.9984 73.4784 -87.4628 48.043 -68.7093 29.2893C-49.9558 10.5357 -24.5206 2.00233e-06 2.0008 0C28.5222 -2.00233e-06 53.9574 10.5357 72.7109 29.2893C91.4644 48.0429 102 73.4783 102 100L50.5068 100C50.5068 87.1353 45.3964 74.7975 36.2998 65.7008C27.2031 56.604 14.8654 51.4936 2.00081 51.4936C-10.8638 51.4936 -23.2015 56.6041 -32.2981 65.7008C-41.3948 74.7975 -46.5052 87.1353 -46.5052 100H-97.9984Z" fill="#D3DEF8"/>
            <path d="M199.002 100C199.002 73.4784 209.537 48.043 228.291 29.2893C247.044 10.5357 272.479 2.00233e-06 299.001 0C325.522 -2.00233e-06 350.957 10.5357 369.711 29.2893C388.464 48.0429 399 73.4783 399 100L347.507 100C347.507 87.1353 342.396 74.7975 333.3 65.7008C324.203 56.604 311.865 51.4936 299.001 51.4936C286.136 51.4936 273.799 56.6041 264.702 65.7008C255.605 74.7975 250.495 87.1353 250.495 100H199.002Z" fill="#FFEDCC"/>
            <path d="M248.998 107C248.998 133.522 238.463 158.957 219.709 177.711C200.956 196.464 175.521 207 148.999 207C122.478 207 97.0426 196.464 78.2891 177.711C59.5356 158.957 49 133.522 49 107L100.493 107C100.493 119.865 105.604 132.203 114.7 141.299C123.797 150.396 136.135 155.506 148.999 155.506C161.864 155.506 174.201 150.396 183.298 141.299C192.395 132.203 197.505 119.865 197.505 107L248.998 107Z" fill="#F8D3F0"/>
            <path d="M-97.9984 290C-97.9984 316.522 -87.4628 341.957 -68.7093 360.711C-49.9558 379.464 -24.5206 390 2.0008 390C28.5222 390 53.9574 379.464 72.7109 360.711C91.4644 341.957 102 316.522 102 290L50.5068 290C50.5068 302.865 45.3964 315.203 36.2998 324.299C27.2031 333.396 14.8654 338.506 2.00081 338.506C-10.8638 338.506 -23.2015 333.396 -32.2981 324.299C-41.3948 315.203 -46.5052 302.865 -46.5052 290H-97.9984Z" fill="#D3DEF8"/>
            <path d="M199.002 290C199.002 316.522 209.537 341.957 228.291 360.711C247.044 379.464 272.479 390 299.001 390C325.522 390 350.957 379.464 369.711 360.711C388.464 341.957 399 316.522 399 290L347.507 290C347.507 302.865 342.396 315.203 333.3 324.299C324.203 333.396 311.865 338.506 299.001 338.506C286.136 338.506 273.799 333.396 264.702 324.299C255.605 315.203 250.495 302.865 250.495 290H199.002Z" fill="#FFEDCC"/>
            <path d="M248.998 283C248.998 256.478 238.463 231.043 219.709 212.289C200.956 193.536 175.521 183 148.999 183C122.478 183 97.0426 193.536 78.2891 212.289C59.5356 231.043 49 256.478 49 283L100.493 283C100.493 270.135 105.604 257.797 114.7 248.701C123.797 239.604 136.135 234.494 148.999 234.494C161.864 234.494 174.201 239.604 183.298 248.701C192.395 257.797 197.505 270.135 197.505 283H248.998Z" fill="#F8D3F0"/>
          </svg>
        </div>

        {/* Right-side decorative cluster */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px', width: '497px', height: '390px', flex: 'none', order: 1, flexGrow: 0 }}>
          <svg width="497" height="390" viewBox="0 0 399 390" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMaxYMid meet">
            <path d="M497 100C497 73.4784 486.464 48.043 467.711 29.2893C448.957 10.5357 423.522 2.00233e-06 397 0C370.478 -2.00233e-06 345.043 10.5357 326.289 29.2893C307.536 48.0429 297 73.4783 297 100L348.494 100C348.494 87.1353 353.604 74.7975 362.701 65.7008C371.798 56.604 384.135 51.4936 397 51.4936C409.865 51.4936 422.203 56.6041 431.299 65.7008C440.396 74.7975 445.506 87.1353 445.506 100H497Z" fill="#D3DEF8"/>
            <path d="M200 100C200 73.4784 189.464 48.043 170.711 29.2893C151.957 10.5357 126.522 2.00233e-06 100 0C73.4784 -2.00233e-06 48.043 10.5357 29.2893 29.2893C10.5357 48.0429 4.00466e-06 73.4783 0 100L51.4936 100C51.4936 87.1353 56.6041 74.7975 65.7008 65.7008C74.7975 56.604 87.1353 51.4936 100 51.4936C112.865 51.4936 125.203 56.6041 134.299 65.7008C143.396 74.7975 148.506 87.1353 148.506 100H200Z" fill="#FFEDCC"/>
            <path d="M150 107C150 133.522 160.536 158.957 179.289 177.711C198.043 196.464 223.478 207 250 207C276.522 207 301.957 196.464 320.711 177.711C339.464 158.957 350 133.522 350 107L298.506 107C298.506 119.865 293.396 132.203 284.299 141.299C275.202 150.396 262.865 155.506 250 155.506C237.135 155.506 224.797 150.396 215.701 141.299C206.604 132.203 201.494 119.865 201.494 107L150 107Z" fill="#F8D3F0"/>
            <path d="M497 290C497 316.522 486.464 341.957 467.711 360.711C448.957 379.464 423.522 390 397 390C370.478 390 345.043 379.464 326.289 360.711C307.536 341.957 297 316.522 297 290L348.494 290C348.494 302.865 353.604 315.203 362.701 324.299C371.798 333.396 384.135 338.506 397 338.506C409.865 338.506 422.203 333.396 431.299 324.299C440.396 315.203 445.506 302.865 445.506 290H497Z" fill="#D3DEF8"/>
            <path d="M200 290C200 316.522 189.464 341.957 170.711 360.711C151.957 379.464 126.522 390 100 390C73.4784 390 48.043 379.464 29.2893 360.711C10.5357 341.957 4.00466e-06 316.522 0 290L51.4936 290C51.4936 302.865 56.6041 315.203 65.7008 324.299C74.7975 333.396 87.1353 338.506 100 338.506C112.865 338.506 125.203 333.396 134.299 324.299C143.396 315.203 148.506 302.865 148.506 290H200Z" fill="#FFEDCC"/>
            <path d="M150 283C150 256.478 160.536 231.043 179.289 212.289C198.043 193.536 223.478 183 250 183C276.522 183 301.957 193.536 320.711 212.289C339.464 231.043 350 256.478 350 283L298.506 283C298.506 270.135 293.396 257.797 284.299 248.701C275.202 239.604 262.865 234.494 250 234.494C237.135 234.494 224.797 239.604 215.701 248.701C206.604 257.797 201.494 270.135 201.494 283H150Z" fill="#F8D3F0"/>
          </svg>
        </div>
      </div>

      {/* Hero center text and CTA region */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          gap: '32px',
          position: 'absolute',
          width: '935px',
          height: '400px',
          left: 'calc(50% - 935px/2 + 0.5px)',
          top: '239px',
          zIndex: 10,
        }}
      >
        {/* Frame 117 - Badge (Hidden per spec but implemented) */}
        <div
          style={{
            display: 'none',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '8px 12px',
            gap: '4px',
            width: '299.67px',
            height: '56.57px',
            background: '#F5F6FF',
            border: '1px dashed #B0BCFF',
            borderRadius: '48px',
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '0px', width: '64.67px', height: '40.57px', flex: 'none', order: 0, flexGrow: 0 }}>
            {/* Frame 119 - Small icon cluster */}
            <div style={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4px 2px', width: '32px', height: '32px', background: '#0027FF', border: '1px solid #FFFFFF', borderRadius: '28px', transform: 'rotate(-7.92deg)', flex: 'none', order: 0, flexGrow: 0, margin: '0px -12px', position: 'relative' }}>
               <div style={{ position: 'absolute', left: '14.11%', right: '10.89%', top: '14.1%', bottom: '10.9%', border: '1px solid #FFFFFF', transform: 'rotate(-7.92deg)' }} />
               <div style={{ position: 'absolute', left: '31.2%', right: '64.63%', top: '25.69%', bottom: '74.31%', border: '1px solid #FFFFFF', transform: 'rotate(-7.92deg)' }} />
               <div style={{ position: 'absolute', left: '32.91%', right: '50.42%', top: '36.35%', bottom: '63.65%', border: '1px solid #FFFFFF', transform: 'rotate(-7.92deg)' }} />
               <div style={{ position: 'absolute', left: '26.37%', right: '6.97%', top: '43%', bottom: '15.34%', border: '1px solid #FFFFFF', transform: 'rotate(-7.92deg)' }} />
            </div>
            <div style={{ boxSizing: 'border-box', width: '32px', height: '32px', background: 'url(/image.png)', border: '1px solid #FFFFFF', borderRadius: '28px', transform: 'rotate(18.69deg)', flex: 'none', order: 1, flexGrow: 0 }} />
          </div>
          <span style={{ width: '207px', height: '24px', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '24px', letterSpacing: '0.01em', color: '#0027FF', flex: 'none', order: 1, flexGrow: 0 }}>
            Where data meets reality
          </span>
        </div>

        {/* Heading and subtext section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            gap: '8px',
            width: '935px',
            height: '278px',
            flex: 'none',
            order: 1,
            flexGrow: 0,
          }}
        >
          {/* Frame 121 - Heading */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0px', gap: '4px', width: '935px', height: '108px', flex: 'none', order: 0, flexGrow: 0 }}>
            <h1
              style={{
                width: '935px',
                height: '108px',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '36px',
                lineHeight: '54px',
                textAlign: 'center',
                letterSpacing: '-0.03em',
                color: '#000000',
                margin: 0,
                flex: 'none',
                order: 0,
                flexGrow: 0,
              }}
            >
              Get High-Integrity Data for High-Performance AI and Team
            </h1>
          </div>

          {/* Description Text */}
          <p
            style={{
              width: '935px',
              height: '162px',
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
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            BigCradle provides human-verified high integrity crowd sourced data & annotation, consumer insights, and research intelligence across Africa—your business make informed decisions and your models ship on time, retain relevant context, and work in production.
          </p>
        </div>

        {/* Call to Action group */}
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
            href="#"
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
            href="#"
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
          top: '751px',
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
