'use client';

import { motion } from 'framer-motion';
import Container from '../Container';

export default function AboutSection() {
  const features = [
    { title: 'FOR FUN', description: 'We create memes, pixel art, and vibes. Follow us on X for the latest chaos.', color: '#FFE135' },
    { title: 'SUPPORT HEDERA', description: 'Building awareness and support for the Hedera ecosystem.', color: '#2EC4B6' },
    { title: 'COMMUNITY FIRST', description: 'We build to support other projects. Join us in growing the ecosystem together.', color: '#FF9F1C' }
  ];

  const roadmapItems = [
    { label: 'NFT DROP', desc: 'Ongoing', status: 'ongoing', color: '#FFE135' },
    { label: 'MEME COIN', desc: 'Maybe reward early supporters?', status: 'idea', color: '#FF9F1C' },
    { label: 'MINI GAMES', desc: "Play & earn? We'll see", status: 'idea', color: '#2EC4B6' },
    { label: 'EXPANSION', desc: 'Support other projects', status: 'plan', color: '#9B5DE5' }
  ];

  return (
    <div id="about" className="py-20 bg-pixel-darker relative">
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
        <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-pixel text-4xl sm:text-5xl text-pixel-orange mb-6">WHY HASHMEOW?</h2>
          <p className="text-pixel-light/70 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">Built for fun. Built for community. Built for Hedera.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div key={index} initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -10 }} className="bg-pixel-card border-4 p-8 text-center transition-all relative overflow-hidden group" style={{ borderColor: feature.color + '40' }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: feature.color }}></div>
              <h3 className="font-pixel text-base mb-4 relative z-10" style={{ color: feature.color }}>{feature.title}</h3>
              <p className="text-pixel-light/60 text-xs leading-relaxed relative z-10">{feature.description}</p>
              <div className="absolute top-0 left-0 w-2 h-2" style={{ backgroundColor: feature.color }}></div>
              <div className="absolute top-0 right-0 w-2 h-2" style={{ backgroundColor: feature.color }}></div>
              <div className="absolute bottom-0 left-0 w-2 h-2" style={{ backgroundColor: feature.color }}></div>
              <div className="absolute bottom-0 right-0 w-2 h-2" style={{ backgroundColor: feature.color }}></div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-3xl mx-auto mb-16">
          <div className="bg-pixel-card border-4 border-pixel-blue p-8">
            <div className="space-y-6 text-pixel-light/70 text-sm leading-relaxed text-center">
              <p className="text-pixel-yellow font-pixel text-xs">OUR MISSION</p>
              <p>We're here to have fun, create memes, and build awareness for the Hedera ecosystem.</p>
              <p>No complicated roadmap. No empty promises.<br />Just pure vibes and community support.</p>
              <p className="text-pixel-orange">Follow us on <a href="https://x.com/HashMeowMeme" target="_blank" rel="noopener noreferrer" className="text-pixel-yellow hover:text-pixel-orange transition-colors">X</a> for new memes, art drops, and ecosystem updates.</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-pixel text-2xl text-pixel-pink mb-4">WHAT WE'RE THINKING</h3>
            <p className="text-pixel-light/60 text-xs">No strict roadmap. Ideas may change. Stay tuned on <a href="https://x.com/HashMeowMeme" target="_blank" rel="noopener noreferrer" className="text-pixel-yellow hover:text-pixel-orange transition-colors">X</a> for updates.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {roadmapItems.map((item, i) => (
              <motion.div key={i} initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, type: "spring" }} whileHover={{ scale: 1.05, y: -5 }} className="bg-pixel-card border-4 p-6 text-center relative overflow-hidden group" style={{ borderColor: item.color + '40' }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: item.color }}></div>
                <div className="font-pixel text-sm mb-3 relative z-10" style={{ color: item.color }}>{item.label}</div>
                <div className={`text-[11px] leading-relaxed relative z-10 ${item.status === 'ongoing' ? 'text-pixel-green font-pixel' : 'text-pixel-light/60'}`}>{item.desc}</div>
                <div className="absolute top-0 left-0 w-2 h-2" style={{ backgroundColor: item.color }}></div>
                <div className="absolute top-0 right-0 w-2 h-2" style={{ backgroundColor: item.color }}></div>
                <div className="absolute bottom-0 left-0 w-2 h-2" style={{ backgroundColor: item.color }}></div>
                <div className="absolute bottom-0 right-0 w-2 h-2" style={{ backgroundColor: item.color }}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </Container>
    </div>
  );
}
