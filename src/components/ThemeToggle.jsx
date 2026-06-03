import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-text-primary transition-colors duration-300 hover:border-accent ${className}`}
    >
      {isDark ? (
        <Sun strokeWidth={1.5} className="h-5 w-5" />
      ) : (
        <Moon strokeWidth={1.5} className="h-5 w-5" />
      )}
    </button>
  );
}

export default ThemeToggle;
