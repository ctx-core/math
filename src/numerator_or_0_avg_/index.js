import { fn_mean_ } from '../fn_mean_/index.js'
/**
 * Averages the items in argument a1, adding 0 if the item is falsy
 */
export function numerator_or_0_avg_(numerator_a) {
	return fn_mean_(numerator_a, $=>$ || 0)
}
export { numerator_or_0_avg_ as _numerator_or_0_avg, numerator_or_0_avg_ as _avg__numerator__or__0, }
