const fs = require("fs");

let tempWrite = `welcome to Node `;

fs.writeFile("writeFs.text",tempWrite, ()=> {
    console.log("New File created")
})
let tempWrite1 = `welcome to node for new world`;
let appendVal = `\n\n\n Hello world`
fs.writeFile("writeFs2.text",tempWrite1, (error)=> {
    if(error) {
        throw error;
    }
    fs.appendFileSync("writeFs2.text",appendVal)
    console.log("New File created")
})