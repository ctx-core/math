/**
 * Returns the sum of the values mapped by _numerator
 */
export function _fn_sum<I = number>(a1: I[], _numerator: (val: I) => number) {
	let sum = 0
	if (!a1) return sum
	for (let i = 0; i < a1.length; i++) {
		sum += _numerator(a1[i])
	}
	return sum
}
export { _fn_sum as _sum__fn }
