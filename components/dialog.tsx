import { X } from 'lucide-react';
import Image from 'next/image';
import { ListDashed } from './list-dashed';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const items = [
  {
    title: 'CHLB Đức',
    slug: 'duc',
    href: '/images/xuat-khau-chau-au/duc',
    price: '21.000 EUR',
    time: '03 - 06 tháng',
    list: [
      'Yêu cầu: 23 - 45 tuổi',
      'Được ký hợp đồng lâu dài',
      'Không yêu cầu chứng chỉ tiếng Đức',
      'Trình độ: Tốt nghiệp THPT',
      () => (
        <>
          Thu nhập cao tối thiểu <b>17EUR/giờ</b>, tương đương 3,200€/tháng (88 triệu/tháng) sau thuế, chưa tính giờ làm thêm.
        </>
      ),
      'Ăn, ở chủ hỗ trợ',
      'Được bảo lãnh vợ con sau 3 năm làm việc tại Đức.'
    ]
  },
  {
    title: 'Liên Bang Nga',
    slug: 'nga',
    href: '/images/xuat-khau-chau-au/nga',
    price: 'Từ 20.000.000 VNĐ',
    note: '(Cho nợ đến 50% phí xuất cảnh)',
    time: '01 - 02 tháng',
    list: [
      'Yêu cầu: Nam/nữ 18 - 50 tuổi',
      'Đảm bảo sức khỏe để làm việc',
      'Đơn hàng: May, Xây dựng, Sản xuất giày da, Bánh mỳ....',
      () => (
        <>
          Lương cơ bản: <b>Từ 800$/tháng</b>
        </>
      )
    ]
  },
  {
    title: 'Hungary',
    slug: 'hungary',
    href: '/images/xuat-khau-chau-au/hungary',
    price: 'Từ 7.000 $',
    note: '(+ Cọc chống trốn 2000 - 8000 $)',
    time: '03 - 04 tháng',
    list: []
  },
  {
    title: 'Cộng hòa séc',
    slug: 'cong-hoa-sec',
    href: '/images/xuat-khau-chau-au/sec',
    price: 'Từ 7.000 $',
    note: '(+ Cọc chống trốn 2000 - 8000 $)',
    time: '04 - 06 tháng',
    list: [
      'Yêu cầu: 18 - 40 tuổi, Đảm bảo sức khỏe để làm việc',
      'Đơn hàng: Nông nghiệp, kho hàng, thợ hàn 3G,...',
      () => (
        <>
          Lương cơ bản: <b>Khoảng 950 EUR</b> (Chủ bao ăn, ở và thuế)
        </>
      ),
      () => (
        <>
          Thời gian xuất cảnh: <b>03 - 06 tháng</b>
        </>
      ),
      'Không yêu cầu học tiếng',
      'Hợp đồng làm việc tại CH Séc là 9 tháng, hết thời hạn chuyển đổi sang Đức và BaLan (phí chuyển đổi 2000$).'
    ]
  },
  {
    title: 'Bulgaria',
    slug: 'bulgaria',
    href: '/images/xuat-khau-chau-au/bulgaria',
    list: [
      'Yêu cầu: 18 - 40 tuổi, Đảm bảo sức khỏe để làm việc',
      'Đơn hàng: Thợ hàn, bảo dưỡng máy móc',
      () => (
        <>
          Lương cơ bản: <b>700 - 1000 EUR</b>
        </>
      ),
      () => (
        <>
          Thời gian xuất cảnh: <b>03 - 06 tháng</b>
        </>
      )
    ]
  },
  {
    title: 'Hy Lạp',
    slug: 'hy-lap',
    href: '/images/xuat-khau-chau-au/hy-lap',
    list: ['Yêu cầu: Dưới 50 tuổi, Đảm bảo sức khỏe để làm việc', 'Đơn hàng: Cơ khí,...']
  },
  {
    title: 'Singapore',
    slug: 'singapore',
    href: '/images/xuat-khau-chau-au/singapore',
    price: 'Từ 3.500 $',
    time: '02 - 06 tháng',
    list: [
      'Yêu cầu: 18-46 tuổi, Đảm bảo sức khỏe để làm việc',
      'Đơn hàng: Ốp lát, Trát tường, Cốt pha....',
      () => (
        <>
          Lương cơ bản: Khoảng <b>2000$ Sing/tháng</b> (Khoảng 38 triệu/tháng)
        </>
      )
    ]
  }
];

