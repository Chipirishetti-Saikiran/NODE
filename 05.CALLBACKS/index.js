//IN terms of js

function greet(name,callback){
    console.log("Hi "+name);
    callback();
};


function SayBye(){
    console.log("Bye")
}

greet("Saikiran",SayBye);

