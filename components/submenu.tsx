"use client";

import React, { useState } from "react";
import { ChevronUpIcon } from "lucide-react";
import Link from "next/link";

type SubMenuProps = {
  label: string;
  menu: any;
  active: boolean;
};

export const SubMenu = ({ label, menu, active }: SubMenuProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div
          className={`flex items-center gap-2 text-link cursor-default ${
            active ? "text-primary" : ""
          }`}
        >
          <span>{label}</span>
          <ChevronUpIcon
            className={`h-5 stroke-2 duration-300 ease-in-out transform ${
              isHovered ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <div
        className={`absolute text-black duration-300 ease-in-out transform ${
          isHovered
            ? "translate-y-0 opacity-100"
            : "-translate-y-8 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col rounded-sm bg-white text-black shadow-md mt-4 min-w-60 py-4">
          {menu?.map(({ label, href, active }: any, index: any) => (
            <Link
              key={index}
              href={href}
              className={`p-2 pl-3 hover:bg-slate-200 w-full ${
                active ? "bg-slate-200" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
