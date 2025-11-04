'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../Container';
import Image from 'next/image';

export default function NFTSection() {
  const [selectedNFT, setSelectedNFT] = useState<number | null>(null);

  const nftGallery = [
    { id: 320, image: '/images/320.png', vibe: 'CHILL' },
    { id: 890, image: '/images/890.png', vibe: 'ENERGY' },
    { id: 1110, image: '/images/1110.png', vibe: 'CHAOS' },
    { id: 325, image: '/images/325.png', vibe: 'CHILL' },
    { id: 342, image: '/images/342.png', vibe: 'ENERGY' },
    { id: 349, image: '/images/349.png', vibe: 'CHAOS' },
    { id: 383, image: '/images/383.png', vibe: 'COSMIC' },
    { id: 613, image: '/images/613.png', vibe: 'CHILL' },
  ];

  const vibeColors: { [key: string]: string } = {
    'CHILL': '#2EC4B6',
    'ENERGY': '#FFE135',
    'CHAOS': '#FF9F1C',
    'COSMIC': '#9B5DE5'
  };

  return (
    <section id="nft" className="py-20 bg-pixel-dark/50 relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/images/bg2.webp" 
          alt="Background" 
          className="w-full h-full object-cover"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
      <Container className="relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-pixel text-4xl sm:text-5xl text-pixel-yellow mb-6">
            COLLECTION
          </h2>
          <p className="text-pixel-light/70 text-sm sm:text-base max-w-2xl mx-auto">
            10,000 unique pixel HashMeows.
            <br />
            Different traits, same vibes.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 max-w-2xl mx-auto mb-16"
        >
          {[
            { label: 'TOTAL SUPPLY', value: '10,000' },
            { label: 'PRICE', value: '7 HBAR' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-pixel-card border-4 border-pixel-yellow/30 p-6 text-center"
            >
              <div className="font-pixel text-3xl text-pixel-yellow mb-2">
                {stat.value}
              </div>
              <div className="font-pixel text-[10px] text-pixel-light/50">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Affordable Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-pixel-green text-sm">
            Affordable for everyone. Let's build together.
          </p>
        </motion.div>

        {/* NFT Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {nftGallery.map((nft, index) => (
            <motion.div
              key={nft.id}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => setSelectedNFT(nft.id)}
              className="cursor-pointer group"
            >
              <div className="bg-pixel-card border-4 border-pixel-light/20 hover:border-pixel-yellow transition-all overflow-hidden">
                {/* Image */}
                <div className="aspect-square relative bg-pixel-darker/50">
                  <Image
                    src={nft.image}
                    alt={`HashMeow #${nft.id}`}
                    fill
                    className="object-contain p-4"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
                
                {/* Info */}
                <div className="p-4 bg-pixel-darker/80 border-t-4 border-pixel-light/20">
                  <div className="font-pixel text-xs text-pixel-light mb-2">
                    #{nft.id}
                  </div>
                  <div 
                    className="font-pixel text-[8px] px-2 py-1 inline-block border-2"
                    style={{ 
                      color: vibeColors[nft.vibe],
                      borderColor: vibeColors[nft.vibe]
                    }}
                  >
                    {nft.vibe}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buy CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-pixel-card border-4 border-pixel-yellow max-w-2xl mx-auto p-8">
            <div className="mb-6">
              <div className="font-pixel text-xs text-pixel-light/60 mb-2">
                MINT PRICE
              </div>
              <div className="font-pixel text-5xl text-pixel-yellow mb-4">
                7 HBAR
              </div>
              <div className="text-pixel-green text-sm">
                Affordable for everyone
              </div>
            </div>

            <motion.a
              href="https://sentx.io"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <div className="font-pixel text-lg px-12 py-5 bg-pixel-yellow text-pixel-darker border-4 border-pixel-light hover:bg-pixel-orange transition-colors">
                BUY ON SENTX →
              </div>
            </motion.a>

            <div className="mt-6 space-y-2">
              <div className="flex items-center justify-center gap-2 text-pixel-light/50 text-xs">
                <span>✓</span>
                <span>Hedera Network</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-pixel-light/50 text-xs">
                <span>✓</span>
                <span>Instant Transfer</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vibes Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="font-pixel text-xl text-pixel-pink mb-2">
              DIFFERENT VIBES
            </h3>
            <p className="text-pixel-light/60 text-xs">
              Each HashMeow has its own unique vibe
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { vibe: 'CHILL', desc: 'Laid back energy', color: '#2EC4B6' },
              { vibe: 'ENERGY', desc: 'High voltage', color: '#FFE135' },
              { vibe: 'CHAOS', desc: 'Pure madness', color: '#FF9F1C' },
              { vibe: 'COSMIC', desc: 'Out of this world', color: '#9B5DE5' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 border-2 bg-pixel-card/30"
                style={{ borderColor: item.color }}
              >
                <div 
                  className="font-pixel text-sm mb-3"
                  style={{ color: item.color }}
                >
                  {item.vibe}
                </div>
                <div className="text-pixel-light/50 text-[10px] leading-relaxed">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
