/* Example:
Input : "hello"
Output : h occur 1 times
         e occur 1 times
         l occur 2 times
         o occur 1 times
Explanation : here "hello" have 1 h, so it have 1 value.
               as same e have 1, l have 2 , o have 1. */

let testString = "odd";

let countFrequency = (str) => {
	console.log("str", str);
	let newStrArray = str.split("");
	console.log("newStrArray", newStrArray);

	let frequencyObj = {};
	for (let i = 0; i < newStrArray.length; i++) {
		if (frequencyObj[newStrArray[i]]) {
			frequencyObj[newStrArray[i]] = ++frequencyObj[newStrArray[i]];
		} else {
			frequencyObj[newStrArray[i]] = 1;
		}
	}

	return frequencyObj;
};

let printFrequency = (frequencyObj) => {
	for (const property in frequencyObj) {
		console.log(`${property} occurres for ${frequencyObj[property]} times`);
	}
};

printFrequency(countFrequency(testString));

//console.log(countFrequency(testString));
