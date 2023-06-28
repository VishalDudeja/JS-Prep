

///1st -> Promise.All() ->
// It takes multiple promises as array in argument & runs all the given/multiple promises paralally and returns the result in form of an array.
// But if any one of the given promises fails or gets rejected , it stops the execution there and return the rejected promise and reject reason. And the reject reason can be log in catch error
// The Promise.all() method takes an iterable of promises as input and returns a single Promise. 
// This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. 
// It rejects when any of the input's promises rejects, with this first rejection reason.

//Example ->

const promise1 = new Promise((resolve, reject) => {
    reject("Promise 1 reject")
})


/* const promise2 = new Promise((resolve, reject) => {
    reject("Promise 2 resolved")
})

const promise3 = new Promise((resolve, reject) => {
    reject("Promise 3 rejected")
})


const promise4 = new Promise((resolve, reject) => {
    reject("Promise 4 resolved")
})
 */
/* let promises = [promise1, promise2, promise3, promise4] */

//Promise.All()
// let PromiseAll = Promise.all(promises)
//     .then(val => console.log(val))
//     .catch(err => console.log(err))
// console.log(PromiseAll)  // o/p ->  ['Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved', 'Promise 4 resolved']



/* ------------ =------------------------------- */
// 2. Promise.allSettled()
// The Promise.allSettled() method takes an iterable of promises as input and returns a single Promise. 
// This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.

// Promise.allSettled(promises)
// .then(val => console.log(val))
// .catch(err => console.log(err))

// 3. Promise.any()
// Takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that fulfills with the value from that promise.

/* Promise.any(promises)
.then(val => console.log(val))
.catch(err => console.log(err))
 */

// 4. Promise.race()

// Wait until any of the promises is fulfilled or rejected.

// If the returned promise fulfills, it is fulfilled with the value of the first promise in the iterable that fulfilled.

// If it rejects, it is rejected with the reason from the first promise that was rejected.
//  This returned promise settles with the eventual state of the first promise that settles.

/* Promise.race(promises)
.then(val => console.log(val))
.catch(err => console.log(err)) */



/* --- test run--- */

function resolved(result) {
    console.log('Resolved');
  }
  
  function rejected(result) {
    console.error(result);
  }

let returnedPromise = promise1
/* .then((fulfiledVal, rejectedVal) => console.log(fulfiledVal, rejectedVal)) */
returnedPromise
.then((resolvedVal)=>{console.log(resolvedVal)}, (rejectedVal)=>{console.log("rejectedVal", rejectedVal)})
.catch(err => console.log("err",err))
