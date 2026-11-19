import { useEffect, useLayoutEffect, useState } from "react";

const STORAGE_KEY = "portfolio-welcome-seen";

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
  const isDone = phase === "done";

  // Tell the page while the welcome screen is playing, so the hero waits
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (phase === "show") {
      root.dataset.welcome = "playing";
    } else {
      delete root.dataset.welcome;
    }
  }, [phase]);

  // Move through the phases on a timer
  useEffect(() => {
    if (phase === "show") {
      const timer = setTimeout(() => setPhase("exit"), 2400);
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
      }, 700);
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

  if (isDone) return null;

  return (
    <div
      role="dialog"
      aria-label="Welcome"
      className={`welcome-screen ${phase === "exit" ? "welcome-exit" : ""}`}
    >
      <div className="text-center">
        <p className="welcome-fade font-display text-5xl font-bold text-ink sm:text-7xl">
          Sivaraj<span className="text-brand">.</span>
        </p>

        <div className="mx-auto mt-6 h-0.5 w-40 overflow-hidden rounded-full bg-line sm:w-56">
          <div className="welcome-line h-full bg-brand" />
        </div>

        <p
          className="welcome-fade mt-6 text-sm uppercase tracking-[0.25em] text-muted sm:text-base"
          style={{ animationDelay: "0.5s" }}
        >
          Welcome to my portfolio
        </p>
      </div>

      <button
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