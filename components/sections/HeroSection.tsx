'use client';

import { motion } from 'framer-motion';
import Container from '../Container';
import PixelButton from '../PixelButton';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/images/bg1.webp" 
          alt="Background" 
          className="w-full h-full object-cover"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      <Container className="relative z-10">
        <div className="text-center space-y-12">
          {/* Main Logo/Character - Using GIF */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative inline-block"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] mx-auto"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-pixel-yellow/30 blur-3xl"></div>
              
              {/* GIF container */}
              <div className="relative w-full h-full border-8 border-pixel-yellow shadow-2xl bg-pixel-card">
                <img
                  src="/images/all.gif"
                  alt="HashMeow"
                  className="w-full h-full object-contain p-4"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h1 className="font-pixel text-5xl sm:text-7xl md:text-8xl mb-6">
              <span className="text-pixel-yellow drop-shadow-[0_0_10px_rgba(255,225,53,0.5)]">
                HASH
              </span>
              <span className="text-pixel-orange drop-shadow-[0_0_10px_rgba(255,159,28,0.5)]">
                MEOW
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="font-pixel text-sm sm:text-base px-6 py-3 bg-pixel-blue text-pixel-darker border-4 border-pixel-light">
                10,000 NFTs
              </span>
              <span className="font-pixel text-sm sm:text-base px-6 py-3 bg-pixel-pink text-pixel-darker border-4 border-pixel-light">
                PIXEL ART
              </span>
              <span className="font-pixel text-sm sm:text-base px-6 py-3 bg-pixel-green text-pixel-darker border-4 border-pixel-light">
                HEDERA
              </span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-pixel-light/80 text-sm sm:text-base max-w-3xl mx-auto px-4 leading-relaxed"
          >
            HashMeow — A pixel meme project born on Hedera. Each cat is a symbol of crypto chaos, humor, and community — made in pure 8-bit energy.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.a
              href="https://sentx.io"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="font-pixel text-lg px-10 py-5 bg-pixel-yellow text-pixel-darker border-4 border-pixel-light shadow-lg hover:shadow-2xl transition-all cursor-pointer">
                BUY ON SENTX →
              </div>
            </motion.a>
            <motion.a
              href="https://x.com/HashMeowMeme"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="font-pixel text-lg px-10 py-5 bg-transparent text-pixel-blue border-4 border-pixel-blue hover:bg-pixel-blue hover:text-pixel-darker transition-all cursor-pointer">
                FOLLOW ON X
              </div>
            </motion.a>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="pt-8 max-w-2xl mx-auto"
          >
            <div className="text-center space-y-4">
              <div className="font-pixel text-xs text-pixel-green">
                OUR GOAL
              </div>
              <p className="text-pixel-light/80 text-sm leading-relaxed">
                Building awareness for the <span className="text-pixel-yellow">Hedera ecosystem</span>.
                <br />
                We create, we vibe, we support other projects.
              </p>
              <div className="font-pixel text-[10px]">
                <a href="https://x.com/HashMeowMeme" target="_blank" rel="noopener noreferrer" className="text-pixel-blue hover:text-pixel-yellow transition-colors">
                  Follow us on X for updates →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="pt-12"
          >
            <div className="font-pixel text-xs text-pixel-yellow">
              ▼ SCROLL ▼
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
