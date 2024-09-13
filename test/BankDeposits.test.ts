import { BankDeposits, Deposit } from "../src/BankDeposits";
import { Logger } from "../src/logger";
import { MetricManager } from "../src/metricManager";

test("add a deposit and get a deposit", () => {
	const date = new Date(2022, 4, 5, 6, 7, 9);
	const amount = 500;
	const deposit: Deposit = new Deposit(date, amount);
	const logFun = jest.fn();
	const logger = new Logger(logFun);
	const bankDeposit = new BankDeposits(logger, new MetricManager());

	bankDeposit.addDeposit(deposit);
	const deposits = bankDeposit.getDeposits();

	expect(deposits.length).toBe(1);
});

test("add two deposits and get latest timestamp", () => {
	const date1 = new Date(2022, 4, 5, 6, 7, 9);
	const amount1 = 500;
	const deposit1: Deposit = new Deposit(date1, amount1);
	const date2 = new Date(2023, 4, 5, 6, 7, 9);
	const amount2 = 500;
	const deposit2: Deposit = new Deposit(date2, amount2);
	const logFun = jest.fn();
	const logger = new Logger(logFun);
	const bankDeposit = new BankDeposits(logger, new MetricManager());

	bankDeposit.addDeposit(deposit1);
	bankDeposit.addDeposit(deposit2);
	const latestTimestamp = bankDeposit.getLatestTimestamp();

	expect(latestTimestamp).toBe(deposit2.timestamp);
});

test("add two in descending order and throw error", () => {
	const date1 = new Date(2022, 4, 5, 6, 7, 9);
	const amount1 = 500;
	const deposit1: Deposit = new Deposit(date1, amount1);
	const date2 = new Date(2023, 4, 5, 6, 7, 9);
	const amount2 = 500;
	const deposit2: Deposit = new Deposit(date2, amount2);
	const logFun = jest.fn();
	const logger = new Logger(logFun);
	const bankDeposit = new BankDeposits(logger, new MetricManager());

	bankDeposit.addDeposit(deposit2);
	const throwableAction = () => bankDeposit.addDeposit(deposit1);

	expect(throwableAction).toThrow("introduced lesser timestamp");
});
