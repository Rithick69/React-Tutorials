function add(a, b) {
	return a + b;
}
function sub(a, b) {
	return a - b;
}
function div(a, b) {
	return (a / b).toFixed(2); // to restrict the numbers after decimal point to 2
}
function mul(a, b) {
	return a * b;
}

export { add, sub, div, mul };
