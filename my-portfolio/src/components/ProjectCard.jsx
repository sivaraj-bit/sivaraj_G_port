import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project, onOpenCaseStudy }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = project.image && !imageFailed;

  return (
    <article className="group flex animate-fade-up flex-col overflow-hidden rounded-2xl border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand">
      {/* Screenshot */}
      <div className="relative h-52 overflow-hidden bg-surface">
        {showImage ? (
          <img
            src={project.image}
            alt={`${project.name} website preview`}
            width="600"
            height="400"
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center px-5 text-center">
            <span className="mb-3 text-xs uppercase tracking-[0.25em] text-muted">
              Preview coming soon
            </span>
            <h3 className="text-2xl font-bold text-ink">{project.name}</h3>
            <div className="mt-4 h-1 w-12 rounded-full bg-brand" />
          </div>
        )}

        {project.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold text-page">
            Featured
          </span>
        )}

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name} live demo`}
          className="absolute inset-0 flex items-center justify-center bg-page/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-page">
            View Project
            <ArrowUpRight size={16} />
          </span>
        </a>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold transition-colors group-hover:text-brand">
              {project.name}
            </h3>
            <p className="mt-0.5 text-xs text-muted">{project.category}</p>
          </div>

          <span className="shrink-0 rounded-full bg-brand/10 px-3 py-1 text-[11px] font-medium text-brand">
            {project.type}
          </span>
        </div>

        <p className="mt-4 text-sm leading-6 text-muted">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line bg-surface px-3 py-1 text-[11px] text-ink"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          {project.caseStudy && (
            <button
              type="button"
              onClick={() => onOpenCaseStudy(project)}
              className="mb-3 w-full rounded-full border border-brand/50 py-2.5 text-xs font-semibold text-brand transition-colors duration-300 hover:bg-brand hover:text-page"
            >
              Read Case Study
            </button>
          )}

          <div className="grid grid-cols-2 gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-brand py-3 text-xs font-semibold text-page transition-colors duration-300 hover:bg-brand-dark"
            >
              Live Demo
              <ArrowUpRight size={14} />
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-line py-3 text-xs font-semibold text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
            >
              <FaGithub size={14} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;