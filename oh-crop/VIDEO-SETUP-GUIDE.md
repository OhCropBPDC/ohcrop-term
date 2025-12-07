# Oh Crop - Enhanced Homepage with Video & Animations

## 🎨 What's Been Added

### 1. **Video Background Component**
- Location: `src/components/VideoBackground.tsx`
- Features:
  - Full-screen video background with smooth loading
  - Fallback image support
  - Customizable overlay opacity
  - Animated entrance effect
  - Responsive and mobile-friendly

### 2. **Creative Effects Library**
- Location: `src/components/CreativeEffects.tsx`
- Includes:
  - **FloatingShape**: Animated gradient blobs that float around
  - **ParticleField**: Twinkling particle effects
  - **MorphingBlob**: Morphing gradient shapes
  - **ScanLine**: Futuristic scan line animation
  - **HolographicCard**: Cards with holographic shine effect
  - **GlitchText**: Glitch-style text effect with RGB separation

### 3. **Enhanced Homepage**
- Video background in hero section
- Multiple floating shapes with different colors and timing
- Particle field overlay
- Scan line effect
- Morphing blob background element
- Glitch text effect on subtitle
- Holographic cards in content sections
- Enhanced button animations with glow effects

## 📹 Setting Up Your Video

### Step 1: Prepare Your Video
1. Export your trailer in **MP4 format** (H.264 codec recommended)
2. Recommended specs:
   - Resolution: 1920x1080 or higher
   - Bitrate: 5-10 Mbps
   - Duration: 10-30 seconds (for loop)
   - File size: Keep under 10MB for web performance

### Step 2: Optimize Your Video
Use tools like:
- **HandBrake** (free): https://handbrake.fr/
- **FFmpeg**: 
  ```bash
  ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 5M -vf scale=1920:1080 trailer.mp4
  ```

### Step 3: Add Video to Project
1. Place your video file in: `public/video/trailer.mp4`
2. The component is already configured to use this path
3. If you want a different filename, update in `src/app/page.tsx`:
   ```tsx
   <VideoBackground 
     videoSrc="/video/YOUR-VIDEO-NAME.mp4"
     ...
   />
   ```

### Step 4: Add Fallback Image (Optional but Recommended)
1. Create a poster image (screenshot from your video)
2. Place it in: `public/assets/hero-fallback.jpg`
3. This shows while video loads or if autoplay fails

## 🎯 Customization Guide

### Adjust Video Overlay Darkness
In `src/app/page.tsx`, line with VideoBackground:
```tsx
<VideoBackground 
  videoSrc="/video/trailer.mp4"
  overlayOpacity={0.6}  // 0 = transparent, 1 = completely dark
/>
```

### Change Floating Shape Colors
```tsx
<FloatingShape 
  color="rgba(99, 102, 241, 0.15)"  // Purple (RGBA)
  size={400}
  duration={20}  // seconds for one animation cycle
/>
```

Available colors:
- Purple: `rgba(99, 102, 241, 0.15)`
- Pink: `rgba(236, 72, 153, 0.12)`
- Cyan: `rgba(6, 182, 212, 0.1)`
- Orange: `rgba(249, 115, 22, 0.1)`

### Modify Animation Speed
- **Particle Field**: Edit duration in `src/components/CreativeEffects.tsx` (line ~59)
- **Scan Line**: Change duration in `ScanLine` component (line ~129)
- **Floating Shapes**: Adjust `duration` prop (higher = slower)

### Disable Effects
If any effect is too much, simply comment out or remove from `page.tsx`:
```tsx
{/* <ParticleField /> */}  // Commented out
{/* <ScanLine /> */}        // Commented out
```

## 🚀 Performance Tips

1. **Video Size**: Keep under 10MB for fast loading
2. **Mobile**: Video may not autoplay on mobile - fallback image will show
3. **Disable Effects on Mobile**: Wrap effects in a condition:
   ```tsx
   {typeof window !== 'undefined' && window.innerWidth > 768 && <ParticleField />}
   ```

## 🎨 Additional Creative Ideas

### Add More Sections with Effects:
```tsx
<section className="relative overflow-hidden">
  <FloatingShape ... />
  <HolographicCard>
    {/* Your content */}
  </HolographicCard>
</section>
```

### Use Glitch Text on Headings:
```tsx
<h1>
  <GlitchText>Your Heading</GlitchText>
</h1>
```

### Add Morphing Blobs Anywhere:
```tsx
<div className="relative">
  <MorphingBlob />
  {/* Your content */}
</div>
```

## 🐛 Troubleshooting

**Video not playing?**
- Check file path is correct: `/video/trailer.mp4`
- Ensure video is in MP4 format
- Check browser console for errors
- Try different video codec (H.264 is most compatible)

**Effects causing lag?**
- Reduce number of particles (in `ParticleField`)
- Remove some `FloatingShape` components
- Disable effects on mobile devices

**Build errors?**
- Run: `npm install framer-motion` (if not already installed)
- Clear Next.js cache: `rm -rf .next`
- Rebuild: `npm run dev`

## 📝 Next Steps

1. Add your video to `public/video/trailer.mp4`
2. Test the site: `npm run dev`
3. Adjust overlay opacity and colors to match your branding
4. Add more creative sections using the effects library
5. Optimize video file size before deploying

Need more effects or different animations? Let me know!
