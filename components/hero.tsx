import Link from "next/link";
import { File } from "lucide-react";

export const Hero = () => {
  return (
    <section className="max-w-[700px] mx-auto mt-4 p-4">
      <h3 className="font-semibold text-[16px] md:text-[17px] tracking-wide">
        Passionate Full-Stack Web Developer
      </h3>
      <p className="mt-3 font-light text-[14px] md:text-[15px] text-zinc-800 dark:text-zinc-100 tracking-wide">
        Just another passionate, skillful, and oh-so-creative web developer
        here. From crafting modern aesthetics to creating robust functionalities
        using modern and scalable technologies.
      </p>
      <Link
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit py-2 px-6 mt-6 rounded-lg text-[15px] md:text-[17px] border-[0.5px] border-zinc-200 dark:border-zinc-800 flex items-center hover:bg-zinc-100 dark:bg-[#1C1C1C]/90 bg-[#fefefe]/80 dark:hover:bg-zinc-900 transition-all"
      >
        <File className="h-4 w-4 mr-2.5" />
        <span className="font-medium text-[15px]">Resume</span>
      </Link>
    </section>
  );
};
