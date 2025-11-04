# 📸 คู่มือการใช้รูปใน HashMeow Website

## 🎨 รูปภาพที่มีอยู่

ตอนนี้มีรูป NFT pixel art อยู่ใน `/public/images/`:
- 320.png, 325.png, 342.png, 349.png, 383.png
- 613.png, 890.png, 902.png, 937.png
- 1108.png, 1110.png, 1112.png

## 🔄 การแทนที่รูปในแต่ละส่วน

### 1. Hero Section (หน้าแรก)
**ไฟล์:** `components/sections/HeroSection.tsx`
**บรรทัด:** ~54-57

```typescript
// เปลี่ยนจาก emoji เป็นรูป NFT
<div className="absolute inset-0 flex items-center justify-center text-[120px] sm:text-[180px]">
  🐱
</div>
```

**แทนที่ด้วย:**
```typescript
<Image
  src="/images/1110.png"
  alt="HashMeow"
  fill
  className="object-contain p-4"
  style={{ imageRendering: 'pixelated' }}
/>
```

### 2. NFT Gallery Section
**ไฟล์:** `components/sections/NFTSection.tsx`
**บรรทัด:** ~16-23

รูปภาพถูกใช้อยู่แล้ว! เพียงเพิ่มรูปใหม่:
```typescript
const nftGallery = [
  { id: 1, image: '/images/320.png', rarity: 'Common', traits: 'Pink Hat + Cyan Shirt' },
  // เพิ่มรูปใหม่ที่นี่
];
```

### 3. About Section Icons
**ไฟล์:** `components/sections/AboutSection.tsx`

แทนที่ emoji ด้วยไอคอนหรือรูปภาพ:
```typescript
const features = [
  {
    emoji: '🐱', // <-- แทนที่ตรงนี้
    title: 'UNIQUE ARTWORK',
    // ...
  }
];
```

**วิธีใช้รูปแทน:**
```typescript
import Image from 'next/image';

// ในส่วน render
<div className="relative w-20 h-20 mx-auto">
  <Image
    src="/images/icons/artwork.png"
    alt="Unique Artwork"
    fill
    className="object-contain"
    style={{ imageRendering: 'pixelated' }}
  />
</div>
```

### 4. Background Patterns
**ไฟล์:** `components/sections/HeroSection.tsx`
**บรรทัด:** ~11-31

ปรับปรุงแล้วให้ใช้ pixel squares แทน emoji

## 📂 โครงสร้างรูปภาพที่แนะนำ

```
public/
├── images/
│   ├── nfts/           # รูป NFT หลัก
│   │   ├── 1.png
│   │   ├── 2.png
│   │   └── ...
│   ├── icons/          # ไอคอนต่างๆ
│   │   ├── game.png
│   │   ├── stake.png
│   │   └── ...
│   ├── backgrounds/    # พื้นหลัง
│   │   └── hero-bg.png
│   └── logo/           # โลโก้
│       ├── logo.png
│       └── logo-small.png
```

## 🎯 ตำแหน่งที่ควรเพิ่มรูป

### Priority 1 (สำคัญสุด):
1. ✅ **Hero Section Main Character** - ควรใช้ NFT ที่โดดเด่นที่สุด
2. ✅ **NFT Gallery** - แสดงตัวอย่าง NFT หลากหลาย rarity
3. ✅ **Navbar Logo** - โลโก้ HashMeow ขนาดเล็ก

### Priority 2 (ควรมี):
4. **About Section Icons** - ไอคอน features ต่างๆ
5. **Utilities Icons** - ภาพประกอบ utilities แต่ละแบบ
6. **Background Elements** - รูปพื้นหลังสไตล์ pixel

### Priority 3 (เพิ่มเติม):
7. **Team Section** - รูปทีมงาน (ถ้ามี)
8. **Partners** - โลโก้พาร์ทเนอร์
9. **Social Media Headers** - รูปสำหรับ og:image

## 🖼️ ข้อกำหนดรูปภาพ

### NFT Images:
- **ขนาด:** 500x500px หรือ 1000x1000px
- **รูปแบบ:** PNG (รองรับความโปร่งใส)
- **คุณภาพ:** Pixel perfect, ไม่มี anti-aliasing
- **ไฟล์:** < 500KB ต่อรูป

### Icons/Illustrations:
- **ขนาด:** 256x256px หรือ 512x512px
- **รูปแบบ:** PNG หรือ SVG
- **สไตล์:** Pixel art ให้เข้ากับธีม

### Backgrounds:
- **ขนาด:** 1920x1080px สำหรับ full screen
- **รูปแบบ:** PNG หรือ WEBP
- **ขนาดไฟล์:** < 200KB (ใช้ compression)

## ⚡ การ Optimize รูปภาพ

### ใช้ Next.js Image Component:
```typescript
import Image from 'next/image';

<Image
  src="/images/nft.png"
  alt="HashMeow NFT"
  width={500}
  height={500}
  quality={100}
  priority={true} // สำหรับรูปสำคัญ
  style={{ imageRendering: 'pixelated' }} // สำหรับ pixel art
/>
```

### Image Rendering สำหรับ Pixel Art:
```css
.pixel-art {
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-crisp-edges;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
```

## 🔧 เครื่องมือที่แนะนำ

1. **TinyPNG** - compress PNG files
2. **Squoosh** - optimize images for web
3. **Aseprite** - create/edit pixel art
4. **GIMP** - free image editor

## 📝 Checklist การเพิ่มรูป

- [ ] เตรียมรูป NFT หลัก 8-12 รูปสำหรับ gallery
- [ ] สร้างโลโก้ HashMeow (ขนาดเล็ก สำหรับ navbar)
- [ ] เตรียมไอคอน features 4-6 รูป
- [ ] สร้าง favicon (32x32, 64x64)
- [ ] ทดสอบรูปบนหน้าจอขนาดต่างๆ
- [ ] ตรวจสอบขนาดไฟล์และ loading speed
- [ ] Optimize ทุกรูปก่อน deploy

## 🎨 Tips

1. **ใช้ PNG** สำหรับ pixel art (ไม่ใช่ JPEG)
2. **อย่า resize** pixel art ด้วยเครื่องมือทั่วไป ใช้ nearest neighbor
3. **เก็บ aspect ratio** ของ pixel art ไว้
4. **ใช้ lazy loading** สำหรับรูปที่ไม่สำคัญ
5. **เพิ่ม alt text** ทุกรูปเพื่อ SEO

---

ถ้ามีคำถามเพิ่มเติม ดูตัวอย่างการใช้ใน `components/sections/NFTSection.tsx` ครับ!

