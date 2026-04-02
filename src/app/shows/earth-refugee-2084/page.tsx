"use client";

import Link from "next/link";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import CTABanner from "@/components/CTABanner";

const keywords = [
  { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "기후위기", desc: "전 세계적으로 부상하는 기후난민 문제를 직시합니다" },
  { icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z", title: "SF 상상력", desc: "2084년 미래 지구를 배경으로 한 SF 서사" },
  { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", title: "입체낭독극", desc: "독창적 형식으로 관객의 공감과 상상력을 자극" },
  { icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222", title: "교육 연계", desc: "자유학기제·환경교육주간·진로체험과 연계 가능" },
  { icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", title: "수상작 원작", desc: "2023 초록별 SF환경동화상 우수상 수상작" },
  { icon: "M12 3v1m0 16v1m-9-9h1m16 0h1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z", title: "탄소중립", desc: "탄소중립 교육 콘텐츠로 활용 가능" },
];

const newsClippings = [
  {
    source: "중앙일보",
    title: "세계기상기구 '지난해 지구 온도 올라...기후난민 최다'",
    date: "2025.03.19",
  },
  {
    source: "연합뉴스",
    title: "아프리카 기후난민 - 2050년 10억 위협...우리 문제 된 지구촌 비극",
    date: "2025.06.20",
  },
  {
    source: "뉴스1",
    title: "이상기후로 떠나는 사람들...'기후난민 증가'",
    date: "2024.06.11",
  },
];

const synopsisSteps = [
  {
    act: "ACT 1",
    highlight: "2084년,",
    text: "지구는 뒤죽박죽인 날씨와 모래비, 전염병으로 황폐해졌다.",
  },
  {
    act: "ACT 2",
    highlight: null,
    text: "외출금지를 알리는 고장난 \u2018날씨기계\u2019의 경고방송만이 울려퍼지는 가운데, 사람들은 지구를 떠나기 시작하고, 과학자와 정치인, 대통령마저 사라진다.",
  },
  {
    act: "ACT 3",
    highlight: null,
    text: "오염된 환경을 되돌리려는 노력 없이 날씨만 조종하려 한 인간의 오만은 결국 파국을 불러온다.",
  },
  {
    act: "ACT 4",
    highlight: null,
    text: "그 속에서도 강산의 가족은 지구에 남아 생존을 이어간다.",
    strong: "강산의 가족",
  },
  {
    act: "ACT 5",
    highlight: null,
    text: "어느 날, 지구 멸망의 신호가 감지되면서, 가족은 고물상에서 얻은 낡은 우주선 \u2018이카로스\u2019를 타고 지구의 위성, 달로 향할 결심을 한다.",
    strong: "\u2018이카로스\u2019",
  },
];

const features = [
  {
    title: "입체낭독극 형식",
    desc: "기후위기를 감성적 서사와 상상력으로 풀어낸 독창적 형식. 관객이 스스로 공감하고 상상하며 기후 문제를 자신의 이야기로 받아들이게 합니다.",
    icon: "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z",
    gradient: "from-amber-600 to-amber-400",
  },
  {
    title: "높은 무대 완성도",
    desc: "극장 무대 환경을 고려한 조명·음향·무대 연출. 전문 공연 제작 스태프가 참여하여 몰입감 높은 공연을 완성합니다.",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "교육 프로그램 연계",
    desc: "자유학기제, 환경교육주간, 진로체험과 연계 가능. 공연 이후 워크북, 학교 방문형 프로그램으로 지속적 교육 효과를 제공합니다.",
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342",
    gradient: "from-emerald-500 to-green-400",
  },
];

const overviewItems = [
  { label: "작품명", value: "2084 지구난민", icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" },
  { label: "장르", value: "창작낭독뮤지컬 (환경·기후)", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { label: "러닝타임", value: "90분", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "관람대상", value: "청소년·일반", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { label: "공연형태", value: "고정형 극장 무대 공연", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { label: "원작", value: "2023 초록별 SF환경동화상 우수상 수상작", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
  { label: "기획·제작", value: "지컴퍼니", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
];

const particles = [
  { size: 3, top: "15%", left: "10%", delay: "0s", duration: "6s", opacity: 0.3 },
  { size: 2, top: "25%", left: "85%", delay: "1s", duration: "8s", opacity: 0.2 },
  { size: 4, top: "60%", left: "75%", delay: "2s", duration: "7s", opacity: 0.15 },
  { size: 2, top: "70%", left: "20%", delay: "0.5s", duration: "9s", opacity: 0.25 },
  { size: 3, top: "40%", left: "50%", delay: "3s", duration: "6s", opacity: 0.2 },
  { size: 2, top: "80%", left: "60%", delay: "1.5s", duration: "8s", opacity: 0.15 },
  { size: 5, top: "10%", left: "40%", delay: "4s", duration: "10s", opacity: 0.1 },
  { size: 2, top: "50%", left: "30%", delay: "2.5s", duration: "7s", opacity: 0.2 },
  { size: 3, top: "35%", left: "90%", delay: "0.8s", duration: "9s", opacity: 0.15 },
  { size: 2, top: "90%", left: "45%", delay: "3.5s", duration: "6s", opacity: 0.25 },
  { size: 4, top: "20%", left: "65%", delay: "1.2s", duration: "8s", opacity: 0.1 },
  { size: 2, top: "55%", left: "15%", delay: "2.8s", duration: "7s", opacity: 0.2 },
];

export default function EarthRefugee2084Page() {
  const overviewSection = useInView();
  const storySection = useInView();
  const keywordsSection = useInView();
  const reasonSection = useInView();
  const newsSection = useInView();
  const gallerySection = useInView();
  const featuresSection = useInView();

  return (
    <>
      {/* Floating particles animation keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
          }
          75% {
            transform: translateY(-30px) translateX(8px);
          }
        }
        @keyframes pulse-red {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.3);
          }
        }
        @keyframes synopsis-line-grow {
          from { height: 0; }
          to { height: 100%; }
        }
        @keyframes synopsis-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .er2084-particle {
          animation: float-particle var(--particle-duration) ease-in-out infinite;
          animation-delay: var(--particle-delay);
        }
        .er2084-er2084-pulse-dot {
          animation: pulse-red 1.5s ease-in-out infinite;
        }
        .er2084-synopsis-line {
          animation: synopsis-line-grow 2s ease-out forwards;
        }
        .er2084-synopsis-glow {
          animation: synopsis-glow 3s ease-in-out infinite;
        }
      `}} />

      {/* Hero */}
      <section className="relative min-h-[600px] pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[#2D3654] via-[#1E2840] to-[#151D30] text-white overflow-hidden flex flex-col">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-amber-600/8 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/3 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Floating particles */}
        {particles.map((p, i) => (
          <div
            key={i}
            className="er2084-particle absolute rounded-full bg-amber-500"
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
              "--particle-delay": p.delay,
              "--particle-duration": p.duration,
              "--particle-opacity": p.opacity,
              opacity: p.opacity,
            } as React.CSSProperties}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex-1 flex flex-col">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/40 mb-8 animate-fade-in-up">
            <Link href="/" className="hover:text-accent transition-colors">홈</Link>
            <span>/</span>
            <Link href="/shows" className="hover:text-accent transition-colors">작품소개</Link>
            <span>/</span>
            <span className="text-white/70">2084 지구난민</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center flex-1">
            <div>
              <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
                <span className="inline-block px-3 py-1 bg-amber-600/20 text-amber-300 text-xs font-bold rounded-full">
                  환경
                </span>
                <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs font-bold rounded-full">
                  창작낭독뮤지컬
                </span>
                <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-bold rounded-full">
                  수상작 원작
                </span>
              </div>

              <p className="text-[8rem] md:text-[12rem] font-black text-white/[0.04] leading-none animate-fade-in-up select-none pointer-events-none">
                2084
              </p>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.8] -mt-16 md:-mt-24 animate-fade-in-up delay-100">
                <span className="text-amber-400">지구</span>난민
              </h1>

              <p className="mt-6 text-lg md:text-xl text-white/60 leading-relaxed max-w-lg animate-fade-in-up delay-200">
                황폐해진 미래 지구에서 생존을 위해 지구를 떠나는 과정을 통해,
                기후 위기의 현실과 인간의 책임, 공동체의 윤리를 함께 질문합니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up delay-300">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-500 hover:scale-105 transition-all duration-300 group shadow-lg shadow-amber-600/25"
                >
                  공연 문의하기
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

            {/* Poster Image */}
            <div className="animate-fade-in-up delay-200">
              <div className="aspect-[3/4] bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
                <Image
                  src="/images/earth-refugee-2084-poster.png"
                  alt="2084 지구난민 공연 포스터"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick stats bar at bottom of hero */}
        <div className="relative mt-12 md:mt-16 animate-fade-in-up delay-400">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { label: "러닝타임", value: "90분", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                { label: "관람대상", value: "청소년·일반", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
                { label: "형태", value: "극장공연", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                { label: "원작", value: "수상작", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-3 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-600/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-white/40 font-medium">{stat.label}</p>
                    <p className="text-sm font-bold text-white">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 공연 개요 */}
      <section ref={overviewSection.ref} className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${
              overviewSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">Performance Info</p>
            <h2 className="text-3xl md:text-4xl font-black text-black mb-12">공연 개요</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Info cards grid */}
            <div
              className={`transition-all duration-700 delay-100 ${
                overviewSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="grid grid-cols-2 gap-3">
                {overviewItems.map((item, i) => (
                  <div
                    key={item.label}
                    className={`bg-gray-warm rounded-2xl p-5 hover:shadow-md transition-all duration-500 ${
                      i === overviewItems.length - 1 && overviewItems.length % 2 !== 0 ? "col-span-2" : ""
                    }`}
                    style={{ transitionDelay: `${i * 60 + 100}ms` }}
                  >
                    <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center mb-3 shadow-sm">
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </div>
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-[14px] font-bold text-black leading-snug">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 기획의도 */}
            <div
              className={`transition-all duration-700 delay-200 ${
                overviewSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="bg-gray-warm rounded-3xl p-8 md:p-10 relative overflow-hidden h-full">
                {/* Dramatic left border */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-600 via-accent to-amber-400" />

                <div className="pl-4">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-black text-black">기획의도</h3>
                  </div>

                  <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
                    <p>
                      4차 산업 시대의 도래와 전 세계적인 산업 고도화는 지구 환경을 빠르게 파괴하고 있으며,
                      그 결과 &lsquo;기후난민&rsquo;이라는 새로운 인도주의적 문제가 전 세계적으로 부상하고 있습니다.
                    </p>
                    <p>
                      이 공연은 단순한 메시지 전달을 넘어 <strong className="text-black">입체낭독극</strong>이라는
                      독창적인 형식을 통해 스스로 공감하고, 상상하며, 기후 문제를
                      &lsquo;자신의 이야기&rsquo;로 받아들이게 만드는 예술교육형 공연입니다.
                    </p>
                    <div className="bg-white rounded-2xl p-6 mt-6 border-l-4 border-accent shadow-sm">
                      <p className="text-black font-bold italic text-center text-lg leading-relaxed">
                        &ldquo;지구를 떠나야 하는 이유는 무엇이었을까?&rdquo;
                        <br />
                        <span className="text-accent">그리고, &ldquo;우리는 어떤 선택을 해야 할까?&rdquo;</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 시놉시스 - Enhanced dramatic design */}
      <section ref={storySection.ref} className="py-24 md:py-36 bg-[#1A2238] text-white relative overflow-hidden">
        {/* Multi-layered atmospheric background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-600/3 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-amber-500/4 rounded-full blur-3xl" />
          {/* Subtle radial overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(15,23,42,0.6)_70%)]" />
          {/* Horizontal subtle scan lines for atmosphere */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`max-w-4xl mx-auto transition-all duration-700 ${
              storySection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Section header with decorative ornament */}
            <div className="text-center mb-20">
              <p className="text-amber-400 font-bold text-sm tracking-[0.3em] uppercase mb-4">Synopsis</p>
              <h2 className="text-3xl md:text-4xl font-black mb-6">시놉시스</h2>
              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-amber-500/60" />
                <svg className="w-5 h-5 text-amber-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-amber-500/60" />
              </div>
            </div>

            {/* Dramatic opening scene - large year typography */}
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                storySection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <p className="text-[7rem] md:text-[10rem] lg:text-[12rem] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                2084
              </p>
              <p className="text-amber-400/80 text-sm tracking-[0.5em] uppercase -mt-12 md:-mt-16 mb-2 font-bold">The Year</p>
              <p className="text-2xl md:text-3xl text-white/40 font-light italic">
                지구가 멈추는 시간
              </p>
            </div>

            {/* Synopsis acts with dramatic card layout */}
            <div className="relative">
              {/* Central vertical line with glow */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[1px]">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/80 via-amber-400/30 to-transparent er2084-synopsis-line" />
                <div className="absolute inset-0 w-[3px] -left-[1px] bg-gradient-to-b from-amber-500/20 via-amber-400/5 to-transparent blur-sm er2084-synopsis-glow" />
              </div>

              <div className="space-y-10 md:space-y-12">
                {synopsisSteps.map((step, i) => (
                  <div
                    key={i}
                    className={`relative pl-16 md:pl-20 transition-all duration-700 ${
                      storySection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${i * 200 + 300}ms` }}
                  >
                    {/* ACT indicator circle */}
                    <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border border-amber-500/30 bg-[#1A2238]" />
                      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-amber-500/10 to-transparent" />
                      <div className="relative text-center">
                        <p className="text-[8px] md:text-[9px] font-bold text-amber-400/70 tracking-wider leading-none">{step.act.split(" ")[0]}</p>
                        <p className="text-base md:text-lg font-black text-amber-400 leading-none mt-0.5">{step.act.split(" ")[1]}</p>
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.06] p-6 md:p-8 hover:bg-white/[0.05] hover:border-amber-500/20 transition-all duration-500">
                      {i === 0 ? (
                        /* First act with dramatic large opening text */
                        <div>
                          <p className="text-3xl md:text-4xl font-black text-amber-400 leading-[1.8] mb-3">
                            {step.highlight}
                          </p>
                          <p className="text-white/70 text-base md:text-lg leading-relaxed">
                            {step.text.replace(step.highlight || "", "")}
                          </p>
                        </div>
                      ) : (
                        <p className="text-white/70 text-base md:text-lg leading-relaxed">
                          {step.highlight && (
                            <span className="text-amber-400 font-black text-xl">{step.highlight} </span>
                          )}
                          {step.strong ? (
                            <>
                              {step.text.split(step.strong)[0]}
                              <strong className="text-white font-bold">{step.strong}</strong>
                              {step.text.split(step.strong)[1]}
                            </>
                          ) : (
                            step.text
                          )}
                        </p>
                      )}
                    </div>

                    {/* Decorative divider between acts */}
                    {i < synopsisSteps.length - 1 && (
                      <div className="flex items-center gap-2 mt-6 ml-2">
                        <div className="w-1 h-1 rounded-full bg-amber-500/30" />
                        <div className="w-1 h-1 rounded-full bg-amber-500/20" />
                        <div className="w-1 h-1 rounded-full bg-amber-500/10" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Grand decorative divider before climax */}
            <div
              className={`my-16 md:my-20 flex items-center justify-center gap-4 transition-all duration-700 delay-700 ${
                storySection.inView ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-amber-500/50" />
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-400/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <svg className="w-5 h-5 text-amber-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                <svg className="w-4 h-4 text-amber-400/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-amber-500/30 to-amber-500/50" />
            </div>

            {/* Climactic quote - bigger and more impactful */}
            <div
              className={`transition-all duration-1000 delay-800 ${
                storySection.inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="relative">
                {/* Outer glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 rounded-3xl blur-xl" />

                {/* Gradient border wrapper */}
                <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-amber-500 via-amber-400/50 to-amber-500">
                  <div className="bg-gradient-to-b from-[#1A2238] via-[#1A2238] to-[#162033] rounded-3xl p-10 md:p-14 lg:p-16 text-center relative overflow-hidden">
                    {/* Inner atmospheric glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-amber-500/5 rounded-full blur-3xl" />

                    {/* Large decorative opening quote mark */}
                    <div className="relative z-10">
                      <p className="text-6xl md:text-7xl text-amber-500/15 font-serif leading-none mb-6 select-none">&ldquo;</p>

                      <p className="text-xl md:text-2xl lg:text-3xl font-black text-amber-400 leading-relaxed mb-4">
                        그리고 그 여정 속에서
                      </p>
                      <p className="text-xl md:text-2xl lg:text-3xl font-black text-amber-400 leading-relaxed mb-6">
                        그들은 깨닫기 시작한다.
                      </p>

                      {/* Subtle separator */}
                      <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent mx-auto mb-6" />

                      <p className="text-lg md:text-xl text-white/40 leading-relaxed mb-4">
                        진짜 떠나야 할 것이 &lsquo;지구&rsquo;가 아니라
                      </p>

                      <p className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.8] mb-4">
                        우리 안의 무책임한 선택들
                      </p>

                      <p className="text-lg md:text-xl text-white/40">
                        이었음을.
                      </p>

                      <p className="text-6xl md:text-7xl text-amber-500/15 font-serif leading-none mt-6 select-none">&rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 키워드 */}
      <section ref={keywordsSection.ref} className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              keywordsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">Keywords</p>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              공연 <span className="text-accent">핵심 키워드</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {keywords.map((item, i) => (
              <div
                key={item.title}
                className={`group relative bg-gradient-to-br from-gray-warm to-white rounded-2xl p-7 md:p-9 text-center hover:scale-105 hover:shadow-xl transition-all duration-500 cursor-default overflow-hidden border border-gray-100 ${
                  keywordsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80 + 200}ms` }}
              >
                {/* Watermark number */}
                <span className="absolute top-3 right-4 text-[3.5rem] md:text-[4.5rem] font-black text-black/[0.03] leading-none select-none pointer-events-none group-hover:text-black/[0.06] transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-black text-black text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기후난민 이슈 */}
      <section ref={newsSection.ref} className="py-20 md:py-28 bg-gray-warm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              newsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              {/* Pulsing red dot */}
              <span className="relative flex h-3 w-3">
                <span className="er2084-pulse-dot absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
              </span>
              <p className="text-red-500 font-bold text-sm tracking-widest uppercase">Climate Crisis</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              왜 <span className="text-accent">지금</span> 이 공연인가
            </h2>
          </div>

          {/* Statistics highlight */}
          <div
            className={`grid grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-100 ${
              newsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative bg-gradient-to-br from-amber-600 to-amber-500 rounded-2xl p-6 md:p-8 text-center text-white overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <p className="text-3xl md:text-4xl font-black">4,200만</p>
                <p className="text-xs md:text-sm mt-2 text-white/80 font-medium">2010년 기후난민 발생 수</p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-red-600 to-red-500 rounded-2xl p-6 md:p-8 text-center text-white overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <p className="text-3xl md:text-4xl font-black">10억</p>
                <p className="text-xs md:text-sm mt-2 text-white/80 font-medium">2050년 예상 기후난민</p>
              </div>
            </div>
          </div>

          {/* News clippings */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {newsClippings.map((article, i) => (
              <div
                key={article.title}
                className={`group relative bg-white rounded-2xl p-6 transition-all duration-700 hover:shadow-lg ${
                  newsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100 + 300}ms` }}
              >
                {/* Newspaper fold effect */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-gray-warm to-white rounded-bl-2xl shadow-inner" />
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-200/50 rotate-45 shadow-sm" />
                </div>

                <div className="flex items-center gap-3 mb-4 pr-6">
                  <span className="px-3 py-1 bg-gray-warm text-xs font-bold text-gray-600 rounded-full">
                    {article.source}
                  </span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <h3 className="font-bold text-black text-sm leading-snug">{article.title}</h3>
                <div className="mt-4 pt-3 border-t border-dashed border-gray-200">
                  <span className="text-[11px] text-gray-400 font-medium tracking-wider uppercase">News Article</span>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed content */}
          <div
            className={`bg-white rounded-3xl p-8 md:p-10 max-w-3xl mx-auto transition-all duration-700 delay-400 shadow-sm ${
              newsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
              <p>
                <strong className="text-black">&lsquo;기후난민&rsquo;</strong>은 생태계 파괴로 인해
                삶의 터전을 잃고 떠날 수밖에 없는 사람들을 말합니다.
                이미 2010년 기준 약 <strong className="text-amber-600">4,200만 명</strong>의 기후난민이 발생했으며,
                <strong className="text-red-600">2050년에는 10억 명</strong>에 이를 것으로 전망됩니다.
              </p>
              <p>
                2024년 기후위기는 새로운 정점에 도달했으며, 전 세계적으로 전례 없는 폭염과 홍수, 폭풍이 발생했습니다.
                80만 명 이상이 집을 잃고 강제 이주를 당했으며, 이는 2008년 기록 이래 연간 최다 인원을 기록했습니다.
              </p>
              <div className="bg-slate-900 rounded-xl p-6 mt-4">
                <p className="font-bold text-white text-center text-lg">
                  이것은 더 이상 먼 미래의 이야기가 아닙니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 공연 특징 */}
      <section ref={featuresSection.ref} className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              featuresSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">Features</p>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              공연 <span className="text-accent">특징</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <div
                key={item.title}
                className={`group bg-gray-warm rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-700 ${
                  featuresSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                {/* Colored top gradient strip */}
                <div className={`h-1.5 bg-gradient-to-r ${item.gradient}`} />

                <div className="p-8 md:p-10">
                  {/* Number */}
                  <span className="text-accent text-sm font-black tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="w-12 h-12 mt-4 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-black mt-4">{item.title}</h3>
                  <p className="mt-4 text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 공연 갤러리 */}
      <section ref={gallerySection.ref} className="py-20 md:py-28 bg-gray-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              gallerySection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">Gallery</p>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              공연 <span className="text-accent">갤러리</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { gradient: "from-slate-800 to-slate-600" },
              { gradient: "from-amber-900 to-amber-700" },
              { gradient: "from-zinc-800 to-zinc-600" },
              { gradient: "from-amber-900 to-amber-700" },
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative aspect-[4/3] rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.03] hover:shadow-xl cursor-pointer ${
                  gallerySection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:bg-white/20 transition-colors">
                      <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-white/50 text-xs font-medium">공연 사진</p>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-white/20 text-[2.5rem] font-black leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="기후위기를 예술로 경험하고 싶다면?"
        highlight="지금 문의"
        description="청소년과 시민이 함께 고민하는 환경 뮤지컬을 여러분의 지역에서 만나보세요."
        buttonText="공연 문의하기"
      />

      {/* Floating mobile CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <Link
          href="/contact"
          className="flex items-center justify-center w-full py-4 bg-amber-600 text-white font-bold rounded-full shadow-2xl shadow-amber-600/30 hover:bg-amber-500 active:scale-[0.98] transition-all duration-300"
        >
          공연 문의하기
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </>
  );
}
