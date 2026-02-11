"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import CTABanner from "@/components/CTABanner";

const characters = [
  {
    name: "영서",
    role: "여 / 대학생",
    tags: ["혁신성", "독립성", "회복탄력성", "새로운 가치 창출"],
    desc: "하나뿐인 가족에게조차 좋아하는 걸 숨기고 있다. '자유!'를 가장 중요한 신념으로 삼고 사는 미대생.",
    color: "from-fuchsia-500/20 to-purple-500/20",
  },
  {
    name: "영희",
    role: "여 / 직장인",
    tags: ["조직적", "진취적 변화", "도전정신"],
    desc: "영서의 언니. 멋진 커리어우먼을 꿈꾸며 입사했지만, 노력해도 목표에 가까워지지 않자 퇴사를 고민한다.",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    name: "코비",
    role: "남 / 호텔 직원",
    tags: ["자율성", "열린 사고", "목표지향적"],
    desc: "모험을 좋아하는 야심 찬 도전가. 프라하 숙소에서 일하고 있다.",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    name: "헤더",
    role: "여 / 호텔 주인",
    tags: ["위험감수성", "책임감", "정직", "신뢰감 구축"],
    desc: "코비의 엄마이자 프라하 숙소의 집주인.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    name: "루크",
    role: "남 / 노숙자",
    tags: ["조력자"],
    desc: "영서에게 힘을 주는 인물. 자신을 '노바디'라 소개하며 정체를 숨긴다.",
    color: "from-slate-500/20 to-gray-500/20",
  },
];

const entrepreneurKeywords = [
  {
    title: "혁신성",
    en: "Innovation",
    desc: "새로운 환경에서 예술적 도전을 시도하는 태도",
    icon: "💡",
  },
  {
    title: "진취성",
    en: "Proactiveness",
    desc: "자신의 신념을 실현하기 위해 적극적으로 행동하는 자세",
    icon: "🚀",
  },
  {
    title: "위험감수성",
    en: "Risk-taking",
    desc: "실패를 두려워하지 않고 도전하는 용기",
    icon: "🔥",
  },
  {
    title: "여성기업가정신",
    en: "Women Entrepreneurship",
    desc: "여성 창작자로서 자신의 길을 개척하는 과정",
    icon: "✨",
  },
];

const coreCompetencies = [
  { title: "자기주도성", icon: "🎯" },
  { title: "창의적 사고", icon: "💭" },
  { title: "협업 능력", icon: "🤝" },
  { title: "시민 의식", icon: "🌍" },
  { title: "의사소통", icon: "💬" },
  { title: "문제해결력", icon: "🔧" },
];

