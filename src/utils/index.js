/*
 * @Author: hypocrisy
 * @Date: 2021-05-03 21:24:26
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-03 22:14:06
 * @FilePath: /mock/src/utils/index.js
 */
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
