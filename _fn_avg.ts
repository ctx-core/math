import { _fn_sum } from './_fn_sum'
/**
 * Averages the items in in a1
 */
export function _fn_avg<I = number>(a1: I[], _numerator: (val: I) => number) {
	const fn_sum = _fn_sum(a1, _numerator)
	return fn_sum / a1.length
}
export const _avg__fn = _fn_avg
