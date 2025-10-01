// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package .json - manifest files (stores important info about project/package)
// manual approach (create package.json in the root, cerate propertiers etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


// example of how external packages work in node (dependencies)
const lod = require('lodash')
const items = [1,[2,[3,[4,[5]]]]]
const newItems = lod.flattenDeep(items)
console.log(newItems);
