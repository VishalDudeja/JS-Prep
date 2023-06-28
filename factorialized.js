//find factors of the given number

//ex 5! = 5*4*3*2*1 = 120


const calculateFactor = function(number){

    let factoredValue = 1;
    for(let i = number ; i > 0 ; i--){
        factoredValue *= i
    }

    console.log(factoredValue)
}

calculateFactor(5)