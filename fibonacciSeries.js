// fibonacci series is -> 0,1,1,2,3,5,8,13,21 ... 
//Patteren is next element is , sum of previous two


// n1 = 0, n2 = 1 , n3 = n2 + n1
let n1 = 0 
let n2 = 1
// let n3 = n1 + n2 //1 // 2
const printFibonacciSeries = function(number){
  
    let seriesArr =  []
    console.log(n1)
    console.log(n2)
    for(let i = 0 ;  i <= number ; i++){
       
        // seriesArr.push(n1)  //5
        
        let n3 = n1 + n2 //1 // 2 // 3 // 5 , 8 , 13
        console.log(n3)
        n1 = n2 //  1 , 1  , 2 /, 3 , 5 , 8
        n2 = n3  // 1 , 2 , 3 , 5 , 8 ,  13
    }
    // console.log(seriesArr)


}

/* let n1 = 0 
let n2 = 1

let fn = n1 + n2
const printFibonacciSeries = function(number){
    let seriesArr =  []
   
    while(fn < number){
       
        fn = n1 + n2
        seriesArr.push(n1)
        n1 = n2 //  1 , 
        n2 = fn  //
    }
    console.log(seriesArr)
} */

console.log(printFibonacciSeries(7))