import { InvalidArgumentError } from "../../shared/domain/InvalidArgumentError";

export class UserEmail {
	public static ensureEmailIsValid(email: string): void {
		const validEmailRegExp =
			/^(?=.*[@](?:gmail\.com|hotmail\.com)$)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z0-9_-]*$/;

		if (!validEmailRegExp.test(email)) {
			throw new InvalidArgumentError(`<${email}> is not a valid email`);
		}
	}
}
