import { Card } from '@/components/card';
import { Header } from '@/components/header';

const items = [
  {
    title: 'CHLB Đức',
    href: '/images/xuat-khau-chau-au/duc',
    price: '21.000 EUR',
    time: '03 - 06 tháng'
  },
  {
    title: 'Liên Bang Nga',
    href: '/images/xuat-khau-chau-au/nga',
    price: 'Từ 20.000.000 VNĐ',
    note: '(Cho nợ đến 50% phí xuất cảnh)',
    time: '01 - 02 tháng'
  },
  {
    title: 'Hungary',
    href: '/images/xuat-khau-chau-au/hungary',
    price: 'Từ 7.000 $',
    note: '(+ Cọc chống trốn 2000 - 8000 $)',
    time: '03 - 04 tháng'
  },
  {
    title: 'Cộng hòa séc',
    href: '/images/xuat-khau-chau-au/sec',
    price: 'Từ 7.000 $',
    note: '(+ Cọc chống trốn 2000 - 8000 $)',
    time: '04 - 06 tháng'
  },
  {
    title: 'Bulgaria',
    href: '/images/xuat-khau-chau-au/bulgaria'
  },
  {
    title: 'Hy Lạp',
    href: '/images/xuat-khau-chau-au/hy-lap'
  },
  {
    title: 'Singapore',
    href: '/images/xuat-khau-chau-au/singapore',
    price: 'Từ 3.500 $',
    time: '02 - 06 tháng'
  }
];

const Page = () => {
  return (
    <div className="container lg:w-9/12 mt-24">
      <div className="flex flex-col gap-4 items-center justify-center w-full">
        <Header label="Xuất khẩu" hightlight="Châu Âu" />

        <div className="flex flex-wrap items-start w-full">
          {items.map(({ title, href, price, time, note }, index) => (
            <div className="w-1/2 px-8 py-8" key={index}>
              <Card title={title} href={href} price={price} time={time} note={note} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
