import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg
        width="20"
        height="18"
        viewBox="0 0 24 18"
        fill="currentColor"
      >
        <path d="M23.498 2.186A3.016 3.016 0 0 0 21.382.07C19.505-.39 12-.39 12-.39s-7.505 0-9.382.46A3.016 3.016 0 0 0 .502 2.186C.042 4.062.042 9 .042 9s0 4.938.46 6.814a3.016 3.016 0 0 0 2.116 2.116C4.495 18.39 12 18.39 12 18.39s7.505 0 9.382-.46a3.016 3.016 0 0 0 2.116-2.116C23.958 13.938 23.958 9 23.958 9s0-4.938-.46-6.814ZM9.545 12.818V5.182L15.818 9l-6.273 3.818Z" />
      </svg>
    ),
  },
  {
    label: "Blog",
    href: "#",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "회사소개", href: "/about" },
  { label: "공연안내", href: "/services" },
  { label: "작품소개", href: "/shows" },
  { label: "공연후기", href: "/reviews" },
  { label: "공연문의", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Subtle gradient overlay at the top */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none h-40" />

      {/* Accent top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main content area */}
        <div className="pt-20 pb-16 grid md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block group">
              <Image
                src="/images/logo.png"
                alt="G Company"
                width={180}
                height={180}
                className="h-20 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <p className="mt-5 text-white/40 text-sm leading-[1.8] max-w-sm">
              지컴퍼니는 뮤지컬 공연 기업으로, 학교와 기관에
              감동적인 무대 경험을 전달합니다. 전국 어디든 찾아가 최고의 공연을
              선보이겠습니다.
            </p>

            {/* Social icons under brand on larger screens */}
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group/icon w-11 h-11 bg-white/[0.06] border border-white/[0.08] rounded-xl flex items-center justify-center text-white/40 transition-all duration-300 hover:bg-accent hover:border-accent hover:text-black hover:scale-110 hover:shadow-[0_0_20px_rgba(212,168,83,0.25)]"
                >
                  <span className="transition-transform duration-300 group-hover/icon:scale-110">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/80 mb-6">
              바로가기
            </h4>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group/link text-sm text-white/40 hover:text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="inline-block w-0 group-hover/link:w-3 h-px bg-accent transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/80 mb-6">
              연락처
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-accent/50 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <span className="text-sm text-white/40">010-7132-0348</span>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-accent/50 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span className="text-sm text-white/40">
                  g_companyspace@naver.com
                </span>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-accent/50 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="text-sm text-white/40 leading-relaxed">
                  서울시 도봉구 방학로 3길 13 스페이스도모
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        {/* Bottom bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/25 text-center md:text-left space-y-1">
            <p>
              지컴퍼니 | 대표: OOO | 사업자등록번호: 000-00-00000
            </p>
            <p>
              서울시 도봉구 방학로 3길 13 스페이스도모 | TEL: 010-7132-0348 |
              EMAIL: g_companyspace@naver.com
            </p>
          </div>
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} G Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
