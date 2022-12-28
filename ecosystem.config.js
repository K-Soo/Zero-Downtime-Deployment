module.exports = {
  apps: [
    {
      name: "localName",
      script: "node_modules/next/dist/bin/next",
      args: "dev",
      instances: 1, // 단일 쓰레드
      autorestart: false,
      watch: false,
      env_local: {
        NEXT_PUBLIC_PORT: "env_local",
        NODE_ENV: "로컬이야 엔브는",
        NEXT_PUBLIC_TEST: "로컬 테스트",
        APP_ENV: "로컬이당",
      },
      env_development: {
        NEXT_PUBLIC_PORT: "5000",
        NODE_ENV: "env_development",
        NEXT_PUBLIC_TEST: "개발용이래",
        APP_ENV: "개발용이다",
      },
    },
    {
      name: "NextAppName",
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: "node_modules/next/dist/bin/next",
      args: "start",
      // cwd: "/.next",
      output: "~/logs/pm2/console.log",
      error: "~/logs/pm2/onsoleError.log",
      env_local: {
        APP_ENV: "local", // APP_ENV=local
        API_END_POINT: "local 로컬",
      },
      env_development: {
        APP_ENV: "dev", // APP_ENV=dev
        API_END_POINT: "development 개발",
      },
      env_production: {
        APP_ENV: "prod", // APP_ENV=prod
        API_END_POINT: "production 프로덕션",
      },
    },
  ],
};
