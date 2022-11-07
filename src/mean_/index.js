import { sum_ } from '../add/index.js'
/**
 * Average of the numerator_a
 */
export function mean_(numerator_a) {
	let sum = sum_(numerator_a)
	return sum == null ? null : sum / numerator_a.length
}
export { mean_ as avg, mean_ as mean, }
