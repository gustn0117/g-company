"use client";

import Link from "next/link";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import CTABanner from "@/components/CTABanner";

const SvgIcon = ({
  d,
  className = "w-6 h-6",
  strokeWidth = 1.5,
}: {
  d: string;
  className?: string;
  strokeWidth?: number;
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d={d}
    />
  </svg>
);

const iconPaths = {
  innovation:
    "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  rocket:
    "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
  fire: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z",
  sparkles:
    "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
  badge:
    "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
  users:
    "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  globe:
    "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
  chat: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
  wrench:
    "M11.42 15.17l-5.648 5.648a2.568 2.568 0 01-3.632 0 2.568 2.568 0 010-3.632l5.648-5.648m3.632 3.632a3.835 3.835 0 005.468-5.393L15.186 9.38a3.835 3.835 0 00-5.393 5.468m3.632 3.632l-3.632-3.632",
  pencilSquare:
    "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
  face: "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z",
  clock: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  film: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125m0 13.5V5.625m17.25 13.5V5.625m-17.25 0v13.5",
  truck:
    "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
  briefcase:
    "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z",
  palette:
    "M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z",
  plane: "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5",
};

const characters = [
  {
    name: "영서",
    role: "여 / 대학생",
    tags: ["혁신성", "독립성", "회복탄력성", "새로운 가치 창출"],
    desc: "하나뿐인 가족에게조차 좋아하는 걸 숨기고 있다. '자유!'를 가장 중요한 신념으로 삼고 사는 미대생.",
    color: "from-red-500/20 to-rose-500/20",
    tagColor: "bg-red-100 text-red-700",
    accentColor: "bg-red-500",
    initial: "영",
    featured: true,
  },
  {
    name: "영희",
    role: "여 / 직장인",
    tags: ["조직적", "진취적 변화", "도전정신"],
    desc: "영서의 언니. 멋진 커리어우먼을 꿈꾸며 입사했지만, 노력해도 목표에 가까워지지 않자 퇴사를 고민한다.",
    color: "from-blue-500/20 to-indigo-500/20",
    tagColor: "bg-blue-100 text-blue-700",
    accentColor: "bg-blue-500",
    initial: "영",
    featured: false,
  },
  {
    name: "코비",
    role: "남 / 호텔 직원",
    tags: ["자율성", "열린 사고", "목표지향적"],
    desc: "모험을 좋아하는 야심 찬 도전가. 프라하 숙소에서 일하고 있다.",
    color: "from-amber-500/20 to-orange-500/20",
    tagColor: "bg-amber-100 text-amber-700",
    accentColor: "bg-amber-500",
    initial: "코",
    featured: false,
  },
  {
    name: "헤더",
    role: "여 / 호텔 주인",
    tags: ["위험감수성", "책임감", "정직", "신뢰감 구축"],
    desc: "코비의 엄마이자 프라하 숙소의 집주인.",
    color: "from-emerald-500/20 to-teal-500/20",
    tagColor: "bg-emerald-100 text-emerald-700",
    accentColor: "bg-emerald-500",
    initial: "헤",
    featured: false,
  },
  {
    name: "루크",
    role: "남 / 노숙자",
    tags: ["조력자"],
    desc: "영서에게 힘을 주는 인물. 자신을 '노바디'라 소개하며 정체를 숨긴다.",
    color: "from-slate-500/20 to-gray-500/20",
    tagColor: "bg-slate-100 text-slate-700",
    accentColor: "bg-slate-500",
    initial: "루",
    featured: false,
  },
];

const entrepreneurKeywords = [
  {
    title: "혁신성",
    en: "Innovation",
    desc: "새로운 환경에서 예술적 도전을 시도하는 태도",
    iconPath: iconPaths.innovation,
  },
  {
    title: "진취성",
    en: "Proactiveness",
    desc: "자신의 신념을 실현하기 위해 적극적으로 행동하는 자세",
    iconPath: iconPaths.rocket,
  },
  {
    title: "위험감수성",
    en: "Risk-taking",
    desc: "실패를 두려워하지 않고 도전하는 용기",
    iconPath: iconPaths.fire,
  },
  {
    title: "여성기업가정신",
    en: "Women Entrepreneurship",
    desc: "여성 창작자로서 자신의 길을 개척하는 과정",
    iconPath: iconPaths.sparkles,
  },
];

const coreCompetencies = [
  {
    title: "자기주도성",
    iconPath: iconPaths.badge,
    color: "from-red-500 to-rose-500",
  },
  {
    title: "창의적 사고",
    iconPath: iconPaths.innovation,
    color: "from-rose-500 to-pink-500",
  },
  {
    title: "협업 능력",
    iconPath: iconPaths.users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "시민 의식",
    iconPath: iconPaths.globe,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "의사소통",
    iconPath: iconPaths.chat,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "문제해결력",
    iconPath: iconPaths.wrench,
    color: "from-rose-500 to-red-500",
  },
];

export default function ThePaintingPage() {
  const overviewSection = useInView();
  const storySection = useInView();
  const characterSection = useInView();
  const keywordsSection = useInView();
  const competencySection = useInView();
  const programSection = useInView();
  const featureSection = useInView();
  const gallerySection = useInView();

  return (
    <>
      {/* ============================================================= */}
      {/* HERO                                                           */}
      {/* ============================================================= */}
      <section className="relative min-h-[600px] pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-red-900 via-rose-900 to-red-950 text-white overflow-hidden">
        {/* --- decorative blobs --- */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-500/5 rounded-full blur-3xl" />

          {/* Paint splash decorative elements */}
          <div className="absolute top-[15%] right-[10%] w-48 h-24 bg-red-500/8 rounded-[40px] rotate-[25deg] blur-sm" />
          <div className="absolute top-[25%] right-[25%] w-32 h-16 bg-rose-400/10 rounded-[30px] -rotate-[15deg] blur-sm" />
          <div className="absolute bottom-[30%] left-[5%] w-56 h-20 bg-red-600/6 rounded-[50px] rotate-[40deg] blur-sm" />
          <div className="absolute top-[10%] left-[30%] w-40 h-14 bg-rose-500/8 rounded-[35px] -rotate-[30deg] blur-sm" />
          <div className="absolute bottom-[20%] right-[15%] w-36 h-18 bg-red-400/8 rounded-[45px] rotate-[55deg] blur-sm" />
          <div className="absolute top-[60%] left-[15%] w-44 h-16 bg-red-400/6 rounded-[40px] -rotate-[20deg] blur-sm" />

          {/* Floating brush-stroke shapes */}
          <div className="absolute top-[8%] left-[60%] w-64 h-8 bg-gradient-to-r from-red-400/15 to-transparent rounded-full rotate-[12deg]" />
          <div className="absolute top-[45%] right-[5%] w-48 h-6 bg-gradient-to-l from-rose-400/12 to-transparent rounded-full -rotate-[8deg]" />
          <div className="absolute bottom-[35%] left-[8%] w-52 h-7 bg-gradient-to-r from-red-400/10 to-transparent rounded-full rotate-[20deg]" />
          <div className="absolute top-[70%] left-[40%] w-40 h-5 bg-gradient-to-r from-rose-300/10 to-transparent rounded-full -rotate-[5deg]" />

          {/* Grid pattern */}
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
                <span className="inline-block px-3 py-1 bg-red-500/20 text-red-300 text-xs font-bold rounded-full">
                  기업가정신
                </span>
                <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs font-bold rounded-full">
                  창작뮤지컬
                </span>
                <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full">
                  실화 기반
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[1.8] animate-fade-in-up delay-100">
                더 <span className="text-red-400">페인팅</span>
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
                  className="inline-flex items-center justify-center px-8 py-4 bg-red-500 text-white font-bold rounded-full hover:bg-red-400 transition-all duration-300 group"
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
                  src="/images/더페인팅 포스터1.png"
                  alt="더 페인팅 공연 포스터"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Quick stats bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up delay-500">
            {[
              {
                label: "러닝타임",
                value: "80분",
                iconPath: iconPaths.clock,
              },
              {
                label: "관람연령",
                value: "8세 이상",
                iconPath: iconPaths.users,
              },
              {
                label: "장르",
                value: "기업가정신 뮤지컬",
                iconPath: iconPaths.face,
              },
              {
                label: "원작",
                value: "실화 기반",
                iconPath: iconPaths.book,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.07] backdrop-blur-md border border-white/[0.12] rounded-2xl px-5 py-4 text-center"
              >
                <div className="flex justify-center">
                  <SvgIcon
                    d={stat.iconPath}
                    className="w-7 h-7 text-red-300"
                  />
                </div>
                <p className="text-white/40 text-xs font-bold mt-2 tracking-wider uppercase">
                  {stat.label}
                </p>
                <p className="text-white font-black text-sm mt-1">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 공연 개요                                                       */}
      {/* ============================================================= */}
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

          {/* Stat cards grid */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12 transition-all duration-700 delay-100 ${
              overviewSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {[
              {
                label: "작품명",
                value: "뮤지컬 <더 페인팅>",
                iconPath: iconPaths.pencilSquare,
              },
              {
                label: "장르",
                value: "기업가정신교육 뮤지컬",
                iconPath: iconPaths.face,
              },
              {
                label: "작가",
                value: "민슬지",
                iconPath: iconPaths.pencilSquare,
              },
              {
                label: "연출",
                value: "고희선",
                iconPath: iconPaths.film,
              },
              {
                label: "러닝타임",
                value: "80분",
                iconPath: iconPaths.clock,
              },
              {
                label: "관람연령",
                value: "8세 이상",
                iconPath: iconPaths.users,
              },
              {
                label: "기획·제작",
                value: "지컴퍼니",
                iconPath: iconPaths.briefcase,
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="relative bg-gray-warm rounded-2xl p-5 md:p-6 group hover:shadow-lg transition-all duration-300 overflow-hidden"
                style={{ transitionDelay: `${i * 60 + 150}ms` }}
              >
                {/* Accent top line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-light" />
                <SvgIcon
                  d={item.iconPath}
                  className="w-7 h-7 text-accent/70"
                />
                <p className="text-xs font-bold text-gray-400 mt-3 tracking-wider uppercase">
                  {item.label}
                </p>
                <p className="text-[15px] font-black text-black mt-1">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* 교육 방향의 변화 - dramatic design */}
          <div
            className={`relative bg-gradient-to-br from-rose-50 via-red-50/50 to-white rounded-3xl p-8 md:p-12 overflow-hidden transition-all duration-700 delay-200 ${
              overviewSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* subtle bg decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-200/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <p className="text-red-600 font-bold text-xs tracking-widest uppercase mb-2">
                Direction of Change
              </p>
              <h3 className="text-2xl md:text-3xl font-black text-black mb-8">
                교육 방향의 변화
              </h3>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-5 text-gray-600 text-[15px] leading-relaxed">
                  <p>
                    2022 개정 교육과정에 따라{" "}
                    <strong className="text-black">기업가정신</strong>이
                    2025년부터 고등학교 교과목으로 신설되었으며, 2026년부터는
                    초등학교 교과목으로도 확대될 예정입니다.
                  </p>
                  <p>
                    단순한 &lsquo;창업가 양성&rsquo;이 아닌, 학생들이 삶에서
                    문제를 발견하고 주도적으로 해결하며 실패를 딛고 다시 도전하는
                    과정 자체가 교육의 핵심입니다.
                  </p>
                </div>

                {/* Large pull-quote */}
                <div className="relative">
                  <div className="absolute -top-4 -left-2 text-7xl font-black text-red-300/30 leading-none select-none">
                    &ldquo;
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100/50 relative">
                    <p className="text-lg md:text-xl font-black text-black leading-relaxed">
                      스스로 선택하고 길을 만들어갈 수 있는 역량,
                    </p>
                    <p className="text-lg md:text-xl font-black text-red-600 leading-relaxed mt-1">
                      즉 자기주도성과 주체적 사고를 키우는 데 초점
                    </p>
                  </div>
                  <div className="absolute -bottom-4 -right-2 text-7xl font-black text-red-300/30 leading-none select-none">
                    &rdquo;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 시놉시스 - ENHANCED DRAMATIC VERSION                            */}
      {/* ============================================================= */}
      <section
        ref={storySection.ref}
        className="relative py-24 md:py-36 bg-red-950 text-white overflow-hidden"
      >
        {/* Dramatic stage-curtain background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Curtain drape gradients */}
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-red-900/20 to-transparent" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-900/20 to-transparent" />

          {/* Top valance */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/30 to-transparent" />

          {/* Spotlight effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-500/[0.04] rounded-full blur-[100px]" />
          <div className="absolute top-10 left-10 w-80 h-80 bg-red-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-red-500/[0.03] rounded-full blur-3xl" />

          {/* Film grain texture */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          {/* Section Header - Screenplay style */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              storySection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-red-400/50" />
              <p className="text-red-400 font-bold text-sm tracking-[0.3em] uppercase">
                Synopsis
              </p>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-red-400/50" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black">
              시놉<span className="text-red-400">시스</span>
            </h2>
            <p className="mt-3 text-white/30 text-sm tracking-wider">
              A story of freedom, courage, and the art of never giving up
            </p>
          </div>

          {/* ---- ACT I: OPENING ---- */}
          <div
            className={`transition-all duration-700 delay-100 ${
              storySection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* ACT label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-400/30 flex items-center justify-center">
                  <span className="text-red-300 font-black text-xs">I</span>
                </div>
                <div>
                  <p className="text-red-400/60 text-[10px] font-bold tracking-[0.25em] uppercase">
                    Act One
                  </p>
                  <p className="text-white/70 text-sm font-bold">
                    신념의 시작
                  </p>
                </div>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-red-500/30 to-transparent" />
            </div>

            {/* Hero quote - dramatic typographic treatment */}
            <div className="relative mb-10">
              {/* Decorative quote background */}
              <div className="absolute -top-6 -left-4 md:-left-8 text-[140px] md:text-[200px] font-black text-red-400/[0.06] leading-none select-none pointer-events-none">
                &ldquo;
              </div>

              <div className="relative bg-gradient-to-br from-red-500/10 via-rose-500/5 to-transparent rounded-3xl p-8 md:p-12 border border-red-400/10 backdrop-blur-sm">
                {/* Spotlight glow on the card */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-red-400/40 to-transparent rounded-full" />

                <div className="flex items-start gap-5">
                  {/* Character avatar */}
                  <div className="hidden md:flex flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-red-500/30 to-rose-500/30 border border-red-400/20 items-center justify-center">
                    <span className="text-red-300 font-black text-lg">
                      영
                    </span>
                  </div>

                  <div className="flex-1">
                    <p className="text-red-300/60 text-xs font-bold tracking-wider uppercase mb-4">
                      영서의 선언
                    </p>
                    <p className="text-3xl md:text-5xl font-black text-red-300 leading-[1.8] tracking-tight">
                      &lsquo;자유!&rsquo;
                    </p>
                    <p className="mt-4 text-white/60 text-lg md:text-xl leading-relaxed">
                      를 가장 중요한 신념과 철학으로 삼고 사는
                      <br className="hidden md:block" />
                      <span className="text-white/80 font-semibold">
                        평범한 미대생 영서.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scene card - Frustration */}
            <div
              className={`relative ml-4 md:ml-12 pl-8 border-l-2 border-red-500/20 mb-10 transition-all duration-700 delay-200 ${
                storySection.inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-[-20px]"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-4 w-4 h-4 rounded-full bg-red-950 border-2 border-red-500/40" />

              <div className="bg-white/[0.04] rounded-2xl p-6 md:p-8 border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <SvgIcon
                    d={iconPaths.palette}
                    className="w-4 h-4 text-red-400/50"
                  />
                  <span className="text-red-400/60 text-[10px] font-bold tracking-[0.2em] uppercase">
                    Scene 1 - 갈등
                  </span>
                </div>
                <p className="text-white/60 text-[16px] leading-[1.8]">
                  그림의 진정한 가치를 알아보지 못하고{" "}
                  <span className="text-white/80 font-semibold">
                    점수로만 평가하는 사람들
                  </span>
                  에게 불만을 가지고 있다. 언니 영희 또한 그러한 평가는
                  당연한 것이라 말하기만 할 뿐.
                </p>
              </div>
            </div>
          </div>

          {/* ---- Connecting visual: journey arrow ---- */}
          <div
            className={`flex justify-center my-10 transition-all duration-700 delay-300 ${
              storySection.inView
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-[1px] h-12 bg-gradient-to-b from-red-500/30 to-red-500/10" />
              <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-400/20 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-red-400/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
              <div className="w-[1px] h-12 bg-gradient-to-b from-red-500/10 to-transparent" />
            </div>
          </div>

          {/* ---- ACT II: TURNING POINT ---- */}
          <div
            className={`transition-all duration-700 delay-400 ${
              storySection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* ACT label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-400/30 flex items-center justify-center">
                  <span className="text-rose-300 font-black text-xs">
                    II
                  </span>
                </div>
                <div>
                  <p className="text-rose-400/60 text-[10px] font-bold tracking-[0.25em] uppercase">
                    Act Two
                  </p>
                  <p className="text-white/70 text-sm font-bold">
                    결심과 출발
                  </p>
                </div>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-rose-500/30 to-transparent" />
            </div>

            {/* Decision scene */}
            <div className="relative ml-4 md:ml-12 pl-8 border-l-2 border-rose-500/20 mb-10">
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-4 w-4 h-4 rounded-full bg-red-950 border-2 border-rose-500/40" />

              <div className="bg-white/[0.04] rounded-2xl p-6 md:p-8 border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <SvgIcon
                    d={iconPaths.plane}
                    className="w-4 h-4 text-rose-400/50"
                  />
                  <span className="text-rose-400/60 text-[10px] font-bold tracking-[0.2em] uppercase">
                    Scene 2 - 결심
                  </span>
                </div>
                <p className="text-white/60 text-[16px] leading-[1.8]">
                  영서는{" "}
                  <span className="text-rose-300 font-semibold">
                    아무도 자신을 모르는 곳
                  </span>
                  , 자신이 아무것도 모르는 해외로 떠나 꿈을 펼치기로
                  결심한다.
                </p>
              </div>
            </div>

            {/* Departure scene - with dramatic Prague reveal */}
            <div className="relative ml-4 md:ml-12 pl-8 border-l-2 border-rose-500/20">
              {/* Timeline dot - larger for key moment */}
              <div className="absolute left-[-11px] top-6 w-5 h-5 rounded-full bg-gradient-to-br from-red-500/60 to-rose-500/60 border-2 border-red-950 shadow-lg shadow-red-500/20" />

              <div className="relative bg-gradient-to-br from-rose-500/10 via-red-500/5 to-transparent rounded-3xl p-6 md:p-8 border border-rose-400/15 overflow-hidden">
                {/* Location reveal decoration */}
                <div className="absolute top-3 right-4 md:right-6">
                  <div className="flex items-center gap-2 text-white/20">
                    <SvgIcon
                      d={iconPaths.globe}
                      className="w-5 h-5"
                    />
                    <span className="text-xs font-bold tracking-wider hidden md:inline">
                      PRAHA
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  {/* Character avatars: sisters */}
                  <div className="hidden md:flex flex-col gap-2 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/30 border border-blue-400/20 flex items-center justify-center">
                      <span className="text-blue-300 font-black text-xs">
                        영
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500/30 to-rose-500/30 border border-red-400/20 flex items-center justify-center">
                      <span className="text-red-300 font-black text-xs">
                        영
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <SvgIcon
                        d={iconPaths.rocket}
                        className="w-4 h-4 text-red-400/50"
                      />
                      <span className="text-red-400/60 text-[10px] font-bold tracking-[0.2em] uppercase">
                        Scene 3 - 출발
                      </span>
                    </div>
                    <p className="text-white/60 text-[16px] leading-[1.8]">
                      영희는 무모한 결정이라며 영서를 말리지만, 꼭 자신의
                      그림을 통해 성공하고 돌아올 것이라는 당찬 포부를
                      남긴 채 영서는
                    </p>
                    <p className="mt-3 text-xl md:text-2xl font-black text-white leading-relaxed">
                      무작정 프라하로 떠나 버리는데...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---- Connecting visual: dramatic transition to climax ---- */}
          <div
            className={`flex justify-center my-12 transition-all duration-700 delay-500 ${
              storySection.inView
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
            }`}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-red-500/20" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/30" />
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <div className="w-4 h-4 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <div className="w-2 h-2 rounded-full bg-red-500/30" />
              </div>
              <div className="w-[1px] h-8 bg-gradient-to-b from-red-500/20 to-transparent" />
            </div>
          </div>

          {/* ---- CLIMAX / THEME REVEAL ---- */}
          <div
            className={`transition-all duration-1000 delay-600 ${
              storySection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* ACT label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500/30 to-amber-500/30 border border-red-400/30 flex items-center justify-center">
                  <SvgIcon
                    d={iconPaths.sparkles}
                    className="w-5 h-5 text-red-300"
                  />
                </div>
                <div>
                  <p className="text-red-400/60 text-[10px] font-bold tracking-[0.25em] uppercase">
                    Theme
                  </p>
                  <p className="text-white/70 text-sm font-bold">
                    작품의 메시지
                  </p>
                </div>
              </div>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-red-500/30 via-amber-500/20 to-transparent" />
            </div>

            {/* Grand climactic reveal card */}
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-rose-500/20 to-red-500/20 rounded-[28px] blur-sm" />

              {/* Gradient border wrapper */}
              <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-red-500 via-rose-500 to-red-500">
                <div className="bg-gradient-to-br from-red-950 via-red-950 to-red-950 rounded-[22px] p-10 md:p-14 text-center relative overflow-hidden">
                  {/* Inner spotlight */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-40 bg-red-500/[0.06] rounded-full blur-3xl pointer-events-none" />

                  {/* Decorative stage lights */}
                  <div className="absolute top-4 left-8 w-2 h-2 rounded-full bg-red-400/30" />
                  <div className="absolute top-4 right-8 w-2 h-2 rounded-full bg-red-400/30" />
                  <div className="absolute top-6 left-16 w-1.5 h-1.5 rounded-full bg-rose-400/20" />
                  <div className="absolute top-6 right-16 w-1.5 h-1.5 rounded-full bg-rose-400/20" />

                  <div className="relative z-10">
                    <SvgIcon
                      d={iconPaths.fire}
                      className="w-10 h-10 text-red-400/40 mx-auto mb-6"
                    />

                    <p className="text-2xl md:text-3xl lg:text-4xl font-black leading-relaxed">
                      <span className="text-red-400">
                        새로운 환경에서의 도전,
                      </span>
                    </p>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-black leading-relaxed mt-2">
                      <span className="text-rose-300">
                        한계를 극복하는 용기,
                      </span>
                    </p>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-black leading-relaxed mt-2">
                      <span className="text-white">
                        실패를 두려워하지 않는 태도
                      </span>
                    </p>

                    {/* Underline decoration */}
                    <div className="flex justify-center mt-8">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-[2px] bg-red-500/40 rounded-full" />
                        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-500/40 to-rose-500/40" />
                        <div className="w-8 h-[2px] bg-rose-500/40 rounded-full" />
                      </div>
                    </div>

                    <p className="mt-6 text-white/30 text-sm tracking-wider">
                      이것이 더 페인팅이 전하는 기업가정신입니다
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 등장인물                                                        */}
      {/* ============================================================= */}
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

          {/* Featured character - 영서 */}
          {characters
            .filter((c) => c.featured)
            .map((char) => (
              <div
                key={char.name}
                className={`mb-8 transition-all duration-700 delay-100 ${
                  characterSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div
                  className={`relative bg-gradient-to-br ${char.color} rounded-3xl p-8 md:p-12 overflow-hidden`}
                >
                  {/* Large watermark initial */}
                  <div className="absolute -right-4 md:right-8 -top-4 md:top-1/2 md:-translate-y-1/2 text-[180px] md:text-[280px] font-black text-red-500/[0.07] leading-none select-none pointer-events-none">
                    {char.initial}
                  </div>

                  {/* Accent line */}
                  <div
                    className={`w-16 h-1.5 ${char.accentColor} rounded-full mb-6`}
                  />

                  <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-block px-3 py-1 bg-red-500/20 text-red-700 text-xs font-bold rounded-full">
                          주인공
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-black">
                        {char.name}
                      </h3>
                      <p className="text-gray-500 font-medium mt-1 text-lg">
                        {char.role}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-5">
                        {char.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1.5 ${char.tagColor} text-xs font-bold rounded-full`}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <p className="mt-6 text-gray-600 leading-relaxed text-base max-w-xl">
                        {char.desc}
                      </p>
                    </div>

                    {/* Character avatar placeholder */}
                    <div className="hidden md:flex w-32 h-32 rounded-full bg-white/50 items-center justify-center">
                      <span className="text-5xl font-black text-red-400/60">
                        {char.initial}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Other characters grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {characters
              .filter((c) => !c.featured)
              .map((char, i) => (
                <div
                  key={char.name}
                  className={`relative bg-gradient-to-br ${char.color} rounded-3xl p-6 md:p-8 hover:shadow-xl transition-all duration-700 overflow-hidden group ${
                    characterSection.inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 100 + 300}ms` }}
                >
                  {/* Watermark initial */}
                  <div className="absolute -right-2 -bottom-4 text-[100px] font-black text-black/[0.04] leading-none select-none pointer-events-none group-hover:text-black/[0.07] transition-colors duration-500">
                    {char.initial}
                  </div>

                  {/* Accent line */}
                  <div
                    className={`w-10 h-1 ${char.accentColor} rounded-full mb-5`}
                  />

                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-black">
                      {char.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium mt-0.5">
                      {char.role}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {char.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-1 ${char.tagColor} text-xs font-bold rounded-full`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                      {char.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 기업가정신 키워드                                                 */}
      {/* ============================================================= */}
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting lines (visible on lg+) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none z-0">
              <div className="mx-12 h-[2px] bg-gradient-to-r from-accent/10 via-accent/30 to-accent/10" />
            </div>

            {entrepreneurKeywords.map((item, i) => (
              <div
                key={item.title}
                className={`relative z-10 bg-gradient-to-br from-white to-gray-warm rounded-2xl p-6 md:p-8 text-center hover:shadow-xl border border-gray-100 transition-all duration-700 overflow-hidden group ${
                  keywordsSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                {/* Large sequential number */}
                <div className="absolute top-3 right-4 text-[64px] font-black text-black/[0.03] leading-none select-none pointer-events-none group-hover:text-black/[0.06] transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10">
                  <div className="flex justify-center">
                    <SvgIcon
                      d={item.iconPath}
                      className="w-10 h-10 text-accent/70"
                    />
                  </div>

                  {/* English subtitle - more prominent */}
                  <p className="text-accent/70 text-xs font-bold tracking-widest uppercase mt-4">
                    {item.en}
                  </p>

                  <h3 className="mt-2 font-black text-black text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Connecting arrow (visible on lg+ except last) */}
                {i < entrepreneurKeywords.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 bg-accent/20 rounded-full items-center justify-center">
                    <svg
                      className="w-3 h-3 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 6대 핵심역량                                                     */}
      {/* ============================================================= */}
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

          {/* Circular / ring arrangement */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {coreCompetencies.map((item, i) => (
              <div
                key={item.title}
                className={`relative bg-gray-warm rounded-2xl p-6 md:p-8 text-center hover:shadow-xl transition-all duration-700 group overflow-hidden ${
                  competencySection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80 + 200}ms` }}
              >
                {/* Colored ring background */}
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gradient-to-br ${item.color} opacity-[0.08] group-hover:opacity-[0.15] group-hover:scale-125 transition-all duration-500`}
                />

                {/* Progress bar visual */}
                <div className="relative z-10">
                  <div className="flex justify-center">
                    <SvgIcon
                      d={item.iconPath}
                      className="w-10 h-10 text-gray-700"
                    />
                  </div>
                  <h3 className="mt-4 font-black text-black text-base">
                    {item.title}
                  </h3>

                  {/* Decorative bar */}
                  <div className="mt-3 mx-auto w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out ${
                        competencySection.inView ? "w-full" : "w-0"
                      }`}
                      style={{ transitionDelay: `${i * 100 + 500}ms` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 고교학점제 적합 이유 - visually distinct callout */}
          <div
            className={`mt-16 relative bg-gradient-to-br from-accent/5 to-amber-50 border border-accent/20 rounded-3xl p-8 md:p-10 max-w-4xl mx-auto overflow-hidden transition-all duration-700 delay-300 ${
              competencySection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-black text-black">
                  고교학점제 프로그램으로 적합한 이유
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "고교학점제 핵심 역량(자기주도성, 창의성, 진로설계 등)에 부합",
                  "경영&경제, 진로, 창체 과목과 연계 가능한 콘텐츠",
                  "예술을 통한 융합형 기업가정신 교육 사례",
                  "공연 후 활동 포함 - 학생 스스로 삶과 진로를 성찰하게 유도",
                  "정서적 울림 + 교육적 메시지를 동시에 전달하는 진로 콘텐츠",
                ].map((reason, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-[15px] text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 관객참여 프로그램                                                 */}
      {/* ============================================================= */}
      <section
        ref={programSection.ref}
        className="relative py-20 md:py-28 bg-red-950 text-white overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              programSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-red-400 font-bold text-sm tracking-widest uppercase mb-4">
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

          {/* Step-by-step visual flow */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 relative">
              {/* Connecting lines (lg+) */}
              <div className="hidden md:block absolute top-16 left-[16%] right-[16%] z-0 pointer-events-none">
                <div className="h-[2px] bg-gradient-to-r from-red-500/20 via-rose-500/30 to-red-500/20" />
              </div>

              {[
                {
                  num: "01",
                  title: "예술적 감동과 연결",
                  desc: "공연을 통해 예술적 감동을 경험한 후, 이를 기업가정신과 연결하여 새로운 시각을 갖게 합니다.",
                },
                {
                  num: "02",
                  title: "유명 화가 사례 소개",
                  desc: "기업가정신을 통해 재해석한 유명 화가들의 사례를 소개하며, 시장을 개척하고 가치를 창출한 예술가들의 이야기를 공유합니다.",
                },
                {
                  num: "03",
                  title: "진로 탐색 기회",
                  desc: "도전하는 태도와 혁신적인 사고를 통해 예술과 비즈니스의 가능성을 배우는 기회를 제공합니다.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`relative z-10 transition-all duration-700 ${
                    programSection.inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 150 + 200}ms` }}
                >
                  {/* Step number circle */}
                  <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg shadow-red-500/20">
                      <span className="text-white font-black text-sm">
                        {item.num}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300">
                    <h3 className="font-black text-white mb-3 text-center text-lg">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed text-center">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Media art description - prominent visual treatment */}
          <div
            className={`mt-12 max-w-3xl mx-auto transition-all duration-700 delay-500 ${
              programSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-red-500/50 via-rose-500/50 to-red-500/50">
              <div className="bg-red-950/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-300 text-xs font-bold mb-5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  MEDIA ART
                </div>
                <p className="text-white/70 text-base leading-relaxed">
                  공연 중 토코토코진 작가의 그림이{" "}
                  <strong className="text-white font-black">미디어아트</strong>
                  를 통해 작품에 표현됩니다.
                  <br />
                  밝고 경쾌한 색감과 친근한 캐릭터로 관객들에게 즐거움과 따뜻한
                  감성을 전달합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 공연 특징                                                        */}
      {/* ============================================================= */}
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

          {/* Comparison layout with VS divider */}
          <div
            className={`grid md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-0 items-stretch transition-all duration-700 delay-100 ${
              featureSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            {/* 극장 공연 */}
            <div className="relative bg-gray-warm rounded-3xl md:rounded-r-none p-8 md:p-10 overflow-hidden">
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 to-rose-500" />
              <SvgIcon
                d={iconPaths.face}
                className="w-10 h-10 text-red-500/70"
              />
              <h3 className="text-xl font-black text-black mt-4 mb-5">
                극장 공연 (고정형)
              </h3>
              <div className="space-y-3">
                {[
                  "고정형 극장 무대 공연",
                  "극장 무대 환경을 고려한 조명·음향·무대 연출",
                  "전문 공연 제작 스태프 참여로 높은 무대 완성도",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                    <span className="text-[15px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* VS Divider */}
            <div className="hidden md:flex flex-col items-center justify-center px-4 z-10 -mx-4">
              <div className="w-14 h-14 rounded-full bg-accent shadow-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">VS</span>
              </div>
            </div>
            <div className="flex md:hidden items-center justify-center py-4">
              <div className="w-12 h-12 rounded-full bg-accent shadow-lg flex items-center justify-center">
                <span className="text-white font-black text-xs">VS</span>
              </div>
            </div>

            {/* 찾아가는 공연 */}
            <div className="relative bg-gray-warm rounded-3xl md:rounded-l-none p-8 md:p-10 overflow-hidden">
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500" />
              <SvgIcon
                d={iconPaths.truck}
                className="w-10 h-10 text-amber-500/70"
              />
              <h3 className="text-xl font-black text-black mt-4 mb-5">
                찾아가는 공연 (이동형)
              </h3>
              <div className="space-y-3">
                {[
                  "공연이 가능한 공간이라면 어디든 운영 가능",
                  "자체 보유 이동형 음향/조명 장비 사용",
                  "공연 후 관객 참여형 토크 및 토론 프로그램 가능",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-2" />
                    <span className="text-[15px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 주요 이력 - horizontal timeline style */}
          <div
            className={`mt-12 transition-all duration-700 delay-300 ${
              featureSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-lg font-black text-black mb-8 text-center">
              주요 공연 이력
            </h3>

            <div className="relative max-w-3xl mx-auto">
              {/* Timeline line */}
              <div className="absolute top-6 left-0 right-0 h-[2px] bg-gray-200 hidden md:block" />

              <div className="grid md:grid-cols-2 gap-8">
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
                  <div key={item.year} className="relative">
                    {/* Timeline dot */}
                    <div className="hidden md:flex items-center justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 border-4 border-white shadow flex items-center justify-center relative z-10">
                        <span className="text-accent font-black text-xs">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    <div className="bg-gray-warm rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                      <span className="md:hidden text-2xl font-black text-accent">
                        {item.year}
                      </span>
                      <p className="text-sm text-gray-600 md:text-center mt-2 md:mt-0">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 공연 갤러리                                                      */}
      {/* ============================================================= */}
      <section
        ref={gallerySection.ref}
        className="py-20 md:py-28 bg-gray-warm"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 002.png", alt: "전체 캐스트 무대" },
              { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 003.png", alt: "영서의 솔로 장면" },
              { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 005.png", alt: "역동적인 장면" },
              { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 006.png", alt: "감동적인 스포트라이트" },
              { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 007.png", alt: "블루 조명 무대" },
              { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 008.png", alt: "레인보우 무대" },
              { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 010.png", alt: "두 배우의 대결" },
              { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 014.png", alt: "세 배우 대화 장면" },
              { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 019.png", alt: "역동적인 3인 장면" },
              { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 020.png", alt: "듀엣 장면" },
              { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 022.png", alt: "카페 장면" },
              { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 023.png", alt: "에이프런 장면" },
            ].map((img, i) => (
              <div
                key={i}
                className={`relative aspect-[4/3] rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-700 ${
                  gallerySection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80 + 200}ms` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* CTA                                                            */}
      {/* ============================================================= */}
      <CTABanner
        title="기업가정신을 뮤지컬로 경험하고 싶다면?"
        highlight="지금 문의"
        description="도전과 성장의 메시지를 담은 뮤지컬 <더 페인팅>을 여러분의 학교에서 만나보세요."
        buttonText="공연 문의하기"
      />

      {/* ============================================================= */}
      {/* Floating mobile CTA button                                     */}
      {/* ============================================================= */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-500 text-white font-bold rounded-full shadow-2xl shadow-red-500/30 hover:bg-red-400 transition-all duration-300"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          공연 문의하기
        </Link>
      </div>
    </>
  );
}
