const express = require('express');
const app = express();

// 允许特定源访问资源
// 禁止跨域访问
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// 处理请求
app.get('/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
