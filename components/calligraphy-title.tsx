import Image from "next/image";

type CalligraphyTitleProps = {
  title: string;
  position?: string;
  href: string;
};

export const CalligraphyTitle = ({
  title,
  position,
  href,
}: CalligraphyTitleProps) => {
  return (
    <div className="relative w-fit">
      <h3 className="text-2xl font-semibold mb-12 text-left pr-4">{title}</h3>
      <div className="absolute h-12 w-20 -top-4 -left-6 -z-10">
        <Image
          src={
            position === "left"
              ? "/images/decor/decor2.png"
              : "/images/decor/decor1.png"
          }
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute h-24 w-full top-0 left-16 -z-10">
        <Image src={href} alt="" fill className="object-contain" />
      </div>
    </div>
  );
};
