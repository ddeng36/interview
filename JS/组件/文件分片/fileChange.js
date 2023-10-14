import cutFile from "./cutFile.js";
import { request } from "./request.js";

//  向input添加事件
const input = document.querySelector("input[type=file]");
input.addEventListener("change", fileChange);

// 帮我写一个注释，要求定义借口
/**
 * @param {Event} e
 * @returns {Promise}
 * @description
 * 1. 通过input标签获取文件
 * 2. 调用cutFile函数，将文件切割成多个chunk，chunk的格式为[{file:Blob,start:number,end:number，idx:number,md5:string}]
 * 3. chunks中包含了所有的chunk
 */
export async function fileChange(e) {
  const file = e.target.files[0];
  // 执行cutFile函数，将文件切割成多个chunk，得到每片文件的md5值和索引
  const chunks = await cutFile(file);
  const result = await request(chunks, file);
  console.log(chunks);
}
