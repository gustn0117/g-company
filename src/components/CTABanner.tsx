"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";

interface CTABannerProps {
  title?: string;
  highlight?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABanner({
  title = "공연이 필요하신가요?",
  highlight = "지금 문의",
  description = "원하시는 공연 일정, 장소, 대상 인원 등을 알려주시면 맞춤형 프로그램을 제안해 드립니다.",
  buttonText = "공연 문의하기",
  buttonHref = "/contact",
}: CTABannerProps) {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl" />
      </div>

      <div
        className={`relative max-w-4xl mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-black">
          <span className="block">{title}</span>
          <span className="block mt-2 md:mt-3">
            <span className="text-accent">{highlight}</span>하세요.
          </span>
        </h2>
        <p className="mt-8 text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-accent transition-all duration-300 group"
          >
            {buttonText}
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
  );
}
