/**
 * Subtracts each in denominator_a1 from the value
 */
export function sub(value, ...denominator_a1) {
	for (let i = 0; i < denominator_a1.length; i++) {
		value -= denominator_a1[i]
	}
	return value
}
