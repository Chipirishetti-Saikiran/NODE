const http=require("http");

const server=http.createServer((req,res)=>{
    if (req.url==="/" && req.method==="GET"){
        res.write("Home");
        res.end();
    }
    else if (req.url==="/about"){
        res.write("About");
        res.end();
    }
    else{
        res.statusCode=404;
        res.write("Error");
        res.end();
    }

});


port=3000;

server.listen(port,()=>{
    console.log(`Server running at ${port}`);
});