import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaLink } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-6 mt-3 text-2xl justify-center">
      <a href="https://www.instagram.com/ohcrop.bpdc/" aria-label="Instagram"><FaInstagram /></a>
      <a href="mailto:ohcrop@dubai.bits-pilani.ac.in" aria-label="Email"><FaEnvelope /></a>
      <a href="https://github.com/OhCropBPDC" aria-label="GitHub"><FaGithub /></a>
      <a href="https://www.linkedin.com/company/ohcrop-bpdc/?originalSubdomain=ae" aria-label="LinkedIn"><FaLinkedin /></a>
      <a href="https://linktr.ee/ohcrop_bpdc" aria-label="Linktree"><FaLink /></a>
    </div>
  );
}
