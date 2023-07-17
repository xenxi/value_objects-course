import { InvalidArgumentError } from "../../shared/domain/InvalidArgumentError";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";

export class User {
	private email: UserEmail;
	private readonly id: UserId;
	constructor(id: string, email: string, public birthdate: Date) {
		this.id = new UserId(id);
		this.email = new UserEmail(email);
		this.ensureBirthdateIsValid(birthdate);
	}

	updateEmail(newEmail: string): void {
		this.email = new UserEmail(newEmail);
	}

	get userEmail(): string {
		return this.email.value;
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
