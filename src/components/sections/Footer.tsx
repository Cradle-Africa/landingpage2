"use client";

import React from 'react';

/**
 * Footer component
 * Background: #FAFBFF, Height: 454px
 */
export function Footer() {
  return (
    <footer 
      style={{
        width: '100%',
        height: '454px',
        background: '#001A30',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        margin: '0 auto',
        flex: 'none',
        order: 8,
        flexGrow: 0,
        overflow: 'hidden'
      }}
    >
      {/* Main Content - Frame 193 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          padding: '0px',
          gap: '160px',
          position: 'absolute',
          width: '1240px',
          maxWidth: '90%',
          height: '186px',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '80px',
        }}
      >
        {/* Company Column - Frame 181 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '8px',
            width: '400px',
            height: '93px',
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          {/* Logo - Frame Company */}
          <div style={{ width: '400px', height: '64px', position: 'relative', flex: 'none', order: 0, alignSelf: 'stretch', flexGrow: 0 }}>
             <img 
               src="/footerlogo.png" 
               alt="BigCradle Logo" 
               style={{ 
                 position: 'absolute', 
                 width: '160.87px', 
                 height: '37px', 
                 left: '0px', 
                 top: 'calc(50% - 37px/2 + 1px)' 
               }} 
             />
          </div>
          <p
            style={{
              width: '400px',
              height: '21px',
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '21px',
              letterSpacing: '0.01em',
              color: '#676767',
              margin: 0,
              flex: 'none',
              order: 1,
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            African Consumer Insights. Delivered. Executed.
          </p>
        </div>

        {/* Contact Us Column - Frame 189 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '20px',
            width: '356px',
            height: '186px',
            flex: 'none',
            order: 1,
            flexGrow: 0,
          }}
        >
          {/* Header - Frame 182 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0px', width: '114px', height: '38px', flex: 'none', order: 0, flexGrow: 0 }}>
            <h5 style={{ width: '114px', height: '30px', fontFamily: 'Poppins', fontWeight: 500, fontSize: '20px', lineHeight: '30px', letterSpacing: '0.01em', color: '#FFFFFF', margin: 0 }}>
              Contact Us
            </h5>
            <svg width="102" height="10" viewBox="0 0 102 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 2.14777C1.15865 2.14777 1.31731 2.14777 6.31731 2.14777C11.3173 2.14777 21.1538 2.14777 26.9351 2.08819C34.1475 2.01386 40.375 1.78668 48.1418 1.66751C52.2862 1.60393 54.0385 0.945322 54.6034 1.0031C57.6588 1.3156 48.9327 3.82326 45.3245 5.4518C43.5561 6.24996 41.5577 7.43783 39.3966 8.51931C38.4799 8.97808 38.0288 9.36247 46.113 8.41459C54.1971 7.46672 70.8558 5.20264 80.1514 4.0363C90.875 2.86996 93.4567 2.7508 96.012 2.57025C97.4567 2.50887 99.2019 2.50887 101 2.50887" stroke="#3C6FE3" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Details - Frame 188 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px', gap: '16px', width: '356px', height: '128px', flex: 'none', order: 1, alignSelf: 'stretch', flexGrow: 0 }}>
            {/* Phone - Frame 187 */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '0px', gap: '8px', width: '356px', height: '32px', flex: 'none', order: 0, alignSelf: 'stretch', flexGrow: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2px', width: '32px', height: '32px', background: '#F7F7F7', borderRadius: '32px', flex: 'none', order: 0, flexGrow: 0 }}>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3L13 13M3 13L13 3" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span style={{ width: '312px', height: '24px', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '24px', letterSpacing: '0.01em', color: '#FFFFFF' }}>
                +250 796-338-327, +234 816-433-8001
              </span>
            </div>

            {/* Email - Frame 186 */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '0px', gap: '8px', width: '186px', height: '32px', flex: 'none', order: 1, flexGrow: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2px', width: '32px', height: '32px', background: '#F7F7F7', borderRadius: '32px', flex: 'none', order: 0, flexGrow: 0 }}>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 4L8 8L14 4M2 12V4H14V12H2Z" stroke="#141B34" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <span style={{ width: '146px', height: '24px', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '24px', letterSpacing: '0.01em', color: '#FFFFFF' }}>
                big@cradle.africa
              </span>
            </div>

            {/* Location - Frame 184 */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '0px', gap: '8px', width: '321px', height: '32px', flex: 'none', order: 2, flexGrow: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2px', width: '32px', height: '32px', background: '#F7F7F7', borderRadius: '32px', flex: 'none', order: 0, flexGrow: 0 }}>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 14C8 14 3 9.5 3 6C3 3.23858 5.23858 1 8 1C10.7614 1 13 3.23858 13 6C13 9.5 8 14 8 14Z" stroke="#141B34" strokeWidth="1.5"/>
                  <circle cx="8" cy="6" r="1.5" stroke="#141B34" strokeWidth="1.5"/>
                </svg>
              </div>
              <span style={{ width: '281px', height: '24px', fontFamily: 'Poppins', fontWeight: 400, fontSize: '16px', lineHeight: '24px', letterSpacing: '0.01em', color: '#FFFFFF' }}>
                Nyakabanda, KK 114 Kigali, Rwanda
              </span>
            </div>
          </div>
        </div>

        {/* Follow Us Column - Frame 192 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '20px',
            width: '164px',
            height: '90px',
            flex: 'none',
            order: 2,
            flexGrow: 0,
          }}
        >
          {/* Header - Frame 191 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0px', width: '100px', height: '38px', flex: 'none', order: 0, flexGrow: 0 }}>
            <h5 style={{ width: '100px', height: '30px', fontFamily: 'Poppins', fontWeight: 500, fontSize: '20px', lineHeight: '30px', letterSpacing: '0.01em', color: '#FFFFFF', margin: 0 }}>
              Follow Us
            </h5>
            <svg width="102" height="10" viewBox="0 0 102 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 2.14777C1.15865 2.14777 1.31731 2.14777 6.31731 2.14777C11.3173 2.14777 21.1538 2.14777 26.9351 2.08819C34.1475 2.01386 40.375 1.78668 48.1418 1.66751C52.2862 1.60393 54.0385 0.945322 54.6034 1.0031C57.6588 1.3156 48.9327 3.82326 45.3245 5.4518C43.5561 6.24996 41.5577 7.43783 39.3966 8.51931C38.4799 8.97857 38.0288 9.36247 46.113 8.41459C54.1971 7.46672 70.8558 5.20264 80.1514 4.0363C90.875 2.86996 93.4567 2.7508 96.012 2.57025C97.4567 2.50887 99.2019 2.50887 101 2.50887" stroke="#3C6FE3" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Social Icons - Frame 190 */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '0px', gap: '12px', width: '164px', height: '32px', flex: 'none', order: 1, alignSelf: 'stretch', flexGrow: 0 }}>
            {/* Icon 1 - X */}
            <div style={{ cursor: 'pointer', flex: 'none', order: 0, flexGrow: 0 }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="16" fill="#F7F7F7"/>
                <path d="M10 22L15.0323 16.9677M15.0323 16.9677L10 10H13.3333L16.9677 15.0323M15.0323 16.9677L18.6667 22H22L16.9677 15.0323M22 10L16.9677 15.0323" stroke="#141B34" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {/* Icon 2 - Instagram */}
            <div style={{ cursor: 'pointer', flex: 'none', order: 1, flexGrow: 0 }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="16" fill="#F7F7F7"/>
                <path d="M9 16C9 12.7002 9 11.0503 10.0251 10.0251C11.0503 9 12.7002 9 16 9C19.2998 9 20.9497 9 21.9749 10.0251C23 11.0503 23 12.7002 23 16C23 19.2998 23 20.9497 21.9749 21.9749C20.9497 23 19.2998 23 16 23C12.7002 23 11.0503 23 10.0251 21.9749C9 20.9497 9 19.2998 9 16Z" stroke="#141B34" strokeLinejoin="round"/>
                <path d="M19.3161 16.0004C19.3161 17.8316 17.8316 19.3161 16.0004 19.3161C14.1691 19.3161 12.6846 17.8316 12.6846 16.0004C12.6846 14.1691 14.1691 12.6846 16.0004 12.6846C17.8316 12.6846 19.3161 14.1691 19.3161 16.0004Z" stroke="#141B34"/>
                <path d="M20.057 11.9475H20.0513" stroke="#141B34" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {/* Icon 3 - LinkedIn */}
            <div style={{ cursor: 'pointer', flex: 'none', order: 2, flexGrow: 0 }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="16" fill="#F7F7F7"/>
                <path d="M12.3154 14.5269V19.6848" stroke="#141B34" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.2627 16.7374V19.6848M15.2627 16.7374C15.2627 15.5165 16.2523 14.5269 17.4732 14.5269C18.6941 14.5269 19.6837 15.5165 19.6837 16.7374V19.6848M15.2627 16.7374V14.5269" stroke="#141B34" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.3211 12.3154H12.3154" stroke="#141B34" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 16C9 12.7002 9 11.0503 10.0251 10.0251C11.0503 9 12.7002 9 16 9C19.2998 9 20.9497 9 21.9749 10.0251C23 11.0503 23 12.7002 23 16C23 19.2998 23 20.9497 21.9749 21.9749C20.9497 23 19.2998 23 16 23C12.7002 23 11.0503 23 10.0251 21.9749C9 20.9497 9 19.2998 9 16Z" stroke="#141B34" strokeLinejoin="round"/>
              </svg>
            </div>
            {/* Icon 4 - Facebook */}
            <div style={{ cursor: 'pointer', flex: 'none', order: 3, flexGrow: 0 }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="16" fill="#F7F7F7"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M11.8442 14.8333C11.1458 14.8333 11 14.9676 11 15.6111V16.7778C11 17.4213 11.1458 17.5555 11.8442 17.5555H13.5325V22.2222C13.5325 22.8657 13.6782 23 14.3766 23H16.0649C16.7634 23 16.9091 22.8657 16.9091 22.2222V17.5555H18.8048C19.3345 17.5555 19.471 17.4607 19.6165 16.9915L19.9783 15.8248C20.2275 15.021 20.0739 14.8333 19.1666 14.8333H16.9091V12.8889C16.9091 12.4593 17.287 12.1111 17.7532 12.1111H20.1559C20.8542 12.1111 21 11.9768 21 11.3333V9.77778C21 9.13429 20.8542 9 20.1559 9H17.7532C15.4221 9 13.5325 10.7411 13.5325 12.8889V14.8333H11.8442Z" stroke="#141B34" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Frame 1 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0px',
          gap: '388px',
          position: 'absolute',
          width: '1232px',
          maxWidth: '90%',
          height: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '388px',
        }}
      >
        <p
          style={{
            width: '422px',
            height: '24px',
            fontFamily: 'Poppins',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '21px',
            letterSpacing: '0.01em',
            color: '#92989F',
            margin: 0,
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          &copy; {new Date().getFullYear()} BigCradle. All rights reserved.
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: '32px',
            width: '422px',
            height: '24px',
            flex: 'none',
            order: 1,
            flexGrow: 0,
          }}
        >
          {['Privacy Policy', 'Terms of Service', 'Cookies'].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '21px',
                textAlign: 'right',
                letterSpacing: '0.01em',
                color: '#92989F',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#92989F')}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
