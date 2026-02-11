"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

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

const stats = [
  { number: 300, suffix: "+", label: "누적 공연 횟수", desc: "전국 곳곳에서 진행된 공연" },
  { number: 150000, suffix: "+", label: "누적 관객 수", desc: "감동을 함께 나눈 관객" },
  { number: 200, suffix: "+", label: "협력 기관 수", desc: "함께한 학교 및 기관" },
  { number: 98, suffix: "%", label: "만족도", desc: "공연 후 만족도 조사 기준" },
];

const values = [
  {
    icon: "🎭",
    title: "자체 제작 뮤지컬",
    desc: "오리지널 대본과 음악으로 제작된 고품질 뮤지컬 콘텐츠를 보유하고 있습니다.",
  },
  {
    icon: "🚐",
    title: "전국 어디든 방문",
    desc: "서울, 경기는 물론 전국 어디든 직접 찾아가 공연을 진행합니다.",
  },
  {
    icon: "🎵",
    title: "전문 배우 & 스태프",
    desc: "전문 교육을 받은 배우진과 무대 전문 스태프가 함께합니다.",
  },
  {
    icon: "📋",
    title: "맞춤형 프로그램",
    desc: "기관의 목적과 대상에 맞게 프로그램을 기획하고 구성합니다.",
  },
  {
    icon: "🔊",
    title: "원스톱 서비스",
    desc: "무대, 음향, 조명 등 모든 장비를 직접 설치하고 운영합니다.",
  },
  {
    icon: "💡",
    title: "교육적 메시지",
    desc: "재미와 감동 속에 자연스럽게 녹아드는 교육적 메시지를 전달합니다.",
  },
];

export default function AboutPage() {
  const aboutSection = useInView();
  const valuesSection = useInView();
  const statsSection = useInView(0.3);

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
                <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="w-16 h-16 mx-auto text-gray-400 mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15.536 8.464a5 5 0 010 7.072M12 6a7.975 7.975 0 015.657 2.343M6.343 6.343A7.975 7.975 0 0012 18a7.975 7.975 0 005.657-2.343M9.879 9.879a3 3 0 000 4.242"
                        />
                      </svg>
                      <p className="text-gray-500 font-medium">공연 현장 사진</p>
                    </div>
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
              <h2 className="text-4xl md:text-5xl font-black leading-tight text-black">
                감동을 전하는
                <br />
                <span className="text-accent">뮤지컬 전문</span> 기업
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
                className={`bg-white rounded-3xl p-8 md:p-10 hover:shadow-lg transition-all duration-700 ${
                  valuesSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <span className="text-4xl">{item.icon}</span>
                <h3 className="text-xl font-black text-black mt-4">
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
