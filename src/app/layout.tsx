import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "지컴퍼니 | 찾아가는 뮤지컬 공연",
  description:
    "학교로, 기관으로 직접 찾아가는 맞춤형 뮤지컬 공연. 지컴퍼니가 특별한 무대를 만들어 드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
