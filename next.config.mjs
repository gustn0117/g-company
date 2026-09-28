/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    // 대표 도메인(g-company.kr)으로 통합해 색인 분산을 방지한다.
    const legacyHosts = ["www.g-company.kr", "g-company.hsweb.pics"];

    return legacyHosts.map((host) => ({
      source: "/:path*",
      has: [{ type: "host", value: host }],
      destination: "https://g-company.kr/:path*",
      permanent: true,
    }));
  },
};

export default nextConfig;
