// implement caching on function it is perfomring the same operation repetatively

// Ex - for sum of two numbbers

const sum = (number) => {
    let total = 0

    for(let i =0 ; i< number ; i++){
        total += i
    }
    console.log("calcualtion")
    return function(){
        return total;
    }
}


let cachedValue = sum(99)

console.time()
console.log("cached", cachedValue())
console.timeEnd()


console.time()
console.log("cached", cachedValue())
console.timeEnd()

console.time()
console.log("cached", cachedValue())
console.timeEnd()
