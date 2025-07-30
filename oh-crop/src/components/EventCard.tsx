type Props = { type: string; title: string; desc: string };
export default function EventCard({ type, title, desc }: Props) {
  return (
    <div className="flex items-center bg-[#F6E0B5] border border-black rounded-lg p-5 w-[500px] max-w-[95vw] h-32 gap-5">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 bg-red-200 rounded" />
        <span className="uppercase text-xs font-bold mt-2">{type}</span>
        <span className="text-[10px] text-gray-600">date</span>
      </div>
      <div className="flex-1">
        <span className="block font-bold mb-2">{title}</span>
        <p>{desc}</p>
        <button className="bg-orange-600 py-1 px-3 text-white rounded text-xs mt-1">Read more</button>
      </div>
      <div className="w-20 h-16 bg-gray-200 rounded" />
    </div>
  );
}
