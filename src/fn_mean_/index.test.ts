import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { fn_mean_ } from '../index.js'
test('fn_mean_', ()=>{
	equal(
		fn_mean_([null, 1, 2, null, null, 3],
			val=>
				val == null
				? null
				: val * 2),
		4)
})
test.run()