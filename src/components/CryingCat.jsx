import React from 'react';
import { motion } from 'framer-motion';

export default function CryingCat() {
  return (
    <div className="relative w-44 h-44 sm:w-48 sm:h-48 mx-auto my-2 select-none">
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
        {/* Soft shadow */}
        <ellipse cx="100" cy="180" rx="60" ry="12" fill="#E5DFD5" opacity="0.6" />

        {/* Cat Body */}
        <ellipse cx="100" cy="135" rx="52" ry="46" fill="#FFFBF5" stroke="#4B5563" strokeWidth="3" />

        {/* Paws resting on bottom */}
        <ellipse cx="78" cy="165" rx="14" ry="10" fill="#FFFBF5" stroke="#4B5563" strokeWidth="2.5" />
        <ellipse cx="122" cy="165" rx="14" ry="10" fill="#FFFBF5" stroke="#4B5563" strokeWidth="2.5" />
        
        {/* Tail trembling */}
        <motion.path
          d="M 148 140 Q 175 130 168 110"
          stroke="#4B5563"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          animate={{ rotate: [-4, 6, -4] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Cat Head */}
        <ellipse cx="100" cy="90" rx="50" ry="44" fill="#FFFBF5" stroke="#4B5563" strokeWidth="3" />

        {/* Left Ear */}
        <polygon points="62,60 48,22 84,48" fill="#FFFBF5" stroke="#4B5563" strokeWidth="3" strokeLinejoin="round" />
        <polygon points="63,55 54,32 78,48" fill="#FED7AA" opacity="0.7" />

        {/* Right Ear */}
        <polygon points="138,60 152,22 116,48" fill="#FFFBF5" stroke="#4B5563" strokeWidth="3" strokeLinejoin="round" />
        <polygon points="137,55 146,32 122,48" fill="#FED7AA" opacity="0.7" />

        {/* Crying Eyes (Closed, trembling, with sorrowful arches) */}
        <motion.path
          d="M 72 86 Q 82 76 90 88"
          stroke="#374151"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          animate={{ y: [0, 1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />
        <motion.path
          d="M 128 86 Q 118 76 110 88"
          stroke="#374151"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          animate={{ y: [0, 1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />

        {/* Sad Eyebrows */}
        <path d="M 72 74 Q 80 70 86 76" stroke="#4B5563" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 128 74 Q 120 70 114 76" stroke="#4B5563" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Cute Blushing Cheeks */}
        <ellipse cx="68" cy="98" rx="8" ry="5" fill="#F472B6" opacity="0.5" />
        <ellipse cx="132" cy="98" rx="8" ry="5" fill="#F472B6" opacity="0.5" />

        {/* Little Pink Nose */}
        <polygon points="100,97 96,93 104,93" fill="#FB7185" />

        {/* Trembling Sad Mouth */}
        <motion.path
          d="M 94 104 Q 100 100 106 104"
          stroke="#4B5563"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          animate={{ scaleY: [1, 1.4, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />

        {/* Whiskers */}
        <line x1="56" y1="95" x2="38" y2="92" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="56" y1="102" x2="40" y2="105" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="144" y1="95" x2="162" y2="92" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="144" y1="102" x2="160" y2="105" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />

        {/* Tears Falling down Left Eye */}
        <motion.ellipse
          cx="78"
          cy="98"
          rx="3.5"
          ry="6"
          fill="#38BDF8"
          animate={{ y: [0, 45], opacity: [1, 0.2] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeIn" }}
        />
        <motion.ellipse
          cx="74"
          cy="94"
          rx="2.5"
          ry="4"
          fill="#60A5FA"
          animate={{ y: [0, 35], opacity: [0.9, 0.1] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: 0.4, ease: "easeIn" }}
        />

        {/* Tears Falling down Right Eye */}
        <motion.ellipse
          cx="122"
          cy="98"
          rx="3.5"
          ry="6"
          fill="#38BDF8"
          animate={{ y: [0, 45], opacity: [1, 0.2] }}
          transition={{ duration: 1.1, repeat: Infinity, delay: 0.2, ease: "easeIn" }}
        />
        <motion.ellipse
          cx="126"
          cy="94"
          rx="2.5"
          ry="4"
          fill="#60A5FA"
          animate={{ y: [0, 35], opacity: [0.9, 0.1] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: 0.6, ease: "easeIn" }}
        />

        {/* Little Puddle of Tears on Floor */}
        <motion.ellipse
          cx="80"
          cy="176"
          rx="12"
          ry="4"
          fill="#BAE6FD"
          opacity="0.8"
          animate={{ rx: [8, 14, 8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.ellipse
          cx="124"
          cy="176"
          rx="12"
          ry="4"
          fill="#BAE6FD"
          opacity="0.8"
          animate={{ rx: [9, 15, 9] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </svg>
    </div>
  );
}
