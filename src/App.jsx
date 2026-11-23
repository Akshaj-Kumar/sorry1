import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BackgroundDoodles from './components/BackgroundDoodles';
import AudioToggle from './components/AudioToggle';
import OpeningScreen from './components/OpeningScreen';
import EnvelopeSection from './components/EnvelopeSection';
import LetterSection from './components/LetterSection';
import WalkingCharacterSection from './components/WalkingCharacterSection';
import FinalSurpriseSection from './components/FinalSurpriseSection';
import './styles/index.css';

export default function App() {
  // Stages: 'opening' -> 'envelope' -> 'letter' -> 'walking' -> 'final'
  const [currentStage, setCurrentStage] = useState('opening');

  const goToStage = (stage) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentStage(stage);
  };

  const getStageNumber = () => {
    switch (currentStage) {
      case 'opening': return 1;
      case 'envelope': return 2;
      case 'letter': return 3;
      case 'walking': return 4;
      case 'final': return 5;
      default: return 1;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAF6EE] text-[#374151] flex flex-col justify-between py-6 px-3 sm:px-6 overflow-x-hidden select-text">
      {/* Background Scrapbook Doodles, Washi Tapes, and Floating Elements */}
      <BackgroundDoodles />

      {/* Music / Audio Effects Toggle in Top Right */}
      <AudioToggle />

      {/* Top Header / Bookmark Ribbon */}
      <header className="relative z-10 w-full max-w-xl mx-auto flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">📖</span>
          <span className="font-handwritten text-lg sm:text-xl text-gray-500">
            A little digital scrapbook
          </span>
        </div>

        {/* Cute Scrapbook Page Progress Indicator */}
        <div className="flex items-center gap-1.5 font-handwritten text-sm sm:text-base text-pink-600 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full border border-pink-200 shadow-sm">
          <span>page {getStageNumber()} / 5</span>
          <span className="text-xs">🌸</span>
        </div>
      </header>

      {/* Main Interactive Stage Container */}
      <main className="relative z-10 w-full max-w-3xl mx-auto flex-1 flex items-center justify-center py-2 sm:py-6">
        <AnimatePresence mode="wait">
          {currentStage === 'opening' && (
            <motion.div
              key="opening"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <OpeningScreen onAccept={() => goToStage('envelope')} />
            </motion.div>
          )}

          {currentStage === 'envelope' && (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <EnvelopeSection onOpenComplete={() => goToStage('letter')} />
            </motion.div>
          )}

          {currentStage === 'letter' && (
            <motion.div
              key="letter"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <LetterSection onNext={() => goToStage('walking')} />
            </motion.div>
          )}

          {currentStage === 'walking' && (
            <motion.div
              key="walking"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <WalkingCharacterSection onComplete={() => goToStage('final')} />
            </motion.div>
          )}

          {currentStage === 'final' && (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <FinalSurpriseSection onReset={() => goToStage('opening')} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Cute Scrapbook Footer */}
      <footer className="relative z-10 w-full max-w-xl mx-auto text-center mt-6 pt-2 pb-2 text-xs sm:text-sm font-handwritten text-gray-500">
        <p>Made with sincere apology, patience & so much love 💗</p>
      </footer>
    </div>
  );
}
