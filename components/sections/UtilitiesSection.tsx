'use client';

import { motion } from 'framer-motion';
import Container from '../Container';
import PixelCard from '../PixelCard';

export default function UtilitiesSection() {
  const utilities = [
    {
      title: 'EXCLUSIVE STAKING',
      description: 'Stake your NFT and earn passive HBAR rewards daily. Higher rarity = Higher rewards!',
      icon: '💰',
      color: '#FFD700',
      benefits: [
        'Up to 20% APY on HBAR',
        'Bonus rewards for rare NFTs',
        'Compound interest options'
      ]
    },
    {
      title: 'GAME ADVANTAGES',
      description: 'Use your NFT as playable character with special abilities and bonus multipliers!',
      icon: '🎮',
      color: '#FF10F0',
      benefits: [
        '2x game rewards',
        'Exclusive power-ups',
        'Special game modes'
      ]
    },
    {
      title: 'DAO GOVERNANCE',
      description: 'Vote on project decisions, propose ideas, and shape the future of HashMeow!',
      icon: '🗳️',
      color: '#00FFFF',
      benefits: [
        '1 NFT = 1 vote',
        'Propose new features',
        'Treasury management'
      ]
    },
    {
      title: 'EXCLUSIVE ACCESS',
      description: 'Get early access to new drops, private events, and VIP community channels!',
      icon: '👑',
      color: '#9D00FF',
      benefits: [
        'Private Discord channels',
        'Early mint access',
        'Exclusive airdrops'
      ]
    },
    {
      title: 'BREEDING SYSTEM',
      description: 'Breed two HashMeow NFTs to create unique offspring with combined traits!',
      icon: '🐱',
      color: '#FF8C00',
      benefits: [
        'Create new rare combos',
        'Limited breeding passes',
        'Tradeable offspring'
      ]
    },
    {
      title: 'PHYSICAL MERCH',
      description: 'Redeem your NFT for exclusive physical merchandise and collectibles!',
      icon: '🎁',
      color: '#FF10F0',
      benefits: [
        'Custom pixel art prints',
        'Limited edition apparel',
        'Physical collectibles'
      ]
    },
  ];

  return (
    <section id="utilities" className="py-20 bg-gradient-to-b from-pixel-bg to-pixel-card/20">
      <Container>
        {/* Section Title */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-pixel text-4xl sm:text-5xl text-pixel-yellow text-stroke mb-4">
            NFT UTILITIES
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-3xl mx-auto">
            HashMeow NFTs aren't just cute - they're packed with real utilities and benefits for holders!
          </p>
        </motion.div>

        {/* Utilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {utilities.map((utility, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <PixelCard glowColor={utility.color} className="h-full">
                <div className="space-y-4">
                  {/* Icon */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                    className="text-5xl text-center"
                  >
                    {utility.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 
                    className="font-pixel text-sm text-center"
                    style={{ color: utility.color }}
                  >
                    {utility.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-xs text-center leading-relaxed">
                    {utility.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-2 pt-2">
                    {utility.benefits.map((benefit, i) => (
                      <div 
                        key={i}
                        className="flex items-start space-x-2 text-xs text-white/80"
                      >
                        <span className="text-pixel-cyan">▸</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </PixelCard>
            </motion.div>
          ))}
        </div>

        {/* Holder Tiers */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <PixelCard className="max-w-4xl mx-auto" glowColor="#FF10F0">
            <h3 className="font-pixel text-xl text-center text-pixel-pink mb-8">
              HOLDER TIERS
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  tier: 'BRONZE',
                  nfts: '1-2 NFTs',
                  color: '#CD7F32',
                  perks: ['Basic utilities', 'Community access', '10% rewards']
                },
                {
                  tier: 'SILVER',
                  nfts: '3-5 NFTs',
                  color: '#C0C0C0',
                  perks: ['All Bronze perks', 'Early access', '15% rewards']
                },
                {
                  tier: 'GOLD',
                  nfts: '6+ NFTs',
                  color: '#FFD700',
                  perks: ['All Silver perks', 'VIP status', '25% rewards']
                },
              ].map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-pixel-bg border-4"
                  style={{ borderColor: tier.color }}
                >
                  <div 
                    className="font-pixel text-2xl mb-3"
                    style={{ color: tier.color }}
                  >
                    {tier.tier}
                  </div>
                  <div className="font-pixel text-[8px] text-white/60 mb-4">
                    {tier.nfts}
                  </div>
                  <div className="space-y-2">
                    {tier.perks.map((perk, i) => (
                      <div key={i} className="text-[10px] text-white/70">
                        • {perk}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </PixelCard>
        </motion.div>

        {/* Future Utilities Teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="font-pixel text-lg text-pixel-cyan mb-4">
            COMING SOON
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Metaverse Land',
              'P2E Tournament',
              'Mobile App',
              'NFT Rental',
              'Trait Swap'
            ].map((feature, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -5, 0],
                }}
                transition={{ 
                  duration: 2, 
                  delay: i * 0.2,
                  repeat: Infinity 
                }}
                className="bg-pixel-card border-2 border-pixel-yellow px-4 py-2 font-pixel text-[8px] text-white"
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

