const fs = require("fs");

// Step 1 show the file values

let ipsum = fs.readFileSync("./day1_currentDirc_path_module.js", "UTF-8");

// console.log(ipsum)

// Step 2 file values with callback function

fs.readFile("./day1_currentDirc_path_module.js", "UTF-8", (error, ipsum1) => {
    console.log(ipsum1)
});

