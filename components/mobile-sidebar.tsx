"use client";

import { getMenu } from "@/lib/menu";
import { usePathname } from "next/navigation";

type MobileSidebarProps = {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
};

export const MobileSidebar = ({
  showSidebar,
  setShowSidebar,
}: MobileSidebarProps) => {
  const pathname = usePathname();
  const menu = getMenu(pathname);

  return (
    <div className="lg:hidden">
      <div
        onClick={() => {
          setShowSidebar(false);
        }}
        className={`fixed inset-x-0 inset-y-0 w-full h-full bg-black bg-opacity-60 z-30 ${
          showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`fixed left-0 inset-y-0 z-40 w-full max-w-[20rem] p-2 shadow-xl bg-slate-500 transition-all duration-500 ease-in-out ${
          showSidebar ? "" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-1 text-base font-normal mt-4 h-body-sidebar">
          {menu?.map((item, index) => {
            return <div key={index}></div>;
          })}
        </div>
      </div>
    </div>
  );
};
