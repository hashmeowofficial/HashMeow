'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PixelButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function PixelButton({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'md',
  className = ''
}: PixelButtonProps) {
  const baseStyles = "font-pixel uppercase relative overflow-hidden transition-all duration-200";
  
  const variants = {
    primary: "bg-pixel-yellow hover:bg-pixel-orange text-pixel-darker border-4 border-pixel-light",
    secondary: "bg-pixel-blue hover:bg-pixel-green text-pixel-darker border-4 border-pixel-light",
    outline: "bg-transparent border-4 border-pixel-yellow hover:bg-pixel-yellow hover:text-pixel-darker text-pixel-yellow"
  };

  const sizes = {
    sm: "px-4 py-2 text-[8px]",
    md: "px-6 py-3 text-[10px]",
    lg: "px-8 py-4 text-[12px]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-white opacity-0 hover:opacity-20"
        whileHover={{ opacity: 0.2 }}
      />
    </motion.button>
  );
}

