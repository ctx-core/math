import { sum } from './add'
/**
 * Average of the numerator_a1
 */
export function avg(...numerator_a1: number[]) {
	return sum(...numerator_a1) / numerator_a1.length
}
