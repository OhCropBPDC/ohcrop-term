export default function MembershipPage() {
  return (
    <div className="w-full h-screen min-h-[480px] flex items-center justify-center bg-[#7b97ad] relative overflow-hidden">
      {/* Colored Stripe Background */}
    <div className="absolute top-0 left-0 w-full h-full z-0 flex">
      <div className="w-1/6 h-full bg-[#ea4b19]" />
      <div className="w-1/6 h-full bg-[#efca72]" />
      <div className="w-1/6 h-full bg-[#7b97ad]" />
      <div className="w-1/6 h-full bg-[#ea4b19]" />
      <div className="w-1/6 h-full bg-[#efca72]" />
      <div className="w-1/6 h-full bg-[#7b97ad]" />
    </div>
      {/* Main Card */}
      <div className="relative z-10 w-full flex justify-center items-center">
        <div className="bg-[#F9EDDF] rounded-xl border border-black shadow-lg flex flex-row items-center px-10 py-8 max-w-4xl w-full"
          style={{ minHeight: '340px', maxHeight: '90vh' }}>
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-between min-w-[210px]">
            <div>
              <h2 className="text-4xl font-extrabold text-black mb-1 leading-tight">Become<br />a member</h2>
              <p className="text-black mb-8 text-[1.12rem] leading-snug">
                something about the advantages and a jdkn dodn dknajnd kljdkdla dnkjdldk dnlkdnd dnksndkajdn dakjndkajnd akdnll
              </p>
            </div>
            <div className="flex w-full justify-center mt-3">
              <button className="bg-[#89a8c2] hover:bg-[#617891] border border-black text-black px-10 py-2 rounded shadow font-semibold text-[1.05rem]"
                style={{ boxShadow: "2px 3px 0 #222" }}>
                Join us
              </button>
            </div>
          </div>
          {/* Right: SVG Icon */}
          <div className="flex-shrink-0 ml-8 flex items-center justify-center min-w-[128px]">
            <img src="/assets/image.png" alt="calendar" className="w-5 h-70 object-contain mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
