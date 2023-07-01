//sum(1)(2)(3)(4)()

const sum = (a) => {
	return function (b) {
		if (b) return sum(a + b);
		return a;
	};
};

// console.log(sum(1)(2)(3)(4));

console.log(sum(1)(2)());

/* ----------- */
// practice
// sum(1)(2)(3)(4)....() // 10

const newSum = (a) => {
	return function (b) {
		if (b) {
			return sum(a + b);
		}
		return a;
	};
};

console.log(newSum(1)); // fn c
console.log(newSum(1)(3)); //fn sum(4)
console.log(newSum(1)(3)(5)); //fn fnc (5)
console.log(newSum(1)(3)(5)(8));
console.log(newSum(1)(3)(5)(8)(2));
console.log(newSum(1)(3)(5)(8)(2)());
