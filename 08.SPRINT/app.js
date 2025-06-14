// import the express
const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    res.send("Hello Sai")
});


const port= process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server running at ${port}...`);
});
