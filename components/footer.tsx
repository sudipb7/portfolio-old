import { socialLinks } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="w-full max-w-[700px] mx-auto p-4 mt-4">
      <div className="h-[0.5px] bg-zinc-700 rounded-md w-full" />
      <div className="flex items-center justify-between mt-4">
        <p className="text-xs font-light tracking-wide text-zinc-500">
          &copy; 2023 Sudip Biswas
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                href={link.route}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-md border border-[#1C1C1C] hover:bg-[#1C1C1C] cursor-pointer transition"
                key={link.label}
              >
                <Icon className="h-4 w-4 text-zinc-500 group-hover:text-zinc-400" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};