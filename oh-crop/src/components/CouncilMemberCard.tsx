import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

interface CouncilMemberCardProps {
  name: string;
  info: string;
  color: "orange" | "blue";
}

export default function CouncilMemberCard({ name, info, color }: CouncilMemberCardProps) {
  return (
    <div
      className={`flex flex-col rounded-2xl w-48 h-64 p-3 shadow-xl border border-[#311B0B] ${
        color === "orange" ? "bg-[#EC6A24]" : "bg-[#8AA3BD]"
      }`}
      style={{ boxShadow: "3px 5px 0 #222" }}
    >
      <div className="rounded-lg bg-[repeating-linear-gradient(135deg,#ccc_0_15px,#eee_15px_30px)] h-24 mb-3 border border-gray-300" />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className={`font-bold text-lg mt-2 leading-none ${color === "orange" ? "text-[#BB5223]" : "text-[#233554]"}`}>{name}</h3>
          <p className="text-xs leading-snug text-black">{info}</p>
        </div>
        <div className="flex space-x-4 mt-3">
          <a href="#" aria-label="Instagram"><FaInstagram size={20} /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
          <a href="#" aria-label="GitHub"><FaGithub size={20} /></a>
        </div>
      </div>
    </div>
  );
}
