

//clousers - a function bundled with it's surrounding values or lexical scope

/* const parent = () =>{
    let a = 10;
    a =20;
    return function child(){
        console.log("a", a)
    }
}

let newVar = parent()
console.log("parent", newVar)
newVar()
 */

function parent(){
    for(var i = 0 ; i< 5; i++){
        function close(i){
            setTimeout(function(){console.log(i)}, i*1000)
        }
        close(i)
    }
}

parent()