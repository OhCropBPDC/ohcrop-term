import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

interface SocialLinks {
  instagram?: string;
  linkedin?: string;
  github?: string;
}

interface CouncilMemberCardProps {
  name: string;
  info: string;
  color: "orange" | "blue";
  imageSrc: string;
  socialLinks?: SocialLinks;
}

export default function CouncilMemberCard({
  name,
  info,
  color,
  imageSrc,
  socialLinks = {},
}: CouncilMemberCardProps) {
  return (
    <div
      className={`rounded-2xl w-48 h-64 p-3 shadow-xl border border-[#311B0B] flex flex-col items-center justify-between ${
        color === "orange" ? "bg-[#EC6A24]" : "bg-[#8AA3BD]"
      }`}
      style={{ boxShadow: "3px 5px 0 #222" }}
    >
      {/* IMAGE */}
      <img
        src={imageSrc}
        alt={`${name} photo`}
        className="rounded-lg border border-gray-300 object-cover w-[90%] h-30 mb-2"
      />

      {/* NAME AND ROLE */}
      <div className="w-full text-center mb-2">
        <h3
          className={`font-bold text-base leading-snug ${
            color === "orange" ? "text-black" : "text-[#233554]"
          }`}
        >
          {name}
        </h3>
        <p className="text-xs text-black">{info}</p>
      </div>

      {/* SOCIAL ICONS */}
      {Boolean(
        socialLinks.instagram || socialLinks.linkedin || socialLinks.github
      ) && (
        <div className="flex justify-center gap-6">
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          )}
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
