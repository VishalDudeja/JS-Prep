"use strict";

/* const resize = (count) =>{
    console.log("window resized", count)
}
 */



//throttle(func, limit )


/* const throttle = (func, limit) =>{
    let flag = true
    let count = 0
    return function(){
        if(flag) {
            func(++count)
            flag = false

            setTimeout(() => {
                flag = true
            }, limit);
        }

    }
}

const betterResize = throttle(resize, 1000 )

window.addEventListener("resize", betterResize) */



/* 
const getDataOnBtnClick = () => {
    console.log("Button Clicked")
}

const debounce  = (func, delay) =>{
    let timer
    return function(){
        clearTimeout(timer)
        
        timer = setTimeout(func, delay)
    }
}

let betterFunction = debounce(getDataOnBtnClick, 5000) */


//document.getElementById("input").addEventListener(, getDataOnBtnClick )






//-----------------------------------------
/// sum of sum(1)(2)(3)(4)....(n)()

const sum = (a) =>{
    return function(b){
        console.log("test")
        if(b) return sum(a+b);
        else return a
    }
}

// or the same above code in ES6 syntax ->

const sum2 = a => b =>  b ? sum(a+b) : a

//let returnedFn = sum(1)(2)(3)()
//console.log("returnedFn",returnedFn)
//console.log("sum",sum(1)(2)(3)(4)())
//console.log("sum",sum(1))
//console.log("sum",sum(1)(2))
//console.log("sum",sum(1)(2)(3))
// console.log("sum",sum(1)(2)(3)(4)())
// console.log("sum2",sum2(1)(2)(3)(4)(6)())

// a= 1 , sum(1), return fn(b)
// a= 1 , sum(1)(2) , fn(b) , b= 2 , retunrn sum(3)
// sum(3)(3), a = 3, b=3 , return sum(6)



//-------------
// nameTest = "two"  // as this 'nameTest' has been declared without any variable type, it will become an key in window object of global scope, instead of an variable
// console.log(nameTest)


///
let finalTip = []
let totalAmount = []
let billArray = [100,125,555, 44]

const calcTip = (billValue) => {
    return billValue >= 50 && billValue <=300 ? billValue* 0.15 :  billValue* 0.20
}

const getTip = (billArray) =>{
    if(billArray.length > 0){
        billArray.forEach(element => {
            let receivedTipVal = calcTip(element)
            finalTip.push(receivedTipVal)
            totalAmount.push(element+receivedTipVal)
        });
    }
}

//getTip(billArray)

// console.log("finalTip", finalTip)
// console.log("totalAmount", totalAmount)

//--------------------------------------------------------------------

let mark = {
    name : 'Mark Miller',
    mass : 78,
    height : 1.69,
    calcBMI : function (){
        this.bmi = this.mass / this.height**2
        return this.mass / this.height**2;
    }
}

let john = {
    name : 'John Smith',
    mass : 92,
    height : 1.95,
    calcBMI : function (){
        this.bmi = this.mass / this.height**2
        return this.mass / this.height**2;
    }
}

/* console.log(mark.calcBMI())
console.log(john.calcBMI())

console.log( mark.bmi > john.bmi ? `${mark.name}'s BMI (${mark.bmi}) is higher then ${john.name}'s BMI (${john.bmi})` : `${john.name}'s BMI (${john.bmi}) is higher then ${mark.name}'s BMI (${mark.bmi})`)
 */



////Higher order functions
const upperCase = (str) => {
    let stringVal = str.split(" ")
    console.log(stringVal)
    let [first, ...others] = str.split(" ")
    console.log(others)
    return `Transformed String is : ${first.toUpperCase()} ${others.join(" ")}`
}

// the call and apply methods on functions

let lufthansa = {
    airline: "Lufthansa",
    iataCode : "LH",
    bookings : [],
    book : function(name, flightNum){
        console.log(`Passanger ${name} has booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`)
    }
}

//lufthansa.book("Vishal Dudeja", 2345)

//assign fn to variable

let newAirlineBookings = lufthansa.book
//console.log(newAirlineBookings)

//newAirlineBookings("Vikas Dudeja", 7890)


/// Clousers

let passanger = 10
const parentFunction = ()=>{
    let passanger = 1

    return function(){
        passanger ++ ;
        console.log(passanger)
    }
}


let returnedBooking = parentFunction()

returnedBooking()

// clouser practice

let a =3;

let c ;

let parentFunctionAgain = () =>{
    let b =2 ;
    let d = 6;

    a =  () => b*2
    c = () => b*3 + d*2
}

//console.log(parentFunctionAgain())
/* console.log(b) */
//console.dir(c)

// code challange 

(function(){
    const header = document.querySelector('h1')
    header.style.color ="red"

    let bodyEle = document.querySelector('body')
    bodyEle.addEventListener('click', ()=>header.style.color ="blue")
})()
console.log("test")

