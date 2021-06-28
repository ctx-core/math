export function median_(numerator_a:number[]):number {
	return numerator_a.slice().sort()[numerator_a.length / 2]
}
export {
	median_ as median
}
