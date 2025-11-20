const http = require('http')

const server = http.createServer((req,res)=>{
    // (req,res) => request and response objects
    // console.log(req)
    // res.write('Welcome to our home page')
    // res.end()
    if (req.url === '/') {
        // agar request home page ki hai 
        // yaha pe shayad /about bhi lag skte hai abhi aage try krna 
        res.write('welcome to home page')
        res.end()
    }
    else if (req.url === '/about') {
        res.end('welcome to about page') 
        // end() mein bhi output likh skte hai 
        // shi hai ye chal rha
    }
    else {
        res.end(`
            <p> Coming Soon </p>
            <a href = "/"> Home </a>
        `)
    }
    // ye default hai jaise agar contact daloge to ye wala aa jaega jo info abhi nahi hai usko ye output dikhega
})


server.listen(5000)
// ye local host ka hai 