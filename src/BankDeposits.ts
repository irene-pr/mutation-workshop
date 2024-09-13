import { Logger } from "./logger";
import { MetricManager } from "./metricManager";

export class Deposit {
	public timestamp: string = "";
	public amount: number = 0;

	constructor(date: Date, amount: number) {
		this.timestamp = date.toISOString();
		this.amount = amount;
	}

	public getDate() {
		return this.timestamp.slice(0, 10);
	}
}

export class BankDeposits {
	private minimumDate: Date = new Date(1980);
	private latestTimestamp: string = this.minimumDate.toISOString();
	private deposits: Deposit[] = [];
	private logger: Logger;
	private metrics: MetricManager;

	constructor(logger: Logger, metrics: MetricManager) {
		this.logger = logger;
		this.metrics = metrics;
	}

	public addDeposit(deposit: Deposit) {
		this.deposits.push(deposit);
		this.publishMetrics();

		if (deposit.timestamp > this.latestTimestamp) {
			this.latestTimestamp = deposit.timestamp;
		} else {
			this.logger.error("introduced lesser timestamp");
			throw new Error("introduced lesser timestamp");
		}
	}

	public getDeposits() {
		return this.deposits;
	}

	public getLatestTimestamp() {
		return this.latestTimestamp;
	}

	private publishMetrics() {
		this.metrics.increaseAddDepositCounter();
	}
}
