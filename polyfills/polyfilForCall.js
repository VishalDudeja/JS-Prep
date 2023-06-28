//

/* --- normal call function - -- */


let person = {
    firstName : 'Vishal',
    lastName : 'Dudeja',
    printPersonName (homeTown){
        console.log("this in object", this)
        console.log(this.firstName + " " + this.lastName + " "+ "hometown is " + homeTown )
    }
}

// function printPersonName (homeTown){
//     console.log(this.firstName + " " + this.lastName + " "+ "hometown is " + homeTown )
// }

let person2 = {
    firstName: "John",
    lastName : "Doe"
}

// person.printPersonName("Alwar")


// person.printPersonName.call(person2 ,"Alwar")



/* --------Polyfill for call ------ */


Function.prototype.myCall = function(context, ...args){
    console.log("context", context ,"args", args, typeof(JSON.stringify(args)))
    console.log("this inside polyfill", this)

    //to check the myCall has been called upon an function only
    let remaingingParams = args.slice(1)
    console.log("typeof this", typeof this)
    if(typeof this !== 'function'){
        throw new Error("this is not fn")
    }else{
        context.funct = this
        console.log("context", context)
        context.funct(...args)
    }

    // let contextFn = this;
    // let remaingingParams = args.slice(1)
    // console.log("remaingingParams", remaingingParams)
    // contextFn.apply(args[0], remaingingParams)
}


person.printPersonName.myCall(person ,"Alwar", "test")