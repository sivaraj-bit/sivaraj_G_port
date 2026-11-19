import { useEffect, useRef, useState } from "react";

// Fades its children in once, the first time they scroll into view.
function Reveal({ children }) {
  const ref = useRef(null);
  // Browsers without IntersectionObserver just show the content straight away
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const element = ref.current;
    if (!element || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
      {children}
    </div>
  );
}

export default Reveal;