import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HashMeow - The Cutest Pixel Meme Coin',
    short_name: 'HashMeow',
    description: 'Join the HashMeow revolution! A pixel art meme coin with mini games and awesome community!',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0E27',
    theme_color: '#FF10F0',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

