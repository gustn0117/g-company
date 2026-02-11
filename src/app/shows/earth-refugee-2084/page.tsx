"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import CTABanner from "@/components/CTABanner";

const keywords = [
  { icon: "🌍", title: "기후위기", desc: "전 세계적으로 부상하는 기후난민 문제를 직시합니다" },
  { icon: "🚀", title: "SF 상상력", desc: "2084년 미래 지구를 배경으로 한 SF 서사" },
  { icon: "📖", title: "입체낭독극", desc: "독창적 형식으로 관객의 공감과 상상력을 자극" },
  { icon: "🏫", title: "교육 연계", desc: "자유학기제·환경교육주간·진로체험과 연계 가능" },
  { icon: "🏆", title: "수상작 원작", desc: "2023 초록별 SF환경동화상 우수상 수상작" },
  { icon: "🌱", title: "탄소중립", desc: "탄소중립 교육 콘텐츠로 활용 가능" },
];

const newsClippings = [
  {
    source: "중앙일보",
    title: "세계기상기구 '지난해 지구 온도 올라...기후난민 최다'",
    date: "2025.03.19",
  },
  {
    source: "연합뉴스",
    title: "아프리카 기후난민 - 2050년 10억 위협...우리 문제 된 지구촌 비극",
    date: "2025.06.20",
  },
  {
    source: "뉴스1",
    title: "이상기후로 떠나는 사람들...'기후난민 증가'",
    date: "2024.06.11",
  },
];

