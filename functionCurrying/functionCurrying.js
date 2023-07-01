// Function currying -> we make a copy of an function and make more functions out of it by presetting some args inside the function

//Way -1 - using bind method

function multiply(x, y) {
	return x * y;
}

let mutliplyByTwo = multiply.bind(this, 2);
// here we have made a copy of multiply fn using bind method with presetting the value of x as 2 bydefault

console.log(mutliplyByTwo(5)); // o/p -> 10

//same way we can make more functions out of it
//like
let mutliplyByThree = multiply.bind(this, 3);
console.log(mutliplyByThree(5)); // o/p - 15

/////-------------

// Way -2
// Using clousers
let multiplyWithClouser = (x) => {
	return function (y) {
		return x * y;
	};
};

let mutliplyByTwoWithClouser = multiplyWithClouser(2);
console.log("mutliplyByTwoWithClouser", mutliplyByTwoWithClouser(3));

let mutliplyByThreeWithClouser = multiplyWithClouser(3);
console.log("mutliplyByThreeWithClouser", mutliplyByThreeWithClouser(3));
