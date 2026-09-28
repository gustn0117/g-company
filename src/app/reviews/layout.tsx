import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/site";

const title = "공연 후기 - 선생님·담당자 리뷰";
const description =
  "지컴퍼니의 찾아가는 뮤지컬 공연을 직접 경험하신 선생님과 기관 담당자분들의 솔직한 후기를 확인해 보세요.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/reviews" },
  openGraph: { title, description, url: "/reviews", type: "website" },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "홈", path: "/" },
          { name: "공연 후기", path: "/reviews" },
        ])}
      />
      {children}
    </>
  );
}
