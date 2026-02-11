"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

/* ---------- CountUp ---------- */
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

/* ---------- Data ---------- */
const servicesPreview = [
  {
    number: "01",
    title: "학교 방문 공연",
    subtitle: "School Visit",
    desc: "학교 강당, 체육관 등 교내 공간에서 진행되는 교육적 뮤지컬 공연",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    number: "02",
    title: "기관·단체 공연",
    subtitle: "Organization",
    desc: "복지관, 문화센터, 공공기관을 위한 맞춤형 공연 서비스",
    bgColor: "bg-gray-warm",
    textColor: "text-black",
  },
  {
    number: "03",
    title: "축제·이벤트 공연",
    subtitle: "Festival & Event",
    desc: "야외·특설 무대에서의 대규모 축제 공연",
    bgColor: "bg-white",
    textColor: "text-black",
  },
];

const stats = [
  { number: 300, suffix: "+", label: "누적 공연 횟수" },
  { number: 150000, suffix: "+", label: "누적 관객 수" },
  { number: 200, suffix: "+", label: "협력 기관 수" },
  { number: 98, suffix: "%", label: "만족도" },
];

const reviews = [
  {
    name: "김OO 선생님",
    org: "서울 OO중학교",
    text: "학생들이 정말 즐거워했습니다. 공연 후에도 한참 동안 노래를 흥얼거리더라고요.",
    stars: 5,
  },
  {
    name: "박OO 담당자",
    org: "OO구 청소년수련관",
    text: "배우분들의 열정적인 공연에 아이들이 완전히 몰입했습니다. 매우 만족스러운 프로그램이었습니다.",
    stars: 5,
  },
  {
    name: "이OO 선생님",
    org: "경기 OO고등학교",
    text: "공연 퀄리티가 기대 이상이었고, 다음에도 꼭 다시 초청하고 싶습니다.",
    stars: 5,
  },
];

export default function Home() {
  const servicesSection = useInView();
  const statsSection = useInView(0.3);
  const reviewsSection = useInView();

  return (
    <>
      <Hero />

      {/* ---------- Services Preview ---------- */}
      <section ref={servicesSection.ref} className="py-28 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`flex flex-col md:flex-row md:items-end md:justify-between mb-16 transition-all duration-700 ${
              servicesSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
                Our Services
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-black">
                찾아가는 공연,
                <br />
                이렇게 진행됩니다.
              </h2>
            </div>
            <Link
              href="/services"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all"
            >
              자세히 보기
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {servicesPreview.map((s, i) => (
              <Link
                key={s.number}
                href="/services"
                className={`${s.bgColor} rounded-3xl p-8 md:p-10 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-700 block ${
                  servicesSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                <span className="text-6xl font-black text-accent opacity-30">
                  {s.number}
                </span>
                <p
                  className={`text-xs font-bold tracking-widest uppercase mt-4 ${
                    s.bgColor === "bg-black" ? "text-white/50" : "text-gray-400"
                  }`}
                >
                  {s.subtitle}
                </p>
                <h3 className={`text-2xl font-black mt-2 ${s.textColor}`}>
                  {s.title}
                </h3>
                <p
                  className={`mt-4 text-[15px] leading-relaxed ${
                    s.bgColor === "bg-black" ? "text-white/60" : "text-gray-500"
                  }`}
                >
                  {s.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section
        ref={statsSection.ref}
        className="py-24 md:py-32 bg-gray-warm relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-black/3 rounded-full blur-3xl" />

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
                <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
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
                </div>
              </div>
            ))}
          </div>

          <div
            className={`text-center mt-12 transition-all duration-700 delay-500 ${
              statsSection.inView ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all"
            >
              회사 소개 더 보기
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Reviews Preview ---------- */}
      <section ref={reviewsSection.ref} className="py-28 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`flex flex-col md:flex-row md:items-end md:justify-between mb-16 transition-all duration-700 ${
              reviewsSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
                Reviews
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-black">
                공연을 경험한 분들의
                <br />
                <span className="text-accent">생생한 후기</span>
              </h2>
            </div>
            <Link
              href="/reviews"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all"
            >
              후기 더 보기
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={review.name}
                className={`bg-gray-warm rounded-3xl p-8 md:p-10 transition-all duration-700 hover:shadow-lg ${
                  reviewsSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                <div className="flex gap-1">
                  {Array.from({ length: review.stars }).map((_, j) => (
                    <svg
                      key={j}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-6 text-gray-600 text-[15px] leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-black">{review.name}</p>
                    <p className="text-sm text-gray-400">{review.org}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-20 md:py-28 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            공연이 필요하신가요?
            <br />
            <span className="text-accent">지금 문의</span>하세요.
          </h2>
          <p className="mt-6 text-white/50 text-lg max-w-xl mx-auto">
            원하시는 공연 일정, 장소, 대상 인원 등을 알려주시면 맞춤형 프로그램을
            제안해 드립니다.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-accent transition-all duration-300 group"
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
              작품 둘러보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
