//Currying is ocnverting any fn with multiple args into fn with multiple single single args
// Ex -> sum(1,2,3,4) => sum(1)(2)(3)(4)
//It runs for every single arg until all the args are exahusted

//We can acheive currying using two ways -> using -> bind() & clousers

// 1st Way -> Using bind()


//Original Funtion is ->

let multiply = function(x, y){
    console.log(x*y)
}

multiply(2,3)  // O/p is -> 6

//now after applying currying process

let multiplyByTwo = multiply.bind(this, 2)
console.log(multiplyByTwo(3))

//now we can use same fn to write multiple other single arg fn without passing same value again & again
let multiplyByThree = multiply.bind(this, 3)
multiplyByThree(4) //this will also get multiplied by 3 - o/p 12
multiplyByThree(5)//this will also get multiplied by 3 - o/p 15





//////_------------------2nd way -----Using clouser--------///////////

const multiplyAgain = function(x){
    return function(y){
        return x*y;
    }
}

let multiplyByTwoAgain = multiplyAgain(2)
console.log(multiplyByTwoAgain(3)) //o/p -> 6