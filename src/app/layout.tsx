import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "지컴퍼니 | 뮤지컬 공연",
  description:
    "학교로, 기관으로 직접 찾아가는 맞춤형 뮤지컬 공연. 지컴퍼니가 특별한 무대를 만들어 드립니다.",
  verification: {
    other: {
      "naver-site-verification": "01b7bc40ad086b500f697fe603b38994bef4c1be",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
