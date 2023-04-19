const fs = require('fs');

// Step 1 without checking directory exist or not

fs.mkdir("temp-directory", (error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Directory Created")
    }
});

// Check file already exist??

if(fs.existsSync("temp-directory")) {
    console.log("File already Exist")
}else{
    fs.mkdir("temp-directory", (error)=>{
        if(error){
            console.log(error)
        }else{
            console.log("Directory Created")
        }
    }); 
};