import { _last } from '@ctx-core/array'
/**
 * Returns an array of eqidistant segment boundaries from the count & range
 */
export function _equidistant_segment_point_a1(opts: _equidistant_segment_point_a1_opts_type) {
	const {
		length = 1,
		range = [],
	} = opts
	const low = range[0] || 0
	const high = _last<number>(range) || 1
	const step = 1.0 * (high - low) / length
	let equidistant_segment_point_a1 = [low]
	let i = 0
	let segment_current_boundary = low
	while (i < length) {
		i++
		segment_current_boundary += step
		equidistant_segment_point_a1.push(segment_current_boundary)
	}
	return equidistant_segment_point_a1
}
export const _a1__point__segment__equidistant = _equidistant_segment_point_a1
export interface _equidistant_segment_point_a1_opts_type {
	length?:number
	range?:number[]
}
