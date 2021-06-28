export function quantile_(a:number[], q_a:number[]) {
	const sorted = a.slice().sort()
	return q_a.map(q=>{
		const pos = (sorted.length - 1) * q
		const base = Math.floor(pos)
		const rest = pos - base
		if (sorted[base + 1] !== undefined) {
			return sorted[base] + rest * (sorted[base + 1] - sorted[base])
		} else {
			return sorted[base]
		}
	})
}
export {
	quantile_ as quantile
}
