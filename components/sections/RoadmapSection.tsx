'use client';

import { motion } from 'framer-motion';
import Container from '../Container';
import PixelCard from '../PixelCard';

export default function RoadmapSection() {
  const phases = [
    {
      phase: 'PHASE 1',
      title: 'GENESIS',
      status: 'in-progress',
      items: [
        '✅ Website Launch',
        '✅ Smart Contract Deploy',
        '🔄 Round 1: 1K NFTs',
        '🔄 Community Building',
      ],
      color: '#00FFFF'
    },
    {
      phase: 'PHASE 2',
      title: 'EXPANSION',
      status: 'upcoming',
      items: [
        '⏳ Full 10K Collection',
        '⏳ Staking Platform',
        '⏳ First Mini Game',
        '⏳ Marketplace Launch',
      ],
      color: '#FF10F0'
    },
    {
      phase: 'PHASE 3',
      title: 'UTILITIES',
      status: 'upcoming',
      items: [
        '⏳ More P2E Games',
        '⏳ NFT Breeding System',
        '⏳ DAO Governance',
        '⏳ Mobile App',
      ],
      color: '#FFD700'
    },
    {
      phase: 'PHASE 4',
      title: 'ECOSYSTEM',
      status: 'upcoming',
      items: [
        '⏳ Metaverse Integration',
        '⏳ Physical Merch',
        '⏳ Cross-chain Bridge',
        '⏳ Global Adoption',
      ],
      color: '#9D00FF'
    },
  ];

  return (
    <section id="roadmap" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-10 h-full">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="border border-white/20" />
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
          <h2 className="font-pixel text-4xl sm:text-5xl text-pixel-yellow text-stroke mb-4">
            ROADMAP
          </h2>
          <p className="text-white/80 text-sm sm:text-base">
            Our journey to the moon and beyond! 🌙✨
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <PixelCard glowColor={phase.color}>
                {/* Phase Header */}
                <div className="text-center mb-6">
                  <div 
                    className="font-pixel text-xs mb-2"
                    style={{ color: phase.color }}
                  >
                    {phase.phase}
                  </div>
                  <h3 className="font-pixel text-lg text-white mb-3">
                    {phase.title}
                  </h3>
                  
                  {/* Status Badge */}
                  <div className={`inline-block px-3 py-1 text-[8px] font-pixel ${
                    phase.status === 'completed' ? 'bg-green-500' :
                    phase.status === 'in-progress' ? 'bg-yellow-500' :
                    'bg-gray-500'
                  }`}>
                    {phase.status === 'completed' ? '✓ COMPLETE' :
                     phase.status === 'in-progress' ? '⟳ IN PROGRESS' :
                     '◷ UPCOMING'}
                  </div>
                </div>

                {/* Phase Items */}
                <div className="space-y-3">
                  {phase.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                      className="flex items-start space-x-2 text-xs text-white/80"
                    >
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Phase Icon */}
                <motion.div
                  className="text-center mt-6 text-4xl"
                  animate={{ 
                    scale: phase.status === 'in-progress' ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: phase.status === 'in-progress' ? Infinity : 0 
                  }}
                >
                  {phase.status === 'completed' ? '🏆' :
                   phase.status === 'in-progress' ? '⚡' :
                   '🔮'}
                </motion.div>
              </PixelCard>
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="text-center mb-4">
            <span className="font-pixel text-sm text-pixel-pink">
              OVERALL PROGRESS: 25%
            </span>
          </div>
          <div className="h-8 bg-pixel-bg border-4 border-white relative overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '25%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="h-full pixel-gradient relative"
            >
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

