import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "portfolio-theme";
const BROWSER_BAR_COLORS = { dark: "#101010", light: "#fafaf7" };

function getInitialTheme() {
  // index.html sets this before the page paints
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === "dark";

  const handleToggle = () => {
    const next = isDark ? "light" : "dark";
    const root = document.documentElement;

    // Brief class so colours fade instead of snapping
    root.classList.add("theme-transition");
    root.dataset.theme = next;
    setTheme(next);

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable, the choice just won't be remembered */
    }

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", BROWSER_BAR_COLORS[next]);

    window.setTimeout(() => root.classList.remove("theme-transition"), 400);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default ThemeToggle;