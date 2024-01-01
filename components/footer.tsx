import Link from "next/link";

import { socialLinks } from "@/lib/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-[700px] mx-auto p-4 mt-2 md:mt-4">
      <div className="h-[0.5px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-full" />
      <div className="flex items-center justify-between mt-4">
        <p className="text-xs font-light tracking-wide text-zinc-500">
          &copy; {currentYear} Sudip Biswas
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                href={link.route}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-md border border-zinc-200 hover:bg-zinc-200 dark:border-[#1C1C1C] dark:hover:bg-[#1C1C1C] cursor-pointer transition-all"
                key={link.label}
              >
                <Icon className="h-4 w-4 text-zinc-500 group-hover:text-zinc-700 dark:text-zinc-500 dark:group-hover:text-zinc-400 transition-all" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
