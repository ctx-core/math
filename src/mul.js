/**
 * Multiplies the arguments
 * @type {import('./mul').mul}
 */
export const mul = values=>{
	let val = values[0]
	for (let i = 1; i < values.length; i++) {
		val *= values[i]
	}
	return val
}