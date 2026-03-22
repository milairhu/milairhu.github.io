import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ReactComponent as LeetCodeSVG } from "../../icons/leetcode.svg";

const contactItems = [
  {
    label: "GitHub",
    icon: <FaGithub size={22} />,
    href: "https://github.com/milairhu",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin size={22} />,
    href: "https://www.linkedin.com/in/hugo-milair/",
  },
  {
    label: "LeetCode",
    icon: <LeetCodeSVG className="h-6 w-6" />,
    href: "https://leetcode.com/HugoMil/",
  },
];

const ContactBar: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {contactItems.map(({ label, icon, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/20"
          aria-label={label}
        >
          <span className="absolute -bottom-7 text-xs font-semibold text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {label}
          </span>
          {icon}
        </a>
      ))}
    </div>
  );
};

export default ContactBar;
