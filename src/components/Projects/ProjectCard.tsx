import React from "react";
import { FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  technos: string[];
  Icon: IconType;
  accent: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  technos,
  Icon,
  accent,
}) => {
  return (
    <div className="group relative flex h-full w-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div
              className="absolute -inset-1 rounded-3xl opacity-70 blur-xl transition duration-500 group-hover:opacity-90"
              style={{ background: accent }}
            />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-white">
              <Icon size={30} />
            </div>
          </div>
          <div className="min-w-0">
            <h3 className="text-2xl font-semibold">{title}</h3>
          </div>
        </div>
      </div>
      <p className="mt-5 flex-1 text-sm text-white/70 leading-relaxed">
        {description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {technos.map((tech) => (
          <span
            key={tech}
            className="tag-pill text-xs text-white/90 border-white/20 bg-white/10"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Live repo
        </div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
        >
          <span>View on GitHub</span>
          <FaGithub size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
