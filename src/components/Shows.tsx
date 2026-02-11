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

const shows = [
  {
    title: "별빛 소나타",
    genre: "성장 뮤지컬",
    audience: "중·고등학생",
    duration: "70분",
    desc: "꿈을 향해 나아가는 청소년들의 이야기. 우정과 도전, 그리고 성장의 감동을 담은 뮤지컬.",
    gradient: "from-violet-900 to-indigo-900",
    tag: "인기",
  },
  {
    title: "해피 투게더",
    genre: "학교폭력예방 뮤지컬",
    audience: "초·중학생",
    duration: "60분",
    desc: "서로 다른 우리가 함께 만들어가는 행복. 학교폭력 예방 메시지를 재미있고 감동적으로 전달합니다.",
    gradient: "from-emerald-900 to-teal-900",
    tag: "교육",
  },
  {
    title: "드림 스테이지",
    genre: "진로탐색 뮤지컬",
    audience: "중·고등학생",
    duration: "65분",
    desc: "다양한 직업의 세계를 뮤지컬로 만나는 진로 탐색 공연. 꿈을 찾는 여정에 함께합니다.",
    gradient: "from-amber-900 to-orange-900",
    tag: "진로",
  },
  {
    title: "우리들의 시간",
    genre: "인성교육 뮤지컬",
    audience: "초등학생",
    duration: "50분",
    desc: "배려와 소통의 가치를 노래하는 인성교육 뮤지컬. 어린이 눈높이에 맞춘 참여형 공연입니다.",
    gradient: "from-rose-900 to-pink-900",
    tag: "NEW",
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
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              지컴퍼니의
              <br />
              <span className="text-accent">대표 작품</span>을 소개합니다.
            </h2>
          </div>
          <p className="mt-6 md:mt-0 text-white/50 text-lg max-w-md">
            교육적 메시지와 예술적 감동이 어우러진 지컴퍼니만의 특별한 뮤지컬
            라인업
          </p>
        </div>

        {/* Show cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {shows.map((show, index) => (
            <div
              key={show.title}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div
                className={`bg-gradient-to-br ${show.gradient} p-8 md:p-10 min-h-[320px] flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative">
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

                <div className="relative mt-8">
                  <p className="text-white/70 text-[15px] leading-relaxed">
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
