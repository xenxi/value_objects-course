import { InvalidArgumentError } from "../../shared/domain/InvalidArgumentError";

export class UserBirthdate {
	constructor(public readonly value: Date) {
		this.ensureBirthdateIsValid();
	}

	private ensureBirthdateIsValid(): void {
		const currentDate = new Date();
		let ageInYears = currentDate.getFullYear() - this.value.getFullYear();

		if (
			currentDate.getMonth() < this.value.getMonth() ||
			(currentDate.getMonth() === this.value.getMonth() &&
				currentDate.getDate() < this.value.getDate())
		) {
			ageInYears--;
		}

		if (ageInYears < 18 || ageInYears > 110) {
			throw new InvalidArgumentError(`<${this.value.toISOString()}> is not a valid birthdate`);
		}
	}
}
