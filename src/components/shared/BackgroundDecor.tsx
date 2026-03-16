
import React from 'react';

/**
 * BackgroundDecor component
 * Renders all strictly decorative background elements based on Figma CSS specs.
 * Uses absolute positioning for lines, blurred dots, and soft glow circles.
 */
export const BackgroundDecor: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* --- Lines --- */}
      
      {/* Left side accent line */}
      <div 
        className="absolute border border-[#F2F2F2]"
        style={{ width: '155px', height: '0px', left: '291px', top: '525px' }}
      />
      
      {/* Right side accent line */}
      <div 
        className="absolute border border-[#F2F2F2]"
        style={{ width: '155px', height: '0px', left: '994px', top: '525px' }}
      />
      
      {/* Left-aligned vertical line cluster */}
      <div 
        className="absolute flex flex-col items-start gap-[57px]"
        style={{ width: '174px', height: '114px', left: '0px', top: '778px' }}
      >
        <div className="w-full h-0 border border-[#F2F2F2]" />
        <div className="w-full h-0 border border-[#F2F2F2]" />
        <div className="w-full h-0 border border-[#F2F2F2]" />
      </div>
      
      {/* Right-aligned vertical line cluster */}
      <div 
        className="absolute flex flex-col items-start gap-[57px]"
        style={{ width: '174px', height: '114px', left: '1266px', top: '778px' }}
      >
        <div className="w-full h-0 border border-[#F2F2F2]" />
        <div className="w-full h-0 border border-[#F2F2F2]" />
        <div className="w-full h-0 border border-[#F2F2F2]" />
      </div>

      {/* --- Blurred Dots --- */}
      
      {/* Ellipse 16 - Small blurred dot left */}
      <div 
        className="absolute rounded-full bg-[#8A9CFF]"
        style={{ 
          width: '6px', 
          height: '6px', 
          left: '41px', 
          top: '774.5px', 
          filter: 'blur(4px)' 
        }}
      />
      
      {/* Ellipse 17 - Small blurred dot right */}
      <div 
        className="absolute rounded-full bg-[#8A9CFF]"
        style={{ 
          width: '6px', 
          height: '6px', 
          left: '1350px', 
          top: '832px', 
          filter: 'blur(4px)' 
        }}
      />

      {/* --- Soft Glow Circles (Group 58) --- */}
      <div 
        className="absolute w-[1200px] h-[1200px]"
        style={{ 
          left: 'calc(50% - 600px)', 
          top: '640px' 
        }}
      >
        {/* Ellipse 15 - Largest glow */}
        <div 
          className="absolute rounded-full bg-[#F6F9FF]"
          style={{ 
            width: '1200px', 
            height: '1200px', 
            left: '0px', 
            top: '0px', 
            opacity: 0.1, 
            boxShadow: 'inset 0px 4px 35px 5px #E6E9FF' 
          }}
        />
        
        {/* Ellipse 14 - Large glow */}
        <div 
          className="absolute rounded-full bg-[#F6F9FF]"
          style={{ 
            width: '900px', 
            height: '900px', 
            left: 'calc(50% - 450px)', 
            top: '93px', 
            opacity: 0.2, 
            boxShadow: 'inset 0px 4px 35px 5px #E6E9FF' 
          }}
        />
        
        {/* Ellipse 13 - Medium glow */}
        <div 
          className="absolute rounded-full bg-[#F6F9FF]"
          style={{ 
            width: '600px', 
            height: '600px', 
            left: 'calc(50% - 300px)', 
            top: '169px', 
            opacity: 0.4, 
            boxShadow: 'inset 0px 4px 35px 5px #E6E9FF' 
          }}
        />
        
        {/* Ellipse 12 - Smallest glow */}
        <div 
          className="absolute rounded-full bg-[#F6F9FF]"
          style={{ 
            width: '300px', 
            height: '300px', 
            left: 'calc(50% - 150px)', 
            top: '235px', 
            boxShadow: 'inset 0px 4px 35px 5px #E6E9FF' 
          }}
        />
      </div>
    </div>
  );
};
