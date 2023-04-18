const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user} : ${message}`)
})

emitter.emit("customEvent", "hello world", "Mac book")
emitter.emit("customEvent", "javascript", "Coding language")

process.stdin.on("data", (data) => {
    const input = data.toString().trim();
    if(input == "exit") {
        emitter.emit("customEvent", "Goodbye!", "process");
        process.exit()
    }
    emitter.emit( "customEvent", data.toString().trim(),"terminal");
});

