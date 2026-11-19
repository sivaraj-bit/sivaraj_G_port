import { socialLinks } from "../data/socials";

function SocialSidebar() {
  return (
    <aside
      aria-label="Social links"
      className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 xl:flex"
    >
      <span className="h-16 w-px bg-line" aria-hidden="true" />

      {socialLinks.map(({ name, href, icon: Icon, external }) => (
        <a
          key={name}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          aria-label={name}
          className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-page"
        >
          <Icon size={18} />

          {/* Name label that slides out on hover or keyboard focus */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-full ml-3 -translate-x-1 whitespace-nowrap rounded-md border border-line bg-card px-3 py-1 text-xs font-medium text-ink opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
          >
            {name}
          </span>
        </a>
      ))}

      <span className="h-16 w-px bg-line" aria-hidden="true" />
    </aside>
  );
}

export default SocialSidebar;