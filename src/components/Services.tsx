"use client";

import { useEffect, useRef, useState } from "react";

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

const services = [
  {
    number: "01",
    title: "학교 방문 공연",
    subtitle: "School Visit",
    desc: "학교 강당, 체육관 등 교내 공간에서 진행되는 뮤지컬 공연. 학생들의 눈높이에 맞춘 교육적 콘텐츠와 무대 예술의 감동을 동시에 전달합니다.",
    features: ["교내 맞춤 무대 설치", "학년별 맞춤 콘텐츠", "사전 협의 및 리허설"],
    bgColor: "bg-black",
    textColor: "text-white",
    accentColor: "text-accent",
  },
  {
    number: "02",
    title: "기관·단체 공연",
    subtitle: "Organization",
    desc: "복지관, 문화센터, 공공기관 등 다양한 단체를 위한 맞춤형 공연 서비스. 기관의 행사 목적과 대상에 맞게 프로그램을 구성합니다.",
    features: ["기관 행사 연계 가능", "다양한 관객층 대응", "행사 기획 컨설팅"],
    bgColor: "bg-gray-warm",
    textColor: "text-black",
    accentColor: "text-accent",
  },
  {
    number: "03",
    title: "축제·이벤트 공연",
    subtitle: "Festival & Event",
    desc: "지역 축제, 학교 축제, 기업 행사 등 야외·특설 무대에서의 대규모 공연. 행사의 하이라이트를 장식할 화려한 뮤지컬 무대를 제공합니다.",
    features: ["야외 무대 설치 가능", "대규모 관객 대응", "축제 프로그램 연계"],
    bgColor: "bg-white",
    textColor: "text-black",
    accentColor: "text-accent",
  },
];

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="py-28 md:py-36 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            찾아가는 공연,
            <br />
            이렇게 진행됩니다.
          </h2>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
            공연이 필요한 곳이라면 전국 어디든 찾아갑니다.
            <br />
            무대 설치부터 철수까지, 모든 과정을 지컴퍼니가 책임집니다.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`${service.bgColor} rounded-3xl p-8 md:p-10 transition-all duration-700 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <span
                className={`text-6xl font-black ${service.accentColor} opacity-30`}
              >
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
            </div>
          ))}
        </div>

        {/* Process flow */}
        <div
          className={`mt-20 bg-gray-warm rounded-3xl p-8 md:p-12 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl font-black text-center mb-10">
            공연 진행 프로세스
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {[
              {
                step: "01",
                title: "상담 & 문의",
                desc: "공연 일정, 장소, 대상 등 상세 상담",
              },
              {
                step: "02",
                title: "프로그램 기획",
                desc: "맞춤형 공연 프로그램 구성 및 제안",
              },
              {
                step: "03",
                title: "무대 설치",
                desc: "현장 방문 후 무대·음향·조명 셋업",
              },
              {
                step: "04",
                title: "공연 진행",
                desc: "전문 배우진의 감동적인 뮤지컬 공연",
              },
            ].map((item, i) => (
              <div key={item.step} className="text-center relative">
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
        </div>
      </div>
    </section>
  );
}
