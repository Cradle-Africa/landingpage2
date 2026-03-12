import React from 'react';
import { Logo } from "@/components/shared/Logo";

/**
 * Footer component
 * Background: #FAFBFF, Height: 454px
 */
export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#FAFBFF] pt-[80px] pb-[42px]">
      {/* Primary footer layout */}
      <div 
        className="relative mx-auto flex w-full max-w-[1240px] flex-row items-start justify-between px-4"
        style={{ gap: '160px' }}
      >
        {/* Company logo and mission */}
        <div className="flex w-[400px] flex-col items-start gap-2">
          <div className="relative h-[64px] w-full">
            <div className="absolute top-1/2 left-0 -translate-y-1/2">
              <Logo />
            </div>
          </div>
          <p className="w-full font-poppins text-[14px] font-normal leading-[21px] tracking-[0.01em] text-[#676767]">
            African Consumer Insights. Delivered. Executed.
          </p>
        </div>

        {/* Contact and address column */}
        <div className="flex w-[356px] flex-col items-start gap-5">
          {/* Column title */}
          <div className="flex flex-col items-start gap-1">
            <h3 className="font-poppins text-[20px] font-medium leading-[30px] tracking-[0.01em] text-[#000000]">
              Contact Us
            </h3>
            {/* Vector 1 - Custom Path Implementation */}
            <svg width="102" height="10" viewBox="0 0 102 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-none order-1">
              <path d="M1 2.14826C1.15865 2.14826 1.31731 2.14826 6.31731 2.14826C11.3173 2.14826 21.1538 2.14826 26.9351 2.08868C34.1475 2.01435 40.375 1.78716 48.1418 1.668C52.2862 1.60442 54.0385 0.94581 54.6034 1.00359C57.6588 1.31608 48.9327 3.82375 45.3245 5.45229C43.5561 6.25044 41.5577 7.43832 39.3966 8.5198C38.4799 8.97857 38.0288 9.36296 46.113 8.41508C54.1971 7.4672 70.8558 5.20313 80.1514 4.03679C90.875 2.87045 93.4567 2.75129 96.012 2.57074C97.4567 2.50936 99.2019 2.50936 101 2.50936" stroke="#3C6FE3" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Details */}
          <div className="flex w-full flex-col items-start gap-4">
            {/* ... phone, email, address remain same ... */}
            <div className="flex w-full flex-row items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F7F7]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="stroke-[#141B34]">
                  <path d="M1 1L11 11M1 11L11 1" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-poppins text-[16px] font-normal leading-[24px] tracking-[0.01em] text-[#000000]">
                +250 796-338-327, +234 816-433-8001
              </span>
            </div>

            <div className="flex w-full flex-row items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F7F7]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="stroke-[#141B34]">
                  <path d="M1 3.5L6 7L11 3.5M1.5 2.5H10.5C11.0523 2.5 11.5 2.94772 11.5 3.5V8.5C11.5 9.05228 11.0523 9.5 10.5 9.5H1.5C0.947715 9.5 0.5 9.05228 0.5 8.5V3.5C0.5 2.94772 0.947715 2.5 1.5 2.5Z" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="font-poppins text-[16px] font-normal leading-[24px] tracking-[0.01em] text-[#000000]">
                big@cradle.africa
              </span>
            </div>

            <div className="flex w-full flex-row items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F7F7]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="stroke-[#141B34]">
                  <path d="M6 11L1.5 6.5C0.5 5.5 0.5 4 1.5 3C2.5 2 4 2 5 3L6 4L7 3C8 2 9.5 2 10.5 3C11.5 4 11.5 5.5 10.5 6.5L6 11Z" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="font-poppins text-[16px] font-normal leading-[24px] tracking-[0.01em] text-[#000000]">
                Nyakabanda, KK 114 Kigali, Rwanda
              </span>
            </div>
          </div>
        </div>

        {/* Follow Us Column */}
        <div className="flex w-[164px] flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-1">
            <h3 className="font-poppins text-[20px] font-medium leading-[30px] tracking-[0.01em] text-[#000000]">
              Follow Us
            </h3>
            {/* Vector 1 - Custom Path Implementation */}
            <svg width="102" height="10" viewBox="0 0 102 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-none order-1">
              <path d="M1 2.14826C1.15865 2.14826 1.31731 2.14826 6.31731 2.14826C11.3173 2.14826 21.1538 2.14826 26.9351 2.08868C34.1475 2.01435 40.375 1.78716 48.1418 1.668C52.2862 1.60442 54.0385 0.94581 54.6034 1.00359C57.6588 1.31608 48.9327 3.82375 45.3245 5.45229C43.5561 6.25044 41.5577 7.43832 39.3966 8.5198C38.4799 8.97857 38.0288 9.36296 46.113 8.41508C54.1971 7.4672 70.8558 5.20313 80.1514 4.03679C90.875 2.87045 93.4567 2.75129 96.012 2.57074C97.4567 2.50936 99.2019 2.50936 101 2.50936" stroke="#3C6FE3" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          <div className="flex w-full flex-row items-center gap-3">
            {/* X (Twitter) */}
            <a href="#" className="transition-opacity hover:opacity-80">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="16" fill="#F7F7F7"/>
                <path d="M10 22L15.0323 16.9677M15.0323 16.9677L10 10H13.3333L16.9677 15.0323M15.0323 16.9677L18.6667 22H22L16.9677 15.0323M22 10L16.9677 15.0323" stroke="#141B34" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="transition-opacity hover:opacity-80">
              <svg width="32" height="32" viewBox="44 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="44" width="32" height="32" rx="16" fill="#F7F7F7"/>
                <path d="M53 16C53 12.7002 53 11.0503 54.0251 10.0251C55.0503 9 56.7002 9 60 9C63.2998 9 64.9497 9 65.9749 10.0251C67 11.0503 67 12.7002 67 16C67 19.2998 67 20.9497 65.9749 21.9749C64.9497 23 63.2998 23 60 23C56.7002 23 55.0503 23 54.0251 21.9749C53 20.9497 53 19.2998 53 16Z" stroke="#141B34" strokeLinejoin="round"/>
                <path d="M63.3191 16.0013C63.3191 17.8326 61.8346 19.3171 60.0033 19.3171C58.172 19.3171 56.6875 17.8326 56.6875 16.0013C56.6875 14.1701 58.172 12.6855 60.0033 12.6855C61.8346 12.6855 63.3191 14.1701 63.3191 16.0013Z" stroke="#141B34"/>
                <path d="M64.0604 11.9473H64.0547" stroke="#141B34" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="transition-opacity hover:opacity-80">
              <svg width="32" height="32" viewBox="88 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="88" width="32" height="32" rx="16" fill="#F7F7F7"/>
                <path d="M100.312 14.5273V19.6852" stroke="#141B34" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M103.266 16.7379V19.6852M103.266 16.7379C103.266 15.517 104.255 14.5273 105.476 14.5273C106.697 14.5273 107.687 15.517 107.687 16.7379V19.6852M103.266 16.7379V14.5273" stroke="#141B34" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M100.318 12.3145H100.312" stroke="#141B34" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M97 16C97 12.7002 97 11.0503 98.0251 10.0251C99.0503 9 100.7 9 104 9C107.3 9 108.95 9 109.975 10.0251C111 11.0503 111 12.7002 111 16C111 19.2998 111 20.9497 109.975 21.9749C108.95 23 107.3 23 104 23C100.7 23 99.0503 23 98.0251 21.9749C97 20.9497 97 19.2998 97 16Z" stroke="#141B34" strokeLinejoin="round"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="transition-opacity hover:opacity-80">
              <svg width="32" height="32" viewBox="132 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="132" width="32" height="32" rx="16" fill="#F7F7F7"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M143.844 14.8333C143.146 14.8333 143 14.9676 143 15.6111V16.7778C143 17.4213 143.146 17.5555 143.844 17.5555H145.532V22.2222C145.532 22.8657 145.678 23 146.377 23H148.065C148.763 23 148.909 22.8657 148.909 22.2222V17.5555H150.805C151.335 17.5555 151.471 17.4607 151.617 16.9915L151.978 15.8248C152.228 15.021 152.074 14.8333 151.167 14.8333H148.909V12.8889C148.909 12.4593 149.287 12.1111 149.753 12.1111H152.156C152.854 12.1111 153 11.9768 153 11.3333V9.77778C153 9.13429 152.854 9 152.156 9H149.753C147.422 9 145.532 10.7411 145.532 12.8889V14.8333H143.844Z" stroke="#141B34" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative mx-auto mt-[122px] flex w-full max-w-[1232px] flex-row items-center justify-between px-4">
        <p className="font-poppins text-[14px] font-normal leading-[21px] tracking-[0.01em] text-[#92989F]">
          &copy; {new Date().getFullYear()} BigCradle. All rights reserved.
        </p>
        <div className="flex flex-row gap-8 font-poppins text-[14px] font-normal leading-[21px] tracking-[0.01em] text-[#92989F]">
          <a href="#" className="hover:text-foreground">Privacy Policy</a>
          <a href="#" className="hover:text-foreground">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
