import Image from 'next/image';
import Link from 'next/link';
import { File, Github, LinkIcon } from 'lucide-react';

import { projects, skills, socialLinks } from '@/lib/constants';
import { IconButton } from '@/components/icon-button';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/badge';

const Header = () => {
  return (
    <header className='max-w-[700px] mx-auto flex items-center justify-between p-4'>
      <div className='flex items-center gap-4'>
        <div className='relative overflow-hidden h-10 md:h-12 w-10 md:w-12 rounded-full'>
          <Image
            src='/ai-dp.png'
            fill
            alt='Profile picture'
            className='object-cover'
          />
        </div>
        <div className='flex flex-col'>
          <h1 className='font-semibold max-sm:text-sm'>Sudip Biswas</h1>
          <h3 className='text-zinc-500 text-light max-sm:text-sm'>
            Web developer
          </h3>
        </div>
      </div>
      <div className='flex gap-2.5 items-center'>
        {socialLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <IconButton key={index} label={link.label}>
              <Link
                href={link.route}
                target='_blank'
                rel='noopener noreferrer'
                key={link.label}
              >
                <Icon className='h-4 w-4 text-zinc-600 group-hover:text-zinc-800' />
              </Link>
            </IconButton>
          );
        })}
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className='max-w-[700px] mx-auto mt-2 p-4'>
      <h2 className='font-semibold text-lg md:text-xl tracking-wide'>
        Passionate Full-Stack Web Developer
      </h2>
      <p className='mt-3 font-light text-[14px] md:text-[15px] text-secondary-foreground tracking-wide mb-4'>
        Just another passionate, skillful, and oh-so-creative web developer
        here. From crafting modern aesthetics to creating robust functionalities
        using modern and scalable technologies.
      </p>
      <Button size='sm' asChild>
        <Link
          href='/resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center'
        >
          <File className='h-4 w-4 mr-2' />
          <span className='font-medium text-[15px]'>Resume</span>
        </Link>
      </Button>
    </section>
  );
};

const Skills = () => {
  return (
    <section className='max-w-[700px] mx-auto p-4 flex flex-col gap-3 mt-3'>
      <h3 className='text-lg font-semibold'>Skillset</h3>
      <div className='flex flex-wrap items-center gap-2'>
        {skills.map((skill, index) => (
          <Badge key={index} label={skill} size='lg' />
        ))}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  title: string;
  desc: string;
  github: string;
  live?: string;
  techs?: string[];
}

const ProjectCard = ({
  title,
  desc,
  github,
  live,
  techs = [],
}: ProjectCardProps) => {
  return (
    <article className='p-4 flex items-start sm:items-center gap-2 rounded-md tracking-wide border border-zinc-200 hover:bg-zinc-100 transition-all'>
      <div className='flex-1'>
        <p className='text-sm md:text-[17px] font-medium'>{title}</p>
        <p className='text-xs md:text-xs font-light text-zinc-500 mt-2'>
          {desc}
        </p>
      </div>
      <div className='flex gap-2.5 items-center'>
        <IconButton label='GitHub'>
          <Link href={github} target='_blank' rel='noopener noreferrer'>
            <Github className='h-4 w-4 text-zinc-600 hover:text-zinc-800' />
          </Link>
        </IconButton>
        {live && (
          <IconButton label='Live'>
            <Link href={live} target='_blank' rel='noopener noreferrer'>
              <LinkIcon className='h-4 w-4 text-zinc-600 group-hover:text-zinc-800' />
            </Link>
          </IconButton>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='max-w-[700px] mx-auto p-4 pb-2 mt-2 md:mt-3'>
      <div className='h-[0.5px] bg-zinc-500 rounded-md w-full' />
      <div className='flex flex-col-reverse sm:flex-row max-sm:gap-2.5 items-center justify-between mt-4'>
        <p className='text-xs font-light tracking-wide text-zinc-600'>
          &copy; {currentYear} Sudip Biswas
        </p>
        <div className='flex items-center gap-2'>
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <IconButton key={index} label={link.label}>
                <Link
                  href={link.route}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Icon className='h-4 w-4 text-zinc-600 group-hover:text-zinc-800' />
                </Link>
              </IconButton>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <main className='h-full w-full relative'>
      <div className='w-full h-full overflow-x-hidden pt-4 pb-3 md:pt-6 px-2'>
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
