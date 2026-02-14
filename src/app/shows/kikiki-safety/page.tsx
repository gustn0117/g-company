"use client";

import Link from "next/link";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import CTABanner from "@/components/CTABanner";

const characters = [
  {
    name: "키키키",
    desc: "K510 행성에서 온 호기심 많은 우주 탐험가. 지구별을 관찰하는 것을 누구보다 좋아하며, 드디어 꿈꾸던 지구 여행을 떠나게 됩니다.",
    icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
  },
  {
    name: "비상구",
    desc: "키키키가 지구에서 만난 첫 번째 친구. 아이들이 일상에서 마주하는 위험 상황과 안전 습관을 알려주는 든든한 안전 가이드입니다.",
    icon: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9",
  },
];

const safetyTopics = [
  { icon: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z", title: "화재 안전", desc: "화재 발생 시 대피 방법과 소화기 사용법" },
  { icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12", title: "교통 안전", desc: "횡단보도 건너기와 교통 신호 지키기" },
  { icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z", title: "전기 안전", desc: "감전 예방과 올바른 전기 사용 습관" },
  { icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25", title: "가정 안전", desc: "집 안에서 발생할 수 있는 위험 상황 대처" },
  { icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", title: "유괴·범죄 예방", desc: "낯선 사람 대처법과 도움 요청 방법" },
  { icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z", title: "재난 안전", desc: "지진, 태풍 등 자연재해 시 행동 요령" },
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

const overviewStats = [
  { label: "공연명", value: "키키키의 안전생활백서" },
  { label: "장르", value: "창작뮤지컬 (안전교육)" },
  { label: "러닝타임", value: "45분" },
  { label: "관람연령", value: "7세 이상" },
  { label: "작 / 작곡", value: "희고 / 이은택" },
  { label: "기획·제작", value: "지컴퍼니" },
];

const quickStats = [
  { label: "러닝타임", value: "45분", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "관람연령", value: "7세 이상", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
  { label: "장르", value: "창작뮤지컬", icon: "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" },
  { label: "기획제작", value: "지컴퍼니", icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" },
];

const synopsisScenes = [
  {
    sceneNum: "01",
    title: "K510 행성의 꿈",
    text: "지구별 관찰을 누구보다 좋아하는 K510 행성의",
    highlight: "키키키",
    highlightChar: "kikiki",
    suffix: "!",
  },
  {
    sceneNum: "02",
    title: "지구 도착",
    text: "그리고 드디어, 꿈꾸던 지구 여행을 떠나게 된 키키키! 그곳에서 만난 첫 번째 지구 친구의 이름은 바로",
    highlight: "비상구",
    highlightChar: "bisangu",
    suffix: "!",
  },
  {
    sceneNum: "03",
    title: "안전 모험의 시작",
    text: "상구는 키키키와 함께 지구 곳곳을 다니며 아이들이 일상에서 자주 마주하는 위험 상황과 생활 속 안전 습관들을 알려주기 시작한다.",
    highlight: null,
    highlightChar: null,
    suffix: "",
  },
  {
    sceneNum: "04",
    title: "안전한 하루",
    text: "그리고 마침내, 키키키와 지구별 친구들은 스스로 지켜낼 수 있는 안전한 하루를 만들어내며 모두 함께 외칩니다.",
    highlight: null,
    highlightChar: null,
    suffix: "",
  },
];

const characterIconPaths: Record<string, string> = {
  kikiki:
    "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
  bisangu:
    "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9",
};

export default function KikikiSafetyPage() {
  const overviewSection = useInView();
  const storySection = useInView();
  const topicsSection = useInView();
  const pressSection = useInView();
  const gallerySection = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] flex flex-col justify-end pt-32 pb-0 bg-gradient-to-br from-[#3B5878] via-[#2D4666] to-[#1E3450] text-white overflow-hidden">
        {/* Decorative floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-32 left-20 w-80 h-80 bg-white/3 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />

          {/* Floating circles */}
          <div className="absolute top-24 left-[10%] w-3 h-3 bg-yellow-400/30 rounded-full animate-pulse" />
          <div className="absolute top-40 right-[15%] w-5 h-5 bg-white/10 rounded-full animate-bounce" style={{ animationDuration: "3s" }} />
          <div className="absolute bottom-48 left-[25%] w-4 h-4 bg-blue-300/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-32 right-[35%] w-2 h-2 bg-yellow-300/40 rounded-full animate-ping" style={{ animationDuration: "4s" }} />
          <div className="absolute bottom-56 right-[20%] w-6 h-6 bg-white/5 rounded-full animate-bounce" style={{ animationDuration: "4s", animationDelay: "0.5s" }} />

          {/* Star shapes using CSS */}
          <div
            className="absolute top-28 right-[25%] text-yellow-400/20 text-2xl animate-pulse"
            style={{ animationDuration: "2.5s" }}
          >
            &#10022;
          </div>
          <div
            className="absolute top-[45%] left-[8%] text-white/10 text-3xl animate-pulse"
            style={{ animationDuration: "3.5s", animationDelay: "1s" }}
          >
            &#10022;
          </div>
          <div
            className="absolute bottom-40 right-[40%] text-blue-300/15 text-xl animate-pulse"
            style={{ animationDuration: "3s", animationDelay: "0.5s" }}
          >
            &#10038;
          </div>
          <div
            className="absolute top-36 left-[40%] text-yellow-300/15 text-lg animate-pulse"
            style={{ animationDuration: "2s", animationDelay: "2s" }}
          >
            &#10038;
          </div>

          {/* Floating badge: 45min */}
          <div className="hidden md:flex absolute top-28 right-[8%] w-24 h-24 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/20 rounded-2xl items-center justify-center flex-col animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <span className="text-2xl font-black text-yellow-400">45</span>
            <span className="text-[10px] font-bold text-yellow-400/70 uppercase tracking-wider">min</span>
          </div>

          {/* Floating badge: Safety */}
          <div className="hidden md:flex absolute bottom-44 left-[6%] px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full items-center gap-2 animate-fade-in-up" style={{ animationDelay: "1s" }}>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs font-bold text-white/50">안전교육 뮤지컬</span>
          </div>

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Star-field effect - scattered small white dots to match poster's night sky */}
          <div className="absolute inset-0">
            <div className="absolute top-[8%] left-[5%] w-1 h-1 bg-white/40 rounded-full" />
            <div className="absolute top-[12%] left-[22%] w-[3px] h-[3px] bg-white/25 rounded-full animate-pulse" style={{ animationDuration: "3s" }} />
            <div className="absolute top-[6%] left-[38%] w-1 h-1 bg-white/35 rounded-full" />
            <div className="absolute top-[18%] left-[52%] w-[2px] h-[2px] bg-white/30 rounded-full animate-pulse" style={{ animationDuration: "4s", animationDelay: "1s" }} />
            <div className="absolute top-[4%] left-[65%] w-1 h-1 bg-white/45 rounded-full" />
            <div className="absolute top-[15%] left-[78%] w-[3px] h-[3px] bg-white/20 rounded-full animate-pulse" style={{ animationDuration: "5s", animationDelay: "2s" }} />
            <div className="absolute top-[22%] left-[88%] w-1 h-1 bg-white/35 rounded-full" />
            <div className="absolute top-[28%] left-[15%] w-[2px] h-[2px] bg-white/30 rounded-full" />
            <div className="absolute top-[35%] left-[72%] w-1 h-1 bg-white/25 rounded-full animate-pulse" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }} />
            <div className="absolute top-[10%] left-[92%] w-[2px] h-[2px] bg-white/40 rounded-full" />
            <div className="absolute top-[42%] left-[3%] w-1 h-1 bg-white/20 rounded-full" />
            <div className="absolute top-[50%] left-[45%] w-[2px] h-[2px] bg-white/25 rounded-full animate-pulse" style={{ animationDuration: "4.5s", animationDelay: "1.5s" }} />
            <div className="absolute top-[38%] left-[58%] w-1 h-1 bg-white/30 rounded-full" />
            <div className="absolute top-[55%] left-[82%] w-[3px] h-[3px] bg-white/20 rounded-full" />
            <div className="absolute top-[48%] left-[28%] w-1 h-1 bg-white/35 rounded-full animate-pulse" style={{ animationDuration: "3s", animationDelay: "2.5s" }} />
            <div className="absolute top-[62%] left-[12%] w-[2px] h-[2px] bg-white/25 rounded-full" />
            <div className="absolute top-[58%] left-[68%] w-1 h-1 bg-white/30 rounded-full" />
            <div className="absolute top-[70%] left-[35%] w-[2px] h-[2px] bg-white/20 rounded-full animate-pulse" style={{ animationDuration: "5s", animationDelay: "0.8s" }} />
            <div className="absolute top-[65%] left-[95%] w-1 h-1 bg-white/35 rounded-full" />
            <div className="absolute top-[75%] left-[55%] w-1 h-1 bg-white/25 rounded-full" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-20 flex-1 flex flex-col justify-center">
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

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black animate-fade-in-up delay-100">
                <span className="block">키키키의</span>
                <span className="block mt-2 md:mt-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-400">
                  안전생활백서
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-white/60 leading-relaxed max-w-lg animate-fade-in-up delay-200">
                K510 행성의 키키키와 지구 친구 비상구가 함께 떠나는 안전 모험!
                즐거운 노래와 상황극으로 배우는 생활 속 안전 뮤지컬.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up delay-300">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20 transition-all duration-300 group"
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

            {/* Poster Image */}
            <div className="animate-fade-in-up delay-200">
              <div className="aspect-[3/4] bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
                <Image
                  src="/images/키키키 세로.png"
                  alt="키키키의 안전생활백서 공연 포스터"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="relative bg-black/20 backdrop-blur-md border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {quickStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="py-5 md:py-6 px-4 md:px-6 text-center animate-fade-in-up"
                  style={{ animationDelay: `${i * 100 + 500}ms` }}
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                    </svg>
                    <span className="text-[11px] font-bold text-white/40 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-white font-black text-lg md:text-xl">
                    {stat.value}
                  </p>
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
              overviewSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Performance Info
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
              공연 개요
            </h2>
            <p className="text-gray-400 max-w-xl mb-14">
              K510 행성에서 찾아온 안전교육 뮤지컬의 주요 정보를 확인하세요.
            </p>
          </div>

          {/* Stat Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-16">
            {overviewStats.map((item, i) => (
              <div
                key={item.label}
                className={`bg-white border border-gray-100 rounded-2xl p-5 md:p-7 transition-all duration-700 hover:shadow-lg hover:border-accent/30 group ${
                  overviewSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80 + 100}ms` }}
              >
                <div className="w-full h-1 bg-accent/60 rounded-full mb-5 group-hover:bg-accent transition-colors" />
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                  {item.label}
                </p>
                <p className="text-lg md:text-xl font-black text-black leading-snug">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Characters */}
          <div
            className={`transition-all duration-700 delay-200 ${
              overviewSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl font-black text-black mb-6 flex items-center gap-3">
              <span className="w-8 h-[3px] bg-accent rounded-full" />
              등장인물
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {characters.map((char, i) => (
              <div
                key={char.name}
                className={`bg-gray-warm rounded-2xl p-7 md:p-8 flex items-start gap-6 border-l-4 border-accent transition-all duration-700 hover:shadow-lg ${
                  overviewSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150 + 300}ms` }}
              >
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={char.icon} />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-black mb-2">
                    {char.name}
                  </h4>
                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    {char.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 시놉시스 - Enhanced Storybook Design */}
      <section ref={storySection.ref} className="py-20 md:py-32 bg-[#1E3450] text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-80 h-80 bg-[#2D4666]/50 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1A2E44]/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/[0.02] rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,.3) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div
            className={`text-center transition-all duration-700 ${
              storySection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Synopsis
            </p>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              시놉시스
            </h2>
            <p className="text-white/40 text-sm mb-14 max-w-md mx-auto">
              K510 행성에서 지구로, 키키키와 비상구의 안전 모험 이야기
            </p>
          </div>

          {/* Storybook Journey */}
          <div
            className={`transition-all duration-700 delay-200 ${
              storySection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Large decorative opening quote */}
            <div className="text-center mb-10">
              <span className="text-8xl md:text-9xl font-serif text-accent/20 leading-none select-none">
                &ldquo;
              </span>
            </div>

            {/* Scene Cards with Journey Line */}
            <div className="relative">
              {/* Vertical journey line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/40 via-yellow-400/20 to-accent/40 rounded-full" />

              <div className="space-y-8">
                {synopsisScenes.map((scene, i) => (
                  <div key={scene.sceneNum}>
                    {/* Scene Card */}
                    <div
                      className={`relative pl-16 md:pl-20 transition-all duration-700 ${
                        storySection.inView
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${i * 150 + 300}ms` }}
                    >
                      {/* Journey node */}
                      <div className="absolute left-[14px] md:left-[22px] top-6 w-6 h-6 rounded-full bg-[#1E3450] border-2 border-accent/60 flex items-center justify-center z-10">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                      </div>

                      <div className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl md:rounded-3xl p-6 md:p-8 hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-500 group">
                        {/* Scene number header */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-accent/15 text-accent text-[10px] font-black tracking-[0.2em] uppercase rounded-full border border-accent/20">
                            Scene {scene.sceneNum}
                          </span>
                          <span className="text-xs font-bold text-white/30">
                            {scene.title}
                          </span>
                        </div>

                        {/* Scene content */}
                        <p className="text-white/70 text-lg md:text-xl leading-relaxed">
                          {scene.text}
                          {scene.highlight && (
                            <>
                              {" "}
                              <span className="inline-flex items-center gap-1.5 align-middle">
                                <span className="inline-flex w-6 h-6 bg-yellow-400/15 rounded-full items-center justify-center">
                                  <svg className="w-3.5 h-3.5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={characterIconPaths[scene.highlightChar!]} />
                                  </svg>
                                </span>
                                <strong className="text-yellow-300 font-bold">{scene.highlight}</strong>
                              </span>
                              {scene.suffix}
                            </>
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Sparkle divider between scenes */}
                    {i < synopsisScenes.length - 1 && (
                      <div className="flex items-center justify-center gap-2 py-4 pl-16 md:pl-20">
                        <svg className="w-3 h-3 text-yellow-400/30" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l2.09 6.26L20.18 10l-6.09 1.74L12 18l-2.09-6.26L3.82 10l6.09-1.74L12 2z" />
                        </svg>
                        <span className="w-8 h-[1px] bg-white/10" />
                        <svg className="w-2 h-2 text-accent/40" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l2.09 6.26L20.18 10l-6.09 1.74L12 18l-2.09-6.26L3.82 10l6.09-1.74L12 2z" />
                        </svg>
                        <span className="w-8 h-[1px] bg-white/10" />
                        <svg className="w-3 h-3 text-yellow-400/30" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l2.09 6.26L20.18 10l-6.09 1.74L12 18l-2.09-6.26L3.82 10l6.09-1.74L12 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Dramatic Closing Quote */}
            <div
              className={`mt-14 transition-all duration-700 ${
                storySection.inView
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: "900ms" }}
            >
              <div className="relative py-12 px-8 md:px-12 rounded-3xl bg-gradient-to-br from-accent/15 via-yellow-400/10 to-amber-500/15 border border-accent/25 text-center overflow-hidden">
                {/* Decorative sparkles in corners */}
                <div className="absolute top-4 left-4">
                  <svg className="w-5 h-5 text-yellow-400/30 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.09 6.26L20.18 10l-6.09 1.74L12 18l-2.09-6.26L3.82 10l6.09-1.74L12 2z" />
                  </svg>
                </div>
                <div className="absolute top-6 right-6">
                  <svg className="w-4 h-4 text-accent/30 animate-pulse" style={{ animationDelay: "0.5s" }} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.09 6.26L20.18 10l-6.09 1.74L12 18l-2.09-6.26L3.82 10l6.09-1.74L12 2z" />
                  </svg>
                </div>
                <div className="absolute bottom-4 right-4">
                  <svg className="w-5 h-5 text-yellow-400/30 animate-pulse" style={{ animationDelay: "1s" }} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.09 6.26L20.18 10l-6.09 1.74L12 18l-2.09-6.26L3.82 10l6.09-1.74L12 2z" />
                  </svg>
                </div>
                <div className="absolute bottom-6 left-6">
                  <svg className="w-3 h-3 text-accent/25 animate-pulse" style={{ animationDelay: "1.5s" }} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.09 6.26L20.18 10l-6.09 1.74L12 18l-2.09-6.26L3.82 10l6.09-1.74L12 2z" />
                  </svg>
                </div>
                {/* Radial glow behind text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-72 h-32 bg-yellow-400/10 rounded-full blur-3xl" />
                </div>

                <div className="relative">
                  <p className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-accent to-yellow-300 leading-[1.8]">
                    &ldquo;우리 모두, 오늘도 안녕!&rdquo;
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-3">
                    <span className="w-10 h-[2px] bg-accent/40 rounded-full" />
                    <svg className="w-4 h-4 text-accent/60" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.09 6.26L20.18 10l-6.09 1.74L12 18l-2.09-6.26L3.82 10l6.09-1.74L12 2z" />
                    </svg>
                    <span className="w-10 h-[2px] bg-accent/40 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Epilogue cards */}
            <div className="mt-10 space-y-6">
              <div
                className={`bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 md:p-8 text-center transition-all duration-700 ${
                  storySection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "1050ms" }}
              >
                <p className="text-white/70 text-lg md:text-xl leading-relaxed">
                  즐거운 노래와 움직임, 눈높이에 맞춘 설명과 상황극을 통해
                  모두가 진짜 생활 속 안전을 배우는 따뜻하고 유쾌한 안전 뮤지컬,
                </p>
              </div>

              {/* Sparkle divider */}
              <div className="flex items-center justify-center gap-2">
                <svg className="w-3 h-3 text-yellow-400/30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.09 6.26L20.18 10l-6.09 1.74L12 18l-2.09-6.26L3.82 10l6.09-1.74L12 2z" />
                </svg>
                <span className="w-8 h-[1px] bg-white/10" />
                <svg className="w-2 h-2 text-accent/40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.09 6.26L20.18 10l-6.09 1.74L12 18l-2.09-6.26L3.82 10l6.09-1.74L12 2z" />
                </svg>
                <span className="w-8 h-[1px] bg-white/10" />
                <svg className="w-3 h-3 text-yellow-400/30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.09 6.26L20.18 10l-6.09 1.74L12 18l-2.09-6.26L3.82 10l6.09-1.74L12 2z" />
                </svg>
              </div>

              <div
                className={`text-center transition-all duration-700 ${
                  storySection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "1200ms" }}
              >
                <p className="font-bold text-white text-xl md:text-2xl">
                  &lt;키키키의 안전생활백서&gt;가 지금 펼쳐집니다!
                </p>
              </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyTopics.map((topic, i) => (
              <div
                key={topic.title}
                className={`relative bg-gray-warm rounded-2xl p-7 md:p-8 hover:scale-105 hover:shadow-xl hover:border-accent/50 border-2 border-transparent cursor-default transition-all duration-500 group ${
                  topicsSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80 + 200}ms` }}
              >
                {/* Number indicator */}
                <span className="absolute top-4 right-5 text-sm font-black text-gray-300 group-hover:text-accent/60 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon with colored background circle */}
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={topic.icon} />
                  </svg>
                </div>

                <h3 className="text-lg font-black text-black mb-2">
                  {topic.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {topic.desc}
                </p>

                {/* Hover gradient border effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 via-transparent to-yellow-400/0 group-hover:from-accent/5 group-hover:to-yellow-400/5 transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 보도자료 */}
      <section ref={pressSection.ref} className="py-20 md:py-28 bg-gray-warm">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              pressSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* PRESS badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-white text-xs font-black tracking-widest uppercase rounded-full mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              PRESS
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              공연 <span className="text-accent">보도자료</span>
            </h2>
          </div>

          {/* Newspaper-style article cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {pressArticles.map((article, i) => (
              <div
                key={article.title}
                className={`bg-white rounded-2xl p-7 md:p-8 border-l-4 border-accent hover:shadow-lg transition-all duration-700 relative overflow-hidden ${
                  pressSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                {/* Subtle newspaper dot pattern */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 opacity-[0.03]"
                  style={{
                    backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                    backgroundSize: "4px 4px",
                  }}
                />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-gray-warm text-xs font-bold text-gray-600 rounded-full">
                      {article.source}
                    </span>
                    <span className="text-xs text-gray-400">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-black leading-snug text-lg">
                    {article.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Summary callout box */}
          <div
            className={`relative bg-white rounded-3xl p-8 md:p-10 transition-all duration-700 delay-300 overflow-hidden ${
              pressSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Subtle background pattern for callout */}
            <div
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
                backgroundSize: "12px 12px",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1 h-6 bg-accent rounded-full" />
                <span className="text-xs font-bold text-accent uppercase tracking-wider">
                  기사 요약
                </span>
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                당진시는 아동권리주간을 기념하여 아동 범죄예방 뮤지컬을
                개최했습니다. 당진시청 대강당에서 관내 어린이집 원생 600명을
                대상으로, 회당 300명씩 총 2회에 걸쳐 진행되었습니다.
              </p>
              <p className="mt-4 text-gray-600 text-[15px] leading-relaxed">
                당진시 관계자는 &ldquo;아동 눈높이에 맞는 뮤지컬을 통해,
                범죄예방의 중요성을 배울 수 있는 시간이 되었길 바란다&rdquo;며
                &ldquo;앞으로도 당진시는 아동이 안전한 도시를 만들기 위해
                지역사회와 협력해 다양한 사업을 지속적으로 추진해
                나가겠다&rdquo;고 밝혔습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 공연 갤러리 */}
      <section ref={gallerySection.ref} className="py-20 md:py-28 bg-gray-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              gallerySection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Gallery
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              공연 <span className="text-accent">갤러리</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4].map((num, i) => (
              <div
                key={num}
                className={`relative aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden group transition-all duration-700 ${
                  gallerySection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10" />
                {/* Placeholder content */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg
                      className="w-10 h-10 mx-auto mb-2 opacity-40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </div>
                </div>
                {/* Text label on image */}
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="text-white text-xs font-bold bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    공연 사진 {String(num).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="우리 기관에서도 공연하고 싶다면?"
        highlight="지금 문의"
        description="유아·어린이 안전교육에 최적화된 뮤지컬을 여러분의 기관에서 만나보세요."
        buttonText="공연 문의하기"
      />

      {/* Floating mobile sticky CTA button */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 w-full py-4 bg-accent text-white font-bold rounded-full shadow-lg shadow-accent/30 hover:bg-accent/90 transition-all duration-300"
        >
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
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          공연 문의
        </Link>
      </div>
    </>
  );
}
