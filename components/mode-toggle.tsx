"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ActionTooltip } from "./action-tooltip";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <ActionTooltip label="Theme">
        <DropdownMenuTrigger asChild>
          <Button
            className="bg-[#FBFCFD] dark:bg-[#121212] group border-zinc-300 dark:border-[#1C1C1C] hover:bg-zinc-300 dark:hover:bg-[#1C1C1C] focus-visible:ring-0 focus-visible:ring-offset-0 transition"
            variant="outline"
            size="icon"
          >
            <Sun className="text-zinc-600 group-hover:text-zinc-800 h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="text-zinc-500 group-hover:text-zinc-400 absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </DropdownMenuTrigger>
      </ActionTooltip>
      <DropdownMenuContent className="dark:bg-[#121212]" align="end">
        <DropdownMenuItem
          className="dark:bg-[#121212]"
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="dark:bg-[#121212]"
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="dark:bg-[#121212]"
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
