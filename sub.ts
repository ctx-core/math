/**
 * Subtracts each in a1__denominator from the value
 */
export function sub(value, ...a1__denominator) {
	for (let i = 0; i < a1__denominator.length; i++) {
		value -= a1__denominator[i]
	}
	return value
}
