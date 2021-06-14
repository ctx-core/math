/**
 * Multiplies the arguments
 */
export function mul(product:number, numerator_a:number[]):number {
	for (let i = 0; i < numerator_a.length; i++) {
		product *= numerator_a[i]
	}
	return product
}
