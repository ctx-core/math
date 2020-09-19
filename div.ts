/**
 * Divides each in denominator_a1 from the value
 */
export function div(value: number, ...denominator_a1: number[]) {
	for (let i = 0; i < denominator_a1.length; i++) {
		value /= denominator_a1[i]
	}
	return value
}
