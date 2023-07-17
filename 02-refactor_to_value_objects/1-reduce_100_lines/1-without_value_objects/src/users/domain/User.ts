import { InvalidArgumentError } from "../../shared/domain/InvalidArgumentError";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";

export class User {
	private _email: UserEmail;
	private readonly _id: UserId;
	constructor(id: string, email: string, public birthdate: Date) {
		this._id = new UserId(id);
		this._email = new UserEmail(email);
		this.ensureBirthdateIsValid(birthdate);
	}

	set email(newEmail: string) {
		this._email = new UserEmail(newEmail);
	}

	get email(): string {
		return this._email.value;
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
