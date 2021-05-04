/*
 * @Author: hypocrisy
 * @Date: 2021-05-03 18:58:16
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-04 14:05:13
 * @FilePath: /mock/src/screens/project-list/index.jsx
 */
import List from './List'
import SearchPanel from './SearchPanel'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { cleanObject, useMount, useDebounce } from '../../utils/index'

const api = process.env.REACT_APP_API_URL
const ProjectListScreen = () => {
	const [param, setParam] = useState({ name: '', personId: '' })
	const [users, setUsers] = useState([])
	const [list, setList] = useState([])
	const debounced = useDebounce(param, 1000)
	useEffect(() => {
		axios
			.get(`${api}/projects`, { params: cleanObject(debounced) })
			.then(res => {
				setList(res.data)
			})
	}, [debounced])
	useMount(() => {
		axios.get(`${api}/users`).then(res => {
			setUsers(res.data)
		})
	})
	return (
		<div>
			<SearchPanel param={param} setParam={setParam} users={users} />
			<List list={list} users={users} />
		</div>
	)
}
export default ProjectListScreen
