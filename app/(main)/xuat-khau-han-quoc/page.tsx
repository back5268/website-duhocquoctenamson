import { Header } from '@/components/header';

const Page = () => {
  return (
    <div className="container lg:w-8/12 mt-24">
      <div className="flex flex-col gap-4 items-center justify-center w-full">
        <Header label="Xuất khẩu" hightlight="Hàn Quốc" />

        <div className="relative w-full p-6 bg-white mt-12 z-0">
          <div className="absolute right-[50%] translate-x-[50%] top-0 text-white bg-dark-primary h-12 w-72 rounded-3xl"></div>
          <div className="absolute right-[50%] translate-x-[50%] -top-1 text-white bg-primary h-12 w-72 flex justify-center items-center rounded-3xl border-light-primary border">
            <h2 className="text-lg font-semibold">Điều Kiện Tham Gia</h2>
          </div>
          <div className="absolute bottom-4 right-[15%] left-[15%] bg-primary p-1 rounded-b-3xl"></div>
          <div className="rounded-xl overflow-hidden border-2 border-primary">
            <table className="table-auto w-full border-collapse leading-8">
              <tbody>
                <tr>
                  <td className="border-r-2 border-b-2 border-dashed border-primary text-center font-semibold lg:min-w-64">Yêu Cầu</td>
                  <td className="border-b-2 border-l-2 border-dashed border-primary p-8">
                    <ul className="list-disc pl-5">
                      <li>Người có độ tuổi từ 18 – 39 tuổi, tùy vào từng loại visa lao động cụ thể sẽ có yêu cầu về độ tuổi khác nhau;</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border-r-2 border-b-2 border-t-2 border-dashed border-primary text-center font-semibold">Bằng Cấp</td>
                  <td className="border-b-2 border-t-2 border-l-2 border-dashed border-primary p-8">
                    <ul className="list-disc pl-5">
                      <li>Có bằng tốt nghiệp THCS/THPT/Trung cấp/Cao đẳng tùy vào tính chất từng công việc và yêu cầu của công ty;</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border-r-2 border-t-2 border-dashed border-primary text-center font-semibold">Yêu Cầu Khác</td>
                  <td className="border-t-2 border-l-2 border-dashed border-primary p-8">
                    <ul className="list-disc pl-5">
                      <li>Đáp ứng đủ điều kiện sức khỏe theo yêu cầu;</li>
                      <li>Công dân chưa từng có tiền án/tiền sự;</li>
                      <li>Người không nằm trong danh sách bị cấm nhập cảnh Hàn Quốc;</li>
                      <li>Người không nằm trong danh sách bị cấm xuất cảnh Việt Nam;</li>
                      <li>Tùy vào từng loại visa sẽ có những yêu cầu cụ thể khác nhau;</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="relative w-full p-6 bg-white mt-12 z-0">
          <div className="absolute right-[50%] translate-x-[50%] top-0 text-white bg-dark-primary h-12 w-72 rounded-3xl"></div>
          <div className="absolute right-[50%] translate-x-[50%] -top-1 text-white bg-primary h-12 w-72 flex justify-center items-center rounded-3xl border-light-primary border">
            <h2 className="text-lg font-semibold">Các Chương Trình Lao Động</h2>
          </div>
          <div className="absolute bottom-4 right-[15%] left-[15%] bg-primary p-1 rounded-b-3xl"></div>
          <div className="rounded-xl border-2 border-primary p-8 leading-8">
            <ul className="list-disc pl-64 mt-8">
              <li>Chương trình E7: E7-1, E7-2, E7-3 (Đơn hàng: Điện, Sơn, Hàn...)</li>
              <li>Chương trình E8</li>
              <li>Chương trình E9</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
