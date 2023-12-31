const express = require("express");
const app = express();

// 允许特定源访问资源
// 禁止跨域访问
app.use((req, res, next) => {
  //策略1，设置成*，允许所有源访问
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// 处理请求
app.get("/data", (req, res) => {
    //fetch 3000 and return msg from 3000
  fetch("http://localhost:3000/data")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      res.json({ message: data.message });
    });

  // res.json({ message: "Hello from the server 3001!" });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
