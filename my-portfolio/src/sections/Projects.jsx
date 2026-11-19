import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const filters = ["All", "Frontend", "Full Stack", "API"];

// Featured projects first; the sort is stable, so the rest keep their order
const orderedProjects = [...projects].sort(
  (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
);

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? orderedProjects
      : orderedProjects.filter((project) => project.type === activeFilter);

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
          </p>
        </div>

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
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
              onOpenCaseStudy={setSelectedProject}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="py-10 text-center text-muted">No projects found.</p>
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