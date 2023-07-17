import { UserBirthdate } from "./UserBirthdate";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";

export class User {
	private _email: UserEmail;
	private readonly _id: UserId;
	constructor(id: string, email: string, public birthdate: Date) {
		this._id = new UserId(id);
		this._email = new UserEmail(email);
		UserBirthdate.ensureBirthdateIsValid(birthdate);
	}

	set email(newEmail: string) {
		this._email = new UserEmail(newEmail);
	}

	get email(): string {
		return this._email.value;
	}
}
