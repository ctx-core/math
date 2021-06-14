/**
 * Returns the sum of the values mapped by numerator_
 */
export function fn_sum_<I = number>(a:I[], numerator_:(val:I)=>number):number {
	let sum = 0
	if (!a) return sum
	for (let i = 0; i < a.length; i++) {
		sum += numerator_(a[i])
	}
	return sum
}
export {
	fn_sum_ as _fn_sum,
	fn_sum_ as _sum__fn,
}
