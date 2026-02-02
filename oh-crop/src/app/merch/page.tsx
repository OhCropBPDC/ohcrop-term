'use client';
import { motion } from 'framer-motion';
import { ShoppingCart, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

interface MerchAsset {
  id: string;
  text: string;
  asset: string;
  created: string;
  updated: string;
  collectionId: string;
  collectionName: string;
}

export default function MerchPage() {
  const [assets, setAssets] = useState<MerchAsset[]>([]);
  const [loading, setLoading] = useState(true);

  // Update this with your actual Google Form URL
  const GOOGLE_FORM_URL = 'https://forms.google.com/your-form-url';

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const pocketbaseUrl = process.env.NEXT_PUBLIC_POCKETBASE_URL;
        if (!pocketbaseUrl) {
          throw new Error('PocketBase URL not configured');
        }

        const response = await fetch(`${pocketbaseUrl}/api/collections/merch/records?sort=-created`);
        if (!response.ok) {
          throw new Error('Failed to fetch merch assets');
        }

        const data = await response.json();
        setAssets(data.items || []);
      } catch (err) {
        console.error('Error fetching merch assets:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAssets();
  }, []);

  const getAssetUrl = (item: MerchAsset) => {
    if (!item.asset) return null;
    const pocketbaseUrl = process.env.NEXT_PUBLIC_POCKETBASE_URL;
    return `${pocketbaseUrl}/api/files/${item.collectionId}/${item.id}/${item.asset}`;
  };

  const handleBuyClick = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  // Separate assets by type
  const reelAsset = assets.find(a => a.text?.toLowerCase().includes('reel'));
  const video3DAssets = assets.filter(a => 
    a.text?.toLowerCase().includes('3d-video')
  );
  const posterAssets = assets.filter(a => a.text?.toLowerCase().includes('poster') || a.text?.toLowerCase().includes('design'));
  const merchDesigns = assets.filter(a => a.text?.toLowerCase().includes('merch'));

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-black">
        <div className="text-white text-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full mx-auto mb-4"
          />
          <p className="text-lg font-semibold">Loading Merch Drop...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black overflow-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Reel Video Background */}
        {reelAsset && reelAsset.asset && (
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-30"
              key={getAssetUrl(reelAsset)}
            >
              <source src={getAssetUrl(reelAsset) || ''} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
          </div>
        )}

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight"
            style={{
              textShadow: '0 0 40px rgba(239, 68, 68, 0.5), 0 0 80px rgba(59, 130, 246, 0.3)',
            }}
          >
            OHCROP
            <br />
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              MERCH DROP
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Limited Edition Collection • Exclusive Designs • Street Culture
          </motion.p>

          {/* <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBuyClick}
            className="bg-gradient-to-r from-red-600 via-pink-600 to-blue-600 text-white font-bold text-lg px-12 py-5 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            ORDER NOW
            <ShoppingCart className="w-6 h-6" />
          </motion.button> */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 text-yellow-400 font-semibold text-sm tracking-widest"
          >
            ⚡ LIMITED STOCK AVAILABLE ⚡
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-sm"
        >
          <div className="flex flex-col items-center gap-2">
            <span>SCROLL TO EXPLORE</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-white/60 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Design Gallery Section */}
      {video3DAssets.length > 0 && (
        <section className="relative py-24 px-4 bg-gradient-to-b from-black via-red-950/20 to-black">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-center mb-16 text-white"
            >
              DESIGN{' '}
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                GALLERY
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* 3D Video Assets */}
              {video3DAssets.map((asset, index) => (
                <motion.div
                  key={asset.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-black"
                >
                  <video
                    key={getAssetUrl(asset)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                  >
                    <source src={getAssetUrl(asset) || ''} type="video/mp4" />
                  </video>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-black to-red-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              JOIN THE DROP
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Fill out the order form and secure your exclusive OhCrop merch.
              <br />
              Limited quantities available. First come, first served.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBuyClick}
              className="bg-gradient-to-r from-red-600 via-pink-600 to-blue-600 text-white font-bold text-xl px-16 py-6 rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 inline-flex items-center gap-3"
            >
              <ShoppingCart className="w-7 h-7" />
              CLAIM YOUR MERCH
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
