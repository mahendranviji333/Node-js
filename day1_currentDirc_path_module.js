// Global objects

// Import Moduls
// the path model get the current path active File name
const path = require("path");

// 1. get Current directory
console.log(__dirname);
// output ==> /home/mahendran/mahendran/project/Node-js

// 2. Get File path
console.log(__filename);
// output ==> /home/mahendran/mahendran/project/Node-js/day1_currentDirc_path_module.js

// Current File name
console.log(`the file name is ${path.basename(__filename)}`)
// output ==> the file name is day1_currentDirc_path_module.js

// global object list
for (let key in global){
    console.log(key)
}

// https://nodejs.org/api/process.html  --------------------> process Documentations


console.log()