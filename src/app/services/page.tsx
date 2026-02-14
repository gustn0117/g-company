"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { useInView } from "@/hooks/useInView";

/* ------------------------------------------------------------------ */
/*  SVG Icon components                                                */
/* ------------------------------------------------------------------ */

function SchoolIcon({ className = "w-8 h-8" }: { className?: string }) {
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

function OrganizationIcon({ className = "w-8 h-8" }: { className?: string }) {
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

function FestivalIcon({ className = "w-8 h-8" }: { className?: string }) {
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

function ConsultIcon({ className = "w-7 h-7" }: { className?: string }) {
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

function PlanIcon({ className = "w-7 h-7" }: { className?: string }) {
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

function StageIcon({ className = "w-7 h-7" }: { className?: string }) {
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

function PerformIcon({ className = "w-7 h-7" }: { className?: string }) {
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

function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
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
  {
    step: "01",
    title: "상담 & 문의",
    desc: "공연 일정, 장소, 대상 등 상세 상담",
    icon: ConsultIcon,
  },
  {
    step: "02",
    title: "프로그램 기획",
    desc: "맞춤형 공연 프로그램 구성 및 제안",
    icon: PlanIcon,
  },
  {
    step: "03",
    title: "무대 설치",
    desc: "현장 방문 후 무대·음향·조명 셋업",
    icon: StageIcon,
  },
  {
    step: "04",
    title: "공연 진행",
    desc: "전문 배우진의 감동적인 뮤지컬 공연",
    icon: PerformIcon,
  },
];

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function ServicesPage() {
  const cardsSection = useInView();
  const processSection = useInView();
  const whySection = useInView();

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="찾아가는 공연,"
        highlight="이렇게"
        titleAfter=" 진행됩니다."
        description="공연이 필요한 곳이라면 전국 어디든 찾아갑니다. 무대 설치부터 철수까지, 모든 과정을 지컴퍼니가 책임집니다."
        breadcrumb="공연안내"
      />

      {/* ── Service Cards ── */}
      <section ref={cardsSection.ref} className="relative py-28 md:py-36 bg-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-warm rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.number}
                  className={`group relative rounded-3xl transition-all duration-700 ${
                    cardsSection.inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 150 + 200}ms` }}
                >
                  {/* Gradient accent top border */}
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
                          service.dark
                            ? "bg-accent/10"
                            : "bg-accent/[0.08]"
                        }`}
                      >
                        <IconComponent
                          className={`w-7 h-7 ${
                            service.dark ? "text-accent" : "text-accent"
                          }`}
                        />
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

                    {/* CTA link */}
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 mt-8 text-sm font-bold transition-all duration-300 group/link ${
                        service.dark
                          ? "text-accent hover:text-accent-light"
                          : "text-accent hover:text-black"
                      }`}
                    >
                      <span>공연 문의하기</span>
                      <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Process Flow ── */}
      <section ref={processSection.ref} className="relative py-28 md:py-36 bg-gray-warm overflow-hidden">
        {/* Decorative background pattern */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #000 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section heading */}
          <div
            className={`text-center mb-20 transition-all duration-700 ${
              processSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Process
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-black">
              공연 진행 <span className="text-accent">프로세스</span>
            </h2>
            <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
              문의부터 공연까지, 모든 과정을 체계적으로 진행합니다.
            </p>
          </div>

          {/* Process steps - Desktop horizontal timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connecting line */}
              <div
                className={`absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 transition-all duration-1000 delay-500 ${
                  processSection.inView
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0"
                }`}
                style={{ transformOrigin: "left" }}
              >
                <div className="w-full h-full bg-gradient-to-r from-accent/20 via-accent to-accent/20" />
              </div>

              <div className="grid grid-cols-4 gap-6">
                {processSteps.map((item, i) => {
                  const StepIcon = item.icon;
                  return (
                    <div
                      key={item.step}
                      className={`relative text-center transition-all duration-700 ${
                        processSection.inView
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${i * 200 + 400}ms` }}
                    >
                      {/* Step circle with gradient */}
                      <div className="relative mx-auto w-[104px] h-[104px]">
                        {/* Outer glow ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-accent-light/20 blur-md" />
                        {/* White bg circle */}
                        <div className="absolute inset-1 rounded-full bg-white shadow-lg" />
                        {/* Gradient border ring */}
                        <div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: "linear-gradient(135deg, #D4A853, #F5E6C8, #D4A853)",
                            padding: "2px",
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                          }}
                        />
                        {/* Inner content */}
                        <div className="absolute inset-3 rounded-full bg-gradient-to-br from-black to-gray-800 flex flex-col items-center justify-center">
                          <StepIcon className="w-6 h-6 text-accent" />
                          <span className="text-[10px] font-bold text-white/50 mt-0.5">
                            STEP {item.step}
                          </span>
                        </div>
                      </div>

                      {/* Arrow connector between steps */}
                      {i < 3 && (
                        <div
                          className={`absolute top-[52px] -right-3 translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-500 ${
                            processSection.inView
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-0"
                          }`}
                          style={{ transitionDelay: `${i * 200 + 800}ms` }}
                        >
                          <div className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-accent"
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
                        </div>
                      )}

                      {/* Card below */}
                      <div className="mt-6 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-accent/10 transition-all duration-300">
                        <h4 className="font-bold text-black text-lg">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Process steps - Mobile vertical timeline */}
          <div className="md:hidden">
            <div className="relative pl-12">
              {/* Vertical connecting line */}
              <div
                className={`absolute left-[23px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20 transition-all duration-1000 delay-500 ${
                  processSection.inView
                    ? "opacity-100 scale-y-100"
                    : "opacity-0 scale-y-0"
                }`}
                style={{ transformOrigin: "top" }}
              />

              <div className="space-y-8">
                {processSteps.map((item, i) => {
                  const StepIcon = item.icon;
                  return (
                    <div
                      key={item.step}
                      className={`relative transition-all duration-700 ${
                        processSection.inView
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4"
                      }`}
                      style={{ transitionDelay: `${i * 200 + 400}ms` }}
                    >
                      {/* Step circle on the line */}
                      <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-[46px] h-[46px]">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent-light" />
                        <div className="absolute inset-[2px] rounded-full bg-black flex items-center justify-center">
                          <StepIcon className="w-5 h-5 text-accent" />
                        </div>
                      </div>

                      {/* Card */}
                      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                        <span className="text-[10px] font-bold text-accent tracking-widest uppercase">
                          STEP {item.step}
                        </span>
                        <h4 className="font-bold text-black text-lg mt-1">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA button */}
          <div
            className={`text-center mt-16 transition-all duration-700 delay-500 ${
              processSection.inView ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg shadow-black/20 group"
            >
              공연 상담 신청하기
              <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why G-Company ── */}
      <section ref={whySection.ref} className="relative py-28 md:py-36 bg-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              whySection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Why G-Company
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-black">
              지컴퍼니를 <span className="text-accent">선택</span>하는 이유
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "전문 제작 시스템",
                desc: "무대, 음향, 조명, 의상까지 자체 제작 시스템으로 높은 품질의 공연을 일관되게 제공합니다.",
                iconPath:
                  "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              },
              {
                title: "전국 어디든 방문",
                desc: "서울, 수도권은 물론 전국 어디든 직접 찾아갑니다. 원하는 장소에서 최적의 공연 환경을 만들어 드립니다.",
                iconPath:
                  "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
              },
              {
                title: "맞춤형 프로그램",
                desc: "관객의 연령, 기관의 목적, 행사의 성격에 맞춰 프로그램을 구성합니다. 최적의 공연을 제안해 드립니다.",
                iconPath:
                  "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1 2 2 0 110-4 1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`group relative bg-white rounded-3xl p-8 border border-gray-100 transition-all duration-700 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:border-accent/20 ${
                  whySection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                {/* Top accent line */}
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent-light/20 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                  <svg
                    className="w-7 h-7 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={item.iconPath} />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-black">{item.title}</h4>
                <p className="mt-3 text-[15px] text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="원하는 공연을"
        highlight="지금 예약"
        description="학교, 기관, 축제 등 어떤 행사든 맞춤형 프로그램을 제안해 드립니다."
        buttonText="공연 예약하기"
      />
    </>
  );
}
