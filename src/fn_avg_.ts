import { fn_sum_ } from './fn_sum_'
/**
 * Averages the items in in a
 */
export function fn_avg_<I = number>(a: I[], _numerator: (val: I) => number) {
	const fn_sum = fn_sum_(a, _numerator)
	return fn_sum / a.length
}
export {
	fn_avg_ as _fn_avg,
	fn_avg_ as _avg__fn,
}
