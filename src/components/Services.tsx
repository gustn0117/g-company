"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Hook                                                               */
/* ------------------------------------------------------------------ */

function useInView(threshold = 0.15) {
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

/* ------------------------------------------------------------------ */
/*  SVG Icon components                                                */
/* ------------------------------------------------------------------ */

function SchoolIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 22h20" />
      <path d="M6 18V10" />
      <path d="M18 18V10" />
      <path d="M2 10l10-8 10 8" />
      <path d="M10 22V14h4v8" />
      <rect x="9" y="10" width="6" height="4" rx="0.5" />
    </svg>
  );
}

function OrganizationIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
      <path d="M10 7h4" />
      <path d="M10 18h4" />
    </svg>
  );
}

function FestivalIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3l6 3 6-3" />
      <path d="M6 3v6" />
      <path d="M18 3v6" />
      <path d="M12 6v15" />
      <path d="M4 9h16" />
      <path d="M2 21h20" />
      <path d="M8 9v12" />
      <path d="M16 9v12" />
      <path d="M4 14h4" />
      <path d="M16 14h4" />
    </svg>
  );
}

function CheckIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ConsultIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <path d="M8 9h8" />
      <path d="M8 13h4" />
    </svg>
  );
}

function PlanIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
      <path d="M13 13h4" />
      <path d="M13 17h2" />
    </svg>
  );
}

function StageIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function PerformIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    number: "01",
    title: "학교 방문 공연",
    subtitle: "School Visit",
    desc: "학교 강당, 체육관 등 교내 공간에서 진행되는 뮤지컬 공연. 학생들의 눈높이에 맞춘 교육적 콘텐츠와 무대 예술의 감동을 동시에 전달합니다.",
    features: ["교내 맞춤 무대 설치", "학년별 맞춤 콘텐츠", "사전 협의 및 리허설"],
    icon: SchoolIcon,
    dark: true,
  },
  {
    number: "02",
    title: "기관·단체 공연",
    subtitle: "Organization",
    desc: "복지관, 문화센터, 공공기관 등 다양한 단체를 위한 맞춤형 공연 서비스. 기관의 행사 목적과 대상에 맞게 프로그램을 구성합니다.",
    features: ["기관 행사 연계 가능", "다양한 관객층 대응", "행사 기획 컨설팅"],
    icon: OrganizationIcon,
    dark: false,
  },
  {
    number: "03",
    title: "축제·이벤트 공연",
    subtitle: "Festival & Event",
    desc: "지역 축제, 학교 축제, 기업 행사 등 야외·특설 무대에서의 대규모 공연. 행사의 하이라이트를 장식할 화려한 뮤지컬 무대를 제공합니다.",
    features: ["야외 무대 설치 가능", "대규모 관객 대응", "축제 프로그램 연계"],
    icon: FestivalIcon,
    dark: false,
  },
];

