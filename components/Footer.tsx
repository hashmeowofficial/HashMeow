'use client';

import { motion } from 'framer-motion';
import { FaTwitter, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pixel-bg border-t-4 border-pixel-pink py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          <div className="space-y-4">
            <div className="font-pixel text-xl text-pixel-yellow">HASHMEOW</div>
            <p className="text-white/60 text-xs">
              Pixel meme project on Hedera. Built for fun, community, and awareness.
            </p>
          </div>

          <div>
            <h4 className="font-pixel text-sm text-pixel-cyan mb-4">NAVIGATION</h4>
            <ul className="space-y-2 text-xs text-white/60">
              <li><a href="#home" className="hover:text-pixel-pink transition-colors">Home</a></li>
              <li><a href="#nft" className="hover:text-pixel-pink transition-colors">Collection</a></li>
              <li><a href="#about" className="hover:text-pixel-pink transition-colors">About</a></li>
              <li><a href="#buy" className="hover:text-pixel-pink transition-colors">Buy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-pixel text-sm text-pixel-cyan mb-4">COMMUNITY</h4>
            <div className="space-y-3">
              <a 
                href="https://x.com/HashMeowMeme" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs text-white/60 hover:text-pixel-yellow transition-colors"
              >
                <FaTwitter className="text-lg" />
                <span>X (Twitter)</span>
              </a>
              <div className="flex items-center space-x-2 text-xs text-white/40">
                <FaDiscord className="text-lg" />
                <span>Discord (Coming soon)</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-pixel text-[10px] text-pixel-blue mb-3">HEDERA RESOURCES</h4>
              <ul className="space-y-2 text-xs text-white/60">
                <li>
                  <a 
                    href="https://hedera.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-pixel-blue transition-colors"
                  >
                    Hedera.com
                  </a>
                </li>
                <li>
                  <a 
                    href="https://x.com/hedera" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-pixel-blue transition-colors"
                  >
                    X (Hedera)
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t-2 border-pixel-pink/20 my-8" />

        <div className="text-center mb-6">
          <div className="font-pixel text-[8px] text-white/40">
            © {currentYear} HASHMEOW. ALL RIGHTS RESERVED.
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-4 bg-pixel-card/50 border-2 border-pixel-yellow/30 text-center"
        >
          <p className="text-[10px] text-white/50 leading-relaxed">
            DISCLAIMER: HashMeow is a meme project with no intrinsic value or expectation of financial return. 
            Cryptocurrency investments carry high market risk. Please invest responsibly and do your own research.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
