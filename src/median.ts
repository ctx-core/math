export function median(numerator_a:number[]):number {
	return numerator_a.slice().sort()[numerator_a.length / 2]
}
