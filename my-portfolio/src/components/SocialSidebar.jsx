import { socialLinks } from "../data/socials";

function SocialSidebar() {
  return (
    <aside
      aria-label="Social links"
      className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex"
    >
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
    </aside>
  );
}

export default SocialSidebar;