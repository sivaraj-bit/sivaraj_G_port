import { useEffect, useLayoutEffect, useRef, useState } from "react";

const STORAGE_KEY = "portfolio-welcome-seen";
const WORD = "Hello";

const SHOW_MS = 3000; // how long the animation plays before closing
const EXIT_MS = 800; // must match the close transition in index.css

function shouldSkip() {
  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return true;
    }
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function WelcomeScreen() {
  // "show" -> "exit" -> "done"
  const [phase, setPhase] = useState(() => (shouldSkip() ? "done" : "show"));
  const skipButtonRef = useRef(null);
  const isDone = phase === "done";

  // Tell the page while the welcome screen is playing, so the hero waits
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (phase === "show") {
      root.dataset.welcome = "playing";
    } else {
      delete root.dataset.welcome;
    }
    return () => {
      delete root.dataset.welcome;
    };
  }, [phase]);

  // Play, then close
  useEffect(() => {
    if (phase === "show") {
      const timer = setTimeout(() => setPhase("exit"), SHOW_MS);
      return () => clearTimeout(timer);
    }

    if (phase === "exit") {
      const timer = setTimeout(() => {
        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
          /* storage unavailable, the screen will simply show again next time */
        }
        setPhase("done");
      }, EXIT_MS);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Lock page scrolling while the screen is visible
  useEffect(() => {
    if (isDone) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isDone]);

  // Keyboard: focus the Skip button, and let Escape skip the screen
  useEffect(() => {
    if (phase !== "show") return;
    skipButtonRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") setPhase("exit");
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase]);

  if (isDone) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome"
      className={`welcome-screen ${phase === "exit" ? "welcome-exit" : ""}`}
    >
      <div className="flex flex-col items-center px-6 text-center">
        {/* The word, drawn letter by letter */}
        <div className="inline-block">
          <p
            aria-label={WORD}
            className="font-display text-7xl font-bold leading-none text-ink sm:text-9xl"
          >
            {WORD.split("").map((letter, index) => (
              <span
                key={index}
                aria-hidden="true"
                className="hello-letter"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                {letter}
              </span>
            ))}
            <span
              aria-hidden="true"
              className="hello-dot text-brand"
              style={{ animationDelay: `${WORD.length * 90 + 120}ms` }}
            >
              .
            </span>
          </p>

          {/* Hand-drawn underline */}
          <svg
            viewBox="0 0 300 20"
            className="mt-2 w-full text-brand"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="hello-underline"
              d="M4 13 C 60 3, 120 3, 180 9 S 270 15, 296 5"
              pathLength="1"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <p className="hello-sub mt-6 text-sm uppercase tracking-[0.25em] text-muted sm:text-base">
          I&apos;m <span className="font-semibold text-ink">Sivaraj</span> ·
          Full Stack Developer
        </p>
      </div>

      <button
        ref={skipButtonRef}
        type="button"
        onClick={() => setPhase("exit")}
        className="absolute bottom-8 right-8 rounded-full border border-line px-5 py-2 text-xs font-medium text-muted transition-colors duration-300 hover:border-brand hover:text-brand"
      >
        Skip
      </button>
    </div>
  );
}

export default WelcomeScreen;