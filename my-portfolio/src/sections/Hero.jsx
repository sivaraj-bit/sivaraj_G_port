import { ArrowDown, ArrowUpRight } from "lucide-react";

const roles = [
  { label: "Full Stack Developer", delay: "0s" },
  { label: "MERN Stack Developer", delay: "-6s" },
  { label: "React Developer", delay: "-3s" },
];

const stats = [
  { value: "9", label: "Projects built" },
  { value: "MERN", label: "Full stack focus" },
  { value: "React", label: "Frontend focus" },
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
              className="relative mb-5 mt-3 h-9 animate-fade-up overflow-hidden [perspective:700px]"
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

            <h2
              className="max-w-3xl animate-fade-up text-2xl font-semibold leading-snug sm:text-3xl md:text-4xl"
              style={{ animationDelay: "0.25s" }}
            >
              I build full stack web applications
              <span className="text-brand"> from interface to database.</span>
            </h2>

            <p
              className="mt-5 max-w-2xl animate-fade-up text-sm leading-7 text-muted sm:text-base"
              style={{ animationDelay: "0.3s" }}
            >
              I am a fresher full stack developer who enjoys building clean,
              responsive interfaces and applications that solve real problems.
              I work with React on the frontend and with Node.js, Express and
              MongoDB on the backend, and I keep learning better ways to build
              for the web.
            </p>

            {/* Buttons */}
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
                href="#contact"
                className="rounded-full border border-brand px-7 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-brand hover:text-page"
              >
                Contact Me
              </a>

              <a
                href="/Sivaraj_G_CV.pdf"
                download="Sivaraj_G_CV.pdf"
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-7 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
              >
                Download CV
                <ArrowDown size={16} />
              </a>
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
        <div className="mt-14 grid max-w-4xl grid-cols-2 gap-8 border-t border-line pt-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-bold text-brand sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;