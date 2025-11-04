'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'HOME', href: '#home' },
    { name: 'COLLECTION', href: '#nft' },
    { name: 'ABOUT', href: '#about' },
    { name: 'BUY', href: '#buy' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-pixel-darker/95 backdrop-blur-sm border-b-4 border-pixel-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12"
            >
              <img 
                src="/images/Main.PNG" 
                alt="HashMeow Logo" 
                className="w-full h-full object-contain"
                style={{ imageRendering: 'pixelated' }}
              />
            </motion.div>
            <span className="font-pixel text-pixel-yellow text-xl">HASHMEOW</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="font-pixel text-[10px] text-pixel-light hover:text-pixel-yellow transition-colors"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-pixel-card border-t-4 border-pixel-yellow"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
        >
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block font-pixel text-[10px] text-pixel-light hover:text-pixel-yellow"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}

