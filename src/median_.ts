import { isNumber } from '@ctx-core/number'
import { mean_ } from './mean_'
export function median_(numerator_a:number[], sorted_ = median_sorted_):number {
	const sorted = sorted_(numerator_a)
	const half = sorted.length / 2
	return (
		(sorted.length % 2 == 0)
		? sorted[half]
		: mean_([sorted[Math.ceil(half)], sorted[Math.floor(half)]])
	)
}
export function median_sorted_(a:number[]):number[] {
	return a.filter(isNumber).sort((val0, val1)=>
		val0 - val1
	)
}
