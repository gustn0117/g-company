import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { CONTACT, SITE_URL, breadcrumbJsonLd } from "@/lib/site";

const title = "공연 문의 - 일정·견적 상담";
const description = `찾아가는 뮤지컬 공연 문의. 원하시는 공연 일정, 장소, 대상 인원을 알려주시면 맞춤형 프로그램을 제안해 드립니다. 전화 ${CONTACT.phone} / 이메일 ${CONTACT.email}`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact", type: "website" },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  name: title,
  description,
  mainEntity: { "@id": `${SITE_URL}/#organization` },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          contactPageJsonLd,
          breadcrumbJsonLd([
            { name: "홈", path: "/" },
            { name: "공연 문의", path: "/contact" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
