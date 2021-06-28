import { mean_ } from './mean_'
import { sum_ } from './add'
// sample standard deviation
export function std(arr:number[]) {
	const mean = mean_(arr)
	const diffArr = arr.map(a=>(a - mean) ** 2)
	return Math.sqrt(sum_(diffArr) / (arr.length - 1))
}
