import React, { useState } from 'react';
import { Volume2, VolumeX, Music, Heart } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleMusic = () => {
    sounds.playPop();
    const active = sounds.toggleMusic();
    setIsPlaying(active);
    if (active && isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      <button
        onClick={handleToggleMusic}
        title={isPlaying ? "Pause soothing melody" : "Play soothing melody"}
        className={`px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-handwritten text-base shadow-sm transition-all duration-300 border ${
          isPlaying
            ? 'bg-pink-100 text-pink-700 border-pink-300 ring-2 ring-pink-200 animate-pulse-soft'
            : 'bg-white/80 backdrop-blur-sm text-gray-600 border-amber-200 hover:bg-pink-50'
        }`}
      >
        <Music className={`w-4 h-4 ${isPlaying ? 'animate-spin text-pink-500' : 'text-gray-400'}`} style={{ animationDuration: '4s' }} />
        <span>{isPlaying ? "Music: On 🎵" : "Play Music 🎶"}</span>
      </button>
    </div>
  );
}
