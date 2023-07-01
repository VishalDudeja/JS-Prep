// Reduce method on Array

//Reduce is used - Where you have to take all the values of the array and come up with a single value

const arr = [1, 2, 3, 4, 5, 6];

// find sum or largest number in the given arr

// lets write an normal function to find the sum  without using reduce

const findSum = (arr) => {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
};

//console.log(findSum(arr));

/// Now write the same function using the reduce method

let arr2 = [2, 23, 44, 12, 45, 76, 12, 4];
const findMaxValueInArray = (arr) => {
	let maxValue = arr.reduce((acc, curr) => {
		if (curr > acc) {
			acc = curr;
		}
		return acc;
	}, arr[0]);

	return maxValue;
};

// create an object for the number of age instances in each object
// Make o/p as - { '25': 1, '26': 1, '29': 2 }
const users = [
	{ firtsName: "Vishal", lastName: "Dudeja", age: 29 },
	{ firtsName: "First2", lastName: "last2", age: 31 },
	{ firtsName: "First3", lastName: "First3", age: 25 },
	{ firtsName: "First4", lastName: "First4", age: 29 },
];

const ageObject = (arr) => {
	arr.reduce((acc, curr) => {
		if (acc[curr.age]) {
			acc[curr.age] = ++acc[curr.age];
			console.log("acc if", acc);
		} else {
			acc[curr.age] = 1;
			console.log("acc else", acc);
		}
		return acc;
	}, {});
};

//ageObject(users);

// Make the o/p - array of firstName of people with age<30 => [ 'Vishal', 'First3', 'First4' ]

const getFirstNames = (arr) => {
	let finalNameArray = arr.reduce((acc, curr) => {
		if (curr["age"] < 30) {
			acc.push(curr.firtsName);
		}
		return acc;
	}, []);
	return finalNameArray;
};

console.log(getFirstNames(users));
