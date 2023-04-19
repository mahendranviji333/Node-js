const fs = require("fs");
// Move directory
// fs.renameSync("./testDir","./testDir2");
// console.log("Directory Moved")

// Empty directory

fs.rmdir("./testDir2", (error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('Directory Removed')
    }
})

// Delete directory with sub files

fs.readdirSync("./testDir").forEach(file)=>{
    console.log(file)
}