import { skills } from "@/lib/constants";
import { Badge } from "../badge";

export const Skills = () => {
  return (
    <section className="max-w-[700px] mx-auto p-4 flex flex-col gap-3 mt-3">
      <h3 className="text-[17px] font-semibold">Skillset</h3>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            label={skill}
            size="lg"
          />
        ))}
      </div>
    </section>
  );
};
