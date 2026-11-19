import { ArrowUpRight } from "lucide-react";

// Edit this list to what you are actually learning right now.
const learning = ["Node.js", "MongoDB", "Firebase"];

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
        {/* Heading and introduction */}
        <div className="mb-20 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              About Me
            </p>
            <h2 className="text-4xl font-bold md:text-6xl">
              My journey so far<span className="text-brand">.</span>
            </h2>
          </div>

          <div className="space-y-4 leading-7 text-muted">
            <p>
              I am a B.Sc. Data Science student at Nehru Memorial College,
              graduating in 2026. Studying data science gave me a strong base in
              logic and problem solving, and building websites is what made me
              want to become a developer.
            </p>
            <p>
              I like turning an idea into something people can use. I start with
              a clean, responsive interface, then add the logic and the backend
              it needs, and I keep improving each project as I learn.
            </p>
            <p className="text-ink">
              I am open to entry-level opportunities where I can contribute,
              learn from experienced developers and keep growing.
            </p>
          </div>
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