import Image from "next/image";

type DecorTitleProps = {
  href?: string;
  title: string;
};

export const DecorTitle = ({
  title,
  href = "/images/du-hoc-nhat/dieu-kien.png",
}: DecorTitleProps) => {
  return (
    <h4 className="relative text-xl font-semibold mb-4">
      <div className="absolute h-8 w-8 -top-1 -left-10 -z-10">
        <Image src={href} alt="" fill className="object-contain" />
      </div>
      {title}
    </h4>
  );
};
