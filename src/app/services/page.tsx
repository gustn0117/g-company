"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    number: "01",
    title: "학교 방문 공연",
    subtitle: "School Visit",
    desc: "학교 강당, 체육관 등 교내 공간에서 진행되는 뮤지컬 공연. 학생들의 눈높이에 맞춘 교육적 콘텐츠와 무대 예술의 감동을 동시에 전달합니다.",
    features: ["교내 맞춤 무대 설치", "학년별 맞춤 콘텐츠", "사전 협의 및 리허설"],
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    number: "02",
    title: "기관·단체 공연",
    subtitle: "Organization",
    desc: "복지관, 문화센터, 공공기관 등 다양한 단체를 위한 맞춤형 공연 서비스. 기관의 행사 목적과 대상에 맞게 프로그램을 구성합니다.",
    features: ["기관 행사 연계 가능", "다양한 관객층 대응", "행사 기획 컨설팅"],
    bgColor: "bg-gray-warm",
    textColor: "text-black",
  },
  {
    number: "03",
    title: "축제·이벤트 공연",
    subtitle: "Festival & Event",
    desc: "지역 축제, 학교 축제, 기업 행사 등 야외·특설 무대에서의 대규모 공연. 행사의 하이라이트를 장식할 화려한 뮤지컬 무대를 제공합니다.",
    features: ["야외 무대 설치 가능", "대규모 관객 대응", "축제 프로그램 연계"],
    bgColor: "bg-white",
    textColor: "text-black",
  },
];

const process = [
  { step: "01", title: "상담 & 문의", desc: "공연 일정, 장소, 대상 등 상세 상담" },
  { step: "02", title: "프로그램 기획", desc: "맞춤형 공연 프로그램 구성 및 제안" },
  { step: "03", title: "무대 설치", desc: "현장 방문 후 무대·음향·조명 셋업" },
  { step: "04", title: "공연 진행", desc: "전문 배우진의 감동적인 뮤지컬 공연" },
];

export default function ServicesPage() {
  const cardsSection = useInView();
  const processSection = useInView();

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

      {/* Service Cards */}
      <section ref={cardsSection.ref} className="py-28 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.number}
                className={`${service.bgColor} rounded-3xl p-8 md:p-10 transition-all duration-700 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 ${
                  cardsSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                <span className="text-6xl font-black text-accent opacity-30">
                  {service.number}
                </span>
                <p
                  className={`text-xs font-bold tracking-widest uppercase mt-4 ${
                    service.bgColor === "bg-black"
                      ? "text-white/50"
                      : "text-gray-400"
                  }`}
                >
                  {service.subtitle}
                </p>
                <h3
                  className={`text-2xl font-black mt-2 ${service.textColor}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mt-4 text-[15px] leading-relaxed ${
                    service.bgColor === "bg-black"
                      ? "text-white/60"
                      : "text-gray-500"
                  }`}
                >
                  {service.desc}
                </p>

                <div className="mt-8 space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span
                        className={`text-sm font-medium ${
                          service.bgColor === "bg-black"
                            ? "text-white/80"
                            : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 mt-8 text-sm font-bold transition-colors ${
                    service.bgColor === "bg-black"
                      ? "text-accent hover:text-accent-light"
                      : "text-accent hover:text-black"
                  }`}
                >
                  공연 문의하기
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section ref={processSection.ref} className="py-28 md:py-36 bg-gray-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {process.map((item, i) => (
              <div
                key={item.step}
                className={`text-center relative transition-all duration-700 ${
                  processSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                <div className="w-14 h-14 bg-black text-white rounded-2xl flex items-center justify-center mx-auto text-lg font-black">
                  {item.step}
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+35px)] w-[calc(100%-70px)] h-px bg-gray-300" />
                )}
                <h4 className="mt-4 font-bold text-black">{item.title}</h4>
                <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <div
            className={`text-center mt-16 transition-all duration-700 delay-500 ${
              processSection.inView ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all duration-300 group"
            >
              공연 상담 신청하기
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
