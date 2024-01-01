import Image from "next/image";
import Link from "next/link";

import { socialLinks } from "@/lib/constants";

export const Header = () => {
  return (
    <header className="max-w-[700px] mx-auto flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <div className="relative overflow-hidden h-10 md:h-12 w-10 md:w-12 rounded-full">
          <Image 
            src="/hero.jpg"
            fill
            alt="Profile picture"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-semibold max-sm:text-sm">
            Sudip Biswas
          </h1>
          <h3 className="text-zinc-500 text-light max-sm:text-sm">
            Web developer
          </h3>
        </div>
      </div>
      <div className="flex gap-2.5 items-center">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              href={link.route}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 rounded-md border border-[#1C1C1C] hover:bg-[#1C1C1C] cursor-pointer transition"
              key={link.label}
            >
              <Icon className="h-4 w-4 text-zinc-500 group-hover:text-zinc-400" />
            </Link>
          );
        })}
      </div>
    </header>
  );
};
