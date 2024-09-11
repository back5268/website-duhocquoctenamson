import { DecorTitle } from '@/components/decor-title';
import { Header } from '@/components/header';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="container lg:w-9/12 mt-24">
      <div className="flex flex-col gap-4 items-center justify-center w-full">
        <div className="sticky top-20 w-full py-4 bg-white z-10">
          <Header label="Du học" hightlight="Hàn Quốc" />
        </div>

        <div className="relative w-full p-6 bg-white mt-12 z-0 flex flex-col items-center">
          <div className="relative w-full mb-12">
            <h3 className="text-2xl font-semibold mb-12 text-left">Điều kiện theo học các trường Đại học ở Hàn Quốc</h3>
            <div className="absolute h-12 w-20 -top-4 -left-8 -z-10">
              <Image src="/images/decor/decor2.png" alt="" fill className="object-contain" />
            </div>
            <div className="absolute h-20 w-80 top-0 left-16 -z-10">
              <Image src="/images/du-hoc-han/dieu-kien.png" alt="" fill className="object-contain" />
            </div>
          </div>

          <div className="absolute bottom-4 right-[15%] left-[15%] bg-primary p-1 rounded-b-3xl"></div>
          <div className="rounded-xl border-2 border-primary">
            <table className="table-auto w-full border-collapse leading-8">
              <tbody>
                <tr>
                  <td className="border-r-2 border-b-2 border-dashed border-primary text-center font-semibold min-w-64">Một số trường Top</td>
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
                <tr>
                  <td className="border-r-2 border-t-2 border-dashed border-primary text-center font-semibold">Bạn cần</td>
                  <td className="border-t-2 border-l-2 border-dashed border-primary p-4" colSpan={3}>
                    Học tiếng Hàn 3 – 4 tháng trước khi bay hoặc phải vượt qua kiểm tra tiếng Hàn.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-start w-full mt-12">
          <div className="relative">
            <h3 className="text-2xl font-semibold mb-12 text-left">2.1 Du học tiếng Hàn (Visa D4-1)</h3>
            <div className="absolute h-12 w-20 -top-4 -left-8 -z-10">
              <Image src="/images/decor/decor2.png" alt="" fill className="object-contain" />
            </div>
            <div className="absolute h-32 w-[28rem] top-0 left-16 -z-10">
              <Image src="/images/du-hoc-han/visad4.png" alt="" fill className="object-contain" />
            </div>
          </div>
          <DecorTitle title="Điều kiện ứng tuyển" />
          <p>
            <b>Quy định về thời gian</b> học tối đa 2 năm:
          </p>
          <ul className="list-disc pl-5 leading-8">
            <li>Thời gian học Tiếng là 80%</li>
            <li>Thời gian học văn hóa Hàn Quốc là 20%</li>
            <li>Chương trình ngoại khóa</li>
          </ul>
          <hr />
          <p>
            <b>Điều kiện</b> về thời gian làm thêm:
          </p>
          <ul className="list-disc pl-5 leading-8">
            <li>Các trường đại học Hàn Quốc yêu cầu sinh viên 06 tháng mới được đi làm thêm, tối đa 20h/tuần.</li>
          </ul>
          <hr />
          <p>
            <b>Yêu cầu</b> chứng chỉ tiếng Hàn, bằng cấp:
          </p>
          <ul className="list-disc pl-5 leading-8">
            <li>Chứng chỉ trình độ tiếng Hàn không yêu cầu</li>
            <li>Tốt nghiệp THPT trở lên.</li>
          </ul>
          <hr />
          <DecorTitle title="Quyền Lợi Sau Khi Hết Khóa" />
          <ul className="list-disc pl-5 leading-8">
            <li>Sinh viên được chuyển visa D2 học chuyên ngành</li>
            <li>Sau khi tốt nghiệp chuyên ngành được chuyển visa D10 làm việc 2 năm</li>
            <li>Sau 02 năm chuyển visa E7 nếu có tay nghề - trình độ cao</li>
            <li>Có mức lương cao và được làm việc lâu dài ở Hàn Quốc</li>
          </ul>

          <div className="relative h-[400px] w-full mt-12">
            <Image src="/images/du-hoc-han/1.png" alt="" fill className="object-contain" />
          </div>

          <div className="w-full grid grid-cols-2 mt-24">
            <div className="col-span-1 px-6">
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-12 text-left">2.2 Du học hệ Đại học (VISA D2)</h3>
                <div className="absolute h-12 w-20 -top-4 -left-8 -z-10">
                  <Image src="/images/decor/decor2.png" alt="" fill className="object-contain" />
                </div>
                <div className="absolute h-32 w-[28rem] top-0 left-16 -z-10">
                  <Image src="/images/du-hoc-han/he-dai-hoc.png" alt="" fill className="object-contain" />
                </div>
              </div>
              <DecorTitle title="Điều kiện ứng tuyển" />
              <p>
                <b>Quy định về thời gian</b> học đại học:
              </p>
              <ul className="list-disc pl-5 leading-8">
                <li>Học lý thuyết 60%</li>
                <li>Học Tiếng Hàn 20%</li>
                <li>Văn hóa Hàn và các buổi thực hành ngoại khóa 20%</li>
              </ul>
              <hr />
              <p>
                <b>Điều kiện</b> về thời gian làm thêm:
              </p>
              <ul className="list-disc pl-5 leading-8">
                <li>
                  Các trường đại học Hàn Quốc yêu cầu sinh viên 06 tháng mới được đi làm thêm, tối đa <b>20h/tuần</b>.
                </li>
              </ul>
              <hr />
              <p>
                <b>Chứng chỉ:</b>
              </p>
              <ul className="list-disc pl-5 leading-8">
                <li>Chứng chỉ trình độ tiếng Hàn.</li>
                <li>Bằng chuyên ngành tại các trường cao đẳng, đại học.</li>
              </ul>
              <hr />
              <DecorTitle title="Những quyền lợi khi kết thúc khóa học" />
              <ul className="list-disc pl-5 leading-8">
                <li>
                  <b>Chuyển visa D10</b> làm việc trong 02 năm.
                </li>
                <li>
                  Sau 02 năm chuyển <b>visa E7</b> nếu có tay nghề và trình độ cao.
                </li>
                <li>Có mức lương cao và được làm việc lâu dài ở Hàn Quốc.</li>
              </ul>
            </div>
            <div className="col-span-1 px-6">
              <div className="relative h-[300px] w-full">
                <Image src="/images/du-hoc-han/1.png" alt="" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
