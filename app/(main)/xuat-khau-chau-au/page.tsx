'use client';

import { Card } from '@/components/card';
import { Dialog } from '@/components/dialog';
import { Header } from '@/components/header';
import { useEffect, useState } from 'react';

const items = [
  {
    title: 'CHLB Đức',
    slug: 'duc',
    href: '/images/xuat-khau-chau-au/duc',
    price: '21.000 EUR',
    time: '03 - 06 tháng'
  },
  {
    title: 'Liên Bang Nga',
    slug: 'nga',
    href: '/images/xuat-khau-chau-au/nga',
    price: 'Từ 20.000.000 VNĐ',
    note: '(Cho nợ đến 50% phí xuất cảnh)',
    time: '01 - 02 tháng'
  },
  {
    title: 'Hungary',
    slug: 'hungary',
    href: '/images/xuat-khau-chau-au/hungary',
    price: 'Từ 7.000 $',
    note: '(+ Cọc chống trốn 2000 - 8000 $)',
    time: '03 - 04 tháng'
  },
  {
    title: 'Cộng hòa séc',
    slug: 'cong-hoa-sec',
    href: '/images/xuat-khau-chau-au/sec',
    price: 'Từ 7.000 $',
    note: '(+ Cọc chống trốn 2000 - 8000 $)',
    time: '04 - 06 tháng'
  },
  {
    title: 'Bulgaria',
    slug: 'bulgaria',
    href: '/images/xuat-khau-chau-au/bulgaria'
  },
  {
    title: 'Hy Lạp',
    slug: 'hy-lap',
    href: '/images/xuat-khau-chau-au/hy-lap'
  },
  {
    title: 'Singapore',
    slug: 'singapore',
    href: '/images/xuat-khau-chau-au/singapore',
    price: 'Từ 3.500 $',
    time: '02 - 06 tháng'
  }
];

const Page = () => {
  const [slug, setSlug] = useState('');

  useEffect(() => {
    let hash = window.location.hash;
    hash = hash.replace('#', '');
    const item = items.find((i) => i.slug === hash);
    if (item) setSlug(hash);
  }, []);

  return (
    <div className="container lg:w-9/12 mt-24">
      <Dialog slug={slug} setSlug={setSlug} />
      <div className="flex flex-col gap-4 items-center justify-center w-full">
        <Header label="Xuất khẩu" hightlight="Châu Âu" />

        <div className="flex flex-wrap items-start w-full">
          {items.map(({ title, href, price, time, note, slug }, index) => (
            <div className="w-1/2 px-8 py-8" key={index}>
              <div onClick={() => setSlug(slug)}>
                <Card title={title} href={href} price={price} time={time} note={note} slug={slug} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
