const myModule = require("./day4_export_custom_module"); //one method for import full module else

// const {inc, dec, getCount, anything} = require("./day4_export_custom_module");

console.log(myModule.anything) //true
console.log(myModule.inc())  //1

myModule.dec();
myModule.dec();

console.log(myModule.getCount())