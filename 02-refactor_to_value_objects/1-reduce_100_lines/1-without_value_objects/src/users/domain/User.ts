import { UserBirthdate } from "./UserBirthdate";
import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";

export class User {
	private _email: UserEmail;
	private readonly _id: UserId;
	private readonly _birthdate: UserBirthdate;
	constructor(id: string, email: string, public birthdate: Date) {
		this._id = new UserId(id);
		this._email = new UserEmail(email);
		this._birthdate = new UserBirthdate(birthdate);
	}

	set email(newEmail: string) {
		this._email = new UserEmail(newEmail);
	}

	get email(): string {
		return this._email.value;
	}
}
