import { Deposit } from "./BankDeposits";
import { Logger } from "./logger";

export class DepositLogger {
	private logger: Logger;
	private oldDeposits: {
		[date: string]: Deposit[];
	} = {};
	private oldDates: string[] = [];

	private dailyDeposits: {
		[date: string]: Deposit;
	} = {};

	private replacements: {
		[date: string]: [number, number];
	} = {};

	constructor(logger: Logger) {
		this.logger = logger;
	}

	public addDeposit(deposit: Deposit) {
		if (!this.oldDeposits.hasOwnProperty(deposit.getDate())) {
			this.oldDeposits[deposit.getDate()] = [];
			this.oldDates.push(deposit.getDate());
		}

		this.oldDeposits[deposit.getDate()].push(deposit);
	}

	private processNewDeposits() {
		for (const day of this.oldDates) {
			const oldDeposit = this.oldDeposits[day];
			const totalAmount = oldDeposit.reduce(
				(accumulator, current) => accumulator + current.amount,
				0
			);
			this.dailyDeposits[day] = new Deposit(new Date(day), totalAmount);
		}
	}

	public logDailyDesposits() {
		this.processNewDeposits();

		for (const day in this.dailyDeposits) {
			const log = `For day ${day} we have ${this.dailyDeposits[day].amount}€ in deposits`;
			this.logger.info(log);
		}

		for (const day of this.oldDates) {
			this.replacements[day] = [
				this.oldDeposits[day].length,
				this.dailyDeposits[day].amount,
			];
		}
	}
}
