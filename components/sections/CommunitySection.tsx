'use client';

import { motion } from 'framer-motion';
import Container from '../Container';
import PixelCard from '../PixelCard';
import { FaTwitter, FaDiscord } from 'react-icons/fa';

export default function CommunitySection() {
  const socials = [
    {
      name: 'X (TWITTER)',
      icon: FaTwitter,
      desc: 'Memes & Updates',
      color: '#FFE135',
      link: 'https://x.com/HashMeowMeme'
    },
    {
      name: 'DISCORD',
      icon: FaDiscord,
      desc: 'Coming soon once we see community interest',
      color: '#9B5DE5',
      link: '#',
      comingSoon: true
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pixel-card/20 to-pixel-bg relative">
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
          <h2 className="font-pixel text-4xl sm:text-5xl text-pixel-yellow mb-4">
            JOIN THE COMMUNITY
          </h2>
          <p className="text-pixel-light/70 text-sm sm:text-base">
            Follow us on <a href="https://x.com/HashMeowMeme" target="_blank" rel="noopener noreferrer" className="text-pixel-yellow hover:text-pixel-orange transition-colors">X</a> for memes, updates, and announcements.
            <br />
            Let's grow the Hedera ecosystem together!
          </p>
        </motion.div>

        {/* Social Links Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-3xl mx-auto">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {social.comingSoon ? (
                  <div className="bg-pixel-card border-4 border-pixel-light/20 p-8 text-center opacity-70">
                    <Icon 
                      className="text-6xl mx-auto mb-4" 
                      style={{ color: social.color }}
                    />
                    <div className="font-pixel text-sm text-pixel-light mb-2">
                      {social.name}
                    </div>
                    <div className="text-pixel-light/50 text-[10px] leading-relaxed">
                      {social.desc}
                    </div>
                  </div>
                ) : (
                  <motion.a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="block"
                  >
                    <div className="bg-pixel-card border-4 border-pixel-light/20 hover:border-pixel-yellow transition-all p-8 text-center">
                      <Icon 
                        className="text-6xl mx-auto mb-4" 
                        style={{ color: social.color }}
                      />
                      <div className="font-pixel text-sm text-pixel-light mb-2">
                        {social.name}
                      </div>
                      <div className="text-pixel-light/50 text-xs">
                        {social.desc}
                      </div>
                    </div>
                  </motion.a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Important Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="bg-pixel-card border-4 border-pixel-orange p-8 text-center">
            <h3 className="font-pixel text-lg text-pixel-orange mb-4">
              BUILT FOR HEDERA
            </h3>
            <div className="text-pixel-light/70 text-sm leading-relaxed space-y-3">
              <p>
                HashMeow is a community-driven project supporting the Hedera ecosystem.
              </p>
              <p>
                We build to increase awareness for the Hedera ecosystem.
                <br />
                Follow us on <a href="https://x.com/HashMeowMeme" target="_blank" rel="noopener noreferrer" className="text-pixel-yellow hover:text-pixel-orange transition-colors">X</a> for announcements and updates.
              </p>
              <p className="text-pixel-green text-xs">
                Together, we make Hedera stronger. 🌱
              </p>
            </div>
          </div>
        </motion.div>

        {/* HBAR Resources */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="font-pixel text-xl text-pixel-blue mb-2">
              LEARN ABOUT HEDERA
            </h3>
            <p className="text-pixel-light/60 text-xs">
              New to HBAR? Check out these resources:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a
              href="https://hedera.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pixel-card border-2 border-pixel-blue/30 hover:border-pixel-blue p-6 text-center transition-all"
            >
              <div className="font-pixel text-sm text-pixel-blue mb-2">
                HEDERA.COM
              </div>
              <div className="text-pixel-light/50 text-xs">
                Official Hedera website
              </div>
            </a>
            <a
              href="https://x.com/hedera"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pixel-card border-2 border-pixel-blue/30 hover:border-pixel-blue p-6 text-center transition-all"
            >
              <div className="font-pixel text-sm text-pixel-blue mb-2">
                @HEDERA
              </div>
              <div className="text-pixel-light/50 text-xs">
                Follow Hedera on X
              </div>
            </a>
          </div>
        </motion.div>


      </Container>
    </section>
  );
}

