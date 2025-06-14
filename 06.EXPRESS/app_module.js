const exp=require("express");

const app=exp();

//Application Level 
app.set("VIEW ENGINE","ejs")


//ROUTING 
app.get("/",(req,res)=>{
    res.send("HOME PAGE")
});

app.post("/api/data",(req,res)=>{
    res.json({
        message:"Data received",
        data:req.body,
    })
});


app.use((err,req,res,next)=>{
    console.log(err)
    res.status(500).send("Something wemt Wrong")
});


const port=3000;

app.listen(port,()=>{
    console.log(`Server running at ${port}`)
});