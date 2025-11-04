# 🐱 HashMeow - Pixel Art NFT Collection on Hedera

![HashMeow](https://img.shields.io/badge/HashMeow-NFT%20Collection-FF10F0?style=for-the-badge)
![Hedera](https://img.shields.io/badge/Hedera-Network-00FFFF?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

> 10,000 unique pixel art HashMeow NFTs on Hedera Network - The cutest crypto collectibles! 🚀✨

## 🎮 Features

- 🎨 **10K Unique NFTs** - Handcrafted pixel art with hundreds of trait combinations
- ⚡ **Hedera Powered** - Fast, cheap, and eco-friendly blockchain
- 💎 **NFT Minting** - Mint your HashMeow directly from the website
- 🎯 **Pacman-Style Game** - Play as your NFT and earn HBAR rewards
- 🏆 **Rich Utilities** - Staking, governance, breeding, and more
- 📊 **Tokenomics** - Fair distribution focused on NFT holders
- 🗺️ **Roadmap** - Transparent 4-phase development plan
- 🔗 **Wallet Integration** - HashPack, Blade, and WalletConnect support
- 👥 **Community Hub** - Active Discord, Telegram, and Twitter
- 📱 **Fully Responsive** - Perfect on all devices
- ⚡ **Smooth Animations** - Powered by Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Font**: Press Start 2P (Pixel Font)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/hashmeow.git
   cd hashmeow
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
hashmeow/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page with all sections
│   ├── globals.css         # Global styles & pixel effects
│   ├── manifest.ts         # PWA manifest
│   └── sitemap.ts          # SEO sitemap
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx         # Landing page
│   │   ├── NFTSection.tsx          # NFT gallery & minting
│   │   ├── UtilitiesSection.tsx    # NFT holder benefits
│   │   ├── AboutSection.tsx        # Project info
│   │   ├── TokenomicsSection.tsx   # Distribution & Hedera info
│   │   ├── RoadmapSection.tsx      # Development phases
│   │   ├── PacmanGame.tsx          # Interactive game
│   │   └── CommunitySection.tsx    # Social links
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer component
│   ├── HederaWallet.tsx    # Wallet connection modal
│   ├── PixelButton.tsx     # Custom pixel button
│   ├── PixelCard.tsx       # Custom pixel card
│   └── Container.tsx       # Layout container
├── public/
│   ├── images/             # NFT preview images
│   └── robots.txt          # SEO robots file
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
\`\`\`

## 🎨 Customization

### Colors

The pixel color scheme can be customized in `tailwind.config.ts`:

\`\`\`typescript
colors: {
  pixel: {
    pink: '#FF10F0',
    cyan: '#00FFFF',
    yellow: '#FFD700',
    purple: '#9D00FF',
    orange: '#FF8C00',
    bg: '#0A0E27',
    card: '#1A1F3A',
  }
}
\`\`\`

### Sections

Each section is modular and can be easily modified in the `components/sections/` directory.

## 🎮 HashMeow Runner Game

The website includes a fully playable Pacman-style game:

- **Control**: Use arrow keys or WASD to move your HashMeow
- **Objective**: Collect all coins while avoiding ghosts
- **Rewards**: Top players earn weekly HBAR prizes
- **NFT Integration**: Use your own NFT as game character (coming soon)

## 💎 NFT Collection

- **Total Supply**: 10,000 unique NFTs
- **Round 1**: 1,000 NFTs at launch
- **Mint Price**: 50 HBAR
- **Network**: Hedera Hashgraph
- **Rarity Tiers**: Common (50%), Rare (30%), Epic (15%), Legendary (5%)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 💻 Tablets (768px+)
- 🖥️ Desktops (1024px+)
- 🖥️ Large screens (1920px+)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 📝 Environment Variables

Create a `.env.local` file for environment variables:

\`\`\`env
NEXT_PUBLIC_HEDERA_NETWORK=mainnet
NEXT_PUBLIC_NFT_CONTRACT_ID=0.0.XXXXXX
NEXT_PUBLIC_TREASURY_ACCOUNT=0.0.XXXXXX
NEXT_PUBLIC_MINT_PRICE=50
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/hashmeow
NEXT_PUBLIC_TELEGRAM_URL=https://t.me/hashmeow
NEXT_PUBLIC_DISCORD_URL=https://discord.gg/hashmeow
\`\`\`

## 🔗 Hedera Integration

### Supported Wallets

- **HashPack** - Most popular Hedera wallet
- **Blade Wallet** - Multi-chain wallet with Hedera support
- **WalletConnect** - QR code connection

### Smart Contract

The project uses Hedera Token Service (HTS) for NFT minting and management:

- Fast transactions (3-5 seconds finality)
- Low fees ($0.0001 average)
- Carbon negative network
- Native NFT support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🐱 About HashMeow

HashMeow is a 10,000 NFT collection of unique pixel art cats on Hedera Network. 
We're building a complete NFT ecosystem with games, staking, governance, and exclusive holder benefits.

**Why HashMeow?**
- Unique pixel art with hundreds of trait combinations
- Real utilities: Play-to-earn games, staking rewards, DAO voting
- Built on eco-friendly Hedera Network
- Fair launch with strong community focus
- Experienced team committed to long-term development

**Connect With Us:**
- 🌐 Website: [hashmeow.io](#)
- 🐦 Twitter: [@HashMeow](#)
- 💬 Telegram: [t.me/hashmeow](#)
- 📱 Discord: [discord.gg/hashmeow](#)
- 📺 YouTube: [youtube.com/@hashmeow](#)

## ⚠️ Disclaimer

This is an NFT collectible project. NFT investments are subject to market risk and value fluctuation. 
HashMeow NFTs are digital collectibles with utility features, not financial instruments. 
Please invest responsibly, do your own research, and only spend what you can afford to lose.

---

Made with 💖 and pixel art by the HashMeow team

🐱 **TO THE MOON!** 🚀

# HashMeow
