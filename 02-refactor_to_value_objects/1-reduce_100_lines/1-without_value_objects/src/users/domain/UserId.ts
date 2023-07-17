import { validate } from "uuid";

import { InvalidArgumentError } from "../../shared/domain/InvalidArgumentError";

export class UserId {
	constructor(public readonly value: string) {
		this.ensureIdIsValid();
	}

	private ensureIdIsValid(): void {
		if (!validate(this.value)) {
			throw new InvalidArgumentError(`<${this.value}> is not a valid UUID`);
		}
	}
}
