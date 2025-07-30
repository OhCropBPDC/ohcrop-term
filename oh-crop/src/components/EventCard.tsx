type Props = { type: string; title: string; desc: string };

export default function EventCard({ type, title, desc }: Props) {
  return (
    <div className="flex items-center justify-between w-full bg-[#ffc55b] border-2 border-black rounded-xl shadow-lg px-8 py-6"
         style={{ minHeight: "124px" }}>
      {/* Left: Calendar image, label, text */}
      <div className="flex items-start gap-3 flex-1">
        <div className="flex flex-col items-center mr-2">
            <img src="/assets/calendar.png" alt="calendar" className="w-8 h-8 object-contain mt-1" />
            <div className="text-xs text-black mt-1">date</div>
        </div>
        <div>
            <span className="uppercase text-xs font-bold text-[#6f2000]">{type}</span>
            <div className="text-lg font-semibold text-[#6f2000]">{title}</div>
            <div className="text-sm text-black">{desc}</div>
            <button className="mt-3 bg-[#EA4B19] hover:bg-[#a73f14] text-white px-4 py-1 rounded border border-black shadow text-xs font-semibold">
                Read more
            </button>
        </div>
      </div>
      {/* Right: checkerboard placeholder */}
      <div className="w-32 h-20 rounded-lg bg-[repeating-linear-gradient(135deg,#eee_0_16px,#ccc_16px_32px)] border border-gray-400 ml-8"/>
    </div>
  );
}
