import { validate } from "uuid";

import { InvalidArgumentError } from "../../shared/domain/InvalidArgumentError";

export class UserId {
	public static ensureIdIsValid(id: string): void {
		if (!validate(id)) {
			throw new InvalidArgumentError(`<${id}> is not a valid UUID`);
		}
	}
}
