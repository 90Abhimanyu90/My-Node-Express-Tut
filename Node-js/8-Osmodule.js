const os = require('os')
console.log(os.type());
console.log(os.userInfo());
console.log(os.uptime());

// setInterval(() => {
//     console.log(os.uptime())
// },1000)

const currentOS = {
    name : os.type(),
    release : os.release(),
    TotalMem : os.totalmem(),
    Freemem : os.freemem()
}

console.log(currentOS);
