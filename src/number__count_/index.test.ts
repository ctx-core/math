import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { number__count_ } from '../index.js'
test('number__count_', ()=>{
	equal(number__count_([null, 0, 1, null, 3]), 3)
})
test.run()
