import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projects from "../data/projects";
import { socialLinks } from "../data/socials";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const filters = ["All", "Frontend", "Full Stack", "API"];

const github = socialLinks.find((link) => link.name === "GitHub");

// Featured projects first; the sort is stable, so the rest keep their order
const orderedProjects = [...projects].sort(
  (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
);

// How many projects each filter shows (counted from projects.js)
function getCount(filter) {
  return filter === "All"
    ? projects.length
    : projects.filter((project) => project.type === filter).length;
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? orderedProjects
      : orderedProjects.filter((project) => project.type === activeFilter);

  const total = filteredProjects.length;

  return (
    <section
      id="projects"
      className="bg-page px-6 py-24 text-ink md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Portfolio
          </p>

          <h2 className="text-4xl font-bold md:text-6xl">
            My Latest <span className="text-brand">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-muted">
            A selection of projects I have built while learning web
            development, from static websites to full stack applications.
            Start with the featured ones.
          </p>
        </div>

        {/* Filters */}
        <div
          className="mb-12 flex flex-wrap justify-center gap-3"
          role="group"
          aria-label="Filter projects"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`rounded-full border px-6 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "border-brand bg-brand text-page"
                    : "border-line bg-surface text-ink hover:border-brand hover:text-brand"
                }`}
              >
                {filter}
                <span className="ml-1.5 text-xs font-medium opacity-70">
                  ({getCount(filter)})
                </span>
              </button>
            );
          })}
        </div>

        {/* Announces the result to screen readers when the filter changes */}
        <p className="sr-only" role="status" aria-live="polite">
          Showing {total} {total === 1 ? "project" : "projects"}
        </p>

        {/* Grid (the key restarts the fade-in whenever the filter changes) */}
        <div
          key={activeFilter}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
              onOpenCaseStudy={setSelectedProject}
            />
          ))}
        </div>

        {total === 0 && (
          <p className="py-10 text-center text-muted">No projects found.</p>
        )}

        {/* More on GitHub */}
        {github && (
          <div className="mt-14 text-center">
            <p className="mb-4 text-sm text-muted">
              Want to see more of my code?
            </p>
            <a
              href={github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
            >
              <FaGithub size={16} />
              See all my repositories on GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          key={selectedProject.number}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;