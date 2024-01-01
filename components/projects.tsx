import Link from "next/link";
import { Github, Link as LinkIcon } from "lucide-react";

import { projects } from "@/lib/constants";

export const Projects = () => {
  return (
    <section className="max-w-[700px] mx-auto p-4 mt-6">
      <h3 className="text-[17px] font-semibold mb-2">Projects</h3>
      <div className="flex flex-col gap-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="p-4 flex items-center gap-2 rounded-md tracking-wide border border-zinc-200 dark:border-[#1C1C1C] hover:bg-[#fefefe]/60 dark:hover:bg-[#1C1C1C]/40 transition-all"
          >
            <div className="flex-1">
              <p className="text-sm md:text-[17px] font-medium">
                {project.name}
              </p>
              <p className="text-[10px] md:text-xs font-light text-zinc-600 dark:text-zinc-400 mt-2">
                {project.description}
              </p>
              {/* TODO: Skills */}
              {/* <div className="flex flex-wrap items-center gap-2 mt-2.5">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="p-1.5 rounded-md border text-xs border-[#1C1C1C] hover:bg-[#1C1C1C] cursor-pointer text-zinc-500 hover:text-zinc-400 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div> */}
            </div>
            <div className="flex gap-2.5 items-center">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-md border border-zinc-200 hover:bg-zinc-200 dark:border-[#1C1C1C] dark:hover:bg-[#1C1C1C] cursor-pointer transition-all"
              >
                <Github className="h-4 w-4 text-zinc-500 group-hover:text-zinc-700 dark:text-zinc-500 dark:group-hover:text-zinc-400 transition-all" />
              </Link>
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-md border border-zinc-200 hover:bg-zinc-200 dark:border-[#1C1C1C] dark:hover:bg-[#1C1C1C] cursor-pointer transition-all"
              >
                <LinkIcon className="h-4 w-4 text-zinc-500 group-hover:text-zinc-700 dark:text-zinc-500 dark:group-hover:text-zinc-400 transition-all" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
