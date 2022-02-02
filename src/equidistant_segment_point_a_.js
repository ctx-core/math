import { last_ } from '@ctx-core/array'
/**
 * Returns an array of eqidistant segment boundaries from the count & range
 * @type { import(equidistant_segment_point_a_).equidistant_segment_point_a_}
 */
export const equidistant_segment_point_a_ = opts=>{
	const { length = 1, range = [], } = opts
	const low = range[0] || 0
	const high = last_(range) || 1
	const step = 1 * (high - low) / length
	let equidistant_segment_point_a = [
		low
	]
	let i = 0
	let segment_current_boundary = low
	while (i < length) {
		i++
		segment_current_boundary += step
		equidistant_segment_point_a.push(segment_current_boundary)
	}
	return equidistant_segment_point_a
}
export {
	equidistant_segment_point_a_ as _equidistant_segment_point_a1,
	equidistant_segment_point_a_ as _a1__point__segment__equidistant,
}