/**
 * Adds the arguments
 */
export function add(...numerator_a1: number[]) {
	let sum = 0
	for (let i = 0; i < numerator_a1.length; i++) {
		sum += numerator_a1[i]
	}
	return sum
}
/**
 * Sum of the numerators
 */
export const _sum = add
export const sum = _sum
