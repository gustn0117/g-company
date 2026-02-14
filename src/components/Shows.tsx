"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

const shows = [
  {
    title: "키키키의 안전생활백서",
    slug: "kikiki-safety",
    genre: "안전교육 창작뮤지컬",
    audience: "7세 이상 (유아·어린이)",
    duration: "45분",
    desc: "K510 행성의 키키키와 지구 친구 비상구가 함께 떠나는 안전 모험! 즐거운 노래와 상황극으로 배우는 생활 속 안전 뮤지컬.",
    gradient: "from-[#3B5878] to-[#1E3450]",
    tag: "안전교육",
    poster: "/images/키키키 세로.png",
  },
  {
    title: "2084 지구난민",
    slug: "earth-refugee-2084",
    genre: "환경 창작낭독뮤지컬",
    audience: "청소년·일반",
    duration: "90분",
    desc: "황폐해진 2084년 미래 지구에서 생존을 위해 지구를 떠나는 과정을 통해, 기후 위기의 현실과 인간의 책임을 질문하는 창작뮤지컬.",
    gradient: "from-[#2D3654] to-[#151D30]",
    tag: "환경",
    poster: "/images/2084 지구난민 포스터 세로.png",
  },
  {
    title: "더 페인팅",
    slug: "the-painting",
    genre: "기업가정신교육 뮤지컬",
    audience: "8세 이상",
    duration: "80분",
    desc: "체코 프라하에서의 실화를 바탕으로 한 창작 뮤지컬. 도전과 실패, 그리고 다시 일어서는 기업가정신을 무대 위에서 감동적으로 전달합니다.",
    gradient: "from-red-900 to-rose-900",
    tag: "기업가정신",
    poster: "/images/더페인팅 포스터1.png",
  },
];

export default function Shows() {
  const { ref, inView } = useInView();

  return (
    <section
      id="shows"
      className="py-28 md:py-36 bg-black text-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Our Shows
            </p>
            <h2 className="text-4xl md:text-5xl font-black">
              <span className="block text-accent">대표 작품</span>
              <span className="block mt-2 md:mt-3">
                교육과 감동이 만나는 무대
              </span>
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-white/50 text-lg max-w-md">
            교육적 메시지와 예술적 감동이 어우러진 지컴퍼니만의 특별한 뮤지컬
            라인업
          </p>
        </div>

        {/* Show cards */}
        <div className="space-y-6">
          {shows.map((show, index) => (
            <div
              key={show.title}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <div
                className={`bg-gradient-to-br ${show.gradient} grid md:grid-cols-5 min-h-[320px] relative overflow-hidden`}
              >
                {/* Poster background overlay */}
                <div className="absolute inset-0">
                  <Image
                    src={show.poster}
                    alt={`${show.title} 포스터`}
                    fill
                    className="object-cover opacity-20"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                </div>

                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                {/* Content area */}
                <div className="relative md:col-span-3 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    {/* Tag */}
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                      {show.tag}
                    </span>

                    {/* Title & Genre */}
                    <h3 className="text-3xl md:text-4xl font-black mt-6 group-hover:text-accent transition-colors">
                      {show.title}
                    </h3>
                    <p className="text-white/60 font-medium mt-2">
                      {show.genre}
                    </p>
                  </div>

                  <div className="mt-6">
                    <p className="text-white/70 text-[15px] leading-relaxed max-w-xl">
                      {show.desc}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-6 mt-6">
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-white/40"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                          />
                        </svg>
                        <span className="text-sm text-white/60">
                          {show.audience}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-white/40"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-sm text-white/60">
                          {show.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons area */}
                <div className="relative md:col-span-2 p-8 md:p-10 flex flex-col justify-end md:justify-center md:items-end">
                  <div className="flex flex-col sm:flex-row md:flex-col gap-4">
                    <Link
                      href={`/shows/${show.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black text-sm font-bold rounded-full hover:bg-accent hover:text-white transition-all group/btn"
                    >
                      상세 보기
                      <svg
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
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
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white text-sm font-bold rounded-full hover:bg-white/10 transition-all group/btn"
                    >
                      문의하기
                      <svg
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
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
              </div>
            </div>
          ))}
        </div>

        {/* More info */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-white/40 text-sm">
            * 공연 내용 및 시간은 기관의 요청에 따라 조정 가능합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
