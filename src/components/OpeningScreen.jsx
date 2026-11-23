import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Frown, HelpCircle } from 'lucide-react';
import CryingCat from './CryingCat';
import { sounds } from '../utils/soundEffects';

export default function OpeningScreen({ onAccept }) {
  const [hasClickedNo, setHasClickedNo] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const funnyPleadMessages = [
    "Wait, please don't click No! 😿",
    "Look how sad the little kitten is! 😭",
    "Give me just 1 chance to explain? 🥺",
    "I made virtual warm cookies for you 🍪",
    "Clicking No is breaking my tiny heart 💔",
    "Pretty please with sprinkles on top? 🌸",
    "I promise it's a genuine heartfelt apology 🥺",
    "Okay, now you're just teasing me! 🙈",
  ];

  const handleNoClick = () => {
    sounds.playSadSound();
    setHasClickedNo(true);
    setNoCount((prev) => prev + 1);
    moveNoButtonRandomly();
  };

  const handleNoHover = () => {
    // On desktop, playful dodging if they've already tried to click or hover
    if (noCount > 0 || window.innerWidth > 768) {
      moveNoButtonRandomly();
    }
  };

  const moveNoButtonRandomly = () => {
    // Generate playful offset within safe bounds
    const maxOffset = 120;
    const randomX = (Math.random() - 0.5) * maxOffset * 2;
    const randomY = (Math.random() - 0.5) * maxOffset * 1.5;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleYesClick = () => {
    sounds.playChime();
    sounds.playPop();
    onAccept();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl mx-auto"
    >
      {/* Scrapbook Notebook Card */}
      <div className="relative bg-[#FFFDF9] rounded-2xl shadow-paper-lg border border-[#EDE7DC] p-6 sm:p-10 text-center overflow-hidden">
        {/* Top Washi Tape */}
        <div className="washi-tape-pink absolute -top-3 left-1/2 -translate-x-1/2 w-40 h-8 rotate-[-1deg] rounded-sm opacity-90 z-20" />

        {/* Notebook Spiral / Binder Holes (top row) */}
        <div className="flex justify-between items-center mb-6 px-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-3.5 h-3.5 rounded-full bg-[#E5DFD5] shadow-inner border border-gray-300" />
              <div className="w-1.5 h-3 bg-gray-400 rounded-b-sm -mt-0.5 opacity-40" />
            </div>
          ))}
        </div>

        {/* Decorative corner stickers */}
        <div className="absolute top-4 right-4 text-xs font-handwritten text-pink-400 rotate-12 select-none">
          ✨ note #01
        </div>
        <div className="absolute top-5 left-5 text-lg select-none">
          🌸
        </div>

        {/* Main Content Area */}
        <AnimatePresence mode="wait">
          {!hasClickedNo ? (
            /* Initial State */
            <motion.div
              key="initial"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block text-4xl sm:text-5xl mb-3"
              >
                💌
              </motion.div>

              <h1 className="font-serif text-3xl sm:text-4xl text-gray-800 font-bold mb-3 tracking-wide">
                HEY YOU!! <span className="text-pink-500 font-handwritten text-4xl sm:text-5xl">💗</span>
              </h1>

              <div className="w-16 h-1 bg-pink-300 rounded-full mx-auto mb-6" />

              <p className="font-handwritten text-2xl sm:text-3xl text-gray-700 leading-relaxed max-w-md mx-auto mb-8">
                "I did something terrible... and I know I owe you an apology."
              </p>
            </motion.div>
          ) : (
            /* Funny Crying Cat / Sad State */
            <motion.div
              key="crying"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-2"
            >
              <h1 className="font-serif text-2xl sm:text-3xl text-rose-600 font-bold mb-1 tracking-wide">
                WHY DID U CLICK NO? 🥺
              </h1>

              <div className="inline-block bg-rose-100 text-rose-700 font-handwritten text-xl sm:text-2xl px-4 py-1 rounded-full border border-rose-200 shadow-sm mb-2">
                PLS TRY AGAIN!
              </div>

              {/* Animated Crying Cat Illustration */}
              <CryingCat />

              {/* Funny dynamic pleading message */}
              <motion.div
                key={noCount}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-handwritten text-xl sm:text-2xl text-gray-600 italic mb-4 min-h-[32px]"
              >
                "{funnyPleadMessages[(noCount - 1) % funnyPleadMessages.length]}"
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Sticker Buttons */}
        <div className="relative mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 min-h-[90px]">
          {/* YES BUTTON */}
          <motion.button
            whileHover={{ scale: 1.06, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleYesClick}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-full font-handwritten text-2xl font-bold transition-all duration-300 shadow-md border flex items-center justify-center gap-2 z-10 ${
              hasClickedNo
                ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white border-pink-500 shadow-pink-200 animate-pulse-soft'
                : 'bg-[#FFF0F3] hover:bg-[#FFE4E8] text-rose-700 border-rose-300'
            }`}
          >
            <span>Yes, I'll Listen</span>
            <Heart className="w-5 h-5 fill-current text-pink-500 animate-bounce" />
          </motion.button>

          {/* NO BUTTON (Playful Evasive Button) */}
          <motion.div
            animate={{
              x: noButtonPosition.x,
              y: noButtonPosition.y,
            }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="w-full sm:w-auto"
          >
            <button
              onClick={handleNoClick}
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              className="w-full sm:w-auto px-7 py-3 rounded-full font-handwritten text-2xl text-gray-500 bg-gray-100 hover:bg-gray-200 border border-gray-300 shadow-sm transition-colors duration-150 flex items-center justify-center gap-2 select-none"
            >
              <span>No</span>
              <span className="text-xl">😒</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom notebook doodles */}
        <div className="mt-8 pt-4 border-t border-dashed border-[#E5DFD5] flex items-center justify-between text-xs text-gray-400 font-handwritten text-base">
          <span>tap with love 💕</span>
          <span>handmade apology page 📖</span>
        </div>
      </div>
    </motion.div>
  );
}
