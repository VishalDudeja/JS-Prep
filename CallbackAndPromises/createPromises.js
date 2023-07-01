// Create new custom promise

const cart = [];

// how to create/produce a new promise and send it to the consumer

/*promise.then(function () {
	proceedToPayment(orderID); // promise consumer part
});*/

// creating a promise  - producer end

const createOrder = (cart) => {
	let promiseVal = new Promise((resolve, reject) => {
		if (cart?.length === 0) {
			let err = new Error("Cart is empty");
			reject(err);
		}

		let orderID = "1234";

		// what is ID is coming from fetch and will take some time, we can add delay to resolve
		setTimeout(() => resolve(orderID), 5000);
	});

	return promiseVal;
};

const promise = createOrder(cart); // return order ID in promise  - promise generator part

promise
	.then(function (orderID) {
		console.log("order id is ", orderID);
	})
	.catch(function (err) {
		console.log(err.message);
	});

//console.log("then", promise.then());
