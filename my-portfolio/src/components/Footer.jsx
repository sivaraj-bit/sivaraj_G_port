import { ArrowUp, ArrowUpRight } from "lucide-react";
import { navLinks } from "../data/navLinks";
import { socialLinks } from "../data/socials";

function Footer() {
  const year = new Date().getFullYear();
  const email = socialLinks.find((link) => link.name === "Email");

  return (
    <footer className="border-t border-line bg-card px-6 pt-14 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="font-display text-2xl font-bold tracking-tight text-ink"
            >
              Sivaraj<span className="text-brand">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
              Fresher full stack developer building responsive web applications
              with React, Node.js and MongoDB.
            </p>

            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-xs text-ink">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Open to entry-level opportunities
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink">
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

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink">
              Let&apos;s Connect
            </h3>

            <a
              href={email.href}
              className="break-all text-sm text-muted transition-colors duration-300 hover:text-brand"
            >
              {email.href.replace("mailto:", "")}
            </a>

            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ name, href, icon: Icon, external }) => (
                <a
                  key={name}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  aria-label={name}
                  title={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-page"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <a
              href="/Sivaraj_G_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors duration-300 hover:text-brand-dark"
            >
              View my CV
              <ArrowUpRight size={16} />
            </a>
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
            className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors duration-300 hover:text-brand"
          >
            Back to Top
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;