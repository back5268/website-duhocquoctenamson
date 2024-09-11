import Image from "next/image";

type CardProps = {
  title: string;
  href: string;
  price?: string;
  note?: string;
  time?: string;
};

export const Card = ({ title, href, price, note, time }: CardProps) => {
  return (
    <div className="relative shadow p-4 cursor-pointer group">
      <div className="w-full flex gap-4 bg-white">
        <div className="relative h-60 w-full overflow-hidden">
          <Image
            src="/images/gioi-thieu1.png"
            alt={title}
            fill
            className="object-contain transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center w-full">
          <h3 className="uppercase font-semibold text-xl">{title}</h3>
          {price && (
            <p className="border border-primary rounded-lg p-2 text-center">
              Chi phí:{" "}
              <span className="font-semibold text-primary">{price}</span>
              <br />
              {note && <span className="text-sm">{note}</span>}
            </p>
          )}
          {time && (
            <p className="text-center">
              Thời gian xuất cảnh
              <br /> <span className="text font-semibold">{time}</span>
            </p>
          )}
          <div className="uppercase mt-4 bg-primary p-2 px-4 rounded-lg text-white font-semibold">
            Chi tiết
          </div>
        </div>
      </div>
    </div>
  );
};
