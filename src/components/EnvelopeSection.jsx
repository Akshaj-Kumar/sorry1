import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, MailOpen } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function EnvelopeSection({ onOpenComplete }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpen) return;
    sounds.playPaperRustle();
    sounds.playChime();
    setIsOpen(true);
    // After flap opens and letter slides out, smoothly transition to full letter reading
    setTimeout(() => {
      onOpenComplete();
    }, 1400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-lg mx-auto text-center"
    >
      {/* Decorative Washi Tape on top */}
      <div className="washi-tape-yellow mx-auto w-36 h-7 rotate-[2deg] rounded-sm mb-4 shadow-sm" />

      <h2 className="font-handwritten text-3xl sm:text-4xl text-gray-800 font-bold mb-2">
        A little letter for you <span className="text-pink-500">💌</span>
      </h2>
      <p className="font-handwritten text-xl text-gray-600 mb-6">
        (Tap the heart seal or click the button below to open)
      </p>

      {/* The 3D Layered Envelope Container */}
      <div className="relative w-[300px] sm:w-[360px] h-[220px] sm:h-[240px] mx-auto select-none perspective-[1000px]">
        {/* Envelope Base Body / Back Layer */}
        <div className="absolute inset-0 bg-[#F472B6] rounded-xl shadow-envelope border-2 border-pink-300 overflow-hidden">
          {/* Subtle paper texture overlay */}
          <div className="absolute inset-0 bg-white/10" />
        </div>

        {/* The Letter preview sliding out */}
        <motion.div
          initial={{ y: 0, opacity: 0.8 }}
          animate={isOpen ? { y: -110, opacity: 1 } : { y: 0, opacity: 0.8 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-4 top-2 h-[190px] bg-[#FFFDF9] rounded-lg shadow-md border border-amber-100 p-4 flex flex-col justify-between z-10"
        >
          {/* Lined paper lines on the sliding letter */}
          <div className="space-y-3 pt-2">
            <div className="w-24 h-2 bg-pink-200 rounded" />
            <div className="w-full h-1.5 bg-gray-200 rounded" />
            <div className="w-5/6 h-1.5 bg-gray-200 rounded" />
            <div className="w-4/6 h-1.5 bg-gray-200 rounded" />
            <div className="w-full h-1.5 bg-gray-200 rounded" />
          </div>
          <div className="flex justify-between items-center text-xs font-handwritten text-pink-400">
            <span>Hey, I'm sorry...</span>
            <span>❤️</span>
          </div>
        </motion.div>

        {/* Envelope Left & Right Folded Flaps */}
        <div className="absolute inset-0 pointer-events-none z-20">
          {/* Left triangle flap */}
          <div 
            className="absolute left-0 bottom-0 top-0 w-1/2 bg-[#F9A8D4] border-l-2 border-b-2 border-pink-300"
            style={{ clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }}
          />
          {/* Right triangle flap */}
          <div 
            className="absolute right-0 bottom-0 top-0 w-1/2 bg-[#F9A8D4] border-r-2 border-b-2 border-pink-300"
            style={{ clipPath: 'polygon(100% 0%, 0% 50%, 100% 100%)' }}
          />
          {/* Bottom triangle flap */}
          <div 
            className="absolute inset-x-0 bottom-0 h-1/2 bg-[#F472B6] border-b-2 border-pink-400"
            style={{ clipPath: 'polygon(0% 100%, 50% 0%, 100% 100%)' }}
          />
        </div>

        {/* Top Folding Flap (Animated opening upward) */}
        <motion.div
          animate={isOpen ? { rotateX: 180, zIndex: 5 } : { rotateX: 0, zIndex: 30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformOrigin: 'top center', transformStyle: 'preserve-3d' }}
          className="absolute inset-x-0 top-0 h-1/2 bg-[#FB7185] rounded-t-xl border-t-2 border-pink-300 shadow-sm cursor-pointer"
          onClick={handleOpenEnvelope}
        >
          <div 
            className="w-full h-full"
            style={{ clipPath: 'polygon(0% 0%, 50% 100%, 100% 0%)' }}
          />

          {/* Heart Wax Seal Sticker on flap tip */}
          {!isOpen && (
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-1/2 bottom-[-18px] -translate-x-1/2 w-12 h-12 rounded-full bg-rose-600 border-2 border-rose-300 shadow-md flex items-center justify-center text-white cursor-pointer z-40"
              title="Click to open letter"
            >
              <Heart className="w-6 h-6 fill-current animate-pulse text-rose-100" />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Button to Open Letter */}
      <div className="mt-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleOpenEnvelope}
          disabled={isOpen}
          className={`px-8 py-3.5 rounded-full font-handwritten text-2xl font-bold transition-all duration-300 shadow-md flex items-center justify-center gap-3 mx-auto ${
            isOpen
              ? 'bg-pink-300 text-white cursor-default'
              : 'bg-[#FFF0F3] hover:bg-[#FFE4E8] text-rose-700 border border-rose-300 sticker-btn'
          }`}
        >
          <MailOpen className="w-5 h-5 text-rose-500" />
          <span>{isOpen ? "Opening Letter... ✨" : "Open My Letter"}</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
