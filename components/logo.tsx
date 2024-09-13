import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="relative h-14 w-[4.5rem]">
      <Image
        src="/icons/logo.svg"
        alt="Logo"
        fill
        className="object-contain"
        priority
      />
    </Link>
  );
};
