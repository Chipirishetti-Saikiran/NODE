//IN terms of NODE js

const fs=require("fs");

function greet(name,callback){
    console.log("Hi "+name);
    callback();
};


function SayBye(){
    console.log("Bye")
}

greet("Saikiran",SayBye);

fs.readFile("input.txt","utf8",(err,data)=>{
    if(err){
        console.log("Error",err)
        return
    }
    console.log(data);
});