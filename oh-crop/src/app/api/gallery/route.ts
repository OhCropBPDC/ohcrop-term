import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Add this line to fix the static export error
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const galleryPath = path.join(process.cwd(), 'public', 'assets', 'gallery');
    
    // Check if gallery directory exists
    if (!fs.existsSync(galleryPath)) {
      console.log('Gallery directory does not exist:', galleryPath);
      return NextResponse.json({ 
        images: [],
        message: 'Gallery directory not found',
        path: galleryPath 
      });
    }

    const files = fs.readdirSync(galleryPath);
    
    // Filter for image files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    const images = files
      .filter(file => imageExtensions.some(ext => file.toLowerCase().endsWith(ext)))
      .map((filename, index) => ({
        id: `img-${index}`,
        img: `/assets/gallery/${filename}`,
        url: `/assets/gallery/${filename}`,
        height: 400 + Math.floor(Math.random() * 200),
        filename
      }));

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error loading gallery images:', error);
    return NextResponse.json({ 
      images: [], 
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
