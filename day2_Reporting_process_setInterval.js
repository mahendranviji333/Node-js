const waitTime = 10000 //100sec
console.log(`setting a ${waitTime/1000} second delay`);
const timerFinished = () => {
    clearInterval(interval)
    console.log("Done")
}

setTimeout(timerFinished,waitTime)

 const waitInterval = 1000;
 let currentTime = 0;

 const incTime = () => {
     currentTime += waitInterval;
     const p = Math.floor((currentTime/waitTime) * 100)
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting.... ${p} %`)
 }

const interval = setInterval(incTime, waitInterval)