import type { FunctionComponent } from "react";
import { FaGithub } from "react-icons/fa";
import type { IconType } from "react-icons";
import Tag from "../UI/Tag";

export interface Project {
  title: string;
  series?: string;
  description: string;
  link: string;
  technologies: string[];
  icon: IconType;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project, index }) => {
  const Icon = project.icon;

  return (
    <article className="project-card group">
      <div className="flex items-start justify-between gap-5">
        <span className="font-mono text-xs tracking-[0.12em] text-ink-500" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <Icon className="text-2xl text-ink-500 transition-colors group-hover:text-signal" aria-hidden="true" />
      </div>
      <div className="mt-10">
        {project.series && <p className="eyebrow mb-3">{project.series}</p>}
        <h2 className="font-mono text-xl font-medium tracking-[-0.025em] text-ink-50 sm:text-2xl">
          {project.title}
        </h2>
        <p className="mt-5 text-sm leading-7 text-ink-400">{project.description}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.technologies.map((technology) => <Tag key={technology}>{technology}</Tag>)}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-9 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-ink-300 transition-colors hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
        aria-label={`View ${project.title} on GitHub`}
      >
        <FaGithub aria-hidden="true" /> View repository <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
};

export default ProjectCard;
