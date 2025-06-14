const exp=require("express");

const app=exp();


//root route 

const port=3000;

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
});

app.get("/products",(req,res)=>{
    const products=[
        {
            id:1,
            label:"P1",
        },
        {
            id:2,
            label:"P2",
        },
    ]
    res.json(products);
});

//getting spefic product 

app.get("/products/:id",(req,res)=>{
    console.log(req.params)
    
    const P_id=parseInt(req.params.id)
    
    const products=[
        {
            id:1,
            label:"P1",
        },
        {
            id:2,
            label:"P2",
        },
    ]

    const single_product=products.find(p=>p.id===P_id)

    if(single_product){
        res.json(single_product)
    }
    else{
        res.status(404).send("PRODUCT NOT FOUND")
    }
});


app.listen(port,()=>{
    console.log(`Server running at ${port}`)
});