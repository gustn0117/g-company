const BASE_URL = "https://g-company.hsweb.pics";

const shows = [
  {
    title: "키키키의 안전생활백서 - 안전교육 뮤지컬",
    link: `${BASE_URL}/shows/kikiki-safety`,
    description:
      "어린이 안전교육을 재미있는 뮤지컬로! 키키키와 함께 안전한 생활습관을 배워보세요.",
    pubDate: new Date("2026-02-14"),
  },
  {
    title: "2084 지구난민 - 환경 뮤지컬",
    link: `${BASE_URL}/shows/earth-refugee-2084`,
    description:
      "미래 지구의 환경 위기를 다룬 감동적인 뮤지컬. 환경보호의 중요성을 전합니다.",
    pubDate: new Date("2026-02-14"),
  },
  {
    title: "더 페인팅 - 기업가정신교육 뮤지컬",
    link: `${BASE_URL}/shows/the-painting`,
    description:
      "그림 한 장에서 시작되는 꿈과 도전! 기업가정신을 뮤지컬로 만나보세요.",
    pubDate: new Date("2026-02-14"),
  },
];

export async function GET() {
  const items = shows
    .map(
      (show) => `    <item>
      <title>${show.title}</title>
      <link>${show.link}</link>
      <description>${show.description}</description>
      <pubDate>${show.pubDate.toUTCString()}</pubDate>
      <guid>${show.link}</guid>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>지컴퍼니 - 찾아가는 뮤지컬 공연</title>
    <link>${BASE_URL}</link>
    <description>지컴퍼니는 찾아가는 뮤지컬 공연 기업으로, 학교와 기관에 감동적인 무대 경험을 전달합니다.</description>
    <language>ko</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
