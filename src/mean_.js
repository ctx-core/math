import { sum } from './add.js'
/**
 * Average of the numerator_a
 * @type {import('./mean_.d.ts').mean_}
 * @param {number[]} numerator_a
 */
export const mean_ = numerator_a=>
	sum(numerator_a) / numerator_a.length
export { mean_ as avg, mean_ as mean, }
