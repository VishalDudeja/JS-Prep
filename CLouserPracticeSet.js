//Practice Question - 1

// Create and counter , which should be only function scoped, and increase & decrease & log the value of counter without manupaliting it from outside of the fn

const counter = () =>{
    let count = 0 ;

    return function(type){
        if(type==="incre") return ++count;
        if(type==="decre") return --count;
    }

}

// console.log(counter())
// let increamentCounter = counter()




/* ------------- Another way of solving the above ------------- */
//create an object in return and add fns in key:value
 clouserVariable = 7

const counterAgain = () =>{
    let count =0 ;
    clouserVariable = 9;
    return{
        increament : function(){++count},
        decreament : function(){--count},
        log : function(){console.log("count is ", clouserVariable )}
    }
}


let counterOptions = counterAgain();
/* counterOptions.increament()

 */
// counterOptions.log()

/* _----------------------- */
/* 
(function(){
    var insideBlock = 20
})()

console.log("insideBlock", insideBlock) */

/* {
    let insideBlock = 20
} */

// console.log("insideBlock", insideBlock) 