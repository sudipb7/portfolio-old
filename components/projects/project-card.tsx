import Link from "next/link";
import { Github, Link as LinkIcon } from "lucide-react";

import { Badge } from "../badge";

interface ProjectCardProps {
  title: string;
  desc: string;
  github: string;
  live?: string;
  techs?: string[];
}

export const ProjectCard = ({
  title,
  desc,
  github,
  live,
  techs = [],
}: ProjectCardProps) => {
  return (
    <article className="p-4 flex max-sm:flex-col items-start sm:items-center gap-2 rounded-md tracking-wide border border-[#1C1C1C] hover:bg-[#1C1C1C]/40 transition-all">
      <div className="flex-1">
        <p className="text-sm md:text-[17px] font-medium">
          {title}
        </p>
        <p className="text-xs md:text-xs font-light text-zinc-400 mt-2">
          {desc}
        </p>
        {techs?.length !== 0 && (
          <div className="flex flex-wrap items-center gap-1 mt-2.5">
            {techs.map((tech, index) => (
              <Badge 
                key={index} 
                label={tech} 
                size="sm" 
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex gap-2.5 items-center">
        <Link
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 group p-2.5 rounded-md border border-[#1C1C1C] hover:bg-[#1C1C1C] cursor-pointer transition"
        >
          <Github className="h-4 w-4 text-zinc-500 group-hover:text-zinc-400" />
        </Link>
        {live && (
          <Link
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 group p-2.5 rounded-md border border-[#1C1C1C] hover:bg-[#1C1C1C] cursor-pointer transition"
          >
            <LinkIcon className="h-4 w-4 text-zinc-500 group-hover:text-zinc-400" />
          </Link>
        )}
      </div>
    </article>
  );
};
