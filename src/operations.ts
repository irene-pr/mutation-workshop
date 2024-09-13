export function add(a: number, b: number) {
	return a + b;
}

export function subtract(a: number, b: number) {
	return a - b;
}

export function multiply(a: number, b: number) {
	return a * b;
}

export function divide(a: number, b: number) {
	return a / b;
}

export function summation(start: number) {
	let value = 0;
	while (start > 0) {
		value += start;
		start--;
	}
	return value;
}

export function isPositive(number: number) {
	return number > 0;
}

export function compare(a: number, b: number) {
	let value = 0;
	if (a == b) {
		value = 0;
	} else if (a > b) {
		value = 1;
	} else {
		value = -1;
	}
	return value;
}
