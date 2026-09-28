import type { Metadata } from "next";

const title = "공연 작품 - 안전교육·환경·기업가정신 창작뮤지컬";
const description =
  "교육적 메시지와 예술적 감동이 어우러진 지컴퍼니의 창작뮤지컬 라인업. 키키키의 안전생활백서, 2084 지구난민, 더 페인팅을 학교와 기관으로 직접 찾아가 공연합니다.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/shows" },
  openGraph: { title, description, url: "/shows", type: "website" },
};

export default function ShowsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
