import { _fn_avg } from './_fn_avg'
/**
 * Averages the items in in a1, adding 0 if the item is falsy
 */
export function _numerator_or_0_avg(numerator_a1: number[]) {
	return (
		_fn_avg(
			numerator_a1,
			numerator => numerator || 0)
	)
}
export const _avg__numerator__or__0 = _numerator_or_0_avg
