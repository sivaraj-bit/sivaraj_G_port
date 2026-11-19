import { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function Block({ title, children }) {
  return (
    <section className="mt-6">
      <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        {title}
      </h4>
      {children}
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const { caseStudy = {} } = project;

  // Open as a native modal dialog (handles focus trap and the Escape key)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  // Lock page scrolling while open
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      aria-labelledby="case-study-title"
      className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-2xl border border-line bg-card p-0 text-ink backdrop:bg-black/70"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-muted">
              {project.category} · {project.type}
            </p>
            <h3 id="case-study-title" className="mt-1 text-2xl font-bold">
              {project.name}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <X size={18} />
          </button>
        </div>

        <p className="mt-4 text-sm leading-7 text-muted">
          {project.description}
        </p>

        {project.demoNote && (
          <p className="mt-4 rounded-xl border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-ink">
            <span className="font-semibold text-brand">Trying the demo: </span>
            {project.demoNote}
          </p>
        )}

        {caseStudy.problem && (
          <Block title="The problem">
            <p className="text-sm leading-7 text-muted">{caseStudy.problem}</p>
          </Block>
        )}

        {caseStudy.built?.length > 0 && (
          <Block title="What I built">
            <ul className="space-y-2 text-sm text-muted">
              {caseStudy.built.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </Block>
        )}

        {caseStudy.challenge && (
          <Block title="A challenge I solved">
            <p className="text-sm leading-7 text-muted">
              {caseStudy.challenge}
            </p>
          </Block>
        )}

        {caseStudy.learned && (
          <Block title="What I learned">
            <p className="text-sm leading-7 text-muted">{caseStudy.learned}</p>
          </Block>
        )}

        <Block title="Tech stack">
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-ink"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Block>

        <div className="mt-8 grid grid-cols-2 gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-brand py-3 text-sm font-semibold text-page transition-colors hover:bg-brand-dark"
          >
            Live Demo
            <ArrowUpRight size={16} />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-line py-3 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <FaGithub size={16} />
            GitHub
          </a>
        </div>
      </div>
    </dialog>
  );
}

export default ProjectModal;