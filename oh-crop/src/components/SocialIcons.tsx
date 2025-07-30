import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-6 mt-3 text-2xl justify-center">
      <a href="https://instagram.com/" aria-label="Instagram"><FaInstagram /></a>
      <a href="mailto:mail@example.com" aria-label="Email"><FaEnvelope /></a>
      <a href="https://github.com/" aria-label="GitHub"><FaGithub /></a>
      <a href="https://linkedin.com/" aria-label="LinkedIn"><FaLinkedin /></a>
      <a href="https://x.com/" aria-label="X (Twitter)"><FaTwitter /></a>
    </div>
  );
}
