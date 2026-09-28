import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SHOWS, breadcrumbJsonLd, showJsonLd } from "@/lib/site";

const show = SHOWS.find((item) => item.slug === "earth-refugee-2084")!;

const title = `${show.title} - ${show.genre}`;

export const metadata: Metadata = {
  title,
  description: show.description,
  keywords: show.keywords,
  alternates: { canonical: `/shows/${show.slug}` },
  openGraph: {
    title,
    description: show.description,
    url: `/shows/${show.slug}`,
    type: "article",
    images: [{ url: show.poster, alt: `${show.title} 공연 포스터` }],
  },
};

export default function ShowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          showJsonLd(show),
          breadcrumbJsonLd([
            { name: "홈", path: "/" },
            { name: "공연 작품", path: "/shows" },
            { name: show.title, path: `/shows/${show.slug}` },
          ]),
        ]}
      />
      {children}
    </>
  );
}
