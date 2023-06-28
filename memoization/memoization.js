//Memoization in JS using the process of caching the time-consuimg complex repetative calculation's result and return it from cahched when needed again instead of computing again.

//The same can be acheived using 'useMemo()' hook in React.

//Here we will implement it in JS.

//
let total = 0;
const sum = (number) =>{
    for(let i=0 ; i< number ; i++){
        total += i ;
    }

    return total;
}


const memoize = (fn) => {
    let cache = {}

    return function(...args){
        let number = args[0]
     
        if( number in cache){
          console.log("from cache")
          return cache[number]
        }else {
            console.log("first")
            let result = fn(number)
            cache[number] = result
            return result ;
        }
    }


}


let efficientFn = memoize(sum)

console.time()
console.log(efficientFn(6))  //default: 0.78125 ms
console.timeEnd()

console.time()
console.log(efficientFn(6)) //default: 0.18505859375 ms
console.timeEnd()

console.time()
console.log(efficientFn(6)) //default: 0.1669921875 ms
console.timeEnd()
