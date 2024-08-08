const express = require('express');
const path = require('path');
const app = express();

// // 静的ファイルの提供
// app.use(express.static(path.join(__dirname, '../public')));

// // `/next` エンドポイント
// app.get('/next', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/next.html'));
// });

// // ルートパス `/` のエンドポイント
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });


// API エンドポイントの設定
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Node.js!' });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
