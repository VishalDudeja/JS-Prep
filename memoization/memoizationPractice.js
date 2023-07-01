let total = 0;
const sum = (number) => {
	for (let i = 0; i <= number; i++) {
		total += i;
	}

	return total;
};

const memoizedFunction = (fn) => {
	let memoizedObj = {};

	return function (...args) {
		let receivedNumber = args[0];
		//console.log("memoizedObj", memoizedObj);
		if (memoizedObj[receivedNumber]) {
			console.log("memo");
			total = memoizedObj[receivedNumber];
			//console.log("memoizedObj", memoizedObj);
			return total;
		} else {
			console.log("first");
			total = fn(receivedNumber);
			memoizedObj[receivedNumber] = total;
			//console.log("memoizedObj", memoizedObj);
			return total;
		}
	};
};

let betterFunction = memoizedFunction(sum);

console.time();
console.log(betterFunction(5));
console.timeEnd();

console.time();
console.log(betterFunction(5));
console.timeEnd();

console.time();
console.log(betterFunction(5));
console.timeEnd();
