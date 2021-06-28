import { mean_ } from './mean_'
export function median_(numerator_a:number[]):number {
	const sorted_a = numerator_a.slice().sort()
	const half = numerator_a.length / 2
	return (
		(sorted_a.length % 2 == 0)
		? mean_([sorted_a[Math.ceil(half)], sorted_a[Math.floor(half)]])
		: sorted_a[half]
	)
}
export {
	median_ as median
}
