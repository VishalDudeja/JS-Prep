
//Lexical env of an function is , where that function is physically prsent in the code

// finding the variable value in all lexical envs is scope chain


//Ex- 
/* "use strict" */

let b = 10;
/* 
var test = () => {
    console.log(b)

    let testInner = () =>{
        console.log(b)
        console.log(this)
    }

    testInner()
} */

{
    var g = 30;
}

console.log(g)


function test(){
    var d = 20;

    function testInnner(){
        console.log(d)
        console.log(this)
    }

    testInnner()
}

console.log(d)
test();