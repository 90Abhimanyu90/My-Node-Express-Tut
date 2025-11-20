const fs = require ('fs')

fs.readFile('./content/subcontent/test.txt', 'utf-8', (err, data)=>{
    console.log(err, data)
    // can also do if-else if err else data
})

const content = fs.readFileSync('./content/subcontent/test.txt', 'utf-8')
console.log(content);
// pehel ye wala run ho rha cause ye blocking elemnt hai to pehle run ho jaega fir aage ka run hoga readfile non blocking hai to wo aage badha diya ki baki kaam hone do 

fs.writeFile('./content/subcontent/test2.txt', 'Say My name !!',(err)=>{
    console.log(err)
})
fs.writeFileSync('./content/subcontent/test3.txt', `Heisenberg !! You're goddamn right I AM !`)

const text1 = fs.readFileSync('./content/subcontent/test.txt', 'utf-8')
const text2 = fs.readFileSync('./content/subcontent/test2.txt', 'utf-8')
const text3 = fs.readFileSync('./content/subcontent/test3.txt', 'utf-8')

fs.writeFileSync('./content/subcontent/test4.txt', ` The content is :  ${text2}, ${text3}`)
// settimeout is Asynchronous that means even if you put timer at 0 it will still come at last