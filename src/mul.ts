/**
 * Multiplies the arguments
 */
export function mul(product, ...numerator_a1: number[]) {
	for (let i = 0; i < numerator_a1.length; i++) {
		product *= numerator_a1[i]
	}
	return product
}
