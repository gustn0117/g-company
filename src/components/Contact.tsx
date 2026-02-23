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
  const [form, setForm] = useState({
    name: "",
    phone: "",
    organization: "",
    preferred_date: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitState("submitting");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitState("success");
        setForm({ name: "", phone: "", organization: "", preferred_date: "", message: "" });
      } else {
        setSubmitState("error");
      }
    } catch {
      setSubmitState("error");
    }
  };

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
            <h2 className="text-4xl md:text-5xl font-black text-black">
              <span className="block">공연이 필요하신가요?</span>
              <span className="block mt-2 md:mt-3">
                <span className="text-accent">지금 문의</span>하세요.
              </span>
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
                  <p className="text-sm text-gray-400 font-medium">오시는 길</p>
                  <p className="text-lg font-bold text-black">
                    서울시 도봉구 방학로 3길 13 스페이스도모
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
              {submitState === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-black text-black">문의가 접수되었습니다</h4>
                  <p className="mt-2 text-gray-500 text-sm">빠른 시일 내에 연락드리겠습니다.</p>
                  <button
                    onClick={() => setSubmitState("idle")}
                    className="mt-6 px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors text-sm"
                  >
                    추가 문의하기
                  </button>
                </div>
              ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      담당자명 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="홍길동"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-sm focus:ring-2 focus:ring-accent focus:bg-white transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      연락처 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="010-0000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
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
                    value={form.organization}
                    onChange={(e) => setForm({ ...form, organization: e.target.value })}
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
                    value={form.preferred_date}
                    onChange={(e) => setForm({ ...form, preferred_date: e.target.value })}
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
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-xl text-sm focus:ring-2 focus:ring-accent focus:bg-white transition-all outline-none resize-none"
                  />
                </div>

                {submitState === "error" && (
                  <p className="text-red-500 text-sm">전송에 실패했습니다. 다시 시도해주세요.</p>
                )}

                <button
                  type="submit"
                  disabled={submitState === "submitting"}
                  className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50"
                >
                  {submitState === "submitting" ? "전송 중..." : "문의 보내기"}
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
