const Details = require('./4-names')
const greet = require('./3-modulestut')
// same const var ka naam rkahoge tabhi import hoga pata nahi kya hai dhang se smajh nai aaya hai 
// const greet2 = require('./3-modulestut')
// ye bhi chal jaa rha but ek hi fucntion jo bhi baad mein likha hai 3-modules mein wahi import ho rha 
const data = require('./6-alternative')
console.log(data);

console.log(Details);

greet(Details.Name) 
require('./7-mindgrenade')

// greet2(21)
// dono function se ek hi cheez run ho rhi 
// ek sath 2 function kaise import export kre ye cheez dekhna padega
// greet2(Details.Age)