const processSteps = [
  { step: "01", title: "상담 & 문의", icon: ConsultIcon },
  { step: "02", title: "프로그램 기획", icon: PlanIcon },
  { step: "03", title: "무대 설치", icon: StageIcon },
  { step: "04", title: "공연 진행", icon: PerformIcon },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="relative py-28 md:py-36 bg-white overflow-hidden" ref={ref}>
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-accent/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-black">
            <span className="block">찾아가는 공연,</span>
            <span className="block mt-2 md:mt-3">이렇게 진행됩니다.</span>
          </h2>
          <p className="mt-8 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            공연이 필요한 곳이라면 전국 어디든 찾아갑니다.
            <br />
            무대 설치부터 철수까지, 모든 과정을 지컴퍼니가 책임집니다.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.number}
                className={`group relative rounded-3xl transition-all duration-700 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                {/* Gradient accent top border on hover */}
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-accent via-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div
                  className={`relative h-full rounded-3xl p-8 md:p-10 border transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2 ${
                    service.dark
                      ? "bg-black border-white/10"
                      : "bg-white border-gray-100 hover:border-accent/20"
                  }`}
                >
                  {/* Icon + number row */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${
                        service.dark ? "bg-accent/10" : "bg-accent/[0.08]"
                      }`}
                    >
                      <IconComponent className="w-7 h-7 text-accent" />
                    </div>
                    <span
                      className={`text-6xl font-black leading-none select-none ${
                        service.dark ? "text-white/[0.06]" : "text-black/[0.04]"
                      }`}
                    >
                      {service.number}
                    </span>
                  </div>

                  <p
                    className={`text-xs font-bold tracking-widest uppercase ${
                      service.dark ? "text-white/40" : "text-gray-400"
                    }`}
                  >
                    {service.subtitle}
                  </p>
                  <h3
                    className={`text-2xl font-black mt-2 ${
                      service.dark ? "text-white" : "text-black"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mt-4 text-[15px] leading-relaxed ${
                      service.dark ? "text-white/55" : "text-gray-500"
                    }`}
                  >
                    {service.desc}
                  </p>

                  {/* Feature list */}
                  <div className="mt-8 space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <CheckIcon className="w-3 h-3 text-accent" />
                        </div>
                        <span
                          className={`text-sm font-medium ${
                            service.dark ? "text-white/75" : "text-gray-700"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mini process flow preview */}
        <div
          className={`mt-20 relative rounded-3xl overflow-hidden transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Background with subtle pattern */}
          <div className="absolute inset-0 bg-gray-warm" />
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative p-8 md:p-12">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-black text-black">
                공연 진행 프로세스
              </h3>
              <Link
                href="/services"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-black transition-colors duration-300 group/more"
              >
                자세히 보기
                <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover/more:translate-x-1" />
              </Link>
            </div>

            {/* Desktop horizontal process */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Connecting line */}
                <div className="absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20" />

                <div className="grid grid-cols-4 gap-4">
                  {processSteps.map((item, i) => {
                    const StepIcon = item.icon;
                    return (
                      <div key={item.step} className="relative text-center">
                        {/* Step circle */}
                        <div className="relative mx-auto w-12 h-12 mb-4">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent-light opacity-20" />
                          <div className="absolute inset-[2px] rounded-full bg-black flex items-center justify-center">
                            <StepIcon className="w-5 h-5 text-accent" />
                          </div>
                        </div>

                        {/* Arrow between steps */}
                        {i < 3 && (
                          <div className="absolute top-6 -right-2 translate-x-1/2 -translate-y-1/2 z-10">
                            <svg
                              className="w-3 h-3 text-accent/40"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={3}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="9 18 15 12 9 6" />
                            </svg>
                          </div>
                        )}

                        <span className="text-[10px] font-bold text-accent tracking-widest">
                          STEP {item.step}
                        </span>
                        <h4 className="mt-1 font-bold text-black text-sm">
                          {item.title}
                        </h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mobile horizontal process (compact) */}
            <div className="md:hidden">
              <div className="grid grid-cols-4 gap-3">
                {processSteps.map((item) => {
                  const StepIcon = item.icon;
                  return (
                    <div key={item.step} className="text-center">
                      <div className="relative mx-auto w-10 h-10 mb-2">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent-light opacity-20" />
                        <div className="absolute inset-[2px] rounded-full bg-black flex items-center justify-center">
                          <StepIcon className="w-4 h-4 text-accent" />
                        </div>
                      </div>
                      <span className="text-[9px] font-bold text-accent tracking-wider">
                        {item.step}
                      </span>
                      <h4 className="mt-0.5 font-bold text-black text-xs leading-tight">
                        {item.title}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA row */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-black/10 group/btn text-sm"
              >
                공연 안내 자세히 보기
                <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-gray-200 text-black font-bold rounded-full hover:border-accent hover:text-accent transition-all duration-300 text-sm"
              >
                공연 문의하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
