import Link from "next/link";

import { socialLinks } from "@/lib/constants";
import { IconButton } from "@/components/icon-button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-[700px] mx-auto p-4 mt-2 md:mt-4">
      <div className="h-[0.5px] bg-zinc-700 rounded-md w-full" />
      <div className="flex items-center justify-between mt-4">
        <p className="text-xs font-light tracking-wide text-zinc-500">
          &copy; {currentYear} Sudip Biswas
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <IconButton key={index} label={link.label}>
                <Link
                  href={link.route}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  <Icon className="h-4 w-4 text-zinc-500 group-hover:text-zinc-400" />
                </Link>
              </IconButton>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
