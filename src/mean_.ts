import { sum } from './add.js'
/**
 * Average of the numerator_a
 */
export function mean_(numerator_a:number[]) {
	return sum(numerator_a) / numerator_a.length
}
export {
	mean_ as avg,
	mean_ as mean,
}
