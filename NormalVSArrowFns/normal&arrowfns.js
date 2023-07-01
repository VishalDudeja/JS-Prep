let testFnObject = {
	firstName: "Vishal",
	printNameNormal: function () {
		console.log("this in normal", this); // points to obj
	},
	printNameArrow: () => {
		console.log("this in arrow", this); // points to window
	},
	printArrowInsideNormal: function () {
		console.log("this for arrow inside normal parent", this); // points to obj

		let innerChildArrow = () => {
			console.log("this for arrow inside normal child", this); // points to obj as now the outer lexical is 'printArrowInsideNormal'
		};
		innerChildArrow();

		function innerChildNormal() {
			console.log("this for normal inside normal child", this);
		}
		innerChildNormal(); // points to window in normal mode or 'indefined' in strict
	},
};

testFnObject.printNameNormal();
testFnObject.printNameArrow();
testFnObject.printArrowInsideNormal();
