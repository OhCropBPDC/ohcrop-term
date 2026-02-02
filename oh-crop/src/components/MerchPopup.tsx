'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface PosterAsset {
  id: string;
  text: string;
  asset: string;
  collectionId: string;
}

export default function MerchPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [posterAsset, setPosterAsset] = useState<PosterAsset | null>(null);
  const [hasSeenPopup, setHasSeenPopup] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const popupSeen = sessionStorage.getItem('merchPopupSeen');
    if (popupSeen) {
      setHasSeenPopup(true);
      return;
    }

    // Fetch poster assets
    const fetchPosterAsset = async () => {
      try {
        const pocketbaseUrl = process.env.NEXT_PUBLIC_POCKETBASE_URL;
        if (!pocketbaseUrl) return;

        const response = await fetch(
          `${pocketbaseUrl}/api/collections/merch/records?sort=-created`
        );
        if (!response.ok) return;

        const data = await response.json();
        const posters = data.items?.filter(
          (a: PosterAsset) =>
            a.text?.toLowerCase().includes('poster') ||
            a.text?.toLowerCase().includes('design')
        );

        if (posters && posters.length > 0) {
          // Pick a random poster
          const randomPoster = posters[Math.floor(Math.random() * posters.length)];
          setPosterAsset(randomPoster);
          setIsOpen(true);
          sessionStorage.setItem('merchPopupSeen', 'true');
        }
      } catch (err) {
        console.error('Error fetching poster asset:', err);
      }
    };

    // Delay popup appearance slightly for better UX
    const timer = setTimeout(fetchPosterAsset, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getAssetUrl = (asset: PosterAsset) => {
    const pocketbaseUrl = process.env.NEXT_PUBLIC_POCKETBASE_URL;
    return `${pocketbaseUrl}/api/files/${asset.collectionId}/${asset.id}/${asset.asset}`;
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && posterAsset && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-2xl w-full bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
              aria-label="Close popup"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Poster Image - Clickable */}
            <Link href="/merch" onClick={handleClose}>
              <motion.img
                src={getAssetUrl(posterAsset)}
                alt={posterAsset.text}
                className="w-full h-auto cursor-pointer hover:brightness-110 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              />
            </Link>

            {/* CTA Text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 text-center">
              <Link href="/merch" onClick={handleClose}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-600 via-pink-600 to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-red-500/50 transition-all duration-300"
                >
                  VIEW MERCH
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
