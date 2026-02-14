"use client";

import Link from "next/link";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  titleAfter?: string;
  description: string;
  breadcrumb: string;
}

export default function PageHero({
  eyebrow,
  title,
  highlight,
  titleAfter,
  description,
  breadcrumb,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-white/3 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/40 mb-8 animate-fade-in-up">
          <Link href="/" className="hover:text-accent transition-colors">
            홈
          </Link>
          <span>/</span>
          <span className="text-white/70">{breadcrumb}</span>
        </div>

        <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4 animate-fade-in-up">
          {eyebrow}
        </p>
        <h1 className="text-4xl md:text-6xl font-black animate-fade-in-up delay-100">
          <span className="block">{title}</span>
          {highlight && (
            <span className="block mt-2 md:mt-3">
              <span className="text-accent">{highlight}</span>
              {titleAfter && titleAfter}
            </span>
          )}
        </h1>
        <p className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
          {description}
        </p>
      </div>
    </section>
  );
}
