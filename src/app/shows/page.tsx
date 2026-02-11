"use client";

import Link from "next/link";
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
    gradient: "from-teal-800 to-cyan-900",
    tag: "안전교육",
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
    gradient: "from-slate-800 to-zinc-900",
    tag: "환경",
    highlights: ["초록별 SF환경동화상 우수상 수상작 원작", "입체낭독극 형식의 독창적 연출", "탄소중립·환경교육 연계 가능"],
    hasDetailPage: true,
  },
  {
    title: "별빛 소나타",
    slug: null,
    genre: "성장 뮤지컬",
    audience: "중·고등학생",
    duration: "70분",
    desc: "꿈을 향해 나아가는 청소년들의 이야기. 우정과 도전, 그리고 성장의 감동을 담은 뮤지컬.",
    longDesc:
      "별빛 소나타는 꿈을 찾아가는 청소년들의 성장 이야기를 그린 뮤지컬입니다. 서로 다른 꿈을 가진 친구들이 갈등과 화해를 거치며 함께 성장해나가는 과정을 감동적으로 그려냅니다. 학생들이 공감할 수 있는 일상적 소재와 풍부한 음악이 어우러져 관객에게 깊은 여운을 남깁니다.",
    gradient: "from-violet-900 to-indigo-900",
    tag: "인기",
    highlights: ["우정과 성장의 메시지", "청소년 공감 스토리", "참여형 무대 연출"],
    hasDetailPage: false,
  },
  {
    title: "해피 투게더",
    slug: null,
    genre: "학교폭력예방 뮤지컬",
    audience: "초·중학생",
    duration: "60분",
    desc: "서로 다른 우리가 함께 만들어가는 행복. 학교폭력 예방 메시지를 재미있고 감동적으로 전달합니다.",
    longDesc:
      "해피 투게더는 학교폭력 예방을 주제로 한 교육 뮤지컬입니다. 무심코 던진 말과 행동이 친구에게 어떤 영향을 주는지, 진정한 우정이란 무엇인지를 생각하게 만드는 작품입니다. 관객 참여 코너를 통해 학생들이 직접 문제 해결에 참여하며 메시지를 더 깊이 이해하게 됩니다.",
    gradient: "from-emerald-900 to-teal-900",
    tag: "교육",
    highlights: ["학교폭력 예방 교육", "관객 참여 프로그램", "교육부 인정 콘텐츠"],
    hasDetailPage: false,
  },
  {
    title: "드림 스테이지",
    slug: null,
    genre: "진로탐색 뮤지컬",
    audience: "중·고등학생",
    duration: "65분",
    desc: "다양한 직업의 세계를 뮤지컬로 만나는 진로 탐색 공연. 꿈을 찾는 여정에 함께합니다.",
    longDesc:
      "드림 스테이지는 다양한 직업을 뮤지컬로 소개하는 진로 탐색 공연입니다. 주인공이 여러 직업인을 만나며 자신만의 꿈을 찾아가는 여정을 통해, 학생들에게 다양한 진로에 대한 영감과 동기부여를 제공합니다. 공연 후 직업 체험 활동과 연계하여 더 풍부한 교육 경험을 선사합니다.",
    gradient: "from-amber-900 to-orange-900",
    tag: "진로",
    highlights: ["다양한 직업 소개", "진로 동기부여", "체험 활동 연계 가능"],
    hasDetailPage: false,
  },
  {
    title: "우리들의 시간",
    slug: null,
    genre: "인성교육 뮤지컬",
    audience: "초등학생",
    duration: "50분",
    desc: "배려와 소통의 가치를 노래하는 인성교육 뮤지컬. 어린이 눈높이에 맞춘 참여형 공연입니다.",
    longDesc:
      "우리들의 시간은 초등학생을 위한 인성교육 뮤지컬입니다. 배려, 존중, 소통 등 기본적인 인성 가치를 재미있는 스토리와 신나는 음악으로 전달합니다. 어린이들이 직접 노래를 따라 부르고 율동에 참여하는 인터랙티브 공연으로, 자연스럽게 교육적 메시지를 체득할 수 있습니다.",
    gradient: "from-rose-900 to-pink-900",
    tag: "NEW",
    highlights: ["어린이 맞춤 콘텐츠", "인터랙티브 공연", "인성 가치 교육"],
    hasDetailPage: false,
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
