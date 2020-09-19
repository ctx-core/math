import { _fn_sum } from './_fn_sum'
/**
 * Returns the sum of the items in numerator_a1, adding 0 if an item is falsy.
 */
export function _numerator_or_0_sum(numerator_a1: number[]) {
	return (
		_fn_sum(
			numerator_a1,
			numerator => numerator || 0)
	)
}
export const _sum__numerator__or__0 = _numerator_or_0_sum
