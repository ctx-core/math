/**
 * Returns the index of the segment
 */
export function segment_point_index(value: number, point_a1: number[]) {
	const { length } = point_a1
	for (let i = 0; i < length; i++) {
		const begin_point = point_a1[i]
		const end_point = point_a1[i + 1]
		if (
			value >= begin_point
			&& value <= end_point
		) return i
	}
	return -1
}
export const index__point__segment = segment_point_index
