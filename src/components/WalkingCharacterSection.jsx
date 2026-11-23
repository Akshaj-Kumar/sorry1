import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function WalkingCharacterSection({ onComplete }) {
  const [progress, setProgress] = useState(0);

  // Auto-progress bar or manual click to skip ahead
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2.5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleProceed = () => {
    sounds.playPop();
    sounds.playChime();
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl mx-auto text-center"
    >
      <div className="relative bg-[#FFFDF9] rounded-2xl shadow-paper-lg border border-[#EDE7DC] p-6 sm:p-10 overflow-hidden">
        {/* Top washi tape */}
        <div className="washi-tape-green absolute -top-3 left-1/2 -translate-x-1/2 w-44 h-7 rotate-[1deg] rounded-sm opacity-80" />

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-handwritten text-3xl sm:text-4xl text-gray-800 font-bold mb-2 flex items-center justify-center gap-2"
        >
          <span>Wait till the end</span>
          <Heart className="w-7 h-7 fill-current text-rose-500 animate-pulse" />
        </motion.h2>

        <p className="font-handwritten text-xl text-gray-500 mb-8">
          Walking over to you with all my love and sincerity...
        </p>

        {/* Walking Track Area */}
        <div className="relative h-48 sm:h-56 w-full max-w-md mx-auto my-4 flex items-center justify-center overflow-hidden">
          {/* Dotted path on paper */}
          <div className="absolute inset-x-4 bottom-10 border-b-2 border-dashed border-pink-300 z-0" />

          {/* Little flowers along the path */}
          <span className="absolute left-8 bottom-11 text-base opacity-75">🌸</span>
          <span className="absolute left-1/3 bottom-11 text-base opacity-75">🌼</span>
          <span className="absolute right-1/4 bottom-11 text-base opacity-75">🌷</span>
          <span className="absolute right-8 bottom-11 text-base opacity-75">🌺</span>

          {/* Animated Cute Cartoon Bear/Bunny Walking Character */}
          <motion.div
            animate={{
              x: [-120, 120, -120],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 select-none"
          >
            {/* Thought/Speech Bubble */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 bg-pink-100 text-rose-700 font-handwritten text-sm sm:text-base px-3 py-1 rounded-full border border-pink-300 shadow-sm whitespace-nowrap"
            >
              holding this for you! 💖
            </motion.div>

            {/* Character SVG with Bouncing Walk */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [-3, 3, -3],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-28 h-28 sm:w-32 sm:h-32"
            >
              <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-md">
                {/* Bear ears */}
                <circle cx="36" cy="35" r="14" fill="#FED7AA" stroke="#4B5563" strokeWidth="2.5" />
                <circle cx="36" cy="35" r="8" fill="#FDBA74" />
                <circle cx="84" cy="35" r="14" fill="#FED7AA" stroke="#4B5563" strokeWidth="2.5" />
                <circle cx="84" cy="35" r="8" fill="#FDBA74" />

                {/* Bear Body */}
                <ellipse cx="60" cy="80" rx="28" ry="24" fill="#FFEDD5" stroke="#4B5563" strokeWidth="2.5" />
                <ellipse cx="60" cy="80" rx="18" ry="15" fill="#FFF7ED" />

                {/* Feet stepping */}
                <motion.ellipse
                  cx="46"
                  cy="104"
                  rx="10"
                  ry="7"
                  fill="#FED7AA"
                  stroke="#4B5563"
                  strokeWidth="2"
                  animate={{ y: [0, -5, 0], x: [0, 2, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
                <motion.ellipse
                  cx="74"
                  cy="104"
                  rx="10"
                  ry="7"
                  fill="#FED7AA"
                  stroke="#4B5563"
                  strokeWidth="2"
                  animate={{ y: [-5, 0, -5], x: [0, -2, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />

                {/* Bear Head */}
                <ellipse cx="60" cy="50" rx="30" ry="26" fill="#FFEDD5" stroke="#4B5563" strokeWidth="2.5" />

                {/* Cheeks */}
                <ellipse cx="42" cy="56" rx="6" ry="4" fill="#F472B6" opacity="0.6" />
                <ellipse cx="78" cy="56" rx="6" ry="4" fill="#F472B6" opacity="0.6" />

                {/* Snout */}
                <ellipse cx="60" cy="56" rx="10" ry="7" fill="#FFF7ED" stroke="#6B7280" strokeWidth="1" />
                <ellipse cx="60" cy="52" rx="4" ry="3" fill="#374151" />
                <path d="M 58 55 Q 60 58 62 55" stroke="#374151" strokeWidth="1.5" fill="none" />

                {/* Happy Blinking Eyes */}
                <path d="M 46 46 Q 50 42 54 46" stroke="#374151" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M 66 46 Q 70 42 74 46" stroke="#374151" strokeWidth="2.5" fill="none" strokeLinecap="round" />

                {/* Arms Holding Big Glowing Heart */}
                <g transform="translate(60, 78)">
                  <motion.g
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    <path
                      d="M 0 6 C -4 -4, -14 -4, -14 3 C -14 9, 0 16, 0 16 C 0 16, 14 9, 14 3 C 14 -4, 4 -4, 0 6 Z"
                      fill="#FB7185"
                      stroke="#E11D48"
                      strokeWidth="1.5"
                    />
                  </motion.g>
                </g>
                {/* Paws holding the heart */}
                <circle cx="44" cy="76" r="6" fill="#FED7AA" stroke="#4B5563" strokeWidth="1.5" />
                <circle cx="76" cy="76" r="6" fill="#FED7AA" stroke="#4B5563" strokeWidth="1.5" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Progress Bar & Skip/Open button */}
        <div className="mt-4 max-w-xs mx-auto">
          <div className="w-full bg-pink-100 rounded-full h-2.5 mb-6 overflow-hidden border border-pink-200">
            <motion.div
              className="bg-gradient-to-r from-pink-400 to-rose-400 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleProceed}
            className="w-full py-3.5 px-6 rounded-full font-handwritten text-2xl font-bold bg-[#FFF0F3] hover:bg-[#FFE4E8] text-rose-700 border border-rose-300 shadow-md flex items-center justify-center gap-2 sticker-btn"
          >
            <span>See Final Surprise</span>
            <Sparkles className="w-5 h-5 text-amber-500 animate-spin" style={{ animationDuration: '3s' }} />
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
