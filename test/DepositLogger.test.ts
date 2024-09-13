import { Deposit } from "../src/BankDeposits";
import { DepositLogger } from "../src/DepositLogger";
import { Logger } from "../src/logger";

test("log a deposit", () => {
	const logFun = jest.fn();
	const logger = new Logger(logFun);
	const depositLogger = new DepositLogger(logger);
	const date = new Date(2022, 4, 5, 6, 7, 9);
	const amount = 500;
	const deposit = new Deposit(date, amount);

	depositLogger.addDeposit(deposit);
	depositLogger.logDailyDesposits();

	expect(logFun).toHaveBeenCalledTimes(1);
});
