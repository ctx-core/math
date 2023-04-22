import type { nullish } from '@ctx-core/function'
/**
 * Returns the sum of the values mapped by numerator_
 */
export declare function fn_sum_<I = number>(
	a:readonly I[],
	numerator_:(val:I)=>(number|nullish)
):number
export {
	fn_sum_ as _fn_sum,
	fn_sum_ as _sum__fn,
}
