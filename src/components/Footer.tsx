export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top */}
        <div className="py-16 grid md:grid-cols-4 gap-10 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-extrabold tracking-tight">
              <span className="text-accent">G</span>COMPANY
            </div>
            <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-md">
              지컴퍼니는 찾아가는 뮤지컬 공연 전문 기업으로, 학교와 기관에
              감동적인 무대 경험을 전달합니다. 전국 어디든 찾아가 최고의 공연을
              선보이겠습니다.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-sm text-white/80 mb-4">바로가기</h4>
            <ul className="space-y-3">
              {[
                { label: "회사소개", href: "#about" },
                { label: "공연안내", href: "#services" },
                { label: "작품소개", href: "#shows" },
                { label: "공연문의", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-sm text-white/80 mb-4">SNS</h4>
            <div className="flex gap-3">
              {["Instagram", "YouTube", "Blog"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white/50 hover:bg-accent hover:text-black transition-all text-xs font-bold"
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/30 text-center md:text-left">
            <p>
              지컴퍼니 | 대표: OOO | 사업자등록번호: 000-00-00000
            </p>
            <p className="mt-1">
              서울특별시 OO구 OO로 00길 00 | TEL: 02-0000-0000 | EMAIL:
              info@gcompany.co.kr
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
