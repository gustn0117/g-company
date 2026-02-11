"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/3 rounded-full blur-3xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-white/80 font-medium">
              찾아가는 뮤지컬 공연 전문
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight animate-fade-in-up delay-100">
            무대가
            <br />
            <span className="text-accent">여러분에게</span>
            <br />
            찾아갑니다.
          </h1>

          {/* Sub text */}
          <p className="mt-8 text-lg md:text-xl text-white/60 leading-relaxed max-w-xl animate-fade-in-up delay-200">
            학교, 기관, 축제 어디든 지컴퍼니가 직접 찾아가
            <br className="hidden md:block" />
            감동과 웃음이 가득한 뮤지컬 무대를 선사합니다.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in-up delay-300">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-accent hover:text-black transition-all duration-300 group"
            >
              공연 알아보기
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
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              공연 문의하기
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-500">
          <span className="text-xs text-white/40 tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
