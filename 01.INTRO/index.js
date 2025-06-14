console.log("Hello node js")

const arr=[1,2,3];

console.log("Array",arr)

setTimeout(()=>{
    console.log("This message will be delay")
},2000);

function sum(a,b){
    return a+b;
}
sum(2,3);