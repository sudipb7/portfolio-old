import { Github, Link } from "lucide-react";

import { projects } from "@/lib/constants";

export const Projects = () => {
  return (
    <section className="w-full max-w-[700px] mx-auto p-4 flex flex-col gap-2 mt-4">
      <h3 className="text-[17px] font-semibold">Projects</h3>
      {projects.map((project) => (
        <article
          key={project.name}
          className="p-4 mt-3 flex items-center gap-2 rounded-md tracking-wide border border-[#1C1C1C] hover:bg-[#1C1C1C]/40 transition-all"
        >
          <div className="flex-1">
            <p className="text-sm md:text-[17px] font-medium">{project.name}</p>
            <p className="text-[10px] md:text-xs font-light text-zinc-400 mt-2">
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
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 group p-2.5 rounded-md border border-[#1C1C1C] hover:bg-[#1C1C1C] cursor-pointer transition"
            >
              <Github className="h-4 w-4 text-zinc-500 group-hover:text-zinc-400" />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 group p-2.5 rounded-md border border-[#1C1C1C] hover:bg-[#1C1C1C] cursor-pointer transition"
            >
              <Link className="h-4 w-4 text-zinc-500 group-hover:text-zinc-400" />
            </a>
          </div>
        </article>
      ))}
    </section>
  );
};
