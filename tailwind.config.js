/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        handwritten: ['"Caveat"', '"Kalam"', '"Patrick Hand"', 'cursive'],
        script: ['"Dancing Script"', '"Sacramento"', 'cursive'],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Quicksand"', '"Nunito"', 'sans-serif'],
      },
      colors: {
        scrapbook: {
          cream: '#FAF6EE',
          paper: '#FDFBF7',
          lined: '#E4DFD5',
          pink: '#FFE4E8',
          pinkDark: '#F472B6',
          softRed: '#FB7185',
          babyBlue: '#E0F2FE',
          pastelYellow: '#FEF08A',
          washiGreen: '#DCFCE7',
          washiLavender: '#F3E8FF',
          ink: '#374151',
          inkMuted: '#6B7280',
        }
      },
      boxShadow: {
        'paper': '0 4px 20px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'paper-lg': '0 12px 35px -5px rgba(0, 0, 0, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.06)',
        'sticker': '2px 3px 0px rgba(0, 0, 0, 0.1)',
        'envelope': '0 15px 30px -10px rgba(244, 114, 182, 0.3), 0 8px 16px -4px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'flutter': 'flutter 0.3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-2deg)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        flutter: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '50%': { transform: 'scaleX(0.7) scaleY(1.1)' },
        }
      }
    },
  },
  plugins: [],
}