export default function EarthRefugee2084Page() {
  const overviewSection = useInView();
  const storySection = useInView();
  const keywordsSection = useInView();
  const reasonSection = useInView();
  const newsSection = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-slate-800 via-zinc-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
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
            <Link href="/" className="hover:text-accent transition-colors">홈</Link>
            <span>/</span>
            <Link href="/shows" className="hover:text-accent transition-colors">작품소개</Link>
            <span>/</span>
            <span className="text-white/70">2084 지구난민</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
                <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-300 text-xs font-bold rounded-full">
                  환경
                </span>
                <span className="inline-block px-3 py-1 bg-white/10 text-white/70 text-xs font-bold rounded-full">
                  창작낭독뮤지컬
                </span>
                <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 text-xs font-bold rounded-full">
                  수상작 원작
                </span>
              </div>

              <p className="text-7xl md:text-8xl font-black text-white/10 leading-none animate-fade-in-up">
                2084
              </p>
              <h1 className="text-4xl md:text-6xl font-black leading-tight -mt-4 animate-fade-in-up delay-100">
                <span className="text-orange-400">지구</span>난민
              </h1>

              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-lg animate-fade-in-up delay-200">
                황폐해진 미래 지구에서 생존을 위해 지구를 떠나는 과정을 통해,
                기후 위기의 현실과 인간의 책임, 공동체의 윤리를 함께 질문합니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up delay-300">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-400 transition-all duration-300 group"
                >
                  공연 문의하기
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/shows"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  다른 작품 보기
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="animate-fade-in-up delay-200">
              <div className="aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <span className="text-8xl">🌍</span>
                  <p className="mt-4 text-white/40 text-sm font-medium">공연 포스터</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 공연 개요 */}
      <section ref={overviewSection.ref} className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`transition-all duration-700 ${
              overviewSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">Performance Info</p>
            <h2 className="text-3xl md:text-4xl font-black text-black mb-12">공연 개요</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className={`bg-gray-warm rounded-3xl p-8 md:p-10 transition-all duration-700 delay-100 ${
                overviewSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-6">
                {[
                  { label: "작품명", value: "2084 지구난민" },
                  { label: "장르", value: "창작낭독뮤지컬 (환경·기후)" },
                  { label: "러닝타임", value: "90분" },
                  { label: "관람대상", value: "청소년·일반" },
                  { label: "공연형태", value: "고정형 극장 무대 공연" },
                  { label: "원작", value: "2023 초록별 SF환경동화상 우수상 수상작" },
                  { label: "기획·제작", value: "지컴퍼니" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="w-28 text-sm font-bold text-gray-400 flex-shrink-0">{item.label}</span>
                    <span className="text-[15px] font-semibold text-black">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 기획의도 */}
            <div
              className={`bg-gray-warm rounded-3xl p-8 md:p-10 transition-all duration-700 delay-200 ${
                overviewSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-xl font-black text-black mb-6">기획의도</h3>
              <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
                <p>
                  4차 산업 시대의 도래와 전 세계적인 산업 고도화는 지구 환경을 빠르게 파괴하고 있으며,
                  그 결과 &lsquo;기후난민&rsquo;이라는 새로운 인도주의적 문제가 전 세계적으로 부상하고 있습니다.
                </p>
                <p>
                  이 공연은 단순한 메시지 전달을 넘어 <strong className="text-black">입체낭독극</strong>이라는
                  독창적인 형식을 통해 스스로 공감하고, 상상하며, 기후 문제를
                  &lsquo;자신의 이야기&rsquo;로 받아들이게 만드는 예술교육형 공연입니다.
                </p>
                <div className="bg-white rounded-2xl p-6 mt-4">
                  <p className="text-black font-bold italic text-center">
                    &ldquo;지구를 떠나야 하는 이유는 무엇이었을까?&rdquo;
                    <br />
                    그리고, &ldquo;우리는 어떤 선택을 해야 할까?&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 시놉시스 */}
      <section ref={storySection.ref} className="py-20 md:py-28 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`max-w-3xl mx-auto transition-all duration-700 ${
              storySection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-orange-400 font-bold text-sm tracking-widest uppercase mb-4 text-center">Synopsis</p>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-10">시놉시스</h2>

            <div className="space-y-6 text-white/70 text-[16px] leading-relaxed">
              <p>
                <span className="text-orange-400 font-black text-xl">2084년,</span> 지구는 뒤죽박죽인 날씨와 모래비,
                전염병으로 황폐해졌다.
              </p>
              <p>
                외출금지를 알리는 고장난 &lsquo;날씨기계&rsquo;의 경고방송만이 울려퍼지는 가운데,
                사람들은 지구를 떠나기 시작하고, 과학자와 정치인, 대통령마저 사라진다.
              </p>
              <p>
                오염된 환경을 되돌리려는 노력 없이 날씨만 조종하려 한 인간의 오만은 결국 파국을 불러온다.
              </p>
              <p>
                그 속에서도 <strong className="text-white">강산의 가족</strong>은 지구에 남아 생존을 이어간다.
              </p>
              <p>
                어느 날, 지구 멸망의 신호가 감지되면서,
                가족은 고물상에서 얻은 낡은 우주선 <strong className="text-white">&lsquo;이카로스&rsquo;</strong>를
                타고 지구의 위성, 달로 향할 결심을 한다.
              </p>
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center my-8">
                <p className="text-xl md:text-2xl font-black text-orange-400 leading-relaxed">
                  그리고 그 여정 속에서 그들은 깨닫기 시작한다.
                  <br />
                  진짜 떠나야 할 것이 &lsquo;지구&rsquo;가 아니라
                  <br />
                  <span className="text-white">우리 안의 무책임한 선택들</span>이었음을.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 키워드 */}
      <section ref={keywordsSection.ref} className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              keywordsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">Keywords</p>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              공연 <span className="text-accent">핵심 키워드</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {keywords.map((item, i) => (
              <div
                key={item.title}
                className={`bg-gray-warm rounded-2xl p-6 md:p-8 text-center hover:shadow-lg transition-all duration-700 ${
                  keywordsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80 + 200}ms` }}
              >
                <span className="text-4xl">{item.icon}</span>
                <h3 className="mt-4 font-black text-black">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기후난민 이슈 */}
      <section ref={newsSection.ref} className="py-20 md:py-28 bg-gray-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              newsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">Climate Crisis</p>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              왜 <span className="text-accent">지금</span> 이 공연인가
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {newsClippings.map((article, i) => (
              <div
                key={article.title}
                className={`bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-700 ${
                  newsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-gray-warm text-xs font-bold text-gray-600 rounded-full">
                    {article.source}
                  </span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <h3 className="font-bold text-black text-sm leading-snug">{article.title}</h3>
              </div>
            ))}
          </div>

          <div
            className={`bg-white rounded-3xl p-8 md:p-10 max-w-3xl mx-auto transition-all duration-700 delay-300 ${
              newsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
              <p>
                <strong className="text-black">&lsquo;기후난민&rsquo;</strong>은 생태계 파괴로 인해
                삶의 터전을 잃고 떠날 수밖에 없는 사람들을 말합니다.
                이미 2010년 기준 약 4,200만 명의 기후난민이 발생했으며,
                <strong className="text-black">2050년에는 10억 명</strong>에 이를 것으로 전망됩니다.
              </p>
              <p>
                2024년 기후위기는 새로운 정점에 도달했으며, 전 세계적으로 전례 없는 폭염과 홍수, 폭풍이 발생했습니다.
                80만 명 이상이 집을 잃고 강제 이주를 당했으며, 이는 2008년 기록 이래 연간 최다 인원을 기록했습니다.
              </p>
              <p className="font-bold text-black text-center pt-4">
                이것은 더 이상 먼 미래의 이야기가 아닙니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 공연 특징 */}
      <section ref={reasonSection.ref} className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              reasonSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-accent font-bold text-sm tracking-widest uppercase mb-4">Features</p>
            <h2 className="text-3xl md:text-4xl font-black text-black">
              공연 <span className="text-accent">특징</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "입체낭독극 형식",
                desc: "기후위기를 감성적 서사와 상상력으로 풀어낸 독창적 형식. 관객이 스스로 공감하고 상상하며 기후 문제를 자신의 이야기로 받아들이게 합니다.",
                icon: "🎭",
              },
              {
                title: "높은 무대 완성도",
                desc: "극장 무대 환경을 고려한 조명·음향·무대 연출. 전문 공연 제작 스태프가 참여하여 몰입감 높은 공연을 완성합니다.",
                icon: "✨",
              },
              {
                title: "교육 프로그램 연계",
                desc: "자유학기제, 환경교육주간, 진로체험과 연계 가능. 공연 이후 워크북, 학교 방문형 프로그램으로 지속적 교육 효과를 제공합니다.",
                icon: "📚",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`bg-gray-warm rounded-3xl p-8 md:p-10 hover:shadow-lg transition-all duration-700 ${
                  reasonSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                <span className="text-4xl">{item.icon}</span>
                <h3 className="text-xl font-black text-black mt-4">{item.title}</h3>
                <p className="mt-3 text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="기후위기를 예술로 경험하고 싶다면?"
        highlight="지금 문의"
        description="청소년과 시민이 함께 고민하는 환경 뮤지컬을 여러분의 지역에서 만나보세요."
        buttonText="공연 문의하기"
      />
    </>
  );
}
