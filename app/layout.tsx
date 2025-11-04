import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HashMeow - Pixel Meme NFT on Hedera",
  description: "HashMeow - A pixel meme project on Hedera Network. Built for fun, community, and awareness.",
  keywords: ["HashMeow", "Hedera", "HBAR", "NFT", "pixel art", "meme"],
  icons: {
    icon: '/images/Main.PNG',
    shortcut: '/images/Main.PNG',
    apple: '/images/Main.PNG',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" 
          rel="stylesheet" 
        />
        <link rel="icon" href="/images/Main.PNG" type="image/png" />
      </head>
      <body className="bg-pixel-bg text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

