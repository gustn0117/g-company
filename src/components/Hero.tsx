"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const heroImages = [
  { src: "/images/the-painting-photo.png", alt: "더 페인팅 공연 현장" },
  { src: "/images/2.png", alt: "관객과 함께하는 지컴퍼니" },
  { src: "/images/gallery-002.png", alt: "더 페인팅 전체 캐스트" },
  { src: "/images/gallery-007.png", alt: "블루 조명 속 무대" },
  { src: "/images/gallery-019.png", alt: "배우들의 열연" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Images Slideshow */}
      {heroImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-center"
            priority={index === 0}
            quality={90}
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-white/80 font-medium">
              찾아가는 뮤지컬 공연
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight animate-fade-in-up delay-100">
            <span className="block">공연으로</span>
            <span className="block mt-2 md:mt-3">
              <span className="text-accent">특별한 순간</span>을 만듭니다.
            </span>
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

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 animate-fade-in delay-500">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-accent"
                  : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`슬라이드 ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
