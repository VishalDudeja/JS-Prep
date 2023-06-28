//promises chainging

//let cart = ['a', 'b', 'c']
let cart =[]

let validateCart = (cart) =>{
    if(cart?.length > 0){
        return true
    }else return false
}

let createOrder = (cart) =>{
    let pr = new Promise((resolve, reject)=>{
        if(validateCart(cart)){
            setTimeout(()=>{
                console.log("order Id created")
                resolve(12345)
            }, 5000)
          
        }else {
            reject("Cart is not valid!")
        }
    })

    return pr
}

let processPayment = (generatedOrderID) =>{
    return new Promise((resolve, reject)=>{
        if(generatedOrderID){
            setTimeout(()=>{
                resolve(`Payment Successful for OrderID ${generatedOrderID}`)
                console.log("Payment promise resolved")
            }, 3000)
        }else {
            reject("Payment failed due to Invalid OrderID")
        }
    })
}


// calling the APIs and chaining the promises returned from different/multiple APIs
createOrder(cart)
.then(function(orderID){
    console.log("order ID promise resolved and received and id is ", orderID)  
    return processPayment(orderID)
})
.then(function(paymentStatus){
    console.log("Final Payment status is", paymentStatus)
})
/* .catch(err =>{
    console.log("Promise Rejection Error is ", err)
}) */

