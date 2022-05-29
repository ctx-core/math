/**
 * Adds the arguments
 * @type {import(add).add}
 */
export const add = numerator_a=>{
	if (!numerator_a) return null
	let sum = 0
	for (let i = 0; i < numerator_a.length; i++) {
		sum += numerator_a[i]
	}
	return sum
}
/**
 * Sum of the numerators
 */
export { add as _sum, add as sum, add as sum_, }
