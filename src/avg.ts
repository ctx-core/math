import { sum } from './add'
/**
 * Average of the numerator_a
 */
export function avg(...numerator_a: number[]) {
	return sum(...numerator_a) / numerator_a.length
}
