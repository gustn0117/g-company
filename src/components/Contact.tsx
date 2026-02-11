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

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="py-28 md:py-36 bg-gray-warm" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20">
          {/* Left - Info */}
          <div
            className={`transition-all duration-700 ${
              inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
              Contact Us
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">
              공연이 필요하신가요?
              <br />
              <span className="text-accent">지금 문의</span>하세요.
            </h2>
            <p className="mt-6 text-gray-500 text-lg leading-relaxed">
              원하시는 공연 일정, 장소, 대상 인원 등을 알려주시면
              <br className="hidden md:block" />
              맞춤형 프로그램을 제안해 드립니다.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">전화 문의</p>
                  <p className="text-xl font-black text-black">
                    02-0000-0000
                  </p>
                  <p className="text-sm text-gray-400">
                    평일 09:00 ~ 18:00 상담 가능
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">
                    이메일 문의
                  </p>
                  <p className="text-xl font-black text-black">
                    info@gcompany.co.kr
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">오시는 길</p>
                  <p className="text-lg font-bold text-black">
                    서울특별시 OO구 OO로 00길 00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">
              <h3 className="text-xl font-black text-black mb-6">
                공연 문의하기
              </h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      담당자명
                    </label>
                    <input
                      type="text"
                      placeholder="홍길동"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-sm focus:ring-2 focus:ring-accent focus:bg-white transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      연락처
                    </label>
                    <input
                      type="tel"
                      placeholder="010-0000-0000"
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-sm focus:ring-2 focus:ring-accent focus:bg-white transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    기관/학교명
                  </label>
                  <input
                    type="text"
                    placeholder="OO중학교"
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-sm focus:ring-2 focus:ring-accent focus:bg-white transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    희망 공연 일자
                  </label>
                  <input
                    type="text"
                    placeholder="2026년 O월 O일"
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-sm focus:ring-2 focus:ring-accent focus:bg-white transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    문의 내용
                  </label>
                  <textarea
                    rows={4}
                    placeholder="공연 대상, 인원, 장소 등 자세한 내용을 적어주세요."
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-sm focus:ring-2 focus:ring-accent focus:bg-white transition-all outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors"
                >
                  문의 보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
