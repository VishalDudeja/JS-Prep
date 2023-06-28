let newPromise = new Promise((resolve) =>{
    console.log("promise1")    
})

console.log("newPromise", newPromise)

let newErr = new Error("test")

console.log("newErr", newErr)

/* let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("promise1")
        reject("fulfilled 1")
    },5000)
})
 */

/* let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("promise2")
        resolve("fulfilled 2")
    },5000)
}) */


/* Promise.all([promise1,promise2])
.then((res)=>{
  console.log(res)
}).catch((err)=>{
    console.log(err)
}) */