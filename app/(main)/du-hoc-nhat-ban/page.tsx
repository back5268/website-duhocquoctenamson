import { CalligraphyTitle } from '@/components/calligraphy-title';
import { DecorTitle } from '@/components/decor-title';
import { Header } from '@/components/header';
import { ListDashed } from '@/components/list-dashed';
import { japans } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="container lg:w-9/12 mt-24">
      <div className="flex flex-col gap-4 items-center justify-center w-full">
        <div className="sticky top-20 w-full py-4 bg-white z-10">
          <Header label="Du Học" hightlight="Nhật Bản" />
          {/* <div className="grid-1 grid md:grid-cols-2 lg:grid-cols-4 text-center">
            {japans.map(({ label, href }, index) => (
              <Link
                href={href}
                key={index}
                className="text-secondary py-6 bg-slate-100 text-lg"
              >
                {label}
              </Link>
            ))}
          </div> */}
          <hr />
        </div>
        <div className="min-h-screen w-full">
          <div id="tu-tuc">
            <div className="grid-1 grid grid-cols-2">
              <div>
                <div className="flex flex-col gap-8">
                  <CalligraphyTitle title="1.1 Du Học Tự Túc" href="/images/du-hoc-nhat/du-hoc-tu-tuc.png" />

                  <div>
                    <DecorTitle title="Điều kiện" />
                    <ul className="ml-4 list-disc leading-8">
                      <li className="border-b pb-1 my-2 border-dashed">
                        <b>Trình độ học vấn:</b> Đã tốt nghiệp THPT; hạnh kiểm khá trở lên, điểm trung bình &gt; 6.5; số năm trống không quá 3 năm.
                      </li>
                      <li className="border-b pb-1 my-2 border-dashed">
                        <b>Trình độ tiếng Nhật:</b> Tối thiểu là N5.
                      </li>
                      <li className="border-b pb-1 my-2 border-dashed">
                        <b>Lý lịch:</b> Không có tiền án tiền sự; không thuộc diện cấm xuất cảnh của Cục QLXNC Việt Nam.
                      </li>
                    </ul>
                  </div>

                  <div className="relative w-full">
                    <div className="absolute h-10 w-full -top-2 -right-0 -z-10">
                      <Image src="/images/du-hoc-nhat/2.png" alt="" fill className="object-contain" />
                    </div>
                    <DecorTitle title="Chi phí" href="/images/du-hoc-nhat/chi-phi.png" />
                    <ListDashed list={['Chi phí hoàn thiện hồ sơ', 'Chi phí học tiếng Nhật tại Việt Nam', 'Vé máy bay Việt Nam - Nhật Bản', 'Chi phí chứng thực bằng cấp và xin Visa']} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full px-4">
                <div className="relative h-[28rem] w-full z-0 mt-24">
                  <Image src="/images/du-hoc-nhat/3.png" alt="" fill className="object-contain" />
                </div>
              </div>
            </div>

            <div className="grid-1 grid grid-cols-2">
              <div className="relative h-[20rem] w-full z-0">
                <Image src="/images/du-hoc-nhat/1.png" alt="" fill className="object-contain" />
              </div>
              <div className="relative w-full">
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
              </div>
            </div>
          </div>

          <div id="hoc-bong-bao" className="mt-32">
            <div className="grid-1 grid grid-cols-2">
              <div>
                <div className="flex flex-col gap-8">
                  <div className="relative">
                    <h3 className="text-2xl font-semibold mb-12 text-left">1.2 Du Học Học Bổng Báo</h3>
                    <div className="absolute h-12 w-20 -top-4 -left-8 -z-10">
                      <Image src="/images/decor/decor2.png" alt="" fill className="object-contain" />
                    </div>
                    <div className="absolute h-28 w-80 top-0 left-16 -z-10">
                      <Image src="/images/du-hoc-nhat/hoc-bong-bao.png" alt="" fill className="object-contain" />
                    </div>
                  </div>

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
                    <ListDashed
                      list={[
                        'Công việc đòi hỏi đúng giờ, chính xác và sự cẩn thận.',
                        'Công việc lặp đi lặp lại hàng năm.',
                        'Thời gian đầu tiếng Nhật chưa tốt có thể gặp một vài khó khăn nhưng dần dần sẽ quen và cải thiện.'
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full px-4">
                <div className="relative h-[36rem] w-full z-0 mt-12">
                  <Image src="/images/du-hoc-nhat/4.png" alt="" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>

          <div id="hoc-bong-nha-hang" className="mt-32">
            <div className="flex flex-col gap-8">
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-12 text-left">1.2 Du Học Học Bổng Nhà Hàng</h3>
                <div className="absolute h-12 w-20 -top-4 -left-8 -z-10">
                  <Image src="/images/decor/decor2.png" alt="" fill className="object-contain" />
                </div>
                <div className="absolute h-28 w-96 top-0 left-16 -z-10">
                  <Image src="/images/du-hoc-nhat/hoc-bong-nha-hang.png" alt="" fill className="object-contain" />
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative h-80 w-full -z-10 flex justify-center">
                  <Image src="/images/du-hoc-nhat/5.png" alt="" fill className="object-contain" />
                </div>
              </div>
            </div>

            <div className="grid-1 grid grid-cols-2 mt-12">
              <div>
                <div className="flex flex-col gap-8">
                  <div className="leading-8">
                    <DecorTitle title="Chế độ học bổng của nhà hàng" />
                    <p>
                      Năm đầu tiên được hỗ trợ <b>300,000 Yên</b>
                    </p>
                    <p>
                      Trường hợp gia hạn học bổng năm thứ hai: Được gia hạn tối đa <b>6 tháng</b> (1 năm tối đa 6 tháng)
                    </p>
                    <ul className="ml-4 list-disc">
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
                    <ul className="ml-4 list-disc leading-8">
                      <li className="border-b pb-1 my-2 border-dashed">
                        Tỷ lệ đi học ở trường <b>trên 90%</b>
                      </li>
                      <li className="border-b pb-1 my-2 border-dashed">Tuân thủ thời gian làm việc theo quy định của Pháp luật</li>
                      <li className="border-b pb-1 my-2 border-dashed">Trường hợp vắng mặt, nghỉ làm phải xin phép</li>
                      <li className="border-b pb-1 my-2 border-dashed">Làm thêm 1 công việc tại Nhà hàng trong tập đoàn</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full px-4">
                <div className="relative h-[36rem] w-full z-0 mt-48">
                  <Image src="/images/du-hoc-nhat/6.png" alt="" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>

          <div id="hoc-bong-dieu-duong" className="mt-32">
            <div className="grid-1 grid grid-cols-2">
              <div>
                <div className="flex flex-col gap-8">
                  <div className="relative">
                    <h3 className="text-2xl font-semibold mb-12 text-left">1.2 Du Học Học Bổng Điều Dưỡng</h3>
                    <div className="absolute h-12 w-20 -top-4 -left-8 -z-10">
                      <Image src="/images/decor/decor2.png" alt="" fill className="object-contain" />
                    </div>
                    <div className="absolute h-32 w-[28rem] top-0 left-16 -z-10">
                      <Image src="/images/du-hoc-nhat/hoc-bong-dieu-duong.png" alt="" fill className="object-contain" />
                    </div>
                  </div>

                  <div className="flex flex-col w-full px-4">
                    <div className="relative h-[36rem] w-full z-0 mt-12">
                      <Image src="/images/du-hoc-nhat/7.png" alt="" fill className="object-contain" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <DecorTitle title="Điều kiện" />
                  <ul className="ml-4 list-disc leading-8">
                    <li className="border-b pb-1 my-2 border-dashed">
                      Nam và nữ: <b>18 – 30 tuổi</b>
                    </li>
                    <li className="border-b pb-1 my-2 border-dashed">
                      <b>Tốt nghiệp THPT</b> trở lên trong vòng 3 năm gần đây. Ưu tiên cho những ai đang theo học hoặc đã tốt nghiệp các chuyên ngành Y, Dược, Hộ lý, Điều dưỡng tại các trường ở Việt
                      Nam.
                    </li>
                    <li className="border-b pb-1 my-2 border-dashed">
                      Điểm trung bình học bạ phải từ <b>6.0 trở lên.</b>
                    </li>
                    <li className="border-b pb-1 my-2 border-dashed">
                      Trình độ tiếng Nhật ít nhất đạt <b>sơ cấp N5.</b>
                    </li>
                    <li className="border-b pb-1 my-2 border-dashed">Chưa lập gia đình và chưa có con, có đam mê và nguyện vọng học tập, làm việc lâu dài trong lĩnh vực điều dưỡng tại Nhật Bản.</li>
                    <li className="border-b pb-1 my-2 border-dashed">Không có tiền án tiền sự và không thuộc diện bị cấm nhập cảnh tại cả Việt Nam và Nhật Bản.</li>
                  </ul>
                </div>

                <div className="relative w-full">
                  <DecorTitle title="Ưu điểm của học bổng" />
                  <ul className="ml-4 list-disc leading-8">
                    <li className="border-b pb-1 my-2 border-dashed">
                      <b>Miễn phí 100%</b> học phí
                    </li>
                    <li className="border-b pb-1 my-2 border-dashed">Miễn phí KTX, được cấp phí sinh hoạt</li>
                    <li className="border-b pb-1 my-2 border-dashed">
                      Sau khi hoàn thành chương trình học sẽ làm việc tại bệnh viện, viện dưỡng lão hàng đầu của đất nước. Cơ hội tìm việc làm với mức lương cao và định cư tại Nhật
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
