const express = require("express");
const multer = require("multer");
const app = express();
const fs = require("fs");

// Allow cross-origin resource sharing
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Create a function to handle file uploads
const writeFile = (fileName, fileBuffer) => {
  return new Promise((resolve, reject) => {
    const targetFilePath = `./file/${fileName}`;
    fs.writeFile(targetFilePath, fileBuffer, (err) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log("File written successfully: " + fileName);
        resolve(targetFilePath);
      }
    });
  });
};

// Handle file uploads asynchronously
app.post("/data", upload.single("file"), async (req, res) => {
  const file = req.file;
  const idx = req.body.idx;

  if (file) {
    const fileName = req.body.fileName + idx;

    try {
      await writeFile(fileName, file.buffer);
      res.send("ok");
    } catch (err) {
      res.status(500).send("Error writing file");
    }
  } else {
    res.status(400).send("No file uploaded");
  }
});

app.post("/md5", (req, res) => {
  console.log(req.body);
  // Handle the /md5 route as needed
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
