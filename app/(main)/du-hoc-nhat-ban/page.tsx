import { CalligraphyTitle } from '@/components/calligraphy-title';
import { DecorTitle } from '@/components/decor-title';
import { Header } from '@/components/header';
import { ListDashed } from '@/components/list-dashed';
import Image from 'next/image';
import Link from 'next/link';

const japans = [
  {
    label: 'Du học tự túc',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
    href: '#tu-tuc'
  },
  {
    label: 'Du học học bổng báo',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
        />
      </svg>
    ),
    href: '#hoc-bong-bao'
  },
  {
    label: 'Du học học bổng nhà hàng',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
        />
      </svg>
    ),
    href: '#hoc-bong-nha-hang'
  },
  {
    label: 'Du học học bổng điều dưỡng',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
        />
      </svg>
    ),
    href: '#hoc-bong-dieu-duong'
  }
];

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full sticky top-20 bg-primary z-10 flex justify-center border">
        <div className="container lg:w-9/12">
          <div className="grid grid-cols-4 text-center">
            {japans.map(({ label, href, svg }, index) => (
              <Link href={href} key={index} className="py-8 text-lg flex items-center justify-center gap-4 text-white">
                {svg}
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container lg:w-9/12 mt-16 flex flex-col gap-24">
        <div id="tu-tuc"></div>
        <Header label="Du Học" hightlight="Nhật Bản" />
        <div className="flex flex-col gap-8">
          <div className="pl-6">
            <CalligraphyTitle title="1.1 Du Học Tự Túc" href="/images/du-hoc-nhat/du-hoc-tu-tuc.png" />
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1 px-12">
              <div className="flex flex-col gap-12">
                <div>
                  <DecorTitle title="Điều kiện" />
                  <ListDashed
                    list={[
                      () => (
                        <>
                          <b>Trình độ học vấn:</b> Đã tốt nghiệp THPT; hạnh kiểm khá trở lên, điểm trung bình &gt; 6.5; số năm trống không quá 3 năm.
                        </>
                      ),
                      () => (
                        <>
                          <b>Trình độ tiếng Nhật:</b> Tối thiểu là N5.
                        </>
                      ),
                      () => (
                        <>
                          <b>Lý lịch:</b> Không có tiền án tiền sự; không thuộc diện cấm xuất cảnh của Cục QLXNC Việt Nam.
                        </>
                      )
                    ]}
                  />
                </div>

                <div className="relative w-full">
                  <div className="absolute h-10 w-56 -top-2 -right-0 z-0">
                    <Image src="/images/du-hoc-nhat/2.png" alt="" fill className="object-contain" />
                  </div>
                  <DecorTitle title="Chi phí" href="/images/du-hoc-nhat/chi-phi.png" />
                  <ListDashed list={['Chi phí hoàn thiện hồ sơ', 'Chi phí học tiếng Nhật tại Việt Nam', 'Vé máy bay Việt Nam - Nhật Bản', 'Chi phí chứng thực bằng cấp và xin Visa']} />
                </div>
              </div>
            </div>
            <div className="col-span-1 px-12 flex flex-col w-full">
              <div className="relative h-[36rem] w-full z-0 -mt-12">
                <Image src="/images/du-hoc-nhat/3.png" alt="" fill className="object-contain" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 mt-8">
            <div className="col-span-1 relative h-[24rem] w-full z-0">
              <Image src="/images/du-hoc-nhat/1.png" alt="" fill className="object-contain" />
            </div>
            <div className="col-span-1 relative w-full px-12">
              <DecorTitle title="Cam kết" href="/images/du-hoc-nhat/cam-ket.png" />
              <ListDashed
                list={[
                  'Tỷ lệ đỗ tư cách lưu trú (COE), Visa cao.',
                  'Miễn phí tư vấn, chọn trường phù hợp với năng lực, nguyện vọng.',
                  'Hợp đồng đảm bảo; Lộ trình và chi phí rõ ràng; Công khai, minh bạch.',
                  'Không phát sinh bất kỳ chi phí nào khác ngoài hợp đồng.',
                  'Hỗ trợ việc làm tại Nhật Bản.'
                ]}
              />
              <div id="hoc-bong-bao"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="pl-8">
            <CalligraphyTitle title="1.2 Du Học Học Bổng Báo" href="/images/du-hoc-nhat/hoc-bong-bao.png" />
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1 px-12 flex flex-col gap-12">
              <div>
                <DecorTitle title="Điều kiện" />
                <ul className="ml-4 list-disc leading-8">
                  <li className="border-b pb-1 my-2 border-dashed">
                    <b>Trình độ học vấn:</b> Tốt nghiệp THPT trở lên.
                  </li>
                  <li className="border-b pb-1 my-2 border-dashed">
                    <b>Độ tuổi:</b> Nam, nữ có sức khỏe tốt trong độ tuổi từ <b>18-30</b>.
                  </li>
                  <li className="border-b pb-1 my-2 border-dashed">
                    Có chứng chỉ năng lực tiếng Nhật <b>JLPT N4 trở lên</b> tại thời điểm phỏng vấn.
                  </li>
                  <li className="border-b pb-1 my-2 border-dashed">Đã có bằng xe máy hoặc dự định lấy bằng trước thời hạn mà tòa soạn cấp học bổng quy định.</li>
                  <li className="border-b pb-1 my-2 border-dashed">Không có tiền án tiền sự, không thuộc các đối tượng bị cấm xuất nhập cảnh.</li>
                  <li className="border-b pb-1 my-2 border-dashed">Tùy thuộc từng loại học bổng mà sẽ có thêm những điều kiện khác nhau.</li>
                </ul>
              </div>

              <div className="relative w-full">
                <DecorTitle title="Ưu điểm của học bổng" />
                <ListDashed
                  list={[
                    'Được hỗ trợ học phí lên đến 100% trong 2 năm học trường Nhật ngữ. Và không cần hoàn lại tiền.',
                    'Được hỗ trợ tiền sinh hoạt phí (Một số tòa soạn còn miễn phí cả tiền KTX).',
                    'Được tham gia bảo hiểm tai nạn lao động, bảo hiểm y tế.',
                    'Có lương làm thêm lên đến 140.000 yên/ tháng.',
                    'Được hỗ trợ tiền vé máy bay sang Nhật.',
                    'Được cung cấp phương tiện di chuyển khi đi làm.',
                    'Công việc phát báo sẽ giúp các học sinh rèn đức tính đúng giờ, có được khả năng nghiêm túc, tỉ mỉ trong công việc.',
                    'Trong quá trình làm việc sẽ được cải thiện tiếng Nhật, đặc biệt là về khả năng giao tiếp.'
                  ]}
                />
              </div>

              <div className="relative w-full">
                <DecorTitle title="Hạn chế của học bổng" />
                <div id="hoc-bong-nha-hang"></div>
                <ListDashed
                  list={[
                    'Công việc đòi hỏi đúng giờ, chính xác và sự cẩn thận.',
                    'Công việc lặp đi lặp lại hàng năm.',
                    'Thời gian đầu tiếng Nhật chưa tốt có thể gặp một vài khó khăn nhưng dần dần sẽ quen và cải thiện.'
                  ]}
                />
              </div>
            </div>
            <div className="col-span-1 w-full flex flex-col">
              <div className="relative h-[36rem] w-full z-0 mt-12">
                <Image src="/images/du-hoc-nhat/4.png" alt="" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="pl-8">
            <CalligraphyTitle title="1.3 Học Bổng Nhà Hàng" href="/images/du-hoc-nhat/hoc-bong-nha-hang.png" />
          </div>
          <div className="w-full flex justify-center">
            <div className="relative h-80 w-full z-0 flex justify-center">
              <Image src="/images/du-hoc-nhat/5.png" alt="" fill className="object-contain" />
            </div>
          </div>

          <div className="grid grid-cols-2 mt-12">
            <div className="col-span-1 px-12 flex flex-col gap-12">
              <div className="relative w-full leading-8">
                <DecorTitle title="Chế độ học bổng của nhà hàng" />
                <ul className="ml-4 list-disc">
                  <li className="border-b pb-1 my-2 border-dashed">
                    Năm đầu tiên được hỗ trợ <b>300,000 Yên</b>
                  </li>
                  <li className="border-b pb-1 my-2 border-dashed">
                    Trường hợp gia hạn học bổng năm thứ hai: Được gia hạn tối đa <b>6 tháng</b> (1 năm tối đa 6 tháng)
                  </li>
                  <li className="border-b pb-1 my-2 border-dashed">
                    Học bổng 6 tháng là <b>150,000 Yên</b>
                  </li>
                  <li className="border-b pb-1 my-2 border-dashed">Ưu tiên cho những học sinh có nguyện vọng đổi sang diện Visa Tokutei Ginou và làm việc cho tập đoàn.</li>
                </ul>
              </div>

              <div className="relative w-full">
                <DecorTitle title="Điều kiện ứng tuyển" />
                <ListDashed
                  list={[
                    'Tốt nghiệp THPT trở lên',
                    'Có quốc tịch khác Nhật Bản',
                    'Có tinh thần, sức khỏe tốt, không mắc những bệnh mãn tính như lao phổi, viêm gan B, bệnh tâm thần',
                    'Có nguyện vọng nhập học trường tiếng Nhật, vừa học tại lớp vừa làm thêm tại nhà hàng',
                    'Không có hình xăm trên cơ thế'
                  ]}
                />
              </div>

              <div className="relative w-full">
                <DecorTitle title="Những lưu ý" />
                <div id="hoc-bong-dieu-duong"></div>
                <ListDashed
                  list={[
                    () => (
                      <>
                        Tỷ lệ đi học ở trường <b>trên 90%</b>
                      </>
                    ),
                    'Tuân thủ thời gian làm việc theo quy định của Pháp luật',
                    'Trường hợp vắng mặt, nghỉ làm phải xin phép',
                    'Làm thêm 1 công việc tại Nhà hàng trong tập đoàn'
                  ]}
                />
              </div>
            </div>
            <div className="col-span-1 flex flex-col w-full">
              <div className="relative h-[32rem] w-full z-0 mt-48">
                <Image src="/images/du-hoc-nhat/6.png" alt="" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <div className="flex flex-col w-full">
                <div className="relative h-[28rem] w-full z-0 mt-24">
                  <Image src="/images/du-hoc-nhat/7.png" alt="" fill className="object-contain" />
                </div>
              </div>
            </div>
            <div className="col-span-1 px-12 flex flex-col gap-12">
              <CalligraphyTitle title="1.2 Du Học Học Bổng Điều Dưỡng" href="/images/du-hoc-nhat/hoc-bong-dieu-duong.png" />
              <div>
                <DecorTitle title="Điều kiện" />
                <ListDashed
                  list={[
                    () => (
                      <>
                        Nam và nữ: <b>18 – 30 tuổi</b>
                      </>
                    ),
                    () => (
                      <>
                        <b>Tốt nghiệp THPT</b> trở lên trong vòng 3 năm gần đây. Ưu tiên cho những ai đang theo học hoặc đã tốt nghiệp các chuyên ngành Y, Dược, Hộ lý, Điều dưỡng tại các trường ở Việt
                        Nam.
                      </>
                    ),
                    () => (
                      <>
                        Điểm trung bình học bạ phải từ <b>6.0 trở lên.</b>
                      </>
                    ),
                    () => (
                      <>
                        Trình độ tiếng Nhật ít nhất đạt <b>sơ cấp N5.</b>
                      </>
                    ),
                    'Chưa lập gia đình và chưa có con, có đam mê và nguyện vọng học tập, làm việc lâu dài trong lĩnh vực điều dưỡng tại Nhật Bản.',
                    'Không có tiền án tiền sự và không thuộc diện bị cấm nhập cảnh tại cả Việt Nam và Nhật Bản.'
                  ]}
                />
              </div>

              <div>
                <DecorTitle title="Ưu điểm của học bổng" />
                <ListDashed
                  list={[
                    () => (
                      <>
                        <b>Miễn phí 100%</b> học phí
                      </>
                    ),
                    'Miễn phí KTX, được cấp phí sinh hoạt.',
                    'Sau khi hoàn thành chương trình học sẽ làm việc tại bệnh viện, viện dưỡng lão hàng đầu của đất nước. Cơ hội tìm việc làm với mức lương cao và định cư tại Nhật.'
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
