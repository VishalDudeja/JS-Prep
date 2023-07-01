// A function that takes another function as an arg or returns an function

let radius = [1, 2, 3];

function calcualteArea(radiusVal) {
	return Math.PI * radiusVal * radiusVal;
}

// this mainFunction is higher order funciton
function mainFunction(radiusArr) {
	let outputArr = [];
	for (let i = 0; i < radiusArr.length; i++) {
		outputArr.push(calcualteArea(radiusArr[i]));
	}

	return outputArr;
}
console.log(mainFunction(radius));
