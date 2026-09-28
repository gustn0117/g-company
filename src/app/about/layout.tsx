import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/site";

const title = "회사소개 - 찾아가는 공연 전문기업";
const description =
  "지컴퍼니는 학교, 기관, 축제 현장 등 공연이 필요한 곳이라면 전국 어디든 직접 찾아가 뮤지컬 무대를 선보이는 전문 공연기업입니다. 기획·제작부터 무대 설치·철수까지 책임집니다.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about", type: "website" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "홈", path: "/" },
          { name: "회사소개", path: "/about" },
        ])}
      />
      {children}
    </>
  );
}
