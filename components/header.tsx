"use client";

import { useRouter } from "next/navigation";

import { socialLinks } from "@/lib/constants";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="w-full flex items-center justify-between p-3">
      <div className="flex items-center gap-4">
        {/* TODO: Add Image */}
        <div className="h-12 w-12 rounded-full bg-[#6EE7B7]"></div>
        <div className="flex flex-col gap-y-[1px]">
          <h1 className="font-semibold">Sudip Biswas</h1>
          <h3 className="text-zinc-500 text-light">Web developer</h3>
        </div>
      </div>
      <div className="flex gap-2.5 items-center">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <div
              onClick={() => router.push(link.route)}
              className="group p-2 rounded-md border border-[#1C1C1C] hover:bg-[#1C1C1C] cursor-pointer transition"
              key={link.label}
            >
              <Icon className="h-4 w-4 text-zinc-500 group-hover:text-zinc-400" />
            </div>
          );
        })}
      </div>
    </header>
  );
};
