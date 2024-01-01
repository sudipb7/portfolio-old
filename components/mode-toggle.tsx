"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/providers/theme-provider";

export const ModeToggle = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();

  const onClick = () => {
    if (theme === "dark") {
      return setTheme("light");
    }
    if (theme === "light") {
      return setTheme("dark");
    }
  };

  return (
    <button
      className={`border border-zinc-200 dark:border-[#1C1C1C] p-2.5 rounded-md hover:bg-zinc-200 dark:hover:bg-[#1C1C1C] ${className}`}
      type="button"
      onClick={onClick}
    >
      {theme === "dark" ? (
        <Moon
          onClick={() => setTheme("light")}
          className="h-4 w-4 text-zinc-500 group-hover:text-zinc-700 dark:text-zinc-500 dark:group-hover:text-zinc-400 transition-all"
        />
      ) : (
        <Sun
          onClick={() => setTheme("dark")}
          className="h-4 w-4 text-zinc-500 group-hover:text-zinc-700 dark:text-zinc-500 dark:group-hover:text-zinc-400 transition-all"
        />
      )}
    </button>
  );
};
