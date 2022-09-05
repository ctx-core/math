/**
 * Adds the arguments
 * @type {import(add).add}
 */
import { isNumber_ } from '@ctx-core/number'
export const add = numerator_a=>{
	if (!numerator_a) return null
	let sum = null
	for (const $ of numerator_a) {
		if (isNumber_($)) {
			sum = isNumber_(sum) ? sum + $ : $
		}
	}
	return sum
}
/**
 * Sum of the numerators
 */
export { add as _sum, add as sum, add as sum_, }
