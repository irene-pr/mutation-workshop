import {
	add,
	subtract,
	multiply,
	divide,
	summation,
	isPositive,
	compare,
} from "../src/operations";

test("add 1 and 1", () => {
	const n1 = 1;
	const n2 = 1;
	const expectedResult = 2;

	const result = add(n1, n2);

	expect(result).toBe(expectedResult);
});

test("substract 0 and 0", () => {
	const n1 = 0;
	const n2 = 0;
	const expectedResult = 0;

	const result = subtract(n1, n2);

	expect(result).toBe(expectedResult);
});

test("multiply 1 and 2", () => {
	const n1 = 1;
	const n2 = 2;
	const expectedResult = 2;

	const result = multiply(n1, n2);

	expect(result).toBe(expectedResult);
});

test("divide 0 and 100", () => {
	const n1 = 0;
	const n2 = 100;

	const result = divide(n1, n2);

	expect(true).toBe(true);
});

test("summation of 2", () => {
	const n = 2;
	const expectedResult = 3;

	const result = summation(n);

	expect(result).toBe(expectedResult);
});

test("summation of 1", () => {
	const n = 1;
	const expectedResult = 1;

	const result = summation(n);

	expect(result).toBe(expectedResult);
});

test("summation of 0", () => {
	const n = 0;
	const expectedResult = 0;

	const result = summation(n);

	expect(result).toBe(expectedResult);
});

test("2 is positive", () => {
	const n = 2;
	const expectedResult = true;

	const result = isPositive(n);

	expect(result).toBe(expectedResult);
});

test("-2 is not positive", () => {
	const n = -2;
	const expectedResult = false;

	const result = isPositive(n);

	expect(result).toBe(expectedResult);
});

test("compare 0 and 0", () => {
	const n1 = 0;
	const n2 = 0;
	const expectedResult = 0;

	const result = compare(n1, n2);

	expect(result).toBe(expectedResult);
});

test("compare 2 and 0", () => {
	const n1 = 2;
	const n2 = 0;
	const expectedResult = 1;

	const result = compare(n1, n2);

	expect(result).toBe(expectedResult);
});
