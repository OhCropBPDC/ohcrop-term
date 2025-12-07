
'use client';
import { Suspense, lazy, useState } from 'react';
const Lanyard = lazy(() => import('../../components/Lanyard'));


export default function MembershipPage() {
  const [showLanyard, setShowLanyard] = useState(true);

  const handleJoinClick = () => {
    // window.open('https://forms.google.com/your-form-url', '_blank');
    // console.log('Opening membership application form...');
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center bg-about-gradient">
      {/* Animated About-style background with creative hand-coded CSS animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="ohcrop-bg-animated w-full h-full" />
      </div>

      {/* Lanyard/ID Card - lazy loaded, animated */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px] w-full py-12 animate-fadein">
        <Suspense fallback={<div className="w-full h-[500px] flex items-center justify-center text-white text-xl">Loading ID Card...</div>}>
          {showLanyard && (
            <Lanyard
              position={[0, 0, 20]}
              gravity={[0, -30, 0]}
              fov={25}
              transparent={true}
              onCardClick={handleJoinClick}
            />
          )}
        </Suspense>
      </div>

      {/* Main Content - call to action */}
      {/* <div className="relative z-20 w-full max-w-2xl mx-auto px-4 py-8 flex flex-col items-center">
        <h2 className="text-4xl font-black text-white mb-4 drop-shadow-lg tracking-tight text-center">Become a Member</h2>
        <p className="text-lg text-gray-200 mb-6 text-center max-w-xl">
          Join OhCrop to access exclusive events, creative resources, and a vibrant design community. Tap the ID card to apply!
        </p>
        <button
          onClick={handleJoinClick}
          className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Apply for Membership
        </button>
      </div> */}

      {/* Mobile Instructions */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 lg:hidden z-20">
        <div className="bg-black/30 backdrop-blur-sm rounded-full px-6 py-3">
          <p className="text-white text-sm text-center font-medium">
            Tap the white badge on the lanyard ☝️
          </p>
        </div>
      </div>
    </div>
  );
}
