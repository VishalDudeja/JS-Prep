//Polyfill for bind



/* -----In regular user ----- */


let person = {
    firstName : 'Vishal',
    lastName : 'Dudeja',
    printPersonName (...arg){
        console.log("this in object", arg)
        console.log(this.firstName + " " + this.lastName + " "+ "hometown is "  )
    }
}

// function printPersonName (homeTown){
//     console.log(this.firstName + " " + this.lastName + " "+ "hometown is " + homeTown )
// }

let person2 = {
    firstName: "John",
    lastName : "Doe"
}

// let returnedFromBind = person.printPersonName.bind(person2, "Alwar")

// console.log("returnedFromBind",returnedFromBind())


/* -----------Writing polyfill for bind() --- */

Function.prototype.myBind = function(contextObj = {} , ...args1){
    let fnToInvoke = this
    console.log("args1", args1)

    return function(...arg2){
        // main motto is to call the binded method/fn . 
        // here in our case it is, person.printPersonName()
        // console.log("fnToInvoke inener", fnToInvoke)
        // fnToInvoke.apply(args1[0], arg2)
        // console.log("arg2", ...arg2)
        contextObj.fnToInvoke = fnToInvoke;
        console.log("arg2", ...arg2)
        contextObj.fnToInvoke(...args1, ...arg2)
    }

}


let returnedFromBind =  person.printPersonName.myBind(person2, 'Alwar')
returnedFromBind("AlwarrrrrRaj")