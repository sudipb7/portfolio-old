"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Theme = "dark" | "light" | "system";

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme: Theme;
  storageKey: string;
};

const initialThemeProps: ThemeState = {
  theme: "dark",
  setTheme: () => null,
};

export const ThemeContext = createContext<ThemeState>(initialThemeProps);

export const ThemeProvider = ({
  children,
  defaultTheme,
  storageKey,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    (() => localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Failed to set theme");
  }

  return context;
};
