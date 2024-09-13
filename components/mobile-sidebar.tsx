'use client';

import { getMenuMobile } from '@/lib/menu';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { useEffect } from 'react';

type MobileSidebarProps = {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
};

export const MobileSidebar = ({ showSidebar, setShowSidebar }: MobileSidebarProps) => {
  const pathname = usePathname();
  const menu = getMenuMobile(pathname);

  useEffect(() => {
    setShowSidebar(false)
  }, [pathname])

  return (
    <div className="lg:hidden">
      <div
        onClick={() => {
          setShowSidebar(false);
        }}
        className={`fixed inset-x-0 inset-y-0 w-full h-full bg-black bg-opacity-60 z-40 ${showSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      ></div>
      <div className={`fixed left-0 inset-y-0 z-40 w-full max-w-[20rem] p-2 shadow-xl bg-slate-200 transition-all duration-500 ease-in-out ${showSidebar ? '' : '-translate-x-full'}`}>
        <div className="flex flex-col text-base font-normal py-6 w-full gap-16 items-center">
          <Logo />
          <div className='w-full flex flex-col'>
            {menu?.map(({ label, href, active }, index) => {
              return (
                <Link key={index} href={href} className={`text-lg py-4 pl-3 hover:bg-slate-300 w-full border-b border-slate-400 border-dashed ${active ? 'bg-slate-400' : ''}`}>
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
