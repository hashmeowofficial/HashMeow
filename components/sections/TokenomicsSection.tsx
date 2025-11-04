'use client';

import { motion } from 'framer-motion';
import Container from '../Container';
import PixelCard from '../PixelCard';

export default function TokenomicsSection() {
  const distribution = [
    { label: 'NFT HOLDERS REWARDS', percentage: 35, color: '#FF10F0' },
    { label: 'LIQUIDITY POOL', percentage: 25, color: '#00FFFF' },
    { label: 'STAKING & GAMES', percentage: 20, color: '#FFD700' },
    { label: 'TEAM & DEVELOPMENT', percentage: 10, color: '#9D00FF' },
    { label: 'MARKETING & COMMUNITY', percentage: 10, color: '#FF8C00' },
  ];

  const tokenInfo = [
    { label: 'PROJECT NAME', value: 'HashMeow' },
    { label: 'NFT COLLECTION', value: '10,000 NFTs' },
    { label: 'ROUND 1 SUPPLY', value: '1,000 NFTs' },
    { label: 'NETWORK', value: 'Hedera (HBAR)' },
    { label: 'MINT PRICE', value: '50 HBAR' },
    { label: 'SMART CONTRACT', value: 'Hedera Token Service' },
  ];

  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-b from-pixel-bg to-pixel-card/20">
      <Container>
        {/* Section Title */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-pixel text-4xl sm:text-5xl text-pixel-cyan text-stroke mb-4">
            TOKENOMICS
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-3xl mx-auto">
            Built on Hedera Network for fast, secure, and eco-friendly transactions. 
            Fair distribution focused on rewarding NFT holders and community!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Token Distribution Chart */}
          <PixelCard glowColor="#FF10F0">
            <h3 className="font-pixel text-xl text-pixel-yellow mb-6 text-center">
              TOKEN DISTRIBUTION
            </h3>
            <div className="space-y-4">
              {distribution.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-pixel text-[10px] text-white">
                      {item.label}
                    </span>
                    <span className="font-pixel text-[10px]" style={{ color: item.color }}>
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="h-6 bg-pixel-bg border-2 border-white/20 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-pixel text-[8px] text-white text-stroke">
                        {item.percentage}%
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pie Chart Representation */}
            <div className="mt-8 flex justify-center">
              <div className="grid grid-cols-5 gap-2">
                {distribution.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    className="text-center"
                  >
                    <div 
                      className="w-12 h-12 border-4 border-white mb-2"
                      style={{ backgroundColor: item.color }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </PixelCard>

          {/* Token Info */}
          <PixelCard glowColor="#00FFFF">
            <h3 className="font-pixel text-xl text-pixel-pink mb-6 text-center">
              TOKEN INFO
            </h3>
            <div className="space-y-4">
              {tokenInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-pixel-bg border-2 border-pixel-cyan/30 p-4"
                >
                  <div className="font-pixel text-[8px] text-pixel-cyan mb-2">
                    {info.label}
                  </div>
                  <div className="font-pixel text-[10px] text-white break-all">
                    {info.value}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-6 bg-pixel-pink p-4 text-center cursor-pointer pixel-shadow-lg"
            >
              <div className="font-pixel text-[10px] text-white">
                📋 COPY CONTRACT ADDRESS
              </div>
            </motion.div>
          </PixelCard>
        </div>

        {/* Hedera Benefits */}
        <PixelCard className="max-w-4xl mx-auto" glowColor="#FFD700">
          <h3 className="font-pixel text-xl text-pixel-yellow mb-6 text-center">
            WHY HEDERA NETWORK?
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="text-4xl">⚡</div>
              <div className="font-pixel text-sm text-pixel-pink">FAST</div>
              <div className="text-xs text-white/70">
                Transactions finalize in 3-5 seconds
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl">💰</div>
              <div className="font-pixel text-sm text-pixel-cyan">LOW COST</div>
              <div className="text-xs text-white/70">
                $0.0001 average transaction fee
              </div>
            </div>
            <div className="text-center space-y-3">
              <div className="text-4xl">🌱</div>
              <div className="font-pixel text-sm text-pixel-yellow">ECO-FRIENDLY</div>
              <div className="text-xs text-white/70">
                Carbon negative network
              </div>
            </div>
          </div>
        </PixelCard>
      </Container>
    </section>
  );
}

