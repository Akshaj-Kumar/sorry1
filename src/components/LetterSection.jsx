import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowRight, Flower2 } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function LetterSection({ onNext }) {
  const paragraphs = [
    "Hey, I know things haven't been perfect, and maybe my words or actions have hurt you in ways I didn't realize at the time.",
    "I genuinely feel sorry. I never wanted to make you feel upset, unimportant or hurt.",
    "Sometimes I make mistakes, sometimes I don't express things properly, and sometimes I realize things a little too late.",
    "But one thing I want you to know is that your feelings matter to me.",
    "I can't change what happened, but I can try to understand, learn and become better.",
    "So this is a small attempt to say something that perhaps I should have said properly before...",
    "I'm genuinely sorry. ❤️"
  ];

  const handleNextClick = () => {
    sounds.playPop();
    sounds.playChime();
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Scrapbook Sheet with Lined Paper & Binder Margin */}
      <div className="relative bg-[#FFFDF9] rounded-2xl shadow-paper-lg border border-[#EDE7DC] p-6 sm:p-12 overflow-hidden">
        {/* Top washi tape */}
        <div className="washi-tape-pink absolute -top-3 left-10 w-36 h-7 rotate-[-3deg] rounded-sm opacity-90" />
        <div className="washi-tape-yellow absolute -top-3 right-10 w-32 h-7 rotate-[2deg] rounded-sm opacity-80" />

        {/* Notebook Spiral Rings on the left side */}
        <div className="absolute left-3 sm:left-4 top-10 bottom-10 flex flex-col justify-between pointer-events-none select-none">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center">
              <div className="w-3.5 h-3.5 rounded-full bg-[#E5DFD5] shadow-inner border border-gray-300" />
              <div className="w-3 h-1.5 bg-gray-400 rounded-r -ml-1 opacity-50" />
            </div>
          ))}
        </div>

        {/* Floating animated butterflies in the margins */}
        <motion.div
          animate={{
            x: [0, 8, -6, 0],
            y: [0, -10, 0],
            rotate: [0, 6, -4, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-8 right-6 text-2xl select-none hidden sm:block"
        >
          🦋
        </motion.div>
        
        <motion.div
          animate={{
            x: [0, -6, 4, 0],
            y: [0, -8, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
          className="absolute bottom-16 right-5 text-xl select-none hidden sm:block"
        >
          🌸
        </motion.div>

        {/* Letter Body Area with Left Indentation for Binder Rings */}
        <div className="pl-6 sm:pl-10 pr-2">
          {/* Header Title with Date */}
          <div className="flex items-center justify-between border-b border-pink-200/70 pb-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💌</span>
              <span className="font-serif italic font-semibold text-xl text-gray-700">A Letter From My Heart</span>
            </div>
            <span className="font-handwritten text-lg text-pink-400">for you with love</span>
          </div>

          {/* Letter Paragraphs with Staggered Reveal */}
          <div className="space-y-4 sm:space-y-5 text-left font-handwritten text-xl sm:text-2xl text-gray-700 leading-relaxed">
            {paragraphs.map((text, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + idx * 0.45,
                  ease: "easeOut",
                }}
                className={`transition-all duration-300 ${
                  idx === paragraphs.length - 1
                    ? 'text-2xl sm:text-3xl font-bold text-rose-600 pt-3 text-center sm:text-left'
                    : 'text-gray-700'
                }`}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Cute Taped Polaroid Card in corner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.8, delay: 3.2 }}
            className="mt-8 bg-white p-3 pb-4 rounded shadow-md border border-gray-200 max-w-[210px] mx-auto sm:ml-auto sm:mr-4 select-none relative"
          >
            {/* Washi tape over polaroid */}
            <div className="washi-tape-pink absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-5 rotate-[1deg] opacity-90 rounded-sm" />
            
            {/* Cute mini apology doodle inside polaroid */}
            <div className="w-full h-24 bg-[#FFF9F2] rounded flex flex-col items-center justify-center border border-amber-100">
              <span className="text-3xl animate-bounce">🥺🐾</span>
              <span className="font-handwritten text-sm text-gray-500 mt-1">"please forgive me"</span>
            </div>
            <div className="font-handwritten text-center text-gray-600 text-sm mt-2">
              always thinking of you 💕
            </div>
          </motion.div>

          {/* Action button leading to walking character */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.5 }}
            className="mt-8 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNextClick}
              className="px-8 py-3.5 rounded-full font-handwritten text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-md border border-pink-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto sticker-btn"
            >
              <span>Wait till the end</span>
              <Heart className="w-5 h-5 fill-current text-white animate-pulse" />
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom notebook line */}
        <div className="mt-8 pt-3 border-t border-dashed border-[#E5DFD5] text-center text-xs text-gray-400 font-handwritten text-base">
          page 2 of our story • made with sincerity 🌸
        </div>
      </div>
    </motion.div>
  );
}
