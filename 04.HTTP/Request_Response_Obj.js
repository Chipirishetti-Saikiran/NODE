const http=require("http");


http.createServer((req,res)=>{
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers)
    res.statusCode=200;
    res.setHeader("COntent-Type","text/html");
    res.write("Hello");
    res.end();
});