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

const reviews = [
  {
    name: "김OO 선생님",
    org: "서울 OO초등학교",
    text: "아이들이 키키키 캐릭터를 정말 좋아했어요. 안전교육이 이렇게 재미있을 수 있다니! 공연 후에도 안전 수칙을 노래로 흥얼거리더라고요.",
    stars: 5,
  },
  {
    name: "박OO 담당자",
    org: "OO구 청소년수련관",
    text: "2084 지구난민 공연을 보고 학생들의 환경 의식이 확 달라졌습니다. 배우분들의 열연에 아이들이 완전히 몰입했어요.",
    stars: 5,
  },
  {
    name: "이OO 선생님",
    org: "경기 OO고등학교",
    text: "더 페인팅 공연이 학생들에게 큰 동기부여가 되었습니다. 기업가정신을 뮤지컬로 배울 수 있어 교육적으로도 매우 만족스러웠습니다.",
    stars: 5,
  },
];

export default function Reviews() {
  const { ref, inView } = useInView();

  return (
    <section className="py-28 md:py-36 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
            Reviews
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-black">
            <span className="block">공연을 경험한 분들의</span>
            <span className="block mt-2 md:mt-3">
              <span className="text-accent">생생한 후기</span>
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className={`bg-gray-warm rounded-3xl p-8 md:p-10 transition-all duration-700 hover:shadow-lg ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="mt-6 text-gray-600 text-[15px] leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
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
  );
}
