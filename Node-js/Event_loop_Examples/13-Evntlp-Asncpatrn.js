//it allows node js to perform non blocking I/O operations - despite js is single-threaded. by offloading(background mein krta rehta hai bina code ko disturb kiye) operations to the syatem kernal whenever possible 
const fs = require ('fs');
console.log("pehle ye run hoga");
fs.readFile("../content/subcontent/test.txt","utf-8",(galti , data)=>{
    if (galti){
        console.log(galti);
    }
    else{
        console.log(data);
        console.log("ye baad mein print hoga kyunki ye no blocking hai to event loope isko background mein run karaega");
    }   

})

console.log('ye second pe run hoga');
