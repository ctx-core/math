import { isNumber } from '@ctx-core/number'
export function quantile_<Bound extends number[]>(
	a:number[], bound_a:Bound, sorted_ = quantile_sorted_
):Bound {
	const sorted = sorted_(a)
	return bound_a.map(q=>{
		if (sorted.length === 0) return 0
		const pos = Math.floor((sorted.length - 1) * q)
		const base = pos
		const rest = pos - base
		const quantile_val = (
			(sorted[base + 1] !== undefined)
			? sorted[base] + rest * (sorted[base + 1] - sorted[base])
			: sorted[base]
		)
		return quantile_val
	}) as Bound
}
export function quantile_sorted_(a:number[]):number[] {
	return a.filter(isNumber).sort((val0, val1)=>
		val0 - val1
	)
}
export {
	quantile_ as quantile
}
