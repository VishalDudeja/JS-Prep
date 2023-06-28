let count = 0;

let intervalId = setInterval(()=>{
    console.log("interval")
    console.log(count++)
}, 1000)

setTimeout(()=>{
    console.log("stop")
    clearInterval(intervalId);
}, 10000)