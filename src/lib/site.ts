export const SITE_URL = "https://g-company.kr";

export const SITE_NAME = "지컴퍼니";

export const SITE_DESCRIPTION =
  "학교, 기관, 축제 어디든 직접 찾아가는 맞춤형 뮤지컬 공연 전문기업. 안전교육, 환경, 기업가정신 창작뮤지컬을 기획·제작하고 전국 어디든 무대 설치부터 철수까지 책임집니다.";

export const CONTACT = {
  phone: "010-7132-0348",
  email: "g_companyspace@naver.com",
  address: {
    street: "방학로 3길 13 스페이스도모",
    locality: "도봉구",
    region: "서울특별시",
    country: "KR",
  },
};

export const SITE_KEYWORDS = [
  "지컴퍼니",
  "찾아가는 뮤지컬",
  "찾아가는 공연",
  "학교 뮤지컬 공연",
  "안전교육 뮤지컬",
  "환경 뮤지컬",
  "기업가정신 교육 뮤지컬",
  "창작뮤지컬",
  "학교 공연 섭외",
  "기관 공연 섭외",
  "어린이 뮤지컬",
  "청소년 뮤지컬",
];

export type ShowMeta = {
  slug: string;
  title: string;
  genre: string;
  audience: string;
  duration: string;
  durationISO: string;
  description: string;
  poster: string;
  keywords: string[];
};

export const SHOWS: ShowMeta[] = [
  {
    slug: "kikiki-safety",
    title: "키키키의 안전생활백서",
    genre: "안전교육 창작뮤지컬",
    audience: "7세 이상 (유아·어린이)",
    duration: "45분",
    durationISO: "PT45M",
    description:
      "K510 행성의 키키키와 지구 친구 비상구가 함께 떠나는 안전 모험. 화재·교통·전기·가정·유괴예방·재난 안전을 노래와 상황극으로 배우는 어린이 안전교육 창작뮤지컬입니다.",
    poster: "/images/kikiki-poster.png",
    keywords: [
      "키키키의 안전생활백서",
      "안전교육 뮤지컬",
      "어린이 안전 공연",
      "학교 안전교육 공연",
      "범죄예방 뮤지컬",
    ],
  },
  {
    slug: "earth-refugee-2084",
    title: "2084 지구난민",
    genre: "환경 창작낭독뮤지컬",
    audience: "청소년·일반",
    duration: "90분",
    durationISO: "PT90M",
    description:
      "황폐해진 2084년 미래 지구를 배경으로 기후위기와 인간의 책임을 묻는 창작 입체낭독뮤지컬. 2023 초록별 SF환경동화상 우수상 수상작으로 환경교육·탄소중립 교육과 연계할 수 있습니다.",
    poster: "/images/earth-refugee-2084-poster.png",
    keywords: [
      "2084 지구난민",
      "환경 뮤지컬",
      "기후위기 공연",
      "탄소중립 교육 공연",
      "청소년 환경교육 뮤지컬",
    ],
  },
  {
    slug: "the-painting",
    title: "더 페인팅",
    genre: "기업가정신교육 뮤지컬",
    audience: "8세 이상",
    duration: "80분",
    durationISO: "PT80M",
    description:
      "체코 프라하의 실화를 바탕으로 한 창작 뮤지컬. 도전과 실패, 그리고 다시 일어서는 기업가정신을 무대 위에서 전합니다. 전국 초·중·고등학교 찾아가는 공연으로 진행되었습니다.",
    poster: "/images/the-painting-poster.png",
    keywords: [
      "더 페인팅",
      "기업가정신 뮤지컬",
      "창업교육 공연",
      "학교 진로교육 공연",
      "청소년 뮤지컬",
    ],
  },
];

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "PerformingGroup",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "G Company",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/og-image.png`,
  description: SITE_DESCRIPTION,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.address.street,
    addressLocality: CONTACT.address.locality,
    addressRegion: CONTACT.address.region,
    addressCountry: CONTACT.address.country,
  },
  areaServed: {
    "@type": "Country",
    name: "대한민국",
  },
  knowsAbout: [
    "찾아가는 뮤지컬 공연",
    "안전교육 뮤지컬",
    "환경교육 뮤지컬",
    "기업가정신 교육 뮤지컬",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: "ko-KR",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function showJsonLd(show: ShowMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/shows/${show.slug}#work`,
    name: show.title,
    url: `${SITE_URL}/shows/${show.slug}`,
    description: show.description,
    genre: show.genre,
    image: `${SITE_URL}${show.poster}`,
    inLanguage: "ko-KR",
    typicalAgeRange: show.audience,
    timeRequired: show.durationISO,
    creator: { "@id": `${SITE_URL}/#organization` },
    producer: { "@id": `${SITE_URL}/#organization` },
  };
}
