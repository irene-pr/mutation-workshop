export class Logger {
	private infoLogFunction: Function = console.log;
	private errorLogFunction: Function = console.log;

	constructor(info?: Function, error?: Function) {
		this.infoLogFunction = info ?? console.log;
		this.errorLogFunction = error ?? console.log;
	}

	public info(log: string) {
		this.infoLogFunction(log);
	}

	public error(log: string) {
		this.infoLogFunction(log);
	}
}
