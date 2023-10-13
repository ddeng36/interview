const express = require("express");
const multer = require("multer");
const app = express();
const fs = require("fs");

// 允许特定源访问资源
// 禁止跨域访问
app.use((req, res, next) => {
  //策略1，设置成*，允许所有源访问
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// 配置Multer中间件
const storage = multer.memoryStorage(); // 保存文件内容到内存
const upload = multer({ storage: storage });

// 处理文件上传

app.post("/data", upload.single("file"), (req, res) => {
  // 获取上传的文件内容
  const file = req.file;

  if (file) {
    // 获取文件名
    const fileName = file.originalname;
    //保存在当前目录
    const targetFilePath = `./${fileName}`;
    
    // 使用 fs.writeFile 将文件内容写入目标文件
    fs.writeFile(targetFilePath, file.buffer, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error writing file");
      } else {
        console.log("File written successfully");
        res.send("ok");
      }
    });
  } else {
    res.status(400).send("No file uploaded");
  }
});


app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
