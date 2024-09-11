"use client";

import { Footer } from "@/components/footer";
import { Carousel } from "@/components/carousel";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { Topbar } from "@/components/topbar";
import { useState } from "react";
import { ScrollToTop } from "@/components/scroll-top-top";
import { Socials } from "@/components/socials";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="h-full relative">
      <ScrollToTop />
      <Socials />
      <MobileSidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
      <Topbar setShowSidebar={setShowSidebar} />
      <main className="mt-[80px] flex flex-col items-center">
        <Carousel />
        <div className="w-full">
          <div className="w-full min-h-screen flex justify-center">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
