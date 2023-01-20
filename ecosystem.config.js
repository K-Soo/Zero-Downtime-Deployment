module.exports = {
  apps: [
    {
      name: "bns.server",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: 1, // 단일 쓰레드
      autorestart: false,
      watch: false,
      env_local: {
        NEXT_PUBLIC_PORT: "env_local",
        NEXT_PUBLIC_TEST: "로컬 테스트",
        APP_ENV: "로컬이당",
      },
      env_development: {
        NEXT_PUBLIC_PORT: "5000",
        NEXT_PUBLIC_TEST: "개발용이래",
        APP_ENV: "개발용이다",
      },
    },
  ],
};
