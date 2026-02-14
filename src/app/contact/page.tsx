"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import { useInView } from "@/hooks/useInView";

export default function ContactPage() {
  const formSection = useInView();

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="공연이 필요하신가요?"
        highlight="지금 문의"
        titleAfter="하세요."
        description="원하시는 공연 일정, 장소, 대상 인원 등을 알려주시면 맞춤형 프로그램을 제안해 드립니다."
        breadcrumb="공연문의"
      />

      {/* Contact Section */}
      <section ref={formSection.ref} className="py-28 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20">
            {/* Left - Info */}
            <div
              className={`transition-all duration-700 ${
                formSection.inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
                Get in Touch
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-black">
                <span className="block">편하게</span>
                <span className="block mt-2 md:mt-3">
                  <span className="text-accent">연락</span>주세요.
                </span>
              </h2>
              <p className="mt-6 text-gray-500 text-lg leading-relaxed">
                전화, 이메일 등 편하신 방법으로 문의해 주시면
                <br className="hidden md:block" />
                빠르게 상담해 드리겠습니다.
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
                    <p className="text-sm text-gray-400 font-medium">
                      전화 문의
                    </p>
                    <p className="text-xl font-black text-black">
                      010-7132-0348
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
                      g_companyspace@naver.com
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
                    <p className="text-sm text-gray-400 font-medium">
                      오시는 길
                    </p>
                    <p className="text-lg font-bold text-black">
                      서울시 도봉구 방학로 3길 13 스페이스도모
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="mt-12 p-6 bg-gray-warm rounded-2xl">
                <p className="font-bold text-black text-sm mb-4">
                  문의 전에 확인해 보세요
                </p>
                <div className="space-y-3">
                  <Link
                    href="/services"
                    className="flex items-center justify-between group"
                  >
                    <span className="text-sm text-gray-600 group-hover:text-accent transition-colors">
                      공연 서비스 종류 보기
                    </span>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-accent transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/shows"
                    className="flex items-center justify-between group"
                  >
                    <span className="text-sm text-gray-600 group-hover:text-accent transition-colors">
                      작품 라인업 둘러보기
                    </span>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-accent transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/reviews"
                    className="flex items-center justify-between group"
                  >
                    <span className="text-sm text-gray-600 group-hover:text-accent transition-colors">
                      공연 후기 확인하기
                    </span>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-accent transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div
              className={`transition-all duration-700 delay-200 ${
                formSection.inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="bg-gray-warm rounded-3xl p-8 md:p-10 sticky top-28">
                <h3 className="text-xl font-black text-black mb-6">
                  공연 문의하기
                </h3>
                <form
                  className="space-y-5"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        담당자명
                      </label>
                      <input
                        type="text"
                        placeholder="홍길동"
                        className="w-full px-4 py-3 bg-white border-0 rounded-xl text-sm focus:ring-2 focus:ring-accent transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        연락처
                      </label>
                      <input
                        type="tel"
                        placeholder="010-0000-0000"
                        className="w-full px-4 py-3 bg-white border-0 rounded-xl text-sm focus:ring-2 focus:ring-accent transition-all outline-none"
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
                      className="w-full px-4 py-3 bg-white border-0 rounded-xl text-sm focus:ring-2 focus:ring-accent transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      관심 작품
                    </label>
                    <select className="w-full px-4 py-3 bg-white border-0 rounded-xl text-sm focus:ring-2 focus:ring-accent transition-all outline-none text-gray-500">
                      <option value="">선택해주세요</option>
                      <option value="키키키의 안전생활백서">키키키의 안전생활백서 (안전교육)</option>
                      <option value="2084 지구난민">2084 지구난민 (환경뮤지컬)</option>
                      <option value="더 페인팅">더 페인팅 (기업가정신)</option>
                      <option value="기타">기타 / 상담 후 결정</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      희망 공연 일자
                    </label>
                    <input
                      type="text"
                      placeholder="2026년 O월 O일"
                      className="w-full px-4 py-3 bg-white border-0 rounded-xl text-sm focus:ring-2 focus:ring-accent transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      문의 내용
                    </label>
                    <textarea
                      rows={4}
                      placeholder="공연 대상, 인원, 장소 등 자세한 내용을 적어주세요."
                      className="w-full px-4 py-3 bg-white border-0 rounded-xl text-sm focus:ring-2 focus:ring-accent transition-all outline-none resize-none"
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
    </>
  );
}
