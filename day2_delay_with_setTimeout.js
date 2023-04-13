const waitTime = 3000
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
    console.log(`waiting ${currentTime/1000}`)
 }

const interval = setInterval(incTime, waitInterval)