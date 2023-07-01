// Using call we can borrow any method from any particular object and use it with the properties of different object

let name = {
	firstName: "Vishal",
	lastName: "Dudeja",
	printFullName: function () {
		console.log(this.firstName + " " + this.lastName);
	},
};

name.printFullName();

// let's take another object now which also needs to print full name
let name2 = {
	firstName: "Sachin",
	lastName: "Tendulkar",
};

//Now it's not the good practice to define the printFullName again in second object
//We can borrow the printFullName from the first object using 'call' method and use it with the data of second object

name.printFullName.call(name2);

// --------------
//Another way is instead of keeping the common method inside the object, we can make seprate fn

function printFullName(hometown, state) {
	console.log(
		this.firstName + " " + this.lastName + " " + hometown + " " + state
	);
}

//and then can use the fn like this
// first arg is always the reference object , later args can be the other args to the fn
printFullName.call(name2, "Alwar", "Raj");

/// -------------
// Apply Method
// Only difference is that instead of passing the second and later args separtely to the function
// we can pass the args as an array

printFullName.apply(name2, ["Alwar", "Raj"]);

// bind method
// Instead of directly calling the function, bind returns an copy of the function pointed to towards the refrenced object

let newFn = printFullName.bind(name2, "Alwar", "Rajs");
console.log("newFn", newFn);
newFn();
