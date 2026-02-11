"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import CTABanner from "@/components/CTABanner";

const characters = [
  {
    name: "키키키",
    desc: "K510 행성에서 온 호기심 많은 우주 탐험가. 지구별을 관찰하는 것을 누구보다 좋아하며, 드디어 꿈꾸던 지구 여행을 떠나게 됩니다.",
    emoji: "🚀",
  },
  {
    name: "비상구",
    desc: "키키키가 지구에서 만난 첫 번째 친구. 아이들이 일상에서 마주하는 위험 상황과 안전 습관을 알려주는 든든한 안전 가이드입니다.",
    emoji: "🚪",
  },
];

const safetyTopics = [
  { icon: "🔥", title: "화재 안전", desc: "화재 발생 시 대피 방법과 소화기 사용법" },
  { icon: "🚗", title: "교통 안전", desc: "횡단보도 건너기와 교통 신호 지키기" },
  { icon: "⚡", title: "전기 안전", desc: "감전 예방과 올바른 전기 사용 습관" },
  { icon: "🏠", title: "가정 안전", desc: "집 안에서 발생할 수 있는 위험 상황 대처" },
  { icon: "👤", title: "유괴·범죄 예방", desc: "낯선 사람 대처법과 도움 요청 방법" },
  { icon: "🌊", title: "재난 안전", desc: "지진, 태풍 등 자연재해 시 행동 요령" },
];

const pressArticles = [
  {
    title: "아동 범죄예방 뮤지컬 키키키의 안전생활백서 선보여",
    source: "더팩트",
    date: "2025.11.21",
  },
  {
    title: "당진시, 아동 범죄 예방 뮤지컬 성황...미래세대 안전 지킨다",
    source: "데일리한국",
    date: "2025.11.21",
  },
];

