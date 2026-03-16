"use client";

import React from 'react';

export const Trust = () => {
  return (
    <section
      style={{
        width: '100%',
        maxWidth: '1440px',
        height: '774px',
        background: '#FCFCFC',
        position: 'relative',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        flex: 'none',
        order: 7,
        flexGrow: 0,
      }}
    >
      {/* Header Container - Frame 165 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0px',
          position: 'absolute',
          width: '578px',
          height: '63px',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '72px',
        }}
      >
        <h2
          style={{
            width: '578px',
            height: '39px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '26px',
            lineHeight: '39px',
            textAlign: 'center',
            letterSpacing: '0.01em',
            color: '#0C0C0C',
            margin: 0,
            flex: 'none',
            order: 0,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          Data You Can Trust
        </h2>
        <p
          style={{
            width: '464px',
            height: '24px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            textAlign: 'center',
            letterSpacing: '0.01em',
            color: '#676767',
            margin: 0,
            flex: 'none',
            order: 1,
            flexGrow: 0,
          }}
        >
          Every response comes from a verified human contributor
        </p>
      </div>

      {/* Image Row Container - Frame 1618868698 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0px',
          gap: '32px',
          position: 'absolute',
          width: '2164px',
          height: '498px',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '201px',
        }}
      >
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            style={{
              boxSizing: 'border-box',
              width: '700px',
              height: '498px',
              backgroundImage: 'url("/Overview page (1).png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '1px solid #F8F8F8',
              filter: 'drop-shadow(0px -2px 17.3px rgba(213, 213, 213, 0.13)) drop-shadow(0px 2px 3px rgba(141, 141, 141, 0.04))',
              borderRadius: '12px',
              flex: 'none',
              order: i,
              flexGrow: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
};
