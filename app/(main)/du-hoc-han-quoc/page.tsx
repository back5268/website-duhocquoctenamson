import { DecorTitle } from '@/components/decor-title';
import { Header } from '@/components/header';
import { ListDashed } from '@/components/list-dashed';
import Image from 'next/image';
import Link from 'next/link';

const koreas = [
  {
    label: 'Điều kiện theo học các trường',
    svg: () => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
    href: '#dieu-kien'
  },
  {
    label: 'Du học tiếng Hàn (Visa D4-1)',
    svg: () => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
        />
      </svg>
    ),
    href: '#visa-d4'
  },
  {
    label: 'Du học hệ Đại học (VISA D2)',
    svg: () => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
        />
      </svg>
    ),
    href: '#visa-d2'
  }
];

const Page = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <div className="w-full sticky top-20 bg-primary z-10 flex justify-center border">
        <div className="container lg:w-9/12">
          <div className="grid grid-cols-3 text-center">
            {koreas.map(({ label, href, svg }, index) => (
              <Link href={href} key={index} className="py-8 text-lg flex items-center justify-center gap-4 text-white">
                {svg()}
                <span className="hidden lg:block">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container lg:w-9/12 mt-16 flex flex-col gap-24">
        <div id="dieu-kien"></div>
        <Header label="Du học" hightlight="Hàn Quốc" />

        <div className="relative w-full px-8 bg-white z-0 flex flex-col items-center">
          <div className="relative w-full mb-12">
            <h3 className="text-2xl font-semibold mb-12 text-left">Điều kiện theo học các trường Đại học ở Hàn Quốc</h3>
            <div className="absolute h-12 w-20 -top-4 -left-8 -z-10">
              <Image src="/images/decor/decor2.png" alt="" fill className="object-contain" />
            </div>
            <div className="absolute h-20 w-80 top-0 left-16 -z-10">
              <Image src="/images/du-hoc-han/dieu-kien.png" alt="" fill className="object-contain" />
            </div>
          </div>

          <div className="absolute -bottom-2 right-[15%] left-[15%] bg-primary p-1 rounded-b-3xl"></div>
          <div className="rounded-xl border-2 border-primary">
            <table className="table-auto w-full border-collapse leading-8">
              <tbody>
                <tr>
                  <td className="border-r-2 border-b-2 border-dashed border-primary text-center font-semibold lg:min-w-64">Một số trường Top</td>
                  <td className="relative border-b-2 border-l-2 border-dashed border-primary p-4 pt-8">
                    <div className="absolute right-[50%] translate-x-[50%] -top-7 text-white bg-dark-primary h-12 w-32 rounded-3xl"></div>
                    <div className="absolute right-[50%] translate-x-[50%] -top-8 text-white bg-primary h-12 w-32 flex justify-center items-center rounded-3xl border-light-primary border">
                      <h2 className="text-lg font-semibold uppercase">TOP 1</h2>
                    </div>
                    <ul className="list-disc pl-5 leading-8">
                      <li>Đại học Chosun;</li>
                      <li>Đại học Kyung Hee;</li>
                      <li>Đại học Hanyang;</li>
                      <li>ĐH Quốc gia Seoul…</li>
                    </ul>
                  </td>
                  <td className="relative border-b-2 border-l-2 border-dashed border-primary p-4 pt-8">
                    <div className="absolute right-[50%] translate-x-[50%] -top-7 text-white bg-dark-primary h-12 w-32 rounded-3xl"></div>
                    <div className="absolute right-[50%] translate-x-[50%] -top-8 text-white bg-primary h-12 w-32 flex justify-center items-center rounded-3xl border-light-primary border">
                      <h2 className="text-lg font-semibold uppercase">TOP 2</h2>
                    </div>
                    <ul className="list-disc pl-5">
                      <li>Đại học Ajou;</li>
                      <li>Đại học Anyang;</li>
                      <li>Đại học Chung Ang;</li>
                      <li>Đại học Chodang;</li>
                      <li>Đại học Dong-A;</li>
                      <li>Đại học Sejong Korea</li>
                    </ul>
                  </td>
                  <td className="relative border-b-2 border-l-2 border-dashed border-primary p-4 pt-8">
                    <div className="absolute right-[50%] translate-x-[50%] -top-7 text-white bg-dark-primary h-12 w-32 rounded-3xl"></div>
                    <div className="absolute right-[50%] translate-x-[50%] -top-8 text-white bg-primary h-12 w-32 flex justify-center items-center rounded-3xl border-light-primary border">
                      <h2 className="text-lg font-semibold uppercase">TOP 3</h2>
                    </div>
                    <ul className="list-disc pl-5">
                      <li>Đại học Chungwoon;</li>
                      <li>ĐH Seoul Hanyoung;</li>
                      <li>Đại học Seojeong…</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border-r-2 border-b-2 border-t-2 border-dashed border-primary text-center font-semibold">Trường tiếp nhận học sinh</td>
                  <td className="border-b-2 border-t-2 border-l-2 border-dashed border-primary p-4">
                    Sinh viên 2 miền <b>Nam Bắc</b>. Không được tốt nghiệp THPT hay đại học quá 15 tháng và không quá 23 tuổi.
                  </td>
                  <td className="border-b-2 border-t-2 border-l-2 border-dashed border-primary p-4">
                    3 miền <b>Bắc – Trung – Nam</b>. Không được tốt nghiệp THPT hay đại học quá 2 – 3 năm và không quá 25 tuổi.
                  </td>
                  <td className="border-b-2 border-t-2 border-l-2 border-dashed border-primary p-4">
                    3 miền <b>Bắc – Trung – Nam</b>. Không được tốt nghiệp THPT hay đại học quá 3 – 4 năm
                  </td>
                </tr>
                <tr>
                  <td className="border-r-2 border-b-2 border-t-2 border-dashed border-primary text-center font-semibold">GPA Trung Bình</td>
                  <td className="border-b-2 border-t-2 border-l-2 border-dashed border-primary p-4">
                    3 năm cấp 3 từ <b>7.5 trở lên</b>, điểm trung bình từ 3./4 hoặc 3.75/5 và số buổi nghỉ học của bạn không quá 5 buổi.
                  </td>
                  <td className="border-b-2 border-t-2 border-l-2 border-dashed border-primary p-4">
                    3 năm cấp 3 <b>từ 6.5 trở lên</b>.
                  </td>
                  <td className="border-b-2 border-t-2 border-l-2 borde r-dashed border-primary p-4">
                    3 năm cấp 3 <b>từ 6.0 trở lên</b>.
                  </td>
                </tr>
                <tr id="visa-d4">
                  <td className="border-r-2 border-t-2 border-dashed border-primary text-center font-semibold">Bạn cần</td>
                  <td className="border-t-2 border-l-2 border-dashed border-primary p-4" colSpan={3}>
                    Học tiếng Hàn 3 – 4 tháng trước khi bay hoặc phải vượt qua kiểm tra tiếng Hàn.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col px-8 gap-12 justify-start w-full mt-12">
          <div className="relative">
            <h3 className="text-2xl font-semibold mb-12 text-left">2.1 Du học tiếng Hàn (Visa D4-1)</h3>
            <div className="absolute h-12 w-20 -top-4 -left-8 -z-10">
              <Image src="/images/decor/decor2.png" alt="" fill className="object-contain" />
            </div>
            <div className="absolute h-32 w-[20rem] lg:w-[28rem] top-0 left-16 -z-10">
              <Image src="/images/du-hoc-han/visad4.png" alt="" fill className="object-contain" />
            </div>
          </div>
          <div>
            <DecorTitle title="Điều kiện ứng tuyển" />
            <p>
              <b>Quy định về thời gian</b> học tối đa 2 năm:
            </p>
            <ListDashed list={['Thời gian học Tiếng là 80%', 'Thời gian học văn hóa Hàn Quốc là 20%', 'Chương trình ngoại khóa']} />
            <p className="mt-6">
              <b>Điều kiện</b> về thời gian làm thêm:
            </p>
            <ListDashed list={['Các trường đại học Hàn Quốc yêu cầu sinh viên 06 tháng mới được đi làm thêm, tối đa 20h/tuần.']} />
            <p className="mt-6">
              <b>Yêu cầu</b> chứng chỉ tiếng Hàn, bằng cấp:
            </p>
            <ListDashed list={['Chứng chỉ trình độ tiếng Hàn không yêu cầu.', 'Tốt nghiệp THPT trở lên.']} />
          </div>
          <div>
            <DecorTitle title="Quyền Lợi Sau Khi Hết Khóa" />
            <ListDashed
              list={[
                'Sinh viên được chuyển visa D2 học chuyên ngành',
                'Sau khi tốt nghiệp chuyên ngành được chuyển visa D10 làm việc 2 năm',
                'Sau 02 năm chuyển visa E7 nếu có tay nghề - trình độ cao',
                'Có mức lương cao và được làm việc lâu dài ở Hàn Quốc'
              ]}
            />
          </div>
          <div className="relative h-[25rem] w-full">
            <Image src="/images/du-hoc-han/1.png" alt="" fill className="object-contain" />
            <div id="visa-d2"></div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-0 lg:mt-24">
            <div className="col-span-1 px-8 flex flex-col gap-12">
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-12 text-left">2.2 Du học hệ Đại học (VISA D2)</h3>
                <div className="absolute h-12 w-20 -top-4 -left-8 -z-10">
                  <Image src="/images/decor/decor2.png" alt="" fill className="object-contain" />
                </div>
                <div className="absolute h-32 w-[16rem] lg:w-[28rem] top-0 left-16 -z-10">
                  <Image src="/images/du-hoc-han/he-dai-hoc.png" alt="" fill className="object-contain" />
                </div>
              </div>
              <div>
                <DecorTitle title="Điều kiện ứng tuyển" />
                <p>
                  <b>Quy định về thời gian</b> học đại học:
                </p>
                <ListDashed list={['Học lý thuyết 60%', 'Học Tiếng Hàn 20%', 'Văn hóa Hàn và các buổi thực hành ngoại khóa 20%']} />
                <p className="mt-6">
                  <b>Điều kiện</b> về thời gian làm thêm:
                </p>
                <ListDashed
                  list={[
                    () => (
                      <>
                        Các trường đại học Hàn Quốc yêu cầu sinh viên 06 tháng mới được đi làm thêm, tối đa <b>20h/tuần</b>.
                      </>
                    )
                  ]}
                />
                <p className="mt-6">
                  <b>Chứng chỉ:</b>
                </p>
                <ListDashed list={['Chứng chỉ trình độ tiếng Hàn.', 'Bằng chuyên ngành tại các trường cao đẳng, đại học.']} />
              </div>
              <div>
                <DecorTitle title="Những quyền lợi khi kết thúc khóa học" />
                <ListDashed
                  list={[
                    () => (
                      <>
                        <b>Chuyển visa D10</b> làm việc trong 02 năm.
                      </>
                    ),
                    () => (
                      <>
                        Sau 02 năm chuyển <b>visa E7</b> nếu có tay nghề và trình độ cao.
                      </>
                    ),
                    'Có mức lương cao và được làm việc lâu dài ở Hàn Quốc.'
                  ]}
                />
              </div>
            </div>
            <div className="col-span-1 px-6">
              <div className="relative h-[600px] w-full mt-0 lg:mt-32">
                <Image src="/images/du-hoc-han/2.png" alt="" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
