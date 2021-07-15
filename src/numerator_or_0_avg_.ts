import { fn_mean_ } from './fn_mean_.js'
/**
 * Averages the items in in a1, adding 0 if the item is falsy
 */
export function numerator_or_0_avg_(numerator_a:number[]):number {
	return (
		fn_mean_(
			numerator_a,
			numerator=>numerator || 0)
	)
}
export {
	numerator_or_0_avg_ as _numerator_or_0_avg,
	numerator_or_0_avg_ as _avg__numerator__or__0,
}
