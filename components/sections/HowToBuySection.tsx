'use client';

import { motion } from 'framer-motion';
import Container from '../Container';
import PixelCard from '../PixelCard';
import PixelButton from '../PixelButton';

export default function HowToBuySection() {
  const steps = [
    {
      step: '01',
      title: 'GET A WALLET',
      description: 'Download HashPack or Blade wallet from app store or browser extension',
      icon: '👛',
      color: '#FF10F0'
    },
    {
      step: '02',
      title: 'ADD HBAR',
      description: 'Buy HBAR from an exchange (Binance, Coinbase) and transfer to your wallet',
      icon: '💰',
      color: '#00FFFF'
    },
    {
      step: '03',
      title: 'GO TO SENTX',
      description: 'Visit SentX marketplace and connect your Hedera wallet',
      icon: '🛒',
      color: '#FFD700'
    },
    {
      step: '04',
      title: 'BUY HASHMEOW',
      description: 'Find HashMeow collection and purchase your favorite NFT!',
      icon: '🐱',
      color: '#9D00FF'
    },
  ];

  return (
    <section id="buy" className="py-20 relative overflow-hidden bg-gradient-to-b from-pixel-bg to-pixel-card/20">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-pixel-pink/20" />
          ))}
        </div>
      </div>

      <Container className="relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-pixel text-4xl sm:text-5xl text-pixel-cyan text-stroke mb-4">
            HOW TO BUY
          </h2>
          <p className="text-white/80 text-sm sm:text-base">
            Get your HashMeow NFT in 4 easy steps!
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
            >
              <PixelCard glowColor={step.color}>
                <div className="text-center space-y-4">
                  {/* Step Number */}
                  <div 
                    className="font-pixel text-4xl mb-2"
                    style={{ color: step.color }}
                  >
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <motion.div
                    className="text-6xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-pixel text-sm text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-xs leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute -right-8 top-1/2 text-4xl"
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  )}
                </div>
              </PixelCard>
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <PixelCard glowColor="#FF10F0">
            <motion.a
              href="https://sentx.io"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center space-y-4 hover:scale-105 transition-transform"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-6xl">🛒</div>
              <div className="font-pixel text-xl text-pixel-pink">
                BUY ON SENTX
              </div>
              <div className="text-sm text-white/60">
                Official marketplace on Hedera
              </div>
              <PixelButton size="md" className="w-full">
                VISIT SENTX →
              </PixelButton>
            </motion.a>
          </PixelCard>

          <PixelCard glowColor="#00FFFF">
            <motion.a
              href="https://hashpack.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center space-y-4 hover:scale-105 transition-transform"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-6xl">👛</div>
              <div className="font-pixel text-xl text-pixel-cyan">
                GET HASHPACK
              </div>
              <div className="text-sm text-white/60">
                Most popular Hedera wallet
              </div>
              <PixelButton size="md" variant="secondary" className="w-full">
                DOWNLOAD →
              </PixelButton>
            </motion.a>
          </PixelCard>
        </div>

        {/* Important Notice */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring" }}
          className="max-w-3xl mx-auto"
        >
          <PixelCard glowColor="#FFD700">
            <div className="text-center space-y-4">
              <div className="text-4xl">⚠️</div>
              <h3 className="font-pixel text-lg text-pixel-yellow">
                IMPORTANT TIPS
              </h3>
              <div className="text-white/80 text-sm space-y-2">
                <p>• Only buy from official SentX marketplace</p>
                <p>• Verify the collection name: "HashMeow"</p>
                <p>• Never share your seed phrase or private keys</p>
                <p>• Check floor price before purchasing</p>
                <p>• Join our Discord for authenticity verification</p>
              </div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="font-pixel text-[8px] text-pixel-pink pt-4"
              >
                🔒 ALWAYS STAY SAFE! 🔒
              </motion.div>
            </div>
          </PixelCard>
        </motion.div>

        {/* Video Tutorial (Optional) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="font-pixel text-sm text-pixel-pink mb-4">
            NEED HELP?
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <PixelButton size="sm" variant="outline">
              📺 VIDEO TUTORIAL
            </PixelButton>
            <PixelButton size="sm" variant="outline">
              📖 READ FAQ
            </PixelButton>
            <PixelButton size="sm" variant="outline">
              💬 JOIN DISCORD
            </PixelButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

