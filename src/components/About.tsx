"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const aboutImages = [
  { src: "/images/2.png", alt: "관객과 함께하는 지컴퍼니" },
  { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 002.png", alt: "더 페인팅 전체 캐스트" },
  { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 008.png", alt: "무지개 배경 속 배우" },
  { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 011.png", alt: "화려한 무대 위 배우들" },
  { src: "/images/KakaoTalk_Photo_2026-02-14-13-23-06 005.png", alt: "역동적인 연기 장면" },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

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

const keyPoints = [
  {
    icon: <TheaterMasksIcon />,
    text: "자체 제작 뮤지컬",
    gradient: "from-amber-500/10 to-yellow-500/10",
    iconBg: "bg-gradient-to-br from-amber-500 to-yellow-600",
  },
  {
    icon: <VanIcon />,
    text: "전국 어디든 방문",
    gradient: "from-slate-500/10 to-gray-500/10",
    iconBg: "bg-gradient-to-br from-slate-700 to-gray-800",
  },
  {
    icon: <PeopleIcon />,
    text: "전문 배우 & 스태프",
    gradient: "from-amber-500/10 to-yellow-500/10",
    iconBg: "bg-gradient-to-br from-amber-500 to-yellow-600",
  },
  {
    icon: <ClipboardIcon />,
    text: "맞춤형 프로그램",
    gradient: "from-slate-500/10 to-gray-500/10",
    iconBg: "bg-gradient-to-br from-slate-700 to-gray-800",
  },
];

export default function About() {
  const { ref, inView } = useInView();
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % aboutImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextImage, 4000);
    return () => clearInterval(timer);
  }, [nextImage]);

  return (
    <section id="about" className="py-28 md:py-36 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Left - Visual */}
          <div
            className={`relative transition-all duration-700 ${
              inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Performance photos slideshow */}
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

              {/* Floating card */}
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
              inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              About G Company
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-black">
              <span className="block">공연이 필요한 곳,</span>
              <span className="block mt-2 md:mt-3">
                <span className="text-accent">어디든</span> 찾아갑니다.
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

            {/* Key points */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {keyPoints.map((item) => (
                <div
                  key={item.text}
                  className={`flex items-center gap-3.5 p-4 bg-gradient-to-r ${item.gradient} rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 group`}
                >
                  <div
                    className={`w-10 h-10 ${item.iconBg} rounded-xl flex items-center justify-center text-white shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-800">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
