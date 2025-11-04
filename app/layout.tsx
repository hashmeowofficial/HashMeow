import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HashMeow - The Cutest Pixel Meme Coin 🐱",
  description: "Join the HashMeow revolution! A pixel art meme coin with mini games and awesome community!",
  keywords: ["HashMeow", "meme coin", "crypto", "pixel art", "blockchain"],
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
      </head>
      <body className="bg-pixel-bg text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

