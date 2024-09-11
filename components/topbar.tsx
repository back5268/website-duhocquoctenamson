"use client";

import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { Menu as Menuz } from "@/components/menu";
import { useEffect, useState } from "react";
import { EmailSection } from "./email-section";
import { PhoneSection } from "./phone-section";

export const Topbar = ({
  setShowSidebar,
}: {
  setShowSidebar: (value: boolean) => void;
}) => {
  const [showHeader, setShowHeader] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 80) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-30 shadow duration-200 delay-100 ease-in-out transform ${
        showHeader ? "" : "-translate-y-10"
      }`}
    >
      <div className="w-full h-10 bg-primary flex justify-center">
        <div className="container h-full lg:px-40">
          <div className="flex gap-8 justify-end items-center text-white w-full h-full text-sm font-medium">
            <EmailSection />
            <PhoneSection />
          </div>
        </div>
      </div>
      <div className="relative w-full h-20 bg-white flex justify-center">
        <div className="absolute left-4 top-[50%] -translate-y-[50%] z-20 block lg:hidden">
          <Menu
            onClick={() => setShowSidebar(true)}
            className="cursor-pointer h-8 w-8"
          />
        </div>
        <div className="container h-full">
          <div className="w-full h-full flex items-center justify-center">
            <Logo />
            <Menuz />
          </div>
        </div>
      </div>
    </nav>
  );
};
