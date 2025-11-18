const { log } = require("console");
const fs = require("fs");
const { reject, result } = require("lodash");
// agar ek se zayda cheeze kar rhe honge to dikkat hogi like do file read kro aur ek write to problem hogi nested readfiles mein har ek readfile ke liye alag alag likhn apdega wo callback hell 
// isiliye await and promise ka use krte hai

// Promise And Await

const getText = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// getText("./content/subcontent/test2.txt")
//   .then((result) => log(result))
//   .catch((reject) => log(reject));
 
// samajh to nahi aaya ye cheez kyun use ho rhi?
// ab aa gaya ye reusability provide krta hai ek baar main function jaisa kuch likh do jisme path as a variable call ho rha and then fir different paths ke liye call krte raho aise baar baar tumhe ek hi cheez nahi likhna padega sirf getText call karna hai and result and reject log krana rhega

// fs.readFile('./content/subcontent/test.txt','utf-8',(err,data)=>{
//     if (err) {
//        log(err)
//     }
//     else{
//        log(data);
//     }
// })

// const start = async () => {
//   const first = await getText("./content/subcontent/test3.txt");
//   log(first);
// };
// start();

// use try catch block so to handle error


const start = async () => {
    try{
        const first = await getText("./content/subcontent/test2.txt");
        const second = await getText("./content/subcontent/test3.txt");
        log(first,second);
    }
    catch(error){
        log(error);
    };
};

start();

// there are other smarter ways to do this in the second file