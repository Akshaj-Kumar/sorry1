import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, RotateCcw, Sparkles } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function FinalSurpriseSection({ onReset }) {
  const [hugCount, setHugCount] = useState(0);
  const [floatingEmojis, setFloatingEmojis] = useState([]);

  const triggerHugExplosion = () => {
    sounds.playHugBurst();
    setHugCount((prev) => prev + 1);

    // Canvas Confetti Heart Burst
    const count = 70;
    const defaults = {
      origin: { y: 0.75 },
      colors: ['#F472B6', '#FB7185', '#FDA4AF', '#FDE047', '#BAE6FD', '#C084FC'],
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.4,
    });

    // Spawn floating screen hugs/hearts
    const newItems = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 80 + 10,
      emoji: ['🫂', '💖', '🌸', '💕', '✨', '🤍'][Math.floor(Math.random() * 6)],
      scale: Math.random() * 0.6 + 0.8,
    }));

    setFloatingEmojis((prev) => [...prev, ...newItems]);

    setTimeout(() => {
      setFloatingEmojis((prev) => prev.filter((item) => !newItems.some((n) => n.id === item.id)));
    }, 2800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto text-center relative"
    >
      {/* Floating Emojis Bursting on Screen */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {floatingEmojis.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 1, y: '75vh', x: 0, scale: item.scale }}
            animate={{
              opacity: 0,
              y: '-20vh',
              x: (Math.random() - 0.5) * 160,
              rotate: (Math.random() - 0.5) * 45,
            }}
            transition={{ duration: 2.6, ease: "easeOut" }}
            style={{ left: `${item.left}%` }}
            className="absolute text-4xl sm:text-5xl select-none"
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      {/* Final Scrapbook Page */}
      <div className="relative bg-[#FFFDF9] rounded-2xl shadow-paper-lg border border-[#EDE7DC] p-6 sm:p-12 overflow-hidden">
        {/* Washi Tapes */}
        <div className="washi-tape-pink absolute -top-3 left-12 w-32 h-7 rotate-[-2deg] rounded-sm opacity-90" />
        <div className="washi-tape-yellow absolute -top-3 right-12 w-36 h-7 rotate-[3deg] rounded-sm opacity-85" />

        {/* Corner Stickers */}
        <div className="absolute top-4 left-5 text-2xl select-none animate-wiggle">
          🎀
        </div>
        <div className="absolute top-4 right-5 text-2xl select-none">
          ✨
        </div>

        {/* Heading Message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto mb-6"
        >
          <h2 className="font-serif text-2xl sm:text-3xl text-gray-800 font-bold mb-4 leading-snug">
            And until things feel a little easier, please take care of yourself, okay?
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-pink-600 font-medium leading-relaxed mb-4">
            You deserve so many beautiful things.
          </p>

          <p className="font-handwritten text-xl sm:text-2xl text-gray-700 leading-relaxed">
            Sending you a little extra love and a warm hug. 🫂❤️
          </p>
        </motion.div>

        {/* LARGE ANIMATED FLORAL HEART ILLUSTRATION */}
        <div className="my-6 relative flex items-center justify-center select-none">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-64 h-64 sm:w-72 sm:h-72"
          >
            {/* Glowing background aura */}
            <div className="absolute inset-4 bg-pink-200/40 rounded-full blur-2xl -z-10" />

            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
              <defs>
                <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FB7185" />
                  <stop offset="100%" stopColor="#F43F5E" />
                </linearGradient>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FDE047" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>

              {/* Heart Outline Shape base */}
              <motion.path
                d="M 100 170 C 40 120 20 85 20 55 C 20 30 40 18 65 18 C 82 18 94 28 100 38 C 106 28 118 18 135 18 C 160 18 180 30 180 55 C 180 85 160 120 100 170 Z"
                fill="none"
                stroke="#FECDD3"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="4 6"
              />

              {/* Blooming Flowers and Petals Forming the Heart Border */}
              {/* Top Left Arch Flowers */}
              <g transform="translate(65, 20)">
                <circle cx="0" cy="0" r="8" fill="#F472B6" />
                <circle cx="0" cy="0" r="4" fill="#FEF08A" />
              </g>
              <g transform="translate(42, 30)">
                <circle cx="0" cy="0" r="7" fill="#FDA4AF" />
                <circle cx="0" cy="0" r="3" fill="#FFFBEB" />
              </g>
              <g transform="translate(24, 52)">
                <circle cx="0" cy="0" r="8" fill="#FB7185" />
                <circle cx="0" cy="0" r="4" fill="#FEF08A" />
              </g>

              {/* Top Right Arch Flowers */}
              <g transform="translate(135, 20)">
                <circle cx="0" cy="0" r="8" fill="#F472B6" />
                <circle cx="0" cy="0" r="4" fill="#FEF08A" />
              </g>
              <g transform="translate(158, 30)">
                <circle cx="0" cy="0" r="7" fill="#FDA4AF" />
                <circle cx="0" cy="0" r="3" fill="#FFFBEB" />
              </g>
              <g transform="translate(176, 52)">
                <circle cx="0" cy="0" r="8" fill="#FB7185" />
                <circle cx="0" cy="0" r="4" fill="#FEF08A" />
              </g>

              {/* Left Curve Flowers */}
              <g transform="translate(26, 78)">
                <circle cx="0" cy="0" r="7" fill="#F9A8D4" />
                <circle cx="0" cy="0" r="3" fill="#FEF08A" />
              </g>
              <g transform="translate(40, 106)">
                <circle cx="0" cy="0" r="8" fill="#FB7185" />
                <circle cx="0" cy="0" r="3.5" fill="#FFFBEB" />
              </g>
              <g transform="translate(62, 134)">
                <circle cx="0" cy="0" r="7" fill="#FDA4AF" />
                <circle cx="0" cy="0" r="3" fill="#FEF08A" />
              </g>
              <g transform="translate(82, 154)">
                <circle cx="0" cy="0" r="6" fill="#F472B6" />
                <circle cx="0" cy="0" r="2.5" fill="#FFFBEB" />
              </g>

              {/* Right Curve Flowers */}
              <g transform="translate(174, 78)">
                <circle cx="0" cy="0" r="7" fill="#F9A8D4" />
                <circle cx="0" cy="0" r="3" fill="#FEF08A" />
              </g>
              <g transform="translate(160, 106)">
                <circle cx="0" cy="0" r="8" fill="#FB7185" />
                <circle cx="0" cy="0" r="3.5" fill="#FFFBEB" />
              </g>
              <g transform="translate(138, 134)">
                <circle cx="0" cy="0" r="7" fill="#FDA4AF" />
                <circle cx="0" cy="0" r="3" fill="#FEF08A" />
              </g>
              <g transform="translate(118, 154)">
                <circle cx="0" cy="0" r="6" fill="#F472B6" />
                <circle cx="0" cy="0" r="2.5" fill="#FFFBEB" />
              </g>

              {/* Bottom Tip Flower */}
              <g transform="translate(100, 172)">
                <circle cx="0" cy="0" r="9" fill="#E11D48" />
                <circle cx="0" cy="0" r="4" fill="#FEF08A" />
              </g>

              {/* Center Heart Emblem with Soft Pulse */}
              <g transform="translate(100, 85)">
                <motion.path
                  d="M 0 25 C -25 -10, -55 5, -55 35 C -55 60, 0 88, 0 88 C 0 88, 55 60, 55 35 C 55 5, 25 -10, 0 25 Z"
                  fill="url(#heartGrad)"
                  stroke="#FFF"
                  strokeWidth="3"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Center text inside heart */}
                <text
                  x="0"
                  y="45"
                  textAnchor="middle"
                  fill="#FFF"
                  fontSize="22"
                  fontFamily="'Dancing Script', cursive"
                  fontWeight="bold"
                >
                  I'm Sorry
                </text>
                <text
                  x="0"
                  y="62"
                  textAnchor="middle"
                  fill="#FFE4E8"
                  fontSize="13"
                  fontFamily="'Caveat', cursive"
                >
                  with all my heart
                </text>
              </g>

              {/* Decorative Leaves */}
              <path d="M 50 22 Q 40 16 46 28 Z" fill="#86EFAC" />
              <path d="M 150 22 Q 160 16 154 28 Z" fill="#86EFAC" />
              <path d="M 18 64 Q 10 68 18 74 Z" fill="#86EFAC" />
              <path d="M 182 64 Q 190 68 182 74 Z" fill="#86EFAC" />
            </svg>
          </motion.div>
        </div>

        {/* Final text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-serif italic text-xl sm:text-2xl text-gray-700 font-semibold mb-6 max-w-lg mx-auto"
        >
          "A Little Sorry From Someone Who Wishes the Best for You <span className="text-pink-500 font-normal">💗</span>"
        </motion.p>

        {/* Interactive "Send a Hug" button */}
        <div className="flex flex-col items-center justify-center gap-3">
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.94 }}
            onClick={triggerHugExplosion}
            className="px-9 py-4 rounded-full font-handwritten text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-red-400 text-white shadow-lg shadow-pink-200 border border-pink-300 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 sticker-btn"
          >
            <span>Send a Hug</span>
            <span className="text-3xl">🫂</span>
          </motion.button>

          {/* Hug counter status */}
          <AnimatePresence>
            {hugCount > 0 && (
              <motion.div
                key={hugCount}
                initial={{ opacity: 0, y: 5, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                className="font-handwritten text-lg sm:text-xl text-pink-600 bg-pink-50 px-4 py-1.5 rounded-full border border-pink-200"
              >
                {hugCount === 1
                  ? "A warm hug has been delivered! 🫂💕"
                  : `${hugCount} giant warm hugs sent with love! 💖✨`}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Reset / Replay Button */}
        <div className="mt-10 pt-6 border-t border-dashed border-[#E5DFD5] flex items-center justify-between text-gray-500 text-sm font-handwritten text-lg">
          <button
            onClick={() => {
              sounds.playPop();
              onReset();
            }}
            className="flex items-center gap-1.5 text-gray-500 hover:text-pink-600 transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-pink-50"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Read Again / Replay ↺</span>
          </button>

          <span className="text-pink-400">forever & always 💌</span>
        </div>
      </div>
    </motion.div>
  );
}
