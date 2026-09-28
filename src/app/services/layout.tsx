import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/site";

const title = "찾아가는 공연 서비스 - 학교·기관 공연 섭외";
const description =
  "학교, 기관, 축제 등 공연이 필요한 곳이라면 전국 어디든 찾아갑니다. 대상과 목적에 맞는 맞춤형 뮤지컬 프로그램을 제안하고, 무대 설치부터 철수까지 지컴퍼니가 모두 책임집니다.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services", type: "website" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "찾아가는 뮤지컬 공연",
  serviceType: "학교·기관 방문 공연 기획 및 제작",
  description,
  url: `${SITE_URL}/services`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "대한민국" },
  audience: {
    "@type": "Audience",
    audienceType: "초·중·고등학교, 유치원, 공공기관, 지역축제",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd,
          breadcrumbJsonLd([
            { name: "홈", path: "/" },
            { name: "공연 서비스", path: "/services" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
