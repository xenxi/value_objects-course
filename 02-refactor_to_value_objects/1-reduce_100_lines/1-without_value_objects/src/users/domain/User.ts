import { validate } from "uuid";

import { InvalidArgumentError } from "../../shared/domain/InvalidArgumentError";
import { UserEmail } from "./UserEmail";

export class User {
	constructor(public id: string, public email: string, public birthdate: Date) {
		this.ensureIdIsValid(id);
		this.ensureEmailIsValid(email);
		this.ensureBirthdateIsValid(birthdate);
	}

	updateEmail(newEmail: string): void {
		this.ensureEmailIsValid(newEmail);
		this.email = newEmail;
	}

	private ensureIdIsValid(id: string): void {
		if (!validate(id)) {
			throw new InvalidArgumentError(`<${id}> is not a valid UUID`);
		}
	}

	private ensureEmailIsValid(email: string): void {
		UserEmail.ensureEmailIsValid(email);
	}

	private ensureBirthdateIsValid(birthdate: Date): void {
		const currentDate = new Date();
		let ageInYears = currentDate.getFullYear() - birthdate.getFullYear();

		if (
			currentDate.getMonth() < birthdate.getMonth() ||
			(currentDate.getMonth() === birthdate.getMonth() &&
				currentDate.getDate() < birthdate.getDate())
		) {
			ageInYears--;
		}

		if (ageInYears < 18 || ageInYears > 110) {
			throw new InvalidArgumentError(`<${birthdate.toISOString()}> is not a valid birthdate`);
		}
	}
}
