"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Function to get initial theme - only called once during component initialization
function getStoredTheme(defaultTheme: Theme): Theme {
  if (typeof window === "undefined") return defaultTheme;

  const storedTheme = localStorage.getItem("theme") as Theme | null;
  if (storedTheme && (storedTheme === "light" || storedTheme === "dark")) {
    return storedTheme;
  }

  // Fall back to system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export function ThemeProvider({ children, defaultTheme = "light" }: ThemeProviderProps) {
  // Use lazy initializer to avoid setState in useEffect
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    return getStoredTheme(defaultTheme);
  });

  // Apply theme to document and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return a default value during SSR or before provider is mounted
    return { theme: "light" as Theme, toggleTheme: () => {} };
  }
  return context;
}
