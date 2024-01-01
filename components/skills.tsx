import { skills } from "@/lib/constants";

export const Skills = () => {
  return (
    <section className="max-w-[700px] mx-auto p-4 flex flex-col gap-3 mt-4">
      <h3 className="text-[17px] font-semibold">Skillset</h3>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="p-1.5 md:p-2.5 rounded-md border text-[10px] md:text-xs border-[#1C1C1C] hover:bg-[#1C1C1C] cursor-pointer text-zinc-500 hover:text-zinc-400 transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};
