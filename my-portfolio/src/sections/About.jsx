import { ArrowUpRight, LayoutTemplate, RefreshCw, Server } from "lucide-react";
import { socialLinks } from "../data/socials";

const email = socialLinks.find((link) => link.name === "Email");

// Edit this list to what you are actually learning right now.
const learning = ["Node.js", "MongoDB", "Firebase"];

// Facts shown in the card next to the introduction
const facts = [
  { label: "Degree", value: "B.Sc. Data Science" },
  { label: "College", value: "Nehru Memorial College (Autonomous), Trichy" },
  { label: "Graduated", value: "2026" },
  { label: "Focus", value: "Full stack web development (MERN)" },
  { label: "Status", value: "Open to entry-level roles" },
];

// How you work. Keep these true to how you really build projects.
const approach = [
  {
    Icon: LayoutTemplate,
    title: "Interface first",
    text: "I start with a clean layout that works on every screen size.",
  },
  {
    Icon: Server,
    title: "Backend that fits",
    text: "I add the Node.js, Express and MongoDB logic each project needs.",
  },
  {
    Icon: RefreshCw,
    title: "Improve as I learn",
    text: "I go back to my projects and refine them as my skills grow.",
  },
];

// Replace the vague periods (for example "The beginning") with real months
// and years when you know them.
const journey = [
  {
    number: "01",
    period: "2023 – 2026",
    title: "Education",
    subtitle: "B.Sc. Data Science",
    detail: "Nehru Memorial College (Autonomous), Trichy",
    description:
      "Built a foundation in programming, logical thinking, data analysis and problem solving.",
    side: "left",
  },
  {
    number: "02",
    period: "The beginning",
    title: "Frontend Development",
    subtitle: "HTML · CSS · JavaScript",
    description:
      "Started building responsive websites and learned how to turn ideas into working pages.",
    side: "right",
  },
  {
    number: "03",
    period: "Growing further",
    title: "React Development",
    subtitle: "React · Tailwind CSS",
    description:
      "Learned component-based development and built interactive web applications.",
    side: "left",
  },
  {
    number: "04",
    period: "Currently",
    title: "MERN Stack Development",
    subtitle: "Node.js · Express · MongoDB",
    description:
      "Building full stack applications, improving my skills and preparing for my first developer role.",
    side: "right",
  },
];

function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-page px-6 py-24 text-ink md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Introduction and quick facts */}
        <div className="mb-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              About Me
            </p>
            <h2 className="text-4xl font-bold md:text-6xl">
              My journey so far<span className="text-brand">.</span>
            </h2>

            <div className="mt-8 space-y-4 leading-7 text-muted">
              <p>
                I graduated in 2026 with a B.Sc. in Data Science from Nehru
                Memorial College. Data science gave me a strong base in logic
                and problem solving, and building websites is what made me want
                to become a developer.
              </p>
              <p>
                I like turning an idea into something people can use. I build
                the interface first, add the backend it needs, and keep
                improving each project as I learn.
              </p>
              <p className="text-ink">
                I am open to entry-level opportunities where I can contribute,
                learn from experienced developers and keep growing.
              </p>
            </div>
          </div>

          {/* Quick facts */}
          <aside
            aria-label="Quick facts"
            className="self-start rounded-2xl border border-line bg-card p-7 md:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Quick facts
            </p>

            <dl className="mt-5 divide-y divide-line">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6"
                >
                  <dt className="w-24 shrink-0 text-sm text-muted">
                    {fact.label}
                  </dt>
                  <dd className="text-sm font-medium text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>

            {email && (
              <a
                href={email.href}
                className="mt-4 inline-flex items-center gap-1.5 break-all text-sm font-medium text-brand transition-colors duration-300 hover:text-brand-dark"
              >
                {email.href.replace("mailto:", "")}
                <ArrowUpRight size={16} className="shrink-0" />
              </a>
            )}
          </aside>
        </div>

        {/* How I work */}
        <div className="mb-20">
          <h3 className="mb-6 text-2xl font-bold">How I work</h3>
          <ul className="grid gap-5 md:grid-cols-3">
            {approach.map(({ Icon, title, text }) => (
              <li
                key={title}
                className="rounded-2xl border border-line bg-card p-6 transition-colors duration-300 hover:border-brand"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-brand">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h4 className="mt-4 font-semibold">{title}</h4>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-0 left-4 top-0 w-px -translate-x-1/2 bg-line md:left-1/2" />

          <ol>
            {journey.map((item) => (
              <li
                key={item.number}
                className="relative pb-14 pl-14 last:pb-0 md:grid md:grid-cols-2 md:gap-20 md:pl-0"
              >
                <span className="absolute left-4 top-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-page bg-brand md:left-1/2">
                  <span className="h-2 w-2 rounded-full bg-page" />
                </span>

                <div
                  className={
                    item.side === "left"
                      ? "md:col-start-1 md:text-right"
                      : "md:col-start-2"
                  }
                >
                  <p className="mb-2 text-sm font-semibold tracking-wide text-brand">
                    {item.period}
                  </p>
                  <h3 className="mb-1 text-2xl font-bold md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mb-2 text-sm font-medium text-brand">
                    {item.subtitle}
                  </p>
                  {item.detail && (
                    <p className="mb-2 text-sm font-medium text-ink">
                      {item.detail}
                    </p>
                  )}
                  <p
                    className={`max-w-sm text-sm leading-7 text-muted ${
                      item.side === "left" ? "md:ml-auto" : ""
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Currently learning */}
        {learning.length > 0 && (
          <div className="mx-auto mt-16 max-w-5xl rounded-2xl border border-line bg-card p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Currently learning
            </p>
            <p className="mt-2 text-sm text-muted">
              I am strengthening these skills through new projects.
            </p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {learning.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Call to action */}
        <div className="mx-auto mt-6 flex max-w-5xl flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-card p-7 sm:flex-row sm:items-center md:p-9">
          <div>
            <p className="text-xl font-bold">What&apos;s next?</p>
            <p className="mt-1 text-sm text-muted">
              I am looking for my first role as a full stack developer.
              Let&apos;s talk if you have an opening.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand px-7 py-3 text-sm font-semibold text-page transition-colors duration-300 hover:bg-brand-dark"
          >
            Get in Touch
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;