"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const Results = () => {
  return (
    <section
      style={{
        width: '100%',
        maxWidth: '1440px',
        height: '1024px',
        background: '#FCFCFC',
        position: 'relative',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        flex: 'none',
        order: 5,
        flexGrow: 0,
      }}
    >
      {/* Top Header Section - Frame 166 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          gap: '13px',
          position: 'absolute',
          width: '983px',
          height: '180px',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '40px',
        }}
      >
        {/* Built to deliver Results - Frame 130 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px',
            gap: '12px',
            width: '165px',
            height: '107px',
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          <span
            style={{
              fontFamily: 'Poppins',
              fontSize: '23px',
              fontWeight: 400,
              lineHeight: '34px',
              textAlign: 'center',
              letterSpacing: '0.01em',
              color: '#676767',
              margin: 0
            }}
          >
            Built to deliver
          </span>
          {/* Results + Underline - Frame 129 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              gap: '4px',
              width: '118px',
              height: '60px',
            }}
          >
            <h2
              style={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '32px',
                lineHeight: '48px',
                letterSpacing: '0.01em',
                background: 'linear-gradient(90deg, #0546D2 0%, #94B2FF 50.42%, #0546D2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                margin: 0
              }}
            >
              Results
            </h2>
            <svg width="102" height="10" viewBox="0 0 102 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 2.14777C1.15865 2.14777 1.31731 2.14777 6.31731 2.14777C11.3173 2.14777 21.1538 2.14777 26.9351 2.08819C34.1475 2.01386 40.375 1.78668 48.1418 1.66751C52.2862 1.60393 54.0385 0.945322 54.6034 1.0031C57.6588 1.3156 48.9327 3.82326 45.3245 5.4518C43.5561 6.24996 41.5577 7.43783 39.3966 8.51931C38.4799 8.97808 38.0288 9.36247 46.113 8.41459C54.1971 7.46672 70.8558 5.20264 80.1514 4.0363C90.875 2.86996 93.4567 2.7508 96.012 2.57025C97.4567 2.50887 99.2019 2.50887 101 2.50887" stroke="#3C6FE3" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* Subtitle Text */}
        <p
          style={{
            width: '100%',
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '30px',
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
          BigCradle is more than a data collection tool, it's a scalable insight engine made for fast-growing teams and modern African markets
        </p>
      </div>

      {/* Main Content Area (Plans + Cards) - Frame 151 */}
      <div
        style={{
          position: 'absolute',
          width: '1132px',
          height: '748px',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '276px',
          background: '#F7F7F7',
          borderRadius: '12px 12px 0px 0px',
        }}
      >
        {/* Flexible Plans Layer - Frame 167 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0px',
            gap: '42px',
            position: 'absolute',
            width: '726px',
            height: '627px',
            left: '50%',
            transform: 'translateX(-50%)',
            top: 'calc(50% - 627px/2 + 0.5px)',
          }}
        >
          {/* Header - Frame 165 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0px',
              width: '578px',
              height: '63px',
              flex: 'none',
              order: 0,
              flexGrow: 0,
            }}
          >
            <h3
              style={{
                fontFamily: 'Poppins',
                fontWeight: 500,
                fontSize: '26px',
                lineHeight: '39px',
                textAlign: 'center',
                letterSpacing: '0.01em',
                color: '#0C0C0C',
                margin: 0,
                alignSelf: 'stretch'
              }}
            >
              Flexible Plans
            </h3>
            <p
              style={{
                fontFamily: 'Poppins',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                textAlign: 'center',
                letterSpacing: '0.01em',
                color: '#676767',
                margin: 0,
                alignSelf: 'stretch'
              }}
            >
              From startups to enterprise, choose a plan that fits your research goals
            </p>
          </div>

          {/* Cards Row - Frame 164 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '0px',
              gap: '42px',
              width: '726px',
              height: '522px',
              flex: 'none',
              order: 1,
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            {/* White Card - Frame 162 */}
            <motion.div
              whileHover={{ y: -5 }}
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px',
                width: '342px',
                height: '522px',
                background: '#FFFFFF',
                border: '1px solid #F4F4F4',
                boxShadow: '0px 2px 3px rgba(141, 141, 141, 0.04)',
                borderRadius: '24px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px', gap: '12px', width: '310px' }}>
                {/* Product Info - Frame 152 */}
                <div style={{ display: 'flex', flexDirection: 'column', padding: '16px', gap: '42px', width: '310px', height: '125px', background: '#F2F2F2', borderRadius: '8px', boxSizing: 'border-box' }}>
                  <h5 style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '20px', lineHeight: '30px', color: '#0C0C0C', margin: 0 }}>Big Cradle Pro</h5>
                  <span style={{ fontFamily: 'Poppins', fontSize: '14px', color: '#676767' }}>Life-time Access</span>
                </div>
                {/* Features - Frame 159 */}
                <div style={{ padding: '16px', gap: '16px', width: '310px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                  {['Figma components', 'Figma components', 'Figma components', 'Figma components', 'Figma components'].map((feature, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '14px' }}>{i === 2 || i === 4 ? '❌' : '✅'}</span>
                      <span style={{ fontFamily: 'Poppins', fontSize: '14px', color: '#494949' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Price Area */}
              <div style={{ width: '310px', border: '1px dashed #E8E8E8', margin: '16px 0' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '0 16px', width: '100%', boxSizing: 'border-box' }}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '29px', color: '#0027FF' }}>₦56,000</span>
                <span style={{ fontFamily: 'Poppins', fontSize: '14px', color: '#676767' }}>one-time payment</span>
              </div>
              {/* CTA */}
              <button
                style={{
                  width: '278px',
                  height: '48px',
                  background: 'linear-gradient(183.55deg, #578CFF 2.92%, #0546D2 97.08%)',
                  borderRadius: '6px',
                  border: 'none',
                  color: 'white',
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '14px',
                  cursor: 'pointer',
                  marginTop: '16px'
                }}
              >
                Create account
              </button>
            </motion.div>

            {/* Dark Card - Frame 163 */}
            <motion.div
              whileHover={{ y: -5 }}
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px',
                width: '342px',
                height: '522px',
                background: '#0E0E0E',
                border: '1px solid #F4F4F4',
                boxShadow: '0px 2px 3px rgba(141, 141, 141, 0.04)',
                borderRadius: '24px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px', gap: '12px', width: '310px' }}>
                {/* Product Info - Frame 152 Gradient */}
                <div style={{ display: 'flex', flexDirection: 'column', padding: '16px', gap: '42px', width: '310px', height: '125px', background: 'linear-gradient(90deg, #0546D2 0%, #94B2FF 50.42%, #0546D2 100%)', borderRadius: '8px', boxSizing: 'border-box' }}>
                  <h5 style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '20px', lineHeight: '30px', color: '#FFFFFF', margin: 0 }}>Big Cradle Pro</h5>
                  <span style={{ fontFamily: 'Poppins', fontSize: '14px', color: '#E8E8E8' }}>Life-time Access</span>
                </div>
                {/* Features - Frame 159 */}
                <div style={{ padding: '16px', gap: '16px', width: '310px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                  {[1, 1, 1, 1, 1].map((_, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '14px', color: 'white' }}>✅</span>
                      <span style={{ fontFamily: 'Poppins', fontSize: '14px', color: '#E8E8E8' }}>Figma components</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Price Area */}
              <div style={{ width: '310px', border: '1px dashed #1C1C1C', margin: '16px 0' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '0 16px', width: '100%', boxSizing: 'border-box' }}>
                <span style={{ fontFamily: 'Poppins', fontWeight: 500, fontSize: '29px', color: '#B0BCFF' }}>₦56,000</span>
                <span style={{ fontFamily: 'Poppins', fontSize: '14px', color: '#979797' }}>one-time payment</span>
              </div>
              {/* CTA */}
              <button
                style={{
                  width: '278px',
                  height: '48px',
                  background: '#F6F9FF',
                  borderRadius: '6px',
                  border: 'none',
                  color: '#0027FF',
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '14px',
                  cursor: 'pointer',
                  marginTop: '16px'
                }}
              >
                Create account
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
