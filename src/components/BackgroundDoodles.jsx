import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundDoodles() {
  // Pre-calculated doodle positions for natural scrapbook aesthetics
  const floatingItems = [
    { type: 'heart', color: 'text-pink-300', top: '10%', left: '6%', size: 28, delay: 0 },
    { type: 'star', color: 'text-amber-300', top: '18%', right: '8%', size: 22, delay: 1.2 },
    { type: 'sparkle', color: 'text-pink-400', top: '35%', left: '3%', size: 18, delay: 2 },
    { type: 'flower', color: 'text-rose-300', top: '65%', left: '8%', size: 26, delay: 0.8 },
    { type: 'heart', color: 'text-rose-200', top: '75%', right: '7%', size: 32, delay: 1.5 },
    { type: 'butterfly', color: 'text-purple-300', top: '22%', left: '15%', size: 24, delay: 2.5 },
    { type: 'star', color: 'text-yellow-300', top: '82%', left: '18%', size: 20, delay: 3 },
    { type: 'sparkle', color: 'text-sky-300', top: '50%', right: '4%', size: 20, delay: 1 },
    { type: 'flower', color: 'text-pink-300', top: '8%', right: '22%', size: 24, delay: 1.8 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle vignette and texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Top and corner washi tapes */}
      <div 
        className="washi-tape-pink absolute -top-3 left-12 w-28 h-7 rotate-[-6deg] opacity-80 rounded-sm"
      />
      <div 
        className="washi-tape-yellow absolute -top-2 right-20 w-32 h-6 rotate-[4deg] opacity-75 rounded-sm"
      />
      <div 
        className="washi-tape-blue absolute bottom-6 -left-6 w-32 h-6 rotate-[35deg] opacity-60 rounded-sm"
      />
      <div 
        className="washi-tape-green absolute bottom-4 right-10 w-28 h-6 rotate-[-5deg] opacity-70 rounded-sm"
      />

      {/* Floating Animated Doodles */}
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.color} select-none`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
          animate={{
            y: [0, -14, 0],
            rotate: [0, 8, -6, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 5 + (index % 3),
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.type === 'heart' && (
            <svg width={item.size} height={item.size} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          )}

          {item.type === 'star' && (
            <svg width={item.size} height={item.size} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          )}

          {item.type === 'sparkle' && (
            <svg width={item.size} height={item.size} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z"/>
            </svg>
          )}

          {item.type === 'flower' && (
            <svg width={item.size} height={item.size} viewBox="0 0 32 32" fill="currentColor">
              <circle cx="16" cy="11" r="5" opacity="0.9" />
              <circle cx="21" cy="16" r="5" opacity="0.9" />
              <circle cx="16" cy="21" r="5" opacity="0.9" />
              <circle cx="11" cy="16" r="5" opacity="0.9" />
              <circle cx="16" cy="16" r="3.5" fill="#FEF08A" />
            </svg>
          )}

          {item.type === 'butterfly' && (
            <svg width={item.size} height={item.size} viewBox="0 0 32 32" fill="currentColor" className="animate-flutter">
              <path d="M16 14C12 8 4 9 4 15C4 19 10 21 16 17C22 21 28 19 28 15C28 9 20 8 16 14Z" opacity="0.85"/>
              <line x1="16" y1="12" x2="16" y2="20" stroke="#4B5563" strokeWidth="1.5"/>
            </svg>
          )}
        </motion.div>
      ))}

      {/* Floating gentle background hearts */}
      <div className="absolute bottom-0 left-[20%] text-pink-200/50 text-2xl animate-heart-float" style={{ animationDelay: '0s' }}>
        💗
      </div>
      <div className="absolute bottom-0 left-[55%] text-pink-300/40 text-xl animate-heart-float" style={{ animationDelay: '2.5s' }}>
        💕
      </div>
      <div className="absolute bottom-0 left-[80%] text-rose-200/50 text-3xl animate-heart-float" style={{ animationDelay: '5s' }}>
        🌸
      </div>
    </div>
  );
}