export default function KikikiSafetyPage() {
  const overviewSection = useInView();
  const storySection = useInView();
  const topicsSection = useInView();
  const pressSection = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-teal-800 via-teal-900 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-white/3 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/40 mb-8 animate-fade-in-up">
            <Link href="/" className="hover:text-accent transition-colors">
              홈
            </Link>
            <span>/</span>
            <Link href="/shows" className="hover:text-accent transition-colors">
              작품소개
            </Link>
            <span>/</span>
            <span className="text-white/70">키키키의 안전생활백서</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
                <span className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-300 text-xs font-bold rounded-full">
                  안전교육
                </span>
                <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs font-bold rounded-full">
                  창작뮤지컬
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black leading-tight animate-fade-in-up delay-100">
                키키키의
                <br />
                <span className="text-yellow-400">안전생활백서</span>
              </h1>

              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-lg animate-fade-in-up delay-200">
                K510 행성의 키키키와 지구 친구 비상구가 함께 떠나는 안전 모험!
                즐거운 노래와 상황극으로 배우는 생활 속 안전 뮤지컬.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up delay-300">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 transition-all duration-300 group"
                >
                  공연 문의하기
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
                <Link
                  href="/shows"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  다른 작품 보기
                </Link>
              </div>
            </div>

            {/* Visual placeholder */}
            <div className="animate-fade-in-up delay-200">
              <div className="aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <span className="text-8xl">🚀</span>
                  <p className="mt-4 text-white/40 text-sm font-medium">
                    공연 포스터
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 공연 개요 */}
      <section ref={overviewSection.ref} className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${
              overviewSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Performance Info
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-black mb-12">
              공연 개요
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Info Table */}
            <div
              className={`bg-gray-warm rounded-3xl p-8 md:p-10 transition-all duration-700 delay-100 ${
                overviewSection.inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-6">
                {[
                  { label: "공연명", value: "키키키의 안전생활백서" },
                  { label: "장르", value: "창작뮤지컬 (안전교육)" },
                  { label: "러닝타임", value: "45분" },
                  { label: "관람연령", value: "7세 이상" },
                  { label: "작 / 작곡", value: "희고 / 이은택" },
                  { label: "기획·제작", value: "지컴퍼니" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="w-28 text-sm font-bold text-gray-400 flex-shrink-0">
                      {item.label}
                    </span>
                    <span className="text-[15px] font-semibold text-black">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Characters */}
            <div className="space-y-6">
              {characters.map((char, i) => (
                <div
                  key={char.name}
                  className={`bg-gray-warm rounded-3xl p-8 transition-all duration-700 ${
                    overviewSection.inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150 + 200}ms` }}
                >
                  <div className="flex items-start gap-5">
                    <span className="text-5xl">{char.emoji}</span>
                    <div>
                      <h3 className="text-xl font-black text-black">
                        {char.name}
                      </h3>
                      <p className="mt-2 text-gray-500 text-[15px] leading-relaxed">
                        {char.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 시놉시스 */}
      <section ref={storySection.ref} className="py-20 md:py-28 bg-gray-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
              storySection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Synopsis
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-black mb-10">
              시놉시스
            </h2>

            <div className="bg-white rounded-3xl p-8 md:p-12 text-left space-y-5 text-gray-600 text-[16px] leading-relaxed">
              <p>
                지구별 관찰을 누구보다 좋아하는 K510 행성의{" "}
                <strong className="text-black">키키키</strong>!
              </p>
              <p>
                그리고 드디어, 꿈꾸던 지구 여행을 떠나게 된 키키키!
                그곳에서 만난 첫 번째 지구 친구의 이름은 바로{" "}
                <strong className="text-black">비상구</strong>!
              </p>
              <p>
                상구는 키키키와 함께 지구 곳곳을 다니며 아이들이 일상에서 자주
                마주하는 위험 상황과 생활 속 안전 습관들을 알려주기 시작한다.
              </p>
              <p>
                그리고 마침내, 키키키와 지구별 친구들은 스스로 지켜낼 수 있는
                안전한 하루를 만들어내며 모두 함께 외칩니다.
              </p>
              <p className="text-center text-2xl font-black text-accent py-4">
                &ldquo;우리 모두, 오늘도 안녕!&rdquo;
              </p>
              <p>
                즐거운 노래와 움직임, 눈높이에 맞춘 설명과 상황극을 통해
                모두가 진짜 생활 속 안전을 배우는 따뜻하고 유쾌한 안전 뮤지컬,
              </p>
              <p className="font-bold text-black text-center">
                &lt;키키키의 안전생활백서&gt;가 지금 펼쳐집니다!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 안전 교육 주제 */}
      <section ref={topicsSection.ref} className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              topicsSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Safety Topics
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              공연에서 다루는 <span className="text-accent">안전 주제</span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-lg mx-auto">
              아이들이 일상에서 꼭 알아야 할 안전 습관을
              재미있는 뮤지컬로 전달합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {safetyTopics.map((topic, i) => (
              <div
                key={topic.title}
                className={`bg-gray-warm rounded-2xl p-6 md:p-8 text-center hover:shadow-lg transition-all duration-700 ${
                  topicsSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80 + 200}ms` }}
              >
                <span className="text-4xl">{topic.icon}</span>
                <h3 className="mt-4 font-black text-black">{topic.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 보도자료 */}
      <section ref={pressSection.ref} className="py-20 md:py-28 bg-gray-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              pressSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Press
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              공연 <span className="text-accent">보도자료</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {pressArticles.map((article, i) => (
              <div
                key={article.title}
                className={`bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-700 ${
                  pressSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-gray-warm text-xs font-bold text-gray-600 rounded-full">
                    {article.source}
                  </span>
                  <span className="text-xs text-gray-400">
                    {article.date}
                  </span>
                </div>
                <h3 className="font-bold text-black leading-snug">
                  {article.title}
                </h3>
              </div>
            ))}
          </div>

          <div
            className={`mt-12 bg-white rounded-3xl p-8 md:p-10 max-w-3xl mx-auto transition-all duration-700 delay-300 ${
              pressSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-gray-500 text-[15px] leading-relaxed">
              당진시는 아동권리주간을 기념하여 아동 범죄예방 뮤지컬을
              개최했습니다. 당진시청 대강당에서 관내 어린이집 원생 600명을
              대상으로, 회당 300명씩 총 2회에 걸쳐 진행되었습니다.
            </p>
            <p className="mt-4 text-gray-500 text-[15px] leading-relaxed">
              당진시 관계자는 &ldquo;아동 눈높이에 맞는 뮤지컬을 통해,
              범죄예방의 중요성을 배울 수 있는 시간이 되었길 바란다&rdquo;며
              &ldquo;앞으로도 당진시는 아동이 안전한 도시를 만들기 위해
              지역사회와 협력해 다양한 사업을 지속적으로 추진해
              나가겠다&rdquo;고 밝혔습니다.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="우리 기관에서도 공연하고 싶다면?"
        highlight="지금 문의"
        description="유아·어린이 안전교육에 최적화된 뮤지컬을 여러분의 기관에서 만나보세요."
        buttonText="공연 문의하기"
      />
    </>
  );
}
