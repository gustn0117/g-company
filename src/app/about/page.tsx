"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { useInView } from "@/hooks/useInView";
import { useEffect, useState, useCallback } from "react";

const aboutImages = [
  { src: "/images/2.png", alt: "관객과 함께하는 지컴퍼니" },
  { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 002.png", alt: "더 페인팅 전체 캐스트" },
  { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 008.png", alt: "무지개 배경 속 배우" },
  { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 011.png", alt: "화려한 무대 위 배우들" },
  { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 005.png", alt: "역동적인 연기 장면" },
  { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 006.png", alt: "따뜻한 스포트라이트 속 장면" },
];

function CountUp({
  end,
  suffix = "",
  duration = 2000,
  start = false,
}: {
  end: number;
  suffix?: string;
  duration?: number;
  start: boolean;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    let frame: number;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start]);
  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ── SVG Icon Components ── */

function TheaterMasksIcon() {
  return (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a6 6 0 0 1-6 6h0A6 6 0 0 1 2 10V4z" />
      <circle cx="5.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="8.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      <path d="M5 9.5c.5.5 1.5 1 2.5 0" />
      <path d="M12 6h6a2 2 0 0 1 2 2v4a6 6 0 0 1-6 6h0a6 6 0 0 1-5.25-3.1" />
      <circle cx="16" cy="9.5" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="19" cy="9.5" r="0.75" fill="currentColor" stroke="none" />
      <path d="M15.5 13c.5-.7 1.5-1 3 0" />
    </svg>
  );
}

function VanIcon() {
  return (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 10V7a2 2 0 0 1 2-2h10v11H4a2 2 0 0 1-2-2v-1" />
      <path d="M14 5h2.5l3.5 4v5a2 2 0 0 1-2 2h-4V5z" />
      <circle cx="6.5" cy="16" r="2" />
      <circle cx="16.5" cy="16" r="2" />
      <path d="M14 9h4" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="7" r="3" />
      <path d="M3 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1" />
      <circle cx="17" cy="8" r="2.5" />
      <path d="M17 11.5a4 4 0 0 1 4 4V17" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 2h6a1 1 0 0 1 1 1v1H8V3a1 1 0 0 1 1-1z" />
      <rect x="4" y="4" width="16" height="18" rx="2" />
      <path d="M8 10h8M8 14h6M8 18h4" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
    </svg>
  );
}

/* ── Data ── */

const stats = [
  { number: 300, suffix: "+", label: "누적 공연 횟수", desc: "전국 곳곳에서 진행된 공연" },
  { number: 150000, suffix: "+", label: "누적 관객 수", desc: "감동을 함께 나눈 관객" },
  { number: 200, suffix: "+", label: "협력 기관 수", desc: "함께한 학교 및 기관" },
  { number: 98, suffix: "%", label: "만족도", desc: "공연 후 만족도 조사 기준" },
];

const values: {
  icon: ReactNode;
  title: string;
  desc: string;
  accentColor: string;
  iconBg: string;
}[] = [
  {
    icon: <TheaterMasksIcon />,
    title: "자체 제작 뮤지컬",
    desc: "오리지널 대본과 음악으로 제작된 고품질 뮤지컬 콘텐츠를 보유하고 있습니다.",
    accentColor: "border-t-amber-500",
    iconBg: "bg-gradient-to-br from-amber-500 to-yellow-600",
  },
  {
    icon: <VanIcon />,
    title: "전국 어디든 방문",
    desc: "서울, 경기는 물론 전국 어디든 직접 찾아가 공연을 진행합니다.",
    accentColor: "border-t-slate-700",
    iconBg: "bg-gradient-to-br from-slate-700 to-gray-800",
  },
  {
    icon: <PeopleIcon />,
    title: "전문 배우 & 스태프",
    desc: "전문 교육을 받은 배우진과 무대 전문 스태프가 함께합니다.",
    accentColor: "border-t-amber-500",
    iconBg: "bg-gradient-to-br from-amber-500 to-yellow-600",
  },
  {
    icon: <ClipboardIcon />,
    title: "맞춤형 프로그램",
    desc: "기관의 목적과 대상에 맞게 프로그램을 기획하고 구성합니다.",
    accentColor: "border-t-slate-700",
    iconBg: "bg-gradient-to-br from-slate-700 to-gray-800",
  },
  {
    icon: <WrenchIcon />,
    title: "원스톱 서비스",
    desc: "무대, 음향, 조명 등 모든 장비를 직접 설치하고 운영합니다.",
    accentColor: "border-t-amber-500",
    iconBg: "bg-gradient-to-br from-amber-500 to-yellow-600",
  },
  {
    icon: <LightbulbIcon />,
    title: "교육적 메시지",
    desc: "재미와 감동 속에 자연스럽게 녹아드는 교육적 메시지를 전달합니다.",
    accentColor: "border-t-slate-700",
    iconBg: "bg-gradient-to-br from-slate-700 to-gray-800",
  },
];

export default function AboutPage() {
  const aboutSection = useInView();
  const valuesSection = useInView();
  const statsSection = useInView(0.3);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % aboutImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextImage, 4000);
    return () => clearInterval(timer);
  }, [nextImage]);

  return (
    <>
      <PageHero
        eyebrow="About G Company"
        title="공연이 필요한 곳,"
        highlight="어디든"
        titleAfter=" 찾아갑니다."
        description="지컴퍼니는 학교, 기관, 축제 현장 등 공연이 필요한 곳이라면 어디든 직접 찾아가 최고의 뮤지컬 무대를 선보이는 전문 공연기업입니다."
        breadcrumb="회사소개"
      />

      {/* About Content */}
      <section ref={aboutSection.ref} className="py-28 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
            {/* Left - Visual */}
            <div
              className={`relative transition-all duration-700 ${
                aboutSection.inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
                  {aboutImages.map((img, i) => (
                    <Image
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      fill
                      className={`object-cover transition-opacity duration-1500 ${
                        i === currentImage ? "opacity-100" : "opacity-0"
                      }`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={i === 0}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  {/* Slide indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {aboutImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          i === currentImage
                            ? "w-6 bg-accent"
                            : "w-1.5 bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-2xl shadow-xl max-w-[200px]">
                  <p className="text-3xl font-black text-accent">10+</p>
                  <p className="text-sm text-white/70 mt-1">
                    년간 쌓아온
                    <br />
                    공연 노하우
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div
              className={`transition-all duration-700 delay-200 ${
                aboutSection.inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
                Our Story
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-black">
                <span className="block">감동을 전하는</span>
                <span className="block mt-2 md:mt-3">
                  <span className="text-accent">뮤지컬 전문</span> 기업
                </span>
              </h2>
              <div className="mt-8 space-y-5 text-gray-600 text-[17px] leading-relaxed">
                <p>
                  지컴퍼니는 학교, 기관, 축제 현장 등 공연이 필요한 곳이라면
                  어디든 직접 찾아가 최고의 뮤지컬 무대를 선보이는 전문
                  공연기업입니다.
                </p>
                <p>
                  무대 설치부터 음향, 조명, 공연 진행까지 모든 것을 원스톱으로
                  책임지며, 관객 맞춤형 콘텐츠로 감동과 재미를 동시에 전달합니다.
                </p>
                <p>
                  청소년부터 성인까지, 교육적 메시지와 예술적 감동이 어우러진
                  지컴퍼니만의 특별한 공연을 경험해 보세요.
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors"
                >
                  공연 서비스 보기
                </Link>
                <Link
                  href="/shows"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-white transition-colors"
                >
                  작품 둘러보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesSection.ref} className="py-28 md:py-36 bg-gray-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              valuesSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Our Values
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-black">
              지컴퍼니가 <span className="text-accent">특별한</span> 이유
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((item, i) => (
              <div
                key={item.title}
                className={`group bg-white rounded-3xl p-8 md:p-10 border-t-4 ${item.accentColor} hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                  valuesSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div
                  className={`w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-black mt-5">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-500 text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        ref={statsSection.ref}
        className="py-24 md:py-32 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              statsSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Our Track Record
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-black">
              숫자로 보는 <span className="text-accent">지컴퍼니</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  statsSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className="bg-gray-warm rounded-3xl p-8 hover:shadow-lg transition-shadow">
                  <p className="text-4xl md:text-5xl font-black text-black">
                    <CountUp
                      end={stat.number}
                      suffix={stat.suffix}
                      start={statsSection.inView}
                    />
                  </p>
                  <p className="mt-3 font-bold text-black text-lg">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-sm text-gray-400">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
