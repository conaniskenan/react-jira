/* eslint-disable */
/*
 * @Author: hypocrisy
 * @Date: 2021-05-03 21:24:26
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-04 13:58:05
 * @FilePath: /mock/src/utils/index.js
 */
import { useEffect, useState } from 'react'
export const cleanObject = obj => {
	const res = { ...obj }
	Object.keys(obj).forEach(key => {
		const value = res[key]
		if (value === '' ?? value == null) {
			delete res[key]
		}
	})
	return res
}
export const useMount = callback => {
	useEffect(() => {
		callback()
	}, [])
}
export const useDebounce = (value, delay) => {
	const [debouceValue, setDebouceValue] = useState(value)
	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouceValue(value)
		}, delay)
		return () => {
			clearTimeout(timer)
		}
	}, [value, delay])
	return debouceValue
}