export default function ThePaintingPage() {
  const overviewSection = useInView();
  const storySection = useInView();
  const characterSection = useInView();
  const keywordsSection = useInView();
  const competencySection = useInView();
  const programSection = useInView();
  const featureSection = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-fuchsia-900 via-purple-900 to-indigo-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
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
            <span className="text-white/70">더 페인팅</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
                <span className="inline-block px-3 py-1 bg-fuchsia-500/20 text-fuchsia-300 text-xs font-bold rounded-full">
                  기업가정신
                </span>
                <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs font-bold rounded-full">
                  창작뮤지컬
                </span>
                <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full">
                  실화 기반
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight animate-fade-in-up delay-100">
                더{" "}
                <span className="text-fuchsia-400">페인팅</span>
              </h1>
              <p className="text-lg text-white/40 font-medium mt-2 animate-fade-in-up delay-100">
                The Painting
              </p>

              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-lg animate-fade-in-up delay-200">
                작가 토코토코진의 실화를 바탕으로, 도전과 실패, 다시 일어서는
                기업가정신을 무대 위에서 감동적으로 전달하는 창작뮤지컬.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up delay-300">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-fuchsia-500 text-white font-bold rounded-full hover:bg-fuchsia-400 transition-all duration-300 group"
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

            {/* Visual */}
            <div className="animate-fade-in-up delay-200">
              <div className="aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <span className="text-8xl">🎨</span>
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
            <div
              className={`bg-gray-warm rounded-3xl p-8 md:p-10 transition-all duration-700 delay-100 ${
                overviewSection.inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-6">
                {[
                  { label: "작품명", value: "뮤지컬 <더 페인팅>" },
                  { label: "장르", value: "기업가정신교육 뮤지컬" },
                  { label: "작가", value: "민슬지" },
                  { label: "연출", value: "고희선" },
                  { label: "러닝타임", value: "80분" },
                  { label: "관람연령", value: "8세 이상" },
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

            {/* 기획의도 */}
            <div
              className={`bg-gray-warm rounded-3xl p-8 md:p-10 transition-all duration-700 delay-200 ${
                overviewSection.inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-xl font-black text-black mb-6">
                교육 방향의 변화
              </h3>
              <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
                <p>
                  2022 개정 교육과정에 따라{" "}
                  <strong className="text-black">기업가정신</strong>이 2025년부터
                  고등학교 교과목으로 신설되었으며, 2026년부터는 초등학교
                  교과목으로도 확대될 예정입니다.
                </p>
                <p>
                  단순한 &lsquo;창업가 양성&rsquo;이 아닌, 학생들이 삶에서
                  문제를 발견하고 주도적으로 해결하며 실패를 딛고 다시 도전하는
                  과정 자체가 교육의 핵심입니다.
                </p>
                <div className="bg-white rounded-2xl p-6 mt-4">
                  <p className="text-black font-bold italic text-center">
                    &ldquo;스스로 선택하고 길을 만들어갈 수 있는 역량,
                    <br />즉 자기주도성과 주체적 사고를 키우는 데 초점&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 시놉시스 */}
      <section
        ref={storySection.ref}
        className="py-20 md:py-28 bg-purple-950 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`max-w-3xl mx-auto transition-all duration-700 ${
              storySection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-fuchsia-400 font-bold text-sm tracking-widest uppercase mb-4 text-center">
              Synopsis
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-10">
              시놉시스
            </h2>

            <div className="space-y-6 text-white/70 text-[16px] leading-relaxed">
              <p>
                <span className="text-fuchsia-400 font-black text-xl">
                  &lsquo;자유!&rsquo;
                </span>
                를 가장 중요한 신념과 철학으로 삼고 사는 평범한 미대생 영서.
              </p>
              <p>
                그림의 진정한 가치를 알아보지 못하고 점수로만 평가하는 사람들에게
                불만을 가지고 있다. 언니 영희 또한 그러한 평가는 당연한 것이라
                말하기만 할 뿐.
              </p>
              <p>
                영서는 아무도 자신을 모르는 곳, 자신이 아무것도 모르는 해외로
                떠나 꿈을 펼치기로 결심한다.
              </p>
              <p>
                영희는 무모한 결정이라며 영서를 말리지만, 꼭 자신의 그림을 통해
                성공하고 돌아올 것이라는 당찬 포부를 남긴 채 영서는{" "}
                <strong className="text-white">
                  무작정 프라하로 떠나 버리는데...
                </strong>
              </p>
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center my-8">
                <p className="text-xl md:text-2xl font-black text-fuchsia-400 leading-relaxed">
                  새로운 환경에서의 도전,
                  <br />
                  한계를 극복하는 용기,
                  <br />
                  <span className="text-white">
                    실패를 두려워하지 않는 태도
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 등장인물 */}
      <section ref={characterSection.ref} className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              characterSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Characters
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              등장<span className="text-accent">인물</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((char, i) => (
              <div
                key={char.name}
                className={`bg-gradient-to-br ${char.color} rounded-3xl p-6 md:p-8 hover:shadow-lg transition-all duration-700 ${
                  characterSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-black text-black">{char.name}</h3>
                  <span className="text-sm text-gray-500 font-medium">
                    {char.role}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {char.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-white/60 text-xs font-bold text-gray-700 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {char.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기업가정신 키워드 */}
      <section
        ref={keywordsSection.ref}
        className="py-20 md:py-28 bg-gray-warm"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              keywordsSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Entrepreneurship
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              작품 속 <span className="text-accent">기업가정신</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {entrepreneurKeywords.map((item, i) => (
              <div
                key={item.title}
                className={`bg-white rounded-2xl p-6 md:p-8 text-center hover:shadow-lg transition-all duration-700 ${
                  keywordsSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <span className="text-4xl">{item.icon}</span>
                <h3 className="mt-4 font-black text-black text-lg">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 font-medium mt-1">
                  {item.en}
                </p>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6대 핵심역량 */}
      <section
        ref={competencySection.ref}
        className="py-20 md:py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              competencySection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Core Competencies
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              미래사회를 위한{" "}
              <span className="text-accent">6대 핵심역량</span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              2022 개정 교육과정이 지향하는 핵심역량과 기업가정신 교육의 방향이
              일치합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {coreCompetencies.map((item, i) => (
              <div
                key={item.title}
                className={`bg-gray-warm rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-700 ${
                  competencySection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80 + 200}ms` }}
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-3 font-black text-black text-sm">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* 고교학점제 적합 이유 */}
          <div
            className={`mt-16 bg-gray-warm rounded-3xl p-8 md:p-10 max-w-3xl mx-auto transition-all duration-700 delay-300 ${
              competencySection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-lg font-black text-black mb-6 text-center">
              고교학점제 프로그램으로 적합한 이유
            </h3>
            <div className="space-y-4">
              {[
                "고교학점제 핵심 역량(자기주도성, 창의성, 진로설계 등)에 부합",
                "경영&경제, 진로, 창체 과목과 연계 가능한 콘텐츠",
                "예술을 통한 융합형 기업가정신 교육 사례",
                "공연 후 활동 포함 - 학생 스스로 삶과 진로를 성찰하게 유도",
                "정서적 울림 + 교육적 메시지를 동시에 전달하는 진로 콘텐츠",
              ].map((reason, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <span className="text-[15px] text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 관객참여 프로그램 */}
      <section
        ref={programSection.ref}
        className="py-20 md:py-28 bg-purple-950 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              programSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-fuchsia-400 font-bold text-sm tracking-widest uppercase mb-4">
              Program
            </p>
            <h2 className="text-3xl md:text-4xl font-black">
              관객 참여 프로그램
            </h2>
            <p className="mt-4 text-white/50 max-w-xl mx-auto">
              &lsquo;예술과 앙트러프러너십&rsquo; - 유명 화가들의 기업가정신
              재해석
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "예술적 감동과 연결",
                desc: "공연을 통해 예술적 감동을 경험한 후, 이를 기업가정신과 연결하여 새로운 시각을 갖게 합니다.",
              },
              {
                title: "유명 화가 사례 소개",
                desc: "기업가정신을 통해 재해석한 유명 화가들의 사례를 소개하며, 시장을 개척하고 가치를 창출한 예술가들의 이야기를 공유합니다.",
              },
              {
                title: "진로 탐색 기회",
                desc: "도전하는 태도와 혁신적인 사고를 통해 예술과 비즈니스의 가능성을 배우는 기회를 제공합니다.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 transition-all duration-700 ${
                  programSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <h3 className="font-black text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            className={`mt-12 bg-white/5 rounded-3xl p-8 md:p-10 border border-white/10 max-w-3xl mx-auto text-center transition-all duration-700 delay-300 ${
              programSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-white/60 text-[15px] leading-relaxed">
              공연 중 토코토코진 작가의 그림이{" "}
              <strong className="text-white">미디어아트</strong>를 통해 작품에
              표현됩니다.
              <br />
              밝고 경쾌한 색감과 친근한 캐릭터로 관객들에게 즐거움과 따뜻한
              감성을 전달합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 공연 특징 */}
      <section ref={featureSection.ref} className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              featureSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Features
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              공연 <span className="text-accent">특징</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "극장 공연 (고정형)",
                icon: "🎭",
                items: [
                  "고정형 극장 무대 공연",
                  "극장 무대 환경을 고려한 조명·음향·무대 연출",
                  "전문 공연 제작 스태프 참여로 높은 무대 완성도",
                ],
              },
              {
                title: "찾아가는 공연 (이동형)",
                icon: "🚌",
                items: [
                  "공연이 가능한 공간이라면 어디든 운영 가능",
                  "자체 보유 이동형 음향/조명 장비 사용",
                  "공연 후 관객 참여형 토크 및 토론 프로그램 가능",
                ],
              },
            ].map((type, i) => (
              <div
                key={type.title}
                className={`bg-gray-warm rounded-3xl p-8 md:p-10 hover:shadow-lg transition-all duration-700 ${
                  featureSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                <span className="text-4xl">{type.icon}</span>
                <h3 className="text-xl font-black text-black mt-4 mb-5">
                  {type.title}
                </h3>
                <div className="space-y-3">
                  {type.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                      <span className="text-[15px] text-gray-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 주요 이력 */}
          <div
            className={`mt-12 bg-gray-warm rounded-3xl p-8 md:p-10 transition-all duration-700 delay-300 ${
              featureSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-lg font-black text-black mb-6">
              주요 공연 이력
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  year: "2023",
                  desc: "뮤지컬 <더 페인팅> SH아트홀 공연 (갤러리 아트버디 협업)",
                },
                {
                  year: "2024",
                  desc: "청소년 <더 페인팅> 전국 초·중·고등학교 찾아가는 공연 21회",
                },
              ].map((item) => (
                <div
                  key={item.year}
                  className="flex items-center gap-4 bg-white rounded-2xl p-5"
                >
                  <span className="text-2xl font-black text-accent flex-shrink-0">
                    {item.year}
                  </span>
                  <span className="text-sm text-gray-600">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="기업가정신을 뮤지컬로 경험하고 싶다면?"
        highlight="지금 문의"
        description="도전과 성장의 메시지를 담은 뮤지컬 <더 페인팅>을 여러분의 학교에서 만나보세요."
        buttonText="공연 문의하기"
      />
    </>
  );
}
