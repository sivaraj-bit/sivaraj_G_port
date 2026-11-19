import { useEffect, useRef, useState } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGithub,
} from "react-icons/si";

// Edit the percentages here. They are a self-assessment, so keep them honest.
const skills = [
  { name: "HTML5", Icon: SiHtml5, percentage: 90 },
  { name: "CSS3", Icon: SiCss, percentage: 85 },
  { name: "JavaScript", Icon: SiJavascript, percentage: 75 },
  { name: "React.js", Icon: SiReact, percentage: 75 },
  { name: "Tailwind CSS", Icon: SiTailwindcss, percentage: 85 },
  { name: "Node.js", Icon: SiNodedotjs, percentage: 65 },
  { name: "Express.js", Icon: SiExpress, percentage: 65 },
  { name: "MongoDB", Icon: SiMongodb, percentage: 60 },
  { name: "Firebase", Icon: SiFirebase, percentage: 55 },
  { name: "Git & GitHub", Icon: SiGithub, percentage: 75 },
];

function getLevel(percentage) {
  if (percentage >= 80) return "Comfortable";
  if (percentage >= 60) return "Working knowledge";
  return "Still learning";
}

function Skills() {
  const gridRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="bg-page px-6 py-24 text-ink md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            My Skills
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted">
            The tools I use to build responsive, full stack web applications.
            The percentages are my own assessment of where I am today.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map(({ name, Icon, percentage }, index) => (
            <article
              key={name}
              className="group rounded-xl border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-surface text-3xl text-brand transition-transform duration-300 group-hover:scale-110">
                  <Icon aria-hidden="true" />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-ink">{name}</h3>
                  <p className="mt-1 text-xs text-muted">
                    <span className="font-medium text-brand">
                      {percentage}%
                    </span>{" "}
                    · {getLevel(percentage)}
                  </p>
                </div>
              </div>

              <div
                className="mt-5 h-2 w-full overflow-hidden rounded-full bg-line"
                role="progressbar"
                aria-label={`${name} self-assessed proficiency`}
                aria-valuenow={percentage}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full rounded-full bg-brand transition-[width] duration-1000 ease-out"
                  style={{
                    width: inView ? `${percentage}%` : "0%",
                    transitionDelay: `${index * 80}ms`,
                  }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;