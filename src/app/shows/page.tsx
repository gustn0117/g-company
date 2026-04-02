"use client";

import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { useInView } from "@/hooks/useInView";

const shows = [
  {
    title: "키키키의 안전생활백서",
    slug: "kikiki-safety",
    genre: "안전교육 창작뮤지컬",
    audience: "7세 이상 (유아·어린이)",
    duration: "45분",
    desc: "K510 행성의 키키키와 지구 친구 비상구가 함께 떠나는 안전 모험! 즐거운 노래와 상황극으로 배우는 생활 속 안전 뮤지컬.",
    longDesc:
      "K510 행성에서 지구를 관찰하던 키키키가 드디어 꿈꾸던 지구 여행을 떠납니다. 그곳에서 만난 첫 번째 친구 비상구와 함께 지구 곳곳을 다니며, 아이들이 일상에서 자주 마주하는 위험 상황과 생활 속 안전 습관들을 알려주기 시작합니다. 즐거운 노래와 움직임, 눈높이에 맞춘 설명과 상황극을 통해 진짜 생활 속 안전을 배우는 따뜻하고 유쾌한 안전 뮤지컬입니다.",
    gradient: "from-[#3B5878] to-[#1E3450]",
    tag: "안전교육",
    poster: "/images/kikiki-poster.png",
    highlights: ["유아·어린이 맞춤 안전교육", "참여형 상황극 연출", "언론 보도 실적 보유"],
    hasDetailPage: true,
  },
  {
    title: "2084 지구난민",
    slug: "earth-refugee-2084",
    genre: "환경 창작낭독뮤지컬",
    audience: "청소년·일반",
    duration: "90분",
    desc: "황폐해진 2084년 미래 지구에서 생존을 위해 지구를 떠나는 과정을 통해, 기후 위기의 현실과 인간의 책임을 질문하는 창작뮤지컬.",
    longDesc:
      "2084년, 뒤죽박죽인 날씨와 모래비, 전염병으로 황폐해진 지구. 사람들은 지구를 떠나기 시작하고, 과학자와 정치인마저 사라진다. 강산의 가족은 낡은 우주선 '이카로스'를 타고 달로 향하는 여정에서, 진짜 떠나야 할 것이 '지구'가 아니라 우리 안의 무책임한 선택들이었음을 깨닫기 시작합니다. 2023 초록별 SF환경동화상 우수상 수상작을 원작으로 한 입체낭독극 형식의 예술교육형 공연입니다.",
    gradient: "from-[#2D3654] to-[#151D30]",
    tag: "환경",
    poster: "/images/earth-refugee-2084-poster.png",
    highlights: ["초록별 SF환경동화상 우수상 수상작 원작", "입체낭독극 형식의 독창적 연출", "탄소중립·환경교육 연계 가능"],
    hasDetailPage: true,
  },
  {
    title: "더 페인팅",
    slug: "the-painting",
    genre: "기업가정신교육 뮤지컬",
    audience: "8세 이상",
    duration: "80분",
    desc: "체코 프라하에서의 실화를 바탕으로 한 창작 뮤지컬. 도전과 실패, 그리고 다시 일어서는 기업가정신을 무대 위에서 감동적으로 전달합니다.",
    longDesc:
      "작가 토코토코진(김현진)의 체코 프라하에서의 실화를 바탕으로 창작된 작품으로, 4차 산업시대 청소년 교육에 꼭 필요한 기업가정신을 뮤지컬에 담았습니다. 새로운 환경에 대한 도전, 한계를 극복하는 용기, 실패를 두려워하지 않는 태도를 무대 위에서 관객들에게 강렬한 메시지로 전달합니다. 2022 개정 교육과정 '기업가정신' 교과목 신설에 맞춘 교육 연계형 공연입니다.",
    gradient: "from-red-900 to-rose-900",
    tag: "기업가정신",
    poster: "/images/the-painting-poster.png",
    highlights: ["실화 기반 창작극", "고교학점제 연계 가능", "2024년 전국 학교 공연 21회"],
    hasDetailPage: true,
  },
];

export default function ShowsPage() {
  const showsSection = useInView();

  return (
    <>
      <PageHero
        eyebrow="Our Shows"
        title="지컴퍼니의"
        highlight="대표 작품"
        titleAfter="을 소개합니다."
        description="교육적 메시지와 예술적 감동이 어우러진 지컴퍼니만의 특별한 뮤지컬 라인업"
        breadcrumb="작품소개"
      />

      {/* Shows */}
      <section ref={showsSection.ref} className="py-28 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {shows.map((show, index) => (
              <div
                key={show.title}
                className={`grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl ${
                  showsSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                {/* Visual */}
                <div
                  className={`bg-gradient-to-br ${show.gradient} p-8 md:p-12 min-h-[300px] flex flex-col justify-between relative overflow-hidden`}
                >
                  {/* Poster background image */}
                  <Image
                    src={show.poster}
                    alt={`${show.title} 포스터`}
                    fill
                    className="object-cover opacity-20"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                  <div className="relative">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                      {show.tag}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black mt-6 text-white">
                      {show.title}
                    </h3>
                    <p className="text-white/60 font-medium mt-2">
                      {show.genre}
                    </p>
                  </div>

                  <div className="relative flex items-center gap-6 mt-8">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-white/40"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                      <span className="text-sm text-white/60">
                        {show.audience}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-white/40"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm text-white/60">
                        {show.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="bg-gray-warm p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      {show.longDesc}
                    </p>
                    <div className="mt-6 space-y-3">
                      {show.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700">
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    {show.hasDetailPage && show.slug && (
                      <Link
                        href={`/shows/${show.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-sm font-bold rounded-full hover:bg-gray-800 transition-all group"
                      >
                        상세 보기
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    )}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all"
                    >
                      이 작품 문의하기
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm mt-12">
            * 공연 내용 및 시간은 기관의 요청에 따라 조정 가능합니다.
          </p>
        </div>
      </section>

      <CTABanner
        title="마음에 드는 작품이 있으신가요?"
        highlight="지금 예약"
        description="원하는 작품과 일정을 알려주시면 맞춤형 공연을 준비해 드립니다."
        buttonText="공연 예약하기"
      />
    </>
  );
}
