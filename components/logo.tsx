import Image from "next/image";

export const Logo = () => {
  return (
    <div className="relative h-14 w-[4.5rem]">
      <Image
        src="/icons/logo.svg"
        alt="Logo"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};
