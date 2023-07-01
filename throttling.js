let btn = document.querySelector("#user_search_btn");

function eventFn(args1, args2) {
	console.log("args", args1, args2);
	console.log("clicked context", this);
}

const throttling = (fn, delay) => {
	let past = 0;

	return function () {
		let now = new Date().getTime();
		console.log(now, "now");

		if (now - past < delay) return;

		past = now;
		return fn();
	};
};

//btn.addEventListener('click', throttling(eventFn , 3000 ))

// ---- Practice -- another way of implementation of throttle

const throttleFunction = (originalFn, delay) => {
	let flag = true;
	let context = this;

	return function (...args) {
		if (flag) {
			originalFn.apply(context, ["test1", "test2"]);
			flag = false;
			setTimeout(() => {
				flag = true;
			}, delay);
		}
	};
};

btn.addEventListener("click", throttleFunction(eventFn, 6000));
