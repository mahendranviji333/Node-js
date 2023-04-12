//   Location of Node and Where that running file location
 console.log(process.argv)   // process.argv id process argument
//  output
// [
//   '/usr/bin/node',
//   '/home/mahendran/mahendran/project/Node-js/day1_process_object.js'
// ]
function grab(flag) {
    let indexAfterFlag = process.argv.indexOf(flag)+1
    return process.argv[indexAfterFlag]
}

let greeting = grab("--greeting");
let user = grab("--user");

console.log(greeting)
console.log(user)
// Output
// [
//     '/usr/bin/node',
//     '/home/mahendran/mahendran/project/Node-js/day1_process_object.js',
//     'node',
//     'day1_process_object.js',
//     '--user',
//     'Eve',
//     '--greeting',
//     'Hello from node'
//   ]
//   Hello from node
//   Eve