// What is Polyfill ?

// Polyfill is a peice of code that used to provid modern functionality to the older browsers that do not natively support it.


/* -----************Polyfill for Array.map()  ********** */;

// map mehtod in general

let numberArray = [1,2,3,4]

const callBackFn = function(currentValue, currentIndex, originalArray){
    return currentValue*2 ;
}

// so what map doesn is, takes and callback function as parameter and excutes that callback fn for each element of the given array.
// let returedArrayFromMap = numberArray.map(callBackFn)

// console.log(returedArrayFromMap)

//polyfill for map

Array.prototype.myMap = function(cb){
    // as it returns a new Array
    let newArray = []
    //first it iterates over each element of the given array
    //here 'this' points to the array on which the myMap mehtod has called upon
    for(let i = 0 ; i < this.length ; i++){
        newArray.push(cb(this[i], i, this))
    }

    return newArray;
}

let returedArrayFromMap = numberArray.myMap(callBackFn)
console.log(returedArrayFromMap)