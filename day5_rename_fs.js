const fs = require("fs");

//  This is a way to rename the file
/*
fs.renameSync("./text_file.txt", "./text_file_renamed.txt", (error) =>{
    if(error){
        console.log(error)
    }else{
        console.log("File Rename Done")
    }
});

*/

// also possible to move the file with fs.rename function

/*

fs.rename("./writeFs.text","./temp-directory/writeFs.text", (error)=>{
    if(error){
        console.log(error)
    }else{
     console.log('file moved')   
    }
})

*/


// Remove Files

fs.unlinkSync("./temp-directory/writeFs.text")

// Next un sync method

fs.unlink("./temp-directory/writeFs.text", (error)=> {
    if(error){
        console.log(error)
    }else{
        console.log("File Deleted successfully")
    }
})