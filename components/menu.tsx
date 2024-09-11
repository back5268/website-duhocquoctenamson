import { getMenu } from '@/lib/menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SubMenu } from './submenu';

export const Menu = () => {
  const pathname = usePathname();
  const menu = getMenu(pathname);

  return (
    <nav className="ml-24 h-full hidden lg:block">
      <ul className="flex gap-8 h-full">
        {menu.map(({ label, href, menu, active }, index) => {
          return (
            <li key={index} className="h-full flex items-center">
              {href ? (
                <Link href={href} className={`text-link ${active ? 'text-primary' : ''}`}>
                  {label}
                </Link>
              ) : (
                <SubMenu label={label} menu={menu} active={active} />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
