'use client';
import { useEffect, useState } from 'react';
import Masonry from '../../components/Masonry';

interface GalleryImage {
  id: string;
  img: string;
  url: string;
  height: number;
  filename: string;
}

const GALLERY_IMAGES = [
  'event1.jpg',
  'event2.png',
  'event3.png',
  'event4.png',
  'event5.jpg',
  'event6.png',
  'event7.png',
  'event8.jpeg',
  'event9.jpg',
  'event10.HEIC',
  'event11.jpg',
  'event12.HEIC',
  'event13.HEIC',
  'event14.JPG',
  'event15.JPG',
  'event16.HEIC',
  'event17.HEIC',
  'event18.jpg',
  'event19.HEIC',
  'event20.HEIC',
  'event21.HEIC',
  'event22.JPG',
  'event23.PNG',
  'event24.JPG',
  'event25.HEIC',
  'event26.jpg',
  'event27.png',
];

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageObjects = GALLERY_IMAGES.map((filename, index) => ({
          id: `img-${index}`,
          img: `/assets/gallery/${filename}`,
          url: `/assets/gallery/${filename}`,
          height: 300 + Math.floor(Math.random() * 300),
          filename
        }));

        const validImages = await Promise.all(
          imageObjects.map(async (img) => {
            return new Promise<GalleryImage | null>((resolve) => {
              const testImage = new Image();
              testImage.onload = () => resolve(img);
              testImage.onerror = () => resolve(null);
              testImage.src = img.img;
            });
          })
        );

        const filteredImages = validImages.filter((img): img is GalleryImage => img !== null);
        setImages(filteredImages);
      } catch (err) {
        setError('Failed to load images');
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#7b97ad] to-[#ea4b19]">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg font-semibold">Loading Gallery...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#7b97ad] to-[#ea4b19]">
        <div className="text-white text-center">
          <p className="text-xl font-bold mb-4">Error Loading Gallery</p>
          <p className="text-lg">{error}</p>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#7b97ad] to-[#ea4b19]">
        <div className="text-white text-center">
          <p className="text-xl font-bold mb-4">No Images Found</p>
          <p className="text-lg">Add some images to the /public/assets/gallery/ folder</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-br from-[#7b97ad] via-[#efca72] to-[#ea4b19]">
      {/* Header - Fixed at top */}
      <div className="flex-shrink-0 px-4 py-6 border-b border-white/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
            OhCrop Gallery
          </h1>
        </div>
      </div>

      {/* Scrollable Gallery Area */}
      <div className="flex-1 overflow-hidden px-4">
        <div className="h-full max-w-7xl mx-auto">
          <div 
            className="w-full h-full overflow-y-auto overflow-x-hidden py-4"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(255,255,255,0.3) transparent'
            }}
          >
            <Masonry
              items={images}
              ease="power3.out"
              duration={0.6}
              stagger={0.02}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={false}
              colorShiftOnHover={false}
            />
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
