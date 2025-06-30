import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://github.com/Shikha-9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/shikha-chaudhary-7b6b61252"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="mailto:shigautam95@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope size={24} />
      </a>
    </footer>
  );
};

export default Footer;
