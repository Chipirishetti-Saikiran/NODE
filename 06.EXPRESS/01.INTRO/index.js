const exp=require("express");

const app=exp();

const port=3000;

app.get("/",(req,res)=>{
    res.send("HELLO EXPRESS")
});

app.listen(port,()=>{
    console.log(`Server running at ${port}`)
});