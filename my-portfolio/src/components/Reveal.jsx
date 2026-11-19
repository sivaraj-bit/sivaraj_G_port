import { useLayoutEffect, useRef } from "react";

// Reveals each main block inside a section (heading, text, grids, cards)
// when it scrolls into view, with a small stagger between blocks that
// appear at the same time.
function Reveal({ children }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const wrapper = ref.current;
    if (!wrapper) return;

    // Without IntersectionObserver, leave everything visible
    if (typeof IntersectionObserver === "undefined") return;

    // wrapper > section > container > blocks
    const items = wrapper.querySelectorAll(":scope > section > div > *");
    if (items.length === 0) return;

    items.forEach((item) => item.classList.add("reveal-item"));

    const observer = new IntersectionObserver(
      (entries) => {
        let batch = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.style.transitionDelay = `${batch * 90}ms`;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
          batch += 1;
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      items.forEach((item) => {
        item.classList.remove("reveal-item", "is-visible");
        item.style.transitionDelay = "";
      });
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}

export default Reveal;