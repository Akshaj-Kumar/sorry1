# 💌 A Little Letter For You | Interactive "I'm Sorry" Scrapbook

A fully responsive, premium, cute, emotional and interactive "I'm Sorry" website inspired by handmade notebook-paper and scrapbook apology letters.

Built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Web Audio API** sound effects.

---

## ✨ Features & Interactive Flow

1. **Scrapbook Aesthetic & Visual Styling**
   - Cream graph paper and lined notebook textures with binder rings and hole punches.
   - Realistic pastel washi tape strips, doodle stickers, floating butterflies, stars, and soft sparkles.
   - Handwritten and elegant serif typography using Google Fonts (*Caveat*, *Kalam*, *Patrick Hand*, *Dancing Script*, and *Playfair Display*).
   - Audio effects engine powered by zero-dependency Web Audio API (bubble pop, paper rustle, gentle music-box chime, sad whimper, and warm hug burst), plus a soothing ambient lo-fi chord melody toggle.

2. **Stage 1: Opening Screen ("HEY YOU!! 💗")**
   - Opening scrapbook notebook page with:
     > *"HEY YOU!! 💗"*  
     > *"I did something terrible... and I know I owe you an apology."*
   - Interactive sticker buttons: **"Yes, I'll Listen 💗"** and **"No 😒"**.
   - **Playful Runaway "No" Button**:
     - Dodges the cursor on desktop and moves playfully.
     - When clicked, heading turns to *"WHY DID U CLICK NO? 🥺"* and subtext to *"PLS TRY AGAIN!"*.
     - Shows an animated custom SVG crying kitten with streaming tears and cute sad dialogue bubbles (*"Wait, don't say no! 😿"*, *"Look how sad the kitty is! 😭"*, *"I made virtual cookies for you 🍪"*).
     - Plays a sad sound effect.
     - Invites the visitor back to click *"Yes, I'll Listen"*.

3. **Stage 2: Animated Pink Envelope ("A little letter for you 💌")**
   - A pink 3D layered envelope with heart wax seal sticker.
   - Clicking the seal or **"Open My Letter"** button plays a paper rustle sound, smoothly folds open the envelope flap, and slides out the handwritten letter with realistic easing and paper movement.

4. **Stage 3: Apology Letter with Line-by-Line Reveal**
   - Lined paper notebook with spiral binder rings, taped polaroid illustration (*"please forgive me? 🥺"*), and fluttering butterflies.
   - Sincere apology letter revealed line-by-line with soft fade-in animations:
     > *"Hey, I know things haven't been perfect, and maybe my words or actions have hurt you in ways I didn't realize at the time.*  
     > *I genuinely feel sorry. I never wanted to make you feel upset, unimportant or hurt.*  
     > *Sometimes I make mistakes, sometimes I don't express things properly, and sometimes I realize things a little too late.*  
     > *But one thing I want you to know is that your feelings matter to me.*  
     > *I can't change what happened, but I can try to understand, learn and become better.*  
     > *So this is a small attempt to say something that perhaps I should have said properly before...*  
     > *I'm genuinely sorry. ❤️"*
   - Interactive button: **"Wait till the end ❤️"**.

5. **Stage 4: Walking Character Animation**
   - Cute animated bear/cat cartoon character walking along a dotted paper path, waving and holding a glowing beating heart.
   - Shows progress and leads the visitor to the final surprise.

6. **Stage 5: Final Surprise & Heart Burst**
   - Final scrapbook page:
     > *"And until things feel a little easier, please take care of yourself, okay? You deserve so many beautiful things.*  
     > *Sending you a little extra love and a warm hug. 🫂❤️"*
   - A large animated floral heart composed of blooming petals, roses, sparkling stars, and a soft glowing aura.
   - Subtitle: *"A Little Sorry From Someone Who Wishes the Best for You 💗"*.
   - **"Send a Hug 🫂"** Button:
     - Triggers a confetti burst with pastel hearts, sparkles, and floating emojis (`🫂`, `💖`, `🌸`, `💕`).
     - Plays a warm chord arpeggio sound effect.
     - Increments the hug counter (*"1 warm hug delivered! 🫂💕"*, *"2 giant warm hugs sent with love! 💖✨"*).
   - **"Read Again / Replay ↺"** button to smoothly return to the start.

---

## 🛠️ Project Structure

```
sorry1/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── index.css
    ├── utils/
    │   └── soundEffects.js
    └── components/
        ├── AudioToggle.jsx
        ├── BackgroundDoodles.jsx
        ├── CryingCat.jsx
        ├── OpeningScreen.jsx
        ├── EnvelopeSection.jsx
        ├── LetterSection.jsx
        ├── WalkingCharacterSection.jsx
        └── FinalSurpriseSection.jsx
```

---

## 🚀 Quick Start / Installation

### 1. Prerequisites
- Node.js (version 18 or newer recommended)
- npm or pnpm

### 2. Install Dependencies
```bash
cd sorry1
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
The optimized production files will be output to the `dist/` directory.

---

## 🌐 Deployment Instructions

### Option A: Deploying to Vercel (Recommended & Easiest)

#### Via Vercel Web Dashboard:
1. Push your project to a GitHub repository (see GitHub instructions below).
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** → **"Project"**.
4. Import your GitHub repository.
5. In the configuration:
   - **Framework Preset**: Vite
   - **Root Directory**: `sorry1` (if in a monorepo or subfolder) or `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Your website will be live in seconds with HTTPS!

#### Via Vercel CLI:
```bash
npm i -g vercel
cd sorry1
vercel
```

---

### Option B: Deploying to GitHub Pages

1. In `sorry1/vite.config.js`, set the `base` path to your repository name:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/<repository-name>/', // e.g. '/sorry-letter/'
   })
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Cute interactive sorry website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
4. You can deploy the `dist` folder to GitHub Pages via `gh-pages` package or standard GitHub Pages settings.

---

## 🎨 Customization Tips

- **Change the letter message**: Open [src/components/LetterSection.jsx](src/components/LetterSection.jsx) and edit the `paragraphs` array.
- **Change names / headings**: Edit the titles in [src/components/OpeningScreen.jsx](src/components/OpeningScreen.jsx) and [src/components/FinalSurpriseSection.jsx](src/components/FinalSurpriseSection.jsx).
- **Add custom photos**: You can replace the doodle in the Polaroid frame inside `LetterSection.jsx` with an `<img src="..." />` of you and your partner / friend!
- **Music & Sound Effects**: All sound effects and background melodies are generated dynamically in [src/utils/soundEffects.js](src/utils/soundEffects.js) using the Web Audio API, so they work without needing external mp3 files.

---

Made with 💗
