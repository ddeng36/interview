const url = "https://example.com/?name=John&age=30&hobbies=soccer&hobbies=reading&hobbies=swimming";
const params = url.split("?")[1].split("&");
const obj = {};
for (let i = 0; i < params.length; i++) {
  const [key, value] = params[i].split("=");
  if (obj[key]) {
    obj[key] = Array.isArray(obj[key]) ? obj[key] : [obj[key]];
    obj[key].push(value);
  } else {
    obj[key] = value;
  }
}

console.log(obj)