"use client";

import { items } from "@/constants";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const NavigationScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  useEffect(() => {
    let hash = window.location.hash;
    if (!hash)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

    const title = items.find(({ href }) => href === pathname)?.label;
    if (title) document.title = title;
  }, [pathname]);

  return children || null;
};
