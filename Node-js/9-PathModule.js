const path = require('path')
console.log(path)

console.log(path.sep);

const filePath = path.join('/content////', 'subcontent', 'test.txt')
// kitne bhi slash laga do fark nahi padta kya kaam hai iska pata nahi but dekho
console.log(filePath);

// base path de dega ye
const base = path.basename(filePath)
console.log(base);

// absolute path de dega ye
const absPath = path.resolve(filePath)
// const absPath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')  ye krna chahiye but upar wale se bhi aa rha result


console.log(absPath);