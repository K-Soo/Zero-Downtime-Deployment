module.exports = {
  apps: [
    {
      name: "bns",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: 1, // 단일 쓰레드
      autorestart: false,
      watch: false,
    },
    {
      name: "bns_staging",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: 1, // 단일 쓰레드
      autorestart: false,
      watch: false,
    },
  ],
};
