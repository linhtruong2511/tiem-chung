import type React from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Trung Tâm Tiêm Chủng An Khang - Dịch Vụ Tiêm Chủng Uy Tín",
  description:
    "Trung tâm tiêm chủng chuyên nghiệp với đội ngũ y bác sĩ giàu kinh nghiệm. Đặt lịch hẹn tiêm chủng an toàn, hiệu quả.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={dmSans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
