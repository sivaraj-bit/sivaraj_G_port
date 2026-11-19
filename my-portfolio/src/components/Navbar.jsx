import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "../data/navLinks";
import { socialLinks } from "../data/socials";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.substring(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    // The Contact section is short, so activate it when the page reaches the bottom
    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;
      if (atBottom) setActiveSection("contact");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-line bg-page/90 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="font-display text-2xl font-bold tracking-tight text-ink"
        >
          Sivaraj<span className="text-brand">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 text-sm font-medium transition-colors duration-300 ${
                  isActive ? "text-brand" : "text-ink hover:text-brand"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-brand transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Right side: theme toggle, Hire Me (desktop), menu button (mobile) */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-page transition-colors duration-300 hover:bg-brand-dark md:inline-flex"
          >
            Hire Me
            <ArrowUpRight size={16} />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-brand hover:text-brand md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-page px-6 pb-6 pt-4 md:hidden"
        >
          <div className="flex flex-col">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className={`border-b border-line py-3 text-base font-medium transition-colors duration-300 ${
                    isActive ? "text-brand" : "text-ink hover:text-brand"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-5 flex items-center justify-center gap-1.5 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-page transition-colors duration-300 hover:bg-brand-dark"
          >
            Hire Me
            <ArrowUpRight size={16} />
          </a>

          <div className="mt-5 flex justify-center gap-3">
            {socialLinks.map(({ name, href, icon: Icon, external }) => (
              <a
                key={name}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-ink transition-colors duration-300 hover:bg-brand hover:text-page"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;