import type { Metadata } from "next";
import "./globals.css";

import { Poppins, Nunito } from "next/font/google";
import FloatingCTA from "./compontent/buton.cta";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Duo Center - Trung Tâm Luyện Thi DET Số 1 Việt Nam",
  description: "Duo Center - Trung tâm luyện thi DET hàng đầu Việt Nam. Chúng tôi cung cấp khóa học chất lượng cao, đội ngũ giảng viên giàu kinh nghiệm và phương pháp học tập hiệu quả để giúp bạn đạt điểm số DET mơ ước. Hãy tham gia cùng chúng tôi để chinh phục kỳ thi DET và mở ra cánh cửa du học rộng lớn!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col ">{children}

        <FloatingCTA/>
      </body>
    </html>
  );
}
