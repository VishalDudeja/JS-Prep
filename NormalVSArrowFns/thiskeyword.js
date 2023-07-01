// 1. Normal function -> this keyword referes to the the window object (In normal mode)
// in 'strict mode' -> undefined
"use strict";
function testThis() {
	console.log("this", this);
}
//testThis();

// 2. In arrow fn - this always refers to the sourrounding fn (lexical scope)

function parentFnOfArrow() {
	const thisWithArrow = () => {
		console.log("this with arrow", this);
	};
	thisWithArrow();
}

const thisWithArrow = () => {
	console.log("this with arrow", this);
};

//parentFnOfArrow();

// 3. In the  obj, this points to obj which is calling it

let objArrow = {
	name: "Test Arrow",
	printName: function () {
		console.log("this in objArrow", this);
		console.log(this.name);
	},
	printNameArrowFn: () => {
		console.log("this in printNameArrowFn", this);
		console.log(this.name);
	},
};

//objArrow.printName();  // will refer to the 'objArrow' obj
let newFn = objArrow.printName;
newFn(); // this is undefined or window obj based on strict mode enabled or not
