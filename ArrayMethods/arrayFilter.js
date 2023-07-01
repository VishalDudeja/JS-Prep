// Filter method on Array

// Filter out the odd values in an Array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const isOdd = (x) => {
	return x % 2;
};

console.log(arr.filter((eachValue) => eachValue % 2));