type DialogProps = {
  slug: string;
  setSlug: (value: string) => void;
};

export const Dialog = ({ slug, setSlug }: DialogProps) => {
  const [item, setItem] = useState(items[0]);
  const { title, href, price, note, time, list } = item;
  const router = useRouter()

  useEffect(() => {
    if (slug) {
      const item = items.find((i) => i.slug === slug) || items[0];
      setItem(item);
    }
  }, [slug]);

  return (
    <>
      <div className={`fixed inset-x-0 inset-y-0 z-50  bg-black bg-opacity-60 ${Boolean(slug) ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>
      <div className={`fixed inset-x-0 inset-y-0 z-50 flex justify-center rounded-xl ${Boolean(slug) ? '' : 'pointer-events-none'}`}>
        <div
          className={`w-[1200px] h-fit bg-slate-100 shadow-custom rounded-xl transition-all p-6 mt-8 transform duration-300 ease-in-out ${
            Boolean(slug) ? 'opacity-100 translate-y-0' : '-translate-y-12 opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex justify-between items-center">
            <h4 className="uppercase text-2xl font-semibold pl-8">{title}</h4>
            <button onClick={() => setSlug('')} color="gray" className="p-1 rounded-full mb-2">
              <X className="h-8 w-8 stroke-4" />
            </button>
          </div>
          <hr />

          <div className="col-span-2 flex flex-col gap-4 my-8 max-h-[40rem] overflow-scroll overflow-x-hidden">
            <div className="grid grid-cols-2">
              <div className="col-span-1 px-12">
                {slug === 'hungary' ? (
                  <>
                    <p className="text-lg font-semibold">Truyền thống</p>
                    <ListDashed
                      list={[
                        'Yêu cầu: Nam/nữ 18 - 50 tuổi',
                        'Đảm bảo sức khỏe để làm việc',
                        'Đơn hàng: Nấm, nhựa, bếp, bánh mỳ, xây dựng, điện tử, đóng gói, khách sạn, phụ bếp, đầu bếp, giao hàng uber,....',
                        () => (
                          <>
                            Lương cơ bản: <b>Từ 1000$</b>
                          </>
                        )
                      ]}
                    />
                    <div className="relative p-4 rounded-xl items-center flex">
                      <div className="w-full flex gap-4 overflow-hidden">
                        <div className="flex flex-col gap-2 justify-center items-center w-full">
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
                        </div>
                      </div>
                    </div>
                    <p className="text-lg font-semibold mt-8">Tự do</p>
                    <ListDashed
                      list={[
                        'Yêu cầu: Nam/nữ 18 - 55 tuổi',
                        'Chủ bảo lãnh 03 tháng. Sau 3 tháng được hoàn lại cọc chống trốn và tự do tìm việc.',
                        () => (
                          <>
                            Lương cơ bản: <b>Từ 1000$</b>
                          </>
                        )
                      ]}
                    />
                    <div className="relative p-4 rounded-xl items-center flex">
                      <div className="w-full flex gap-4 overflow-hidden">
                        <div className="flex flex-col gap-2 justify-center items-center w-full">
                          {price && (
                            <p className="border border-primary rounded-lg p-2 text-center">
                              Chi phí: <span className="font-semibold text-primary">9.500 $</span>
                              <br />
                              {note && <span className="text-sm">+ Cọc chống trốn 2000 $</span>}
                            </p>
                          )}
                          {time && (
                            <p className="text-center">
                              Thời gian xuất cảnh
                              <br /> <span className="text font-semibold">{time}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <ListDashed list={list} />
                    <div className="relative p-4 rounded-xl items-center flex">
                      <div className="w-full flex gap-4 overflow-hidden">
                        <div className="flex flex-col gap-2 justify-center items-center w-full">
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
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="col-span-1 flex flex-col items-center">
                <div className="relative h-96 w-full overflow-hidden rounded-lg z-0 -top-8">
                  <Image src={href + '1.png'} alt={title} fill className="object-contain transform transition-transform duration-500 group-hover:scale-110 rounded-lg" />
                </div>
                <button onClick={() => router.push("/lien-he")} className="relative bg-primary w-44 h-12 text-white uppercase rounded-lg font-semibold hover:bg-dark-primary border-b-4 border-dark-primary mb-4" type="button">
                  <div className="absolute border bg-primary opacity-50 rounded-lg top-1 right-6 w-32 h-10 animate-ping" />
                  Liên hệ tư vấn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
