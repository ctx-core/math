import { sum } from './add/index.js'
/**
 * Average of the numerator_a
 */
export const mean_ = numerator_a=>
	sum(numerator_a) / numerator_a.length
export { mean_ as avg, mean_ as mean, }
