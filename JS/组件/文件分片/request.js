export function request(chunk, file) {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    const { start, end, idx, md5 } = chunk;
    formData.append("start", start);
    formData.append("end", end);
    formData.append("idx", idx);
    formData.append("md5", md5);
    formData.append("fileName", file.name);
    formData.append("file", file.slice(start, end));
    fetch("http://localhost:3001/data", {
      method: "POST",
      body: formData,
    }).then((res) => {
      resolve(res);
    });
  });
}
export function batchRequest(chunks, file, maxConcurrency = 2) {
  const batch = [];
  const chunksLen = chunks.length;

  for (let i = 0; i < chunksLen; i++) {
    const chunk = chunks[i];
    const task = request(chunk, file);
    batch.push(task);
  }
}
