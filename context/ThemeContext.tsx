"use client";
import { createContext, useContext, useState, ReactNode } from "react";

/* ---------- TYPES ---------- */
type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

/* ---------- CONTEXT ---------- */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/* ---------- PROVIDER ---------- */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}

/* ---------- HOOK ---------- */
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
