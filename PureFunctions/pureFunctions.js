// A fn which always 'returns' the same o/p for the same provided input data, no state changes, no external effects

//example
function add(a, b) {
	return a + b;
}

// impure function
function subtractWithRandow(a, b) {
	const rnd = Math.random();
	const total = a - b - rnd;
	return total;
}
