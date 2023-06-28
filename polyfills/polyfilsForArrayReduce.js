// // What is Polyfill ?

// Polyfill is a peice of code that used to provid modern functionality to the older browsers that do not natively support it.


/* -----************Polyfill for Array.reduce()  ********** */;


// Reduce in general functioning 


let numberArray = [1,2,3,4]

const callBackFn = function(accumlator, currentValue, currentIndex, originalArray){
    console.log("acc", accumlator)
    return  accumlator + currentValue ;
}

//let sumOfArrayElements = numberArray.reduce(callBackFn , initialValue)

//So reduce method iterates over all the element of array and on each return, it assigns the returned value to 'accumlator'

//intital value defines the initial value for the accumlator

//if intital value  is not provided, then by default it takes very first element of the array as initial value

//and on return for the last result, it basically returns the current value of accumlator

// let sumOfArrayElements = numberArray.reduce(callBackFn )

// console.log("sumOfArrayElements", sumOfArrayElements)


//////////////Now polyfill for reduce

Array.prototype.myReduce = function(cb, initialValue){
    let accumlator = initialValue

    for(let i = 0 ; i < this.length ; i++){

        // here calling the callbackFn for each element in array and storing the returned value in the accumlator
        accumlator = accumlator ? cb(accumlator, this[i], i, this) : this[0]
    }

    return accumlator
}

let sumOfArrayElements = numberArray.myReduce(callBackFn)

console.log("sumOfArrayElements", sumOfArrayElements)