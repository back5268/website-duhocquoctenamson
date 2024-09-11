import { Header } from '@/components/header';
import { locations } from '@/constants';

const Page = () => {
  return (
    <div className="container lg:w-9/12 mt-24">
      <div className="flex flex-col gap-4 items-center justify-center w-full">
        <Header label="Liên hệ với" hightlight="Nam Sơn" />
        <div className="flex w-full mt-8">
          <div className="w-1/2 px-4">
            {locations.map(({ label, children }, index) => (
              <div key={index} className="max-w-[30rem] mb-8">
                <h4 className="font-semibold text-dark-primary mb-4 border-b-2 pb-2">{label}</h4>
                {children.map(({ label, prefix, prefix2 }, iz) => (
                  <div key={iz} className="my-2">
                    <p className="flex items-center gap-4 ml-4">
                      {prefix ? <span className="font-bold text-dark-primary text-lg">{prefix}</span> : ''}{' '}
                      <span>
                        {prefix2 ? <b>{prefix2}</b> : ''} {label}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="w-1/2 px-4">
            <form className="w-full">
              <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 px-2">
                  <input className="custom-input" id="name" placeholder="Họ tên" />
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <input className="custom-input" id="phone" placeholder="Số điện thoại" />
                </div>
              </div>
              <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 px-2">
                  <input className="custom-input" id="address" placeholder="Địa chỉ" />
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <input className="custom-input" id="email" placeholder="Email" />
                </div>
              </div>
              <div className="flex flex-wrap mb-6">
                <div className="w-full px-2">
                  <input className="custom-input" id="title" placeholder="Chủ đề" />
                </div>
              </div>
              <div className="flex flex-wrap mb-6">
                <div className="w-full px-2">
                  <textarea className="custom-input" id="content" placeholder="Nội dung" rows={6} />
                </div>
              </div>
              <div className="flex justify-center">
                <button className="relative bg-primary w-40 h-12 text-white uppercase rounded-lg font-semibold hover:bg-dark-primary border-b-4 border-dark-primary" type="submit">
                  <div className="absolute border bg-primary opacity-50 rounded-lg top-1 right-6 w-28 h-10 animate-ping" />
                  Liên hệ ngay
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full mt-12 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14899.82657275733!2d105.93721975532635!3d20.994375022371162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135af4a6ec55c7d%3A0xad450dcc7630508c!2sVinhomes%20Ocean%20Park%2C%20Gia%20L%C3%A2m%2C%20Hanoi%2C%20Vietnam!5e0!3m2!1svi!2s!4v1725851070298!5m2!1svi!2s"
            width="600"
            height="600"
            loading="lazy"
            className="w-full"
            title="Company Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
