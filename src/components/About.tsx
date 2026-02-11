"use client";

import { useEffect, useRef, useState } from "react";

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

export default function About() {
  const { ref, inView } = useInView();

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
              {/* Main image placeholder */}
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
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-black">
              공연이 필요한 곳,
              <br />
              <span className="text-accent">어디든</span> 찾아갑니다.
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
              {[
                { icon: "🎭", text: "자체 제작 뮤지컬" },
                { icon: "🚐", text: "전국 어디든 방문" },
                { icon: "🎵", text: "전문 배우 & 스태프" },
                { icon: "📋", text: "맞춤형 프로그램" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl"
                >
                  <span className="text-2xl">{item.icon}</span>
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
