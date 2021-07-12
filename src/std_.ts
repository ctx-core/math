import { mean_ } from './mean_'
import { sum_ } from './add'
// sample standard deviation
export function std_(arr:number[]):number {
	const mean = mean_(arr)
	const diff_a = arr.map(a=>(a - mean) ** 2)
	return Math.sqrt(sum_(diff_a) / (arr.length - 1))
}
export {
	std_ as std,
}
