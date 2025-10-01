// src/app/gallery/page.tsx
const galleryImages = [
  { src: "/assets/gallery/event1.jpg", caption: "Design Workshop", date: "July 2024" },
  { src: "/assets/gallery/event2.png", caption: "Annual Meet", date: "June 2024" },
  { src: "/assets/gallery/event3.png", caption: "Gala Night", date: "May 2024" },
  { src: "/assets/gallery/event4.png", caption: "Gala Night", date: "May 2024" },
  { src: "/assets/gallery/event5.jpg", caption: "Gala Night", date: "May 2024" },
  { src: "/assets/gallery/event6.png", caption: "Gala Night", date: "May 2024" },
    { src: "/assets/gallery/event7.png", caption: "Gala Night", date: "May 2024" },
    { src: "/assets/gallery/event8.jpeg", caption: "Gala Night", date: "May 2024" },
    { src: "/assets/gallery/event9.JPG", caption: "Gala Night", date: "May 2024" },
    { src: "/assets/gallery/event10.HEIC", caption: "Gala Night", date: "May 2024" },

];

export default function GalleryPage() {
  return (
    <div className="min-h-screen w-full bg-[#F9EDDF]">
      {/* HERO */}
      <section className="w-full bg-[#7b97ad] py-8">
        <h2 className="text-4xl font-bold text-black text-center mb-1">OhCrop Events!!</h2>
        <p className="text-black text-lg text-center mb-4">
          A look back at our events!
        </p>
      </section>

      {/* IMAGES */}
      <section className="flex flex-wrap items-start justify-center gap-10 px-8 py-8 bg-[#F9EDDF]">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-[#f6c05c] border border-black rounded-lg shadow-lg p-4 w-72"
            style={{ boxShadow: '3px 5px 0 #222' }}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="object-cover rounded-md border border-[#7b97ad] mb-4 w-[256px] h-[180px]"
              style={{ background: "repeating-linear-gradient(135deg,#f6f6f6 0 10px,#ccc 10px 20px)" }}
            />
            <span className="text-lg font-semibold text-black text-center">{img.caption}</span>
            <span className="text-sm text-[#ea4b19] text-center mt-1">{img.date}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
