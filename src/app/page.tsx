"use client";

import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import { useInView } from "@/hooks/useInView";

/* ---------- SVG Icons for Services ---------- */
function SchoolIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
      />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      />
    </svg>
  );
}

const serviceIcons = [SchoolIcon, BuildingIcon, SparklesIcon];

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
  const reviewsSection = useInView();
  const ctaSection = useInView(0.3);

  return (
    <>
      <Hero />

      {/* ---------- Services Preview ---------- */}
      <section
        ref={servicesSection.ref}
        className="py-32 md:py-40 bg-white relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/[0.03] rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.02] rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div
            className={`flex flex-col md:flex-row md:items-end md:justify-between mb-20 transition-all duration-700 ${
              servicesSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
                Our Services
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-black leading-tight">
                <span className="block">찾아가는 공연,</span>
                <span className="block mt-2 md:mt-3">
                  이렇게 <span className="text-accent">진행</span>됩니다.
                </span>
              </h2>
            </div>
            <Link
              href="/services"
              className="mt-8 md:mt-0 inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all group"
            >
              자세히 보기
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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

          <div className="grid md:grid-cols-3 gap-8">
            {servicesPreview.map((s, i) => {
              const IconComponent = serviceIcons[i];
              return (
                <Link
                  key={s.number}
                  href="/services"
                  className={`group relative ${s.bgColor} rounded-3xl p-10 md:p-12 border border-gray-100 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] hover:-translate-y-3 transition-all duration-700 block overflow-hidden ${
                    servicesSection.inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${i * 150 + 200}ms` }}
                >
                  {/* Gradient accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Background glow */}
                  <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent/0 group-hover:bg-accent/5 rounded-full blur-3xl transition-all duration-700" />

                  <div className="relative">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 ${
                        s.bgColor === "bg-black"
                          ? "bg-white/10 group-hover:bg-accent/20"
                          : "bg-black/5 group-hover:bg-accent/10"
                      }`}
                    >
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>

                    {/* Number watermark */}
                    <span className="absolute top-0 right-0 text-7xl font-black text-accent opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-500 select-none">
                      {s.number}
                    </span>

                    <p
                      className={`text-xs font-bold tracking-widest uppercase ${
                        s.bgColor === "bg-black"
                          ? "text-white/40"
                          : "text-gray-400"
                      }`}
                    >
                      {s.subtitle}
                    </p>
                    <h3
                      className={`text-2xl md:text-3xl font-black mt-3 ${s.textColor}`}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={`mt-5 text-[15px] leading-relaxed ${
                        s.bgColor === "bg-black"
                          ? "text-white/55"
                          : "text-gray-500"
                      }`}
                    >
                      {s.desc}
                    </p>

                    {/* Hover arrow */}
                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-accent">
                      자세히 보기
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Photo Gallery ---------- */}
      <section className="py-20 md:py-28 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Gallery
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white">
              무대 위의 <span className="text-accent">순간들</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { src: "/images/gallery-002.png", alt: "전체 캐스트" },
              { src: "/images/gallery-003.png", alt: "솔로 장면" },
              { src: "/images/gallery-006.png", alt: "감동적인 장면" },
              { src: "/images/gallery-007.png", alt: "블루 조명" },
              { src: "/images/gallery-008.png", alt: "레인보우 무대" },
              { src: "/images/gallery-010.png", alt: "두 배우" },
              { src: "/images/gallery-019.png", alt: "역동적인 장면" },
              { src: "/images/gallery-023.png", alt: "코미디 장면" },
            ].map((img, i) => (
              <div
                key={i}
                className="relative aspect-[3/2] rounded-2xl overflow-hidden group cursor-pointer"
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

      {/* ---------- Section Divider ---------- */}
      <div className="relative h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      {/* ---------- Reviews Preview ---------- */}
      <section
        ref={reviewsSection.ref}
        className="py-32 md:py-40 bg-gray-warm relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div
            className={`flex flex-col md:flex-row md:items-end md:justify-between mb-20 transition-all duration-700 ${
              reviewsSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
                Reviews
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-black leading-tight">
                <span className="block">공연을 경험한</span>
                <span className="block mt-2 md:mt-3">
                  분들의 <span className="text-accent">생생한 후기</span>
                </span>
              </h2>
            </div>
            <Link
              href="/reviews"
              className="mt-8 md:mt-0 inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all group"
            >
              후기 더 보기
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div
                key={review.name}
                className={`group relative bg-white rounded-3xl p-10 md:p-12 transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 overflow-hidden ${
                  reviewsSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                {/* Accent top line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Large decorative quote */}
                <div className="absolute -top-4 -left-2 text-accent/[0.06] text-[140px] font-serif leading-none pointer-events-none select-none group-hover:text-accent/[0.12] transition-colors duration-700">
                  &ldquo;
                </div>

                <div className="relative">
                  {/* Stars */}
                  <div className="flex gap-1.5">
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

                  {/* Quote */}
                  <p className="mt-8 text-gray-600 text-lg leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-0.5 bg-accent/30 mt-10 mb-8 rounded-full group-hover:w-20 transition-all duration-500" />

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-black text-lg">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-black text-lg">
                        {review.name}
                      </p>
                      <p className="text-sm text-gray-400 mt-0.5">
                        {review.org}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section
        ref={ctaSection.ref}
        className="relative py-32 md:py-40 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/3.png"
            alt=""
            fill
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60" />
        </div>

        <div
          className={`relative max-w-4xl mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${
            ctaSection.inView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-16 h-px bg-accent/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
            <div className="w-16 h-px bg-accent/40" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            <span className="block">공연이 필요하신가요?</span>
            <span className="block mt-3 md:mt-4">
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #D4A853, #F5E6C8, #D4A853)",
                }}
              >
                지금 문의
              </span>
              <span className="text-white">하세요.</span>
            </span>
          </h2>
          <p className="mt-8 text-white/50 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            원하시는 공연 일정, 장소, 대상 인원 등을 알려주시면 맞춤형 프로그램을
            제안해 드립니다.
          </p>
          <div
            className={`mt-12 flex flex-col sm:flex-row gap-5 justify-center transition-all duration-700 delay-200 ${
              ctaSection.inView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-lg rounded-full transition-all duration-300 overflow-hidden shadow-[0_0_30px_rgba(212,168,83,0.3)]"
              style={{
                background:
                  "linear-gradient(135deg, #D4A853 0%, #F5E6C8 50%, #D4A853 100%)",
                backgroundSize: "200% 200%",
              }}
            >
              <span className="relative z-10 text-black flex items-center">
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
              </span>
            </Link>
            <Link
              href="/shows"
              className="inline-flex items-center justify-center px-10 py-5 border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              작품 둘러보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
