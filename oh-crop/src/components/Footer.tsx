import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white flex flex-col items-center m-0 p-0">
      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee text-lg font-bold flex items-center h-10 select-none" aria-label="Scrolling OhCrop Welcome">
          {/* Enough spans to seamlessly loop */}
          <span className="mx-4">◆ OHCROP.WELCOME</span>
          <span className="mx-4">◆ OHCROP.WELCOME</span>
          <span className="mx-4">◆ OHCROP.WELCOME</span>
          <span className="mx-4">◆ OHCROP.WELCOME</span>
          <span className="mx-4">◆ OHCROP.WELCOME</span>
        </div>
      </div>
      {/* Socials */}
      <div className="my-3">
        <SocialIcons />
      </div>
    </footer>
  );
}
