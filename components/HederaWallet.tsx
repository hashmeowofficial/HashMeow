'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PixelButton from './PixelButton';

export default function HederaWallet() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [showModal, setShowModal] = useState(false);

  const connectWallet = async (walletType: string) => {
    // Placeholder for actual Hedera wallet connection
    // You'll need to integrate with HashPack, Blade, or other Hedera wallets
    
    try {
      // Simulate wallet connection
      const mockAddress = '0.0.123456';
      setWalletAddress(mockAddress);
      setIsConnected(true);
      setShowModal(false);
      
      console.log(`Connecting to ${walletType}...`);
      // In production, implement actual wallet connection here:
      // - HashPack: window.hashpack.connect()
      // - Blade: window.bladeWallet.connect()
      
    } catch (error) {
      console.error('Wallet connection failed:', error);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress('');
  };

  const walletOptions = [
    {
      name: 'HashPack',
      icon: '🔷',
      description: 'Most popular Hedera wallet',
      color: '#00FFFF'
    },
    {
      name: 'Blade',
      icon: '⚔️',
      description: 'Multi-chain wallet with Hedera',
      color: '#FF10F0'
    },
    {
      name: 'WalletConnect',
      icon: '🔗',
      description: 'Connect via QR code',
      color: '#FFD700'
    }
  ];

  return (
    <>
      {/* Connect Button */}
      {!isConnected ? (
        <PixelButton size="sm" onClick={() => setShowModal(true)}>
          CONNECT WALLET
        </PixelButton>
      ) : (
        <div className="flex items-center gap-2">
          <div className="bg-pixel-card border-2 border-pixel-yellow px-3 py-2 font-pixel text-[8px] text-pixel-yellow">
            {walletAddress.slice(0, 8)}...
          </div>
          <PixelButton size="sm" variant="outline" onClick={disconnectWallet}>
            ✕
          </PixelButton>
        </div>
      )}

      {/* Wallet Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-pixel-card border-4 border-pixel-yellow max-w-md w-full p-6 pixel-shadow-lg"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-pixel text-lg text-pixel-pink">
                  CONNECT WALLET
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-2xl text-pixel-light hover:text-pixel-yellow"
                >
                  ✕
                </button>
              </div>

              {/* Wallet Options */}
              <div className="space-y-4">
                {walletOptions.map((wallet, index) => (
                  <motion.button
                    key={wallet.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    onClick={() => connectWallet(wallet.name)}
                    className="w-full bg-pixel-darker border-4 p-4 text-left hover:border-pixel-yellow transition-all"
                    style={{ borderColor: wallet.color }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{wallet.icon}</div>
                      <div className="flex-1">
                        <div 
                          className="font-pixel text-sm mb-1"
                          style={{ color: wallet.color }}
                        >
                          {wallet.name}
                        </div>
                        <div className="text-xs text-white/60">
                          {wallet.description}
                        </div>
                      </div>
                      <div className="text-pixel-yellow text-xl">→</div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Info */}
              <div className="mt-6 p-4 bg-pixel-yellow/10 border-2 border-pixel-yellow/30">
                <div className="text-[8px] text-white/70 text-center space-y-1">
                  <p>New to Hedera?</p>
                  <p>Install HashPack or Blade wallet extension first</p>
                </div>
              </div>

              {/* Hedera Logo/Info */}
              <div className="mt-4 text-center">
                <div className="font-pixel text-[8px] text-pixel-cyan">
                  POWERED BY HEDERA
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

