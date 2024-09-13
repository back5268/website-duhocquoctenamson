"use client"

import { DecorTitle } from '@/components/decor-title';
import { Header } from '@/components/header';
import { ListDashed } from '@/components/list-dashed';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Cam = () => {
  return (
    <motion.div initial={{ x: -100 }} whileInView={{ x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="max-w-fit relative ml-24 mt-12">
      <div className="bg-white rounded-2xl">
        <h3 className="uppercase font-semibold text-2xl py-2 mb-4 border-b-2 border-dashed border-primary">Cam Kết</h3>
        <div className="ml-4">
          {['Tư Vấn Lộ Trình Rõ Ràng', 'Không Phát Sinh Thêm Chi Phí Ngoài', 'Đơn Hàng Uy Tín, Công Việc Ổn Định'].map((text, index) => (
            <div key={index} className="flex gap-2 my-2 items-center">
              <Check className="stroke-2 text-primary" />
              <span className="font-medium">{text}</span>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 -left-9 bg-primary w-8 rounded-full"></div>
        <div className="absolute inset-y-0 -left-8 bg-white w-8 rounded-2xl"></div>
      </div>
    </motion.div>
  );
};

const Page = () => {
  return (
    <div className="container lg:w-9/12 mt-24">
      <div className="flex flex-col gap-12 items-center justify-center w-full">
        <Header label="Xuất khẩu" hightlight="Nhật Bản" />

        <div>
          <div className="relative ml-8">
            <h3 className="text-2xl font-semibold mb-12 text-left">1.1 diện thực tập sinh kỹ năng</h3>
            <motion.div initial={{ x: -100 }} whileInView={{ x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="absolute h-12 w-20 -top-4 -left-8 -z-10">
              <Image src="/images/decor/decor2.png" alt="" fill className="object-contain" />
            </motion.div>
            <motion.div initial={{ x: 100 }} whileInView={{ x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="absolute h-32 w-96 top-0 left-16 -z-10">
              <Image src="/images/xuat-khau-nhat/ky-nang.png" alt="" fill className="object-contain" />
            </motion.div>
          </div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            <motion.div initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="absolute mt-[28rem] lg:mt-0 top-64 left-0 h-[32rem] w-full overflow-hidden">
              <Image src="/images/xuat-khau-nhat/2.png" alt="" fill className="object-contain" />
            </motion.div>
            <div className="col-span-1">
              <Cam />
            </div>
            <div className="col-span-1 px-12 pt-16">
              <DecorTitle title="Điều kiện" />
              <p className="font-semibold">Trình độ:</p>
              <ListDashed
                list={[
                  'Trên 18 tuổi',
                  'Tốt nghiệp THPT',
                  'Hoặc tốt nghiệp cấp 2, độ tuổi đến 35 với một số ngành nghề như: May, xây dựng ...',
                  'Đảm bảo đủ sức khỏe và không mắc các bệnh mà chính phủ Nhật Bản không cho nhập cảnh như: viêm gan siêu vi B, HIV, mù màu và các bệnh truyền nhiễm khác, …'
                ]}
              />
              <p className="mt-4">
                <b>Đơn hàng tuyển dụng:</b> Cơ khí, Xây dựng, Điện tử, Chế biến thủy hải sản, Đóng gói, Nông nghiệp, Làm bánh,…
              </p>
              <p className="mt-4">
                <b>Thời gian tham gia:</b> 1 năm, 3 năm hoặc 5 năm
              </p>
            </div>
          </div>
        </div>

        <div className="grid-1 grid grid-cols-1 lg:grid-cols-2 mt-96">
          <div className="col-span-1 px-12 py-16">
            <div className="flex flex-col gap-8">
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-12 text-left">1.2 diện Kỹ sư</h3>
                <motion.div initial={{ x: -100 }} whileInView={{ x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="absolute h-12 w-20 -top-4 -left-8 -z-10">
                  <Image src="/images/decor/decor2.png" alt="" fill className="object-contain" />
                </motion.div>
                <motion.div initial={{ x: 100 }} whileInView={{ x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="absolute h-16 w-48 top-0 left-16 -z-10">
                  <Image src="/images/xuat-khau-nhat/dien-ky-su.png" alt="" fill className="object-contain" />
                </motion.div>
              </div>
              <div>
                <DecorTitle title="Điều kiện" />
                <ListDashed
                  list={[
                    () => (
                      <>
                        <b>Trình độ:</b> Tốt nghiệp Cao đẳng, Đại học tại Việt Nam
                      </>
                    ),
                    'Đảm bảo đủ sức khỏe và không mắc các bệnh mà chính phủ Nhật Bản không cho nhập cảnh như: viêm gan siêu vi B, HIV, mù màu và các bệnh truyền nhiễm khác, …',
                    () => (
                      <>
                        Trình độ tiếng Nhật: <b>Tối thiểu N5</b>
                      </>
                    ),
                    () => (
                      <>
                        <b>Các ngành tuyển dụng:</b> Kỹ sư cơ khí, Thiết kế máy, Ô tô, Xây dựng, Cơ - Điện tử, Tự động hóa, Điện - Điện tử, IT, Nông nghiệp....
                      </>
                    ),
                    () => (
                      <>
                        Thời gian tham gia: <b>trên 3 năm</b>
                      </>
                    ),
                    'Có thể ở vĩnh trú tại Nhật',
                    'Có thể bảo lãnh người thân sang Nhật, trở về nước trong thời gian làm việc tại Nhật (chế độ như người Nhật)'
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 px-12 py-16">
            <div className="flex flex-col gap-8">
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-12 text-left">1.3 diện Tokutei</h3>
                <motion.div initial={{ x: -100 }} whileInView={{ x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="absolute h-12 w-20 -top-4 -left-8 -z-10">
                  <Image src="/images/decor/decor2.png" alt="" fill className="object-contain" />
                </motion.div>
                <motion.div initial={{ x: 100 }} whileInView={{ x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="absolute h-16 w-48 top-0 left-16 -z-10">
                  <Image src="/images/xuat-khau-nhat/tokutei.png" alt="" fill className="object-contain" />
                </motion.div>
              </div>
              <div>
                <DecorTitle title="Điều kiện" />
                <ListDashed
                  list={[
                    'Người trên 18 tuổi.',
                    'Đảm bảo đủ sức khỏe và không mắc các bệnh mà chính phủ Nhật Bản không cho nhập cảnh như: viêm gan siêu vi B, HIV, mù màu và các bệnh truyền nhiễm khác, …',
                    'Vượt qua hai kỳ thi năng lực tiếng Nhật N4 trở lên và kỳ thi tay nghề',
                    'Du học sinh có thể chuyển sang diện Visa Tokutei',
                    'Thực tập sinh đã hoàn thành hợp đồng và về nước muốn quay lại Nhật thì có thể xin Visa Tokutei'
                  ]}
                />
              </div>

              <div>
                <DecorTitle title="Ưu điểm" />
                <ListDashed
                  list={[
                    'Thời gian làm việc lên đến 5 năm.',
                    'Được hỗ trợ trong sinh hoạt và tiếng Nhật.',
                    'Lương cao hơn Thực tập sinh kỹ năng và tương đương với người Nhật cùng trình độ trong ngành nghề đó.',
                    'Có quyền thay đổi công ty nếu có lý do chính đáng.',
                    'Không được phép đưa gia đình sang Nhật.',
                    'Nếu sau 5 năm thi đậu kỳ thi bắt buộc thì sẽ được tham gia chương trình Kỹ năng đặc định số 2, người lao động sẽ được phép gia hạn visa và đưa gia đình lưu trú dài hạn tại Nhật.'
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
