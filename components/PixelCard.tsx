'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PixelCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function PixelCard({ 
  children, 
  className = '',
  glowColor = '#FF10F0'
}: PixelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`bg-pixel-card border-4 border-white p-6 pixel-shadow-lg relative ${className}`}
      style={{
        boxShadow: `0 0 20px ${glowColor}40, 12px 12px 0 rgba(0, 0, 0, 0.4)`
      }}
    >
      {children}
    </motion.div>
  );
}

