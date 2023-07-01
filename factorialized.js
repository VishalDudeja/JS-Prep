//find factors of the given number

//ex 5! = 5*4*3*2*1 = 120

const calculateFactor = function (number) {
	let factoredValue = 1;
	for (let i = number; i > 0; i--) {
		factoredValue *= i;
	}

	console.log(factoredValue);
};

//calculateFactor(5)

// Using recursion
let initialNumber = 1;
let factoredValue = 1;
function calcFactor(number) {
	if (number > 0) {
		let temp = factoredValue;
		factoredValue *= number;
		number--;
		calcFactor(number);
	} else return console.log(factoredValue);
}

calcFactor(5);
