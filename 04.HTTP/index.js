const http=require("http");

const server=http.createServer((req,res)=>{
    res.write("Hello World!");
    res.end();

});


server.listen(3000,()=>{
    console.log("Server Running at port 3000");
});