/** @type {import('next').NextConfig} */
// const nextBuildId = require("next-build-id");
const nextConfig = {
  //빌드 ID 구성
  generateBuildId: async () => {
    return "my-build-id";
  },
  //커스텀 빌드 디렉토리 설정
  distDir: process.env.BUILD_DIR || ".next",
  reactStrictMode: false,
  swcMinify: true,
  // 배포 미니파일 Output File Tracing
  output: "standalone",
  // ignoreDuringBuilds: true,  // ESLint 무시
  //TypeScript 오류 무시
  typescript: {
    // ignoreBuildErrors: true,
  },
  devIndicators: {
    buildActivityPosition: "bottom-right",
  },
  //Next.js에서는 개발 환경에서 서버가 빌드된 페이지를 어떻게 폐기하거나 메모리에 보관하는지 제어하는 ​​몇 가지 옵션을 제공합니다.
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

module.exports = nextConfig;
