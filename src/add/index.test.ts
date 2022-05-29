import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { add } from '../index.js'
test('add', ()=>{
	equal(add([2, 1, 3, 0]), 6)
})
test('add|null', ()=>{
	equal(add(null), null)
	equal(add(undefined), null)
})
test.run()
