import { ArrowUp, ArrowUpRight } from "lucide-react";
import projects from "../data/projects";
import { navLinks } from "../data/navLinks";
import { socialLinks } from "../data/socials";

const featuredProjects = projects.filter((project) => project.featured);

function Footer() {
  const year = new Date().getFullYear();
  const email = socialLinks.find((link) => link.name === "Email");
  const emailAddress = email?.href.replace("mailto:", "");

  return (
    <footer className="border-t border-line bg-card text-ink">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Top band */}
        <div className="flex flex-col gap-6 border-b border-line py-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold md:text-3xl">
              Looking for a developer to join your team?
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
              I am open to entry-level full stack roles. Send me a message and
              I will get back to you.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {email && (
              <a
                href={email.href}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-page transition-colors duration-300 hover:bg-brand-dark"
              >
                Email Me
                <ArrowUpRight size={16} />
              </a>
            )}
            <a
              href="/Sivaraj_G_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-7 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
            >
              View My CV
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.2fr]">
          {/* About */}
          <div>
            <a
              href="#home"
              className="font-display text-2xl font-bold tracking-tight"
            >
              Sivaraj<span className="text-brand">.</span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
              Fresher full stack developer building responsive web applications
              with React, Node.js and MongoDB.
            </p>

            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Open to entry-level opportunities
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Featured projects */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Featured Projects
            </h3>
            <ul className="space-y-3">
              {featuredProjects.map((project) => (
                <li key={project.number}>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors duration-300 hover:text-brand"
                  >
                    {project.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors duration-300 hover:text-brand-dark"
                >
                  View all projects
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              {socialLinks
                .filter((link) => link.name !== "Resume")
                .map(({ name, href, icon: Icon, external }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-3 text-sm text-muted transition-colors duration-300 hover:text-brand"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors duration-300 group-hover:border-brand group-hover:text-brand">
                        <Icon size={15} />
                      </span>
                      <span className="break-all">
                        {name === "Email" ? emailAddress : name}
                      </span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-6 text-sm text-muted sm:flex-row">
          <p>
            &copy; {year}{" "}
            <span className="font-medium text-ink">Sivaraj G.</span> All rights
            reserved.
          </p>

          <p className="text-xs">Built with React, Vite and Tailwind CSS</p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 font-medium text-ink transition-colors duration-300 hover:text-brand"
          >
            Back to Top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;