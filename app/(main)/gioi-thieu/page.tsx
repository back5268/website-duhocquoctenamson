import { Header } from "@/components/header";
import Image from "next/image";

const Page = () => {
  return (
    <div className="container lg:w-9/12 mt-24">
      <div className="flex flex-col gap-4 items-center justify-center w-full">
        <Header label="Giới Thiệu Về" hightlight="Nam Sơn" />
        <div className="flex flex-col gap-12 items-center justify-center">
          <div className="flex">
            <div className="w-1/2 px-12 flex justify-center">
              <div className="relative w-full h-[28rem]">
                <Image
                  src="/images/gioi-thieu/2.png"
                  alt=""
                  fill
                  className="object-contain translate-y-32"
                />

                <div className="absolute top-0 left-0 w-full h-96 m-auto inset-0">
                  <Image
                    src="/images/gioi-thieu/1.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/2 pl-12 pt-24 text-lg px-8">
              <p className="mb-12">
                Được thành lập vào năm 2022, Nam Sơn là công ty chuyên sâu cung
                cấp dịch vụ tư vấn và hỗ trợ về Du học và Xuất khẩu lao động các
                nước <b>Nhật - Hàn - Úc - Châu Âu</b>. <br /> Với những tiêu chí
                quản lý chất lượng chuẩn mực và tỉ mỉ, Nam Sơn tự tin có thể đáp
                ứng được những yêu cầu khắt khe nhất của Quý khách hàng và nằm
                trong top được yêu thích, tin tưởng nhất.
              </p>
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-12 text-right">
                  Phương Châm
                </h3>
                <p>
                  Với phương châm <b>&quotChất lượng tạo niềm tin&quot</b> chúng tôi tự
                  hào vì đã hỗ trợ được 100% quý phụ huynh, học viên và khách
                  hàng đến với Nam Sơn. Chúng tôi luôn cố gắng và đồng hành cùng
                  khách hàng trên con đường tương lai phía trước.
                </p>
                <div className="absolute h-12 w-20 -top-4 -right-8 -z-10">
                  <Image
                    src="/images/decor/decor1.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute h-20 w-60 top-2 right-0 -z-10">
                  <Image
                    src="/images/gioi-thieu/phuong-cham.png"
                    alt="Phương Châm"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[12rem] w-full mt-32">
            <Image
              src="/images/gioi-thieu/3.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="flex mt-24">
            <div className="w-1/2 px-16">
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-12 text-left">
                  Thành tích
                </h3>
                <p>
                  Chúng tôi đã liên kết với hơn <b>100 đơn vị</b> từ các trường
                  Quốc tế và hơn <b>200 doanh nghiệp</b> lớn nhỏ tại các nước,
                  mục đích để cung cấp những chương trình học và làm việc tốt
                  nhất, chi phí hợp lý, hỗ trợ tối đa cho các học viên trong quá
                  trình theo học, cam kết về công việc cho học viên sau khi tốt
                  nghiệp. Toàn diện hỗ trợ Quý khách hàng trên con đường học tập
                  cũng như việc làm tại các nước Quốc tế.
                </p>
                <div className="absolute h-12 w-20 -top-4 -left-8 -z-10">
                  <Image
                    src="/images/decor/decor2.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute h-20 w-60 top-0 left-16 -z-10">
                  <Image
                    src="/images/gioi-thieu/thanh-tich.png"
                    alt="Phương Châm"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/2 px-16">
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-12 text-left">
                  Tầm nhìn
                </h3>
                <p>
                  Nam Sơn luôn đặt lợi ích và sự an tâm của Quý khách hàng lên
                  hàng đầu bằng những quy trình rõ ràng, cách làm việc chuyên
                  nghiệp, tư vấn đúng đủ, hỗ trợ tận tâm. <br /> Chúng tôi mong
                  muốn gắn kết cầu nối văn hóa giữa các nước, phát triển tri
                  thức và kinh tế nước nhà ngay từ những ngày đầu thành lập.
                </p>
                <div className="absolute h-12 w-20 -top-4 -left-8 -z-10">
                  <Image
                    src="/images/decor/decor2.png"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute h-20 w-60 top-0 left-16 -z-10">
                  <Image
                    src="/images/gioi-thieu/tam-nhin.png"
                    alt="Phương Châm"
                    fill
                    className="object-contain"
                  />
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
