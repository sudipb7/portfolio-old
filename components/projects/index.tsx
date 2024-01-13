import { ProjectCard } from './project-card';

import { projects } from '@/lib/constants';

export const Projects = () => {
  return (
    <section className='max-w-[700px] mx-auto p-4 mt-3'>
      <h3 className='text-lg font-semibold mb-3'>Projects</h3>
      <div className='flex flex-col gap-2'>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            desc={project.desc}
            github={project.github}
            live={project.live}
            techs={project.techs}
          />
        ))}
      </div>
    </section>
  );
};
