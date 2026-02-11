"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.3) {
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

function CountUp({
  end,
  suffix = "",
  duration = 2000,
  start = false,
}: {
  end: number;
  suffix?: string;
  duration?: number;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  {
    number: 300,
    suffix: "+",
    label: "누적 공연 횟수",
    desc: "전국 곳곳에서 진행된 공연",
  },
  {
    number: 150000,
    suffix: "+",
    label: "누적 관객 수",
    desc: "감동을 함께 나눈 관객",
  },
  {
    number: 200,
    suffix: "+",
    label: "협력 기관 수",
    desc: "함께한 학교 및 기관",
  },
  {
    number: 98,
    suffix: "%",
    label: "만족도",
    desc: "공연 후 만족도 조사 기준",
  },
];

export default function Stats() {
  const { ref, inView } = useInView();

  return (
    <section className="py-24 md:py-32 bg-gray-warm relative overflow-hidden" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-black/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">
            Our Track Record
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-black">
            숫자로 보는 <span className="text-accent">지컴퍼니</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                <p className="text-4xl md:text-5xl font-black text-black">
                  <CountUp
                    end={stat.number}
                    suffix={stat.suffix}
                    start={inView}
                  />
                </p>
                <p className="mt-3 font-bold text-black text-lg">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-gray-400">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
