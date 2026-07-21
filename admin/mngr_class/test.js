const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 정적 파일(HTML, CSS) 경로 설정
app.use('/admin', express.static(path.join(__dirname, 'admin')));

// 예시: http://localhost:3000/ 로 접속했을 때 매뉴얼 페이지를 기본으로 띄우고 싶다면 주석을 해제하세요.
/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin', 'mngr_class', 'manual1.html'));
});
*/

app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`💻 로컬 테스트 서버가 성공적으로 시작되었습니다!`);
    console.log(`👉 클래스관리: http://localhost:${PORT}/admin/mngr_class/list1.html`);
    console.log(`👉 수강관리:   http://localhost:${PORT}/admin/mngr_sugang/list1.html`);
    console.log(`👉 매뉴얼관리: http://localhost:${PORT}/admin/mngr_class/manual1.html`);
    console.log(`==================================================`);
});