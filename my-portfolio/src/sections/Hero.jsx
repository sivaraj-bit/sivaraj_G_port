import { ArrowDown, ArrowUpRight } from "lucide-react";
import projects from "../data/projects";
import { socialLinks } from "../data/socials";

const roles = [
  { label: "Full Stack Developer", delay: "0s" },
  { label: "MERN Stack Developer", delay: "-6s" },
  { label: "React Developer", delay: "-3s" },
];

// Keep this list in line with your Skills section
const techStack = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "JavaScript",
];

// Email, GitHub and LinkedIn only (the CV has its own button)
const heroLinks = socialLinks.filter((link) => link.name !== "Resume");

// Counted from projects.js, so they stay correct when you add projects
const fullStackCount = projects.filter(
  (project) => project.type === "Full Stack"
).length;

const stats = [
  { value: String(projects.length), label: "Projects built" },
  { value: String(fullStackCount), label: "Full stack apps" },
  { value: "2026", label: "B.Sc. Data Science graduate" },
];

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-page px-6 pb-16 pt-28 text-ink md:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* Left content */}
          <div>
            <p className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-xs font-medium text-muted sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Open to entry-level opportunities
            </p>

            <p
              className="animate-fade-up text-lg text-muted sm:text-xl"
              style={{ animationDelay: "0.1s" }}
            >
              Hi, I&apos;m
            </p>

            <h1
              className="animate-fade-up text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ animationDelay: "0.15s" }}
            >
              Sivaraj G<span className="text-brand">.</span>
            </h1>

            {/* Animated role */}
            <div
              className="relative mb-6 mt-3 h-9 animate-fade-up overflow-hidden [perspective:700px]"
              style={{ animationDelay: "0.2s" }}
              aria-label="Full Stack Developer, MERN Stack Developer and React Developer"
            >
              {roles.map((role) => (
                <span
                  key={role.label}
                  className="role-animation"
                  style={{ animationDelay: role.delay }}
                  aria-hidden="true"
                >
                  {role.label}
                </span>
              ))}
            </div>

            <p
              className="max-w-xl animate-fade-up text-base leading-7 text-muted sm:text-lg"
              style={{ animationDelay: "0.25s" }}
            >
              I build responsive React interfaces and the Node.js, Express and
              MongoDB backends behind them. I am looking for an entry-level role
              where I can keep learning and ship real products.
            </p>

            {/* Tech stack */}
            <ul
              className="mt-6 flex animate-fade-up flex-wrap gap-2"
              style={{ animationDelay: "0.3s" }}
              aria-label="Technologies I use"
            >
              {techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line bg-card px-3.5 py-1.5 text-xs font-medium text-ink"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {/* Buttons and social links */}
            <div
              className="mt-8 flex animate-fade-up flex-wrap items-center gap-4"
              style={{ animationDelay: "0.35s" }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 rounded-full border border-brand bg-brand px-7 py-3 text-sm font-semibold text-page transition-colors duration-300 hover:border-brand-dark hover:bg-brand-dark"
              >
                View My Projects
                <ArrowUpRight size={16} />
              </a>

              <a
                href="/Sivaraj_G_CV.pdf"
                download="Sivaraj_G_CV.pdf"
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-7 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
              >
                Download CV
                <ArrowDown size={16} />
              </a>

              <div className="flex items-center gap-2 sm:ml-2">
                {heroLinks.map(({ name, href, icon: Icon, external }) => (
                  <a
                    key={name}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={name}
                    title={name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-brand"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Profile image */}
          <div
            className="flex animate-fade-up justify-center lg:justify-end"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative aspect-square w-[260px] sm:w-[320px] md:w-[360px] lg:w-[380px]">
              <div className="absolute inset-0 scale-105 rounded-full border-[3px] border-brand" />

              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-page bg-surface">
                <img
                  src="/images/profile1.png"
                  alt="Portrait of Sivaraj G."
                  width="380"
                  height="380"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="absolute bottom-8 right-2 h-6 w-6 rounded-full border-4 border-page bg-brand" />
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-bold text-brand sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-muted sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;