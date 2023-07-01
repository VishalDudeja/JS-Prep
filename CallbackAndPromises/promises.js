// Promise ->

//const promise = createOrder(cart)

// This promise will return an empty {} initially, but once it gets processed it will fill the {} with outcome

//promise.then(function(orderID){
//	proceddToPayment(orderID)
//})

/////
// What is Promise -> A promise is an object respresenting the eventual completion or failure of an asyn operation

let GITHUD_API = `https://api.github.com/users/akshaymarch7`;

const user = fetch(GITHUD_API);

console.log(user);

/// Using promises
