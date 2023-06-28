// // What is Polyfill ?

// Polyfill is a peice of code that used to provid modern functionality to the older browsers that do not natively support it.


/* -----************Polyfill for Array.reduce()  ********** */;


// Reduce in general functioning 


let numberArray = [1,2,3,4]

const callBackFn = function(currentValue, currentIndex, originalArray){
    return  currentValue > 2 ;
}

// let returnedFilteredArray = numberArray.filter(callBackFn)

// console.log("returnedFilteredArray", returnedFilteredArray)

///////Polyfill for filter

Array.prototype.myFilter = function(cb){
    let newArray = []

    for(let i = 0 ; i < this.length ; i++){
        if(cb(this[i], i , this)) newArray.push(this[i])
    }

    return newArray
}


let returnedFilteredArray = numberArray.myFilter(callBackFn)

console.log("returnedFilteredArray", returnedFilteredArray)