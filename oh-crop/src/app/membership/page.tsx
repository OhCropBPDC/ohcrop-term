'use client';
import { useState } from 'react';
import Lanyard from '../../components/Lanyard'; // Adjust path as needed

export default function MembershipPage() {
  const [showLanyard, setShowLanyard] = useState(true);

  const handleJoinClick = () => {
    // Replace with your Google Form URL
    window.open('https://forms.google.com/your-form-url', '_blank');
    
    // Optional: Show a toast or feedback that the form is opening
    console.log('Opening membership application form...');
  };

  return (
    <div className="w-full min-h-screen bg-[#7b97ad] relative overflow-hidden">
      {/* Colored Stripe Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 flex">
        <div className="w-1/6 h-full bg-[#ea4b19]" />
        <div className="w-1/6 h-full bg-[#efca72]" />
        <div className="w-1/6 h-full bg-[#7b97ad]" />
        <div className="w-1/6 h-full bg-[#ea4b19]" />
        <div className="w-1/6 h-full bg-[#efca72]" />
        <div className="w-1/6 h-full bg-[#7b97ad]" />
      </div>

      {/* Centered Lanyard hanging from navbar */}
      {showLanyard && (
        <Lanyard
          position={[0, 0, 20]}
          gravity={[0, -30, 0]}
          fov={25}
          transparent={true}
          onCardClick={handleJoinClick}
        />
      )}

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[600px] gap-8 lg:gap-16">

          {/* Right Side - Placeholder or additional content */}
          <div className="flex-1 order-1 lg:order-2 relative">
            {!showLanyard && (
              <div className="w-full h-[500px] lg:h-[600px] relative flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="bg-black/20 backdrop-blur-sm rounded-lg px-6 py-4">
                    <p className="mb-4 text-lg">Loading 3D lanyard...</p>
                    <button 
                      onClick={() => setShowLanyard(true)}
                      className="bg-[#F9EDDF] text-black px-6 py-3 rounded-lg border border-black hover:bg-opacity-90 transition-all duration-200 font-semibold"
                    >
                      Show Lanyard
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

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
