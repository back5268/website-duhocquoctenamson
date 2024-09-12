import Image from 'next/image';

type CardProps = {
  title: string;
  slug: string;
  href: string;
  price?: string;
  note?: string;
  time?: string;
};

export const Card = ({ title, href, price, note, time }: CardProps) => {
  return (
    <div className="relative shadow-custom p-4 cursor-pointer group rounded-xl min-h-72 items-center flex">
      <div className="w-full flex gap-4 bg-white">
        <div className="relative h-48 w-full overflow-hidden rounded-lg z-0">
          <Image src={href + '.png'} alt={title} fill className="object-cover transform transition-transform duration-500 group-hover:scale-110 rounded-lg" />
        </div>

        <div className="flex flex-col gap-2 justify-center items-center w-full">
          <h3 className="uppercase font-semibold text-xl">{title}</h3>
          {price && (
            <p className="border border-primary rounded-lg p-2 text-center">
              Chi phí: <span className="font-semibold text-primary">{price}</span>
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
          <button className="relative uppercase mt-4 bg-primary h-10 w-28 flex items-center justify-center rounded-lg text-white font-semibold border-b-4 border-dark-primary">
            <div className="absolute border bg-primary opacity-50 rounded-lg top-1 right-4 w-20 h-8 animate-ping" />
            Chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};
