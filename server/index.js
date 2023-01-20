// // server.js
// const { createServer } = require("http");
// const { parse } = require("url");
// const next = require("next");

// const dev = process.env.NODE_ENV !== "production";
// const hostname = "localhost";
// const port = 3000;

// // 미들웨어를 사용할 때 'hostname'과 'port'는 아래에 제공되어야 합니다
// // next 앱 데브냐 아니냐로 next가 실행시킬 방향을 정한다.
// const nextApp = next({ dev, hostname, port });
// // next의 리퀘스트 핸들러
// const handle = nextApp.getRequestHandler();

// // next js 가 ssr을 진행하기전에 준비과정
// nextApp.prepare().then(() => {
//   createServer(async (req, res) => {
//     try {
//       const parsedUrl = parse(req.url, true);
//       const { pathname, query } = parsedUrl;

//       if (pathname === "/a") {
//         await nextApp.render(req, res, "/a", query);
//       } else if (pathname === "/b") {
//         await nextApp.render(req, res, "/b", query);
//       } else {
//         await handle(req, res, parsedUrl);
//       }
//     } catch (err) {
//       console.error("Error occurred handling", req.url, err);
//       res.statusCode = 500;
//       res.end("internal server error");
//     }
//   }).listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://${hostname}:${port}`);
//   });
// });
