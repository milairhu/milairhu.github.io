import type { FunctionComponent } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import leetCodeIcon from "../../icons/leetcode.svg";

interface ContactItem {
  label: string;
  detail: string;
  href: string;
  icon: "github" | "linkedin" | "leetcode";
}

const contactItems: ContactItem[] = [
  { label: "GitHub", detail: "@milairhu", href: "https://github.com/milairhu", icon: "github" },
  { label: "LinkedIn", detail: "/in/hugo-milair", href: "https://www.linkedin.com/in/hugo-milair/", icon: "linkedin" },
  { label: "LeetCode", detail: "@HugoMil", href: "https://leetcode.com/HugoMil/", icon: "leetcode" },
];

interface ContactIconProps {
  type: ContactItem["icon"];
}

const ContactIcon: FunctionComponent<ContactIconProps> = ({ type }) => {
  if (type === "github") return <FaGithub aria-hidden="true" />;
  if (type === "linkedin") return <FaLinkedin aria-hidden="true" />;
  return <img src={leetCodeIcon} alt="" className="h-4 w-4 brightness-0 invert" />;
};

const ContactBar: FunctionComponent = () => (
  <ul className="grid gap-px bg-ink-700 sm:grid-cols-3">
    {contactItems.map(({ label, detail, href, icon }) => (
      <li key={label} className="bg-black">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-4 py-4 text-ink-300 transition-colors hover:bg-ink-900 hover:text-ink-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-signal"
        >
          <span className="text-base text-ink-400 transition-colors group-hover:text-signal">
            <ContactIcon type={icon} />
          </span>
          <span>
            <span className="block font-mono text-xs uppercase tracking-[0.12em]">{label}</span>
            <span className="mt-0.5 block text-xs text-ink-400">{detail}</span>
          </span>
        </a>
      </li>
    ))}
  </ul>
);

export default ContactBar;
