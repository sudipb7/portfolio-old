import Link from 'next/link';
import { File } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className='max-w-[700px] mx-auto mt-2 p-4'>
      <h2 className='font-semibold text-lg md:text-xl tracking-wide'>
        Passionate Full-Stack Web Developer
      </h2>
      <p className='mt-3 font-light text-[14px] md:text-[15px] text-secondary-foreground dark:text-zinc-100 tracking-wide mb-4'>
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
