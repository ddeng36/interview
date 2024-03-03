//node环境没有xhr

//将ajax封装成Promise
const ajax = function (method, url,data) {
    //返回一个Promise对象
    return new Promise(
        function(resolve,reject){
            //创建XMLHttpRequest对象
            const xhr = new XMLHttpRequest();
            //打开链接
            xhr.open(method,url,true);
            //设置
            xhr.onreadystatechange = function () {
                if(xhr.readyState === 4){
                    if(xhr.status === 200){
                        resolve(xhr.responseText);
                    }else{
                        reject(xhr.status);
                    }
                }
            };
            //错误
            xhr.onerror = function (err) {
                reject(err);
            };
            //发送请求
            xhr.send(data);
        }
    )

};

ajax('GET','http://localhost:3000/data','Hello World!')
    .then((res)=> console.log(res))
    .catch((err)=> console.log(err));

