import { locations } from "@/constants";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { EmailSection } from "@/components/email-section";
import { PhoneSection } from "@/components/phone-section";

const items = [
  { label: "Du học Nhật Bản", href: "/du-hoc-nhat-ban" },
  { label: "Du học Hàn Quốc", href: "/du-hoc-han-quoc" },
  { label: "Xuất khẩu Nhật Bản", href: "/xuat-khau-nhat-ban" },
  { label: "Xuất khẩu Hàn Quốc", href: "/xuat-khau-han-quoc" },
  { label: "Xuất khẩu Châu Âu", href: "/xuat-khau-chau-au" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary-50 text-center bg-secondary text-white lg:text-left mt-24">
      <div className="mx-24 py-10 pt-16 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-12">
          <div className="col-span-3 px-2">
            <h6 className="flex justify-center font-semibold uppercase md:justify-start text-lg">
              Du học quốc tế Nam Sơn
            </h6>
            <hr className="mt-2 mb-4" />
            {items.map(({ label, href }, index) => (
              <Link href={href} key={index} className="hover:text-primary">
                <div className="flex gap-2 items-center my-3">
                  <CheckCircle />
                  <span>{label}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="col-span-6 px-2">
            <h6 className="flex justify-center font-semibold uppercase md:justify-start text-lg">
              Cơ sở
            </h6>
            <hr className="mt-2 mb-4" />
            {locations.map(({ label, children }, index) => (
              <div key={index} className="mb-4">
                <h5 className="font-medium">{label}</h5>
                {children.map(({ label, prefix2 }, iz) => (
                  <ul key={iz} className="my-3 pl-8 list-disc">
                    <li>
                      {prefix2 ? <span>{prefix2}</span> : ""} {label}
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
          <div className="col-span-3 px-2">
            <h6 className="flex justify-center font-semibold uppercase md:justify-start text-lg">
              Kết nối
            </h6>
            <hr className="mt-2 mb-4" />
            <div className="flex flex-col gap-3 my-3">
              <PhoneSection />
              <EmailSection />
            </div>
            <div className="relative h-32 w-[340px] rounded-md overflow-hidden">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100083930922128&tabs=timeline&width=340&height=70&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId"
                width="340"
                height="140"
                className="rounded-md"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="bg-secondary p-6 text-center">
        <div className="flex justify-center gap-8 mb-4">
          <Link className="hover:text-primary" href="/gioi-thieu">
            Giới thiệu
          </Link>
          <Link className="hover:text-primary" href="/lien-he">
            Liên hệ
          </Link>
          <Link className="hover:text-primary" href="">
            Chính sách
          </Link>
          <Link
            className="hover:text-primary"
            href="https://maps.app.goo.gl/gvtcC59k7obmAi3v8"
            target="_blank"
          >
            Google Map
          </Link>
        </div>
        <span>© 2024 Copyright: </span>
        <a className="font-semibold">Du Học Quốc Tế Nam Sơn</a>
      </div>
    </footer>
  );
};
