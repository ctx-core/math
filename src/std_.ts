import { mean_ } from './mean_.js'
import { sum_ } from './add.js'
// sample standard deviation
export function std_(a:number[]):number {
	if (a.length <= 1) return 0
	const mean = mean_(a)
	const diff_a = a.map(a=>(a - mean) ** 2)
	return Math.sqrt(sum_(diff_a) / (a.length - 1))
}
export {
	std_ as std,
}
