// Web Audio API Synthesizer for rich, zero-external-dependency cute sound effects & music

class SoundManager {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isMusicActive = false;
    this.musicInterval = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Cute Bubble Pop
  playPop() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    } catch {
      // Audio fallback
    }
  }

  // Romantic gentle chime / harp notes
  playChime() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.07);

        gain.gain.setValueAtTime(0, this.ctx.currentTime + idx * 0.07);
        gain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + idx * 0.07 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.07 + 0.6);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + idx * 0.07);
        osc.stop(this.ctx.currentTime + idx * 0.07 + 0.65);
      });
    } catch {
      // Audio fallback
    }
  }

  // Playful Sad / "Womp-womp" Sound for the No Button
  playSadSound() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      // Descending pitch like a tiny sad whimper
      osc.frequency.setValueAtTime(380, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 0.35);

      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.38);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.4);
    } catch {
      // Audio fallback
    }
  }

  // Paper rustle sound effect (filtered noise burst)
  playPaperRustle() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const bufferSize = this.ctx.sampleRate * 0.25;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1200;
      filter.Q.value = 1.2;

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();
      noise.stop(this.ctx.currentTime + 0.26);
    } catch {
      // Audio fallback
    }
  }

  // Warm hug explosion / magical sparkle
  playHugBurst() {
    if (this.isMuted) return;
    try {
      this.init();
      if (!this.ctx) return;
      const chords = [392.00, 493.88, 587.33, 739.99, 880.00, 1174.66]; // G maj7 / add9 chord arpeggio
      chords.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.06);

        gain.gain.setValueAtTime(0.01, this.ctx.currentTime + idx * 0.06);
        gain.gain.linearRampToValueAtTime(0.15, this.ctx.currentTime + idx * 0.06 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.06 + 0.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + idx * 0.06);
        osc.stop(this.ctx.currentTime + idx * 0.06 + 0.85);
      });
    } catch {
      // Audio fallback
    }
  }

  // Soothing Ambient Lo-fi Piano progression
  startBackgroundMusic() {
    this.init();
    if (this.isMusicActive) return;
    this.isMusicActive = true;

    // Chords: Cmaj7, Am9, Fmaj7, G6
    const chordProgressions = [
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
      [220.00, 261.63, 329.63, 392.00], // Am7
      [174.61, 261.63, 329.63, 392.00], // Fmaj7
      [196.00, 246.94, 293.66, 392.00], // G6
    ];

    let currentChord = 0;

    const playChordStep = () => {
      if (!this.isMusicActive || this.isMuted || !this.ctx) return;
      const chord = chordProgressions[currentChord % chordProgressions.length];
      currentChord++;

      chord.forEach((freq, i) => {
        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.12);

          const startTime = this.ctx.currentTime + i * 0.12;
          gain.gain.setValueAtTime(0, startTime);
          gain.gain.linearRampToValueAtTime(0.035, startTime + 0.3);
          gain.gain.exponentialRampToValueAtTime(0.0005, startTime + 2.4);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(startTime);
          osc.stop(startTime + 2.5);
        } catch {
          // ignore
        }
      });
    };

    playChordStep();
    this.musicInterval = setInterval(playChordStep, 2600);
  }

  stopBackgroundMusic() {
    this.isMusicActive = false;
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }

  toggleMusic() {
    if (this.isMusicActive) {
      this.stopBackgroundMusic();
      return false;
    } else {
      this.startBackgroundMusic();
      return true;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted && this.isMusicActive) {
      this.stopBackgroundMusic();
    }
    return this.isMuted;
  }
}

export const sounds = new SoundManager();
