import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

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
      className={`rounded-2xl w-48 h-64 p-3 shadow-xl border border-[#311B0B] flex flex-col items-center justify-between 
        sm:w-48 sm:h-64 max-sm:w-[85vw] max-sm:max-w-[340px] max-sm:h-auto max-sm:p-4 max-sm:min-h-[280px]
        ${color === "orange" ? "bg-[#EC6A24]" : "bg-[#8AA3BD]"}`}
      style={{ boxShadow: "3px 5px 0 #222" }}
    >
      {/* IMAGE */}
      <img
        src={imageSrc}
        alt={`${name} photo`}
        className="rounded-lg border border-gray-300 object-cover w-[90%] h-30 mb-2 max-sm:w-full max-sm:h-40 max-sm:mb-3"
      />

      {/* NAME AND ROLE */}
      <div className="w-full text-center mb-2 max-sm:mb-3">
        <h3
          className={`font-bold text-base leading-snug max-sm:text-lg ${
            color === "orange" ? "text-black" : "text-[#233554]"
          }`}
        >
          {name}
        </h3>
        <p className="text-xs text-black max-sm:text-sm max-sm:mt-1">{info}</p>
      </div>

      {/* SOCIAL ICONS */}
      {Boolean(
        socialLinks.instagram || socialLinks.linkedin || socialLinks.github
      ) && (
        <div className="flex justify-center gap-6 max-sm:gap-8 max-sm:mt-2">
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-70 transition-opacity"
            >
              <FaInstagram size={20} className="max-sm:w-6 max-sm:h-6" />
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-70 transition-opacity"
            >
              <FaLinkedin size={20} className="max-sm:w-6 max-sm:h-6" />
            </a>
          )}
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:opacity-70 transition-opacity"
            >
              <FaGithub size={20} className="max-sm:w-6 max-sm:h-6" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
