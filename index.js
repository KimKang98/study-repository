const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.BACKEND_PORT; // 8080포트로 지정
const pool = require("./src/config/db.pool.js"); // 사전에 생성산 pool 로드

// http://localhost:8080/api/test로 들어온 경우의 함수 생성
app.get("/api/test", async (req, res) => {
  try {
    const query = await pool; // Query 실행을 위한 Pool 지정
    const result = await query
      .request() // Query 요청
      .input("KEY", "ASDF") // 하단 query에 @로 들어가는 파라미터 값을 사전에 설정
      .query("SELECT TOP 10 * FROM TABLE_NAME WHERE KEY = @KEY");
    res.send(result); // Response에 결과값을 포함하여 전달
  } catch (err) {
    res.status(500); // 에러 발생시 Response 상태를 서버에러인 500에러로 세팅
    res.send(err.message); // 에러 발생시 Response에 서버에러 내용 포함 전달
  }
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});
