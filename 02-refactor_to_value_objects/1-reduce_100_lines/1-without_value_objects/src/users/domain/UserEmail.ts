import { InvalidArgumentError } from "../../shared/domain/InvalidArgumentError";

export class UserEmail {
	constructor(public readonly value: string) {
		this.ensureEmailIsValid();
	}

	private ensureEmailIsValid(): void {
		const validEmailRegExp =
			/^(?=.*[@](?:gmail\.com|hotmail\.com)$)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9_-]*$/;

		if (!validEmailRegExp.test(this.value)) {
			throw new InvalidArgumentError(`<${this.value}> is not a valid email`);
		}
	}
}
