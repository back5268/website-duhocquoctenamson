import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NavigationScroll } from "@/components/navigation-scroll";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Du Học Quốc Tế Nam Sơn",
  description: "Du Học - Lao Động Nước Ngoài",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationScroll>{children}</NavigationScroll>
      </body>
    </html>
  );
}
