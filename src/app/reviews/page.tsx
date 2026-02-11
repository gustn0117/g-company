"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { useInView } from "@/hooks/useInView";

const reviews = [
  {
    name: "김OO 선생님",
    org: "서울 OO중학교",
    text: "학생들이 정말 즐거워했습니다. 공연 후에도 한참 동안 노래를 흥얼거리더라고요. 무대 설치부터 철수까지 깔끔하게 진행해주셔서 감사합니다.",
    stars: 5,
    show: "별빛 소나타",
  },
  {
    name: "박OO 담당자",
    org: "OO구 청소년수련관",
    text: "배우분들의 열정적인 공연에 아이들이 완전히 몰입했습니다. 교육적 메시지도 자연스럽게 전달되어 매우 만족스러운 프로그램이었습니다.",
    stars: 5,
    show: "해피 투게더",
  },
  {
    name: "이OO 선생님",
    org: "경기 OO고등학교",
    text: "진로 탐색 뮤지컬이 학생들에게 큰 동기부여가 되었습니다. 공연 퀄리티가 기대 이상이었고, 다음에도 꼭 다시 초청하고 싶습니다.",
    stars: 5,
    show: "드림 스테이지",
  },
  {
    name: "최OO 선생님",
    org: "인천 OO초등학교",
    text: "아이들이 공연 내내 함성을 지르며 즐거워했어요. 참여형 공연이라 집중도가 정말 높았고, 배우분들의 에너지가 대단했습니다.",
    stars: 5,
    show: "우리들의 시간",
  },
  {
    name: "정OO 팀장",
    org: "OO시 문화재단",
    text: "지역 축제 공연으로 초청했는데 시민들 반응이 폭발적이었습니다. 야외 무대 세팅부터 공연 퀄리티까지 모두 만족스러웠습니다.",
    stars: 5,
    show: "별빛 소나타",
  },
  {
    name: "한OO 선생님",
    org: "대전 OO중학교",
    text: "학교폭력 예방 교육을 이렇게 재미있게 할 수 있다니 놀라웠습니다. 학생들의 태도 변화가 눈에 띄게 나타났습니다.",
    stars: 5,
    show: "해피 투게더",
  },
];

export default function ReviewsPage() {
  const reviewsSection = useInView();

  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="공연을 경험한 분들의"
        highlight="생생한 후기"
        description="지컴퍼니의 공연을 직접 경험하신 선생님, 담당자분들의 솔직한 후기를 만나보세요."
        breadcrumb="공연후기"
      />

      {/* Reviews */}
      <section ref={reviewsSection.ref} className="py-28 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={review.name + review.org}
                className={`bg-gray-warm rounded-3xl p-8 md:p-10 transition-all duration-700 hover:shadow-lg ${
                  reviewsSection.inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
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

                {/* Show tag */}
                <span className="inline-block mt-4 px-3 py-1 bg-black/5 text-xs font-bold text-gray-600 rounded-full">
                  {review.show}
                </span>

                {/* Quote */}
                <p className="mt-4 text-gray-600 text-[15px] leading-relaxed">
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

      <CTABanner
        title="직접 경험해 보세요."
        highlight="지금 문의"
        description="후기에서 보셨던 그 감동을 여러분의 기관에서도 만나보세요."
      />
    </>
  );
}
