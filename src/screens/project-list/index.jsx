/*
 * @Author: hypocrisy
 * @Date: 2021-05-03 18:58:16
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-03 21:30:55
 * @FilePath: /mock/src/screens/project-list/index.jsx
 */
import List from './List'
import SearchPanel from './SearchPanel'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { cleanObject } from '../../utils/index'

const api = process.env.REACT_APP_API_URL
const ProjectListScreen = () => {
	const [param, setParam] = useState({ name: '', personId: '' })
	const [users, setUsers] = useState([])
	const [list, setList] = useState([])
	useEffect(() => {
		axios
			.get(`${api}/projects`, { params: cleanObject(param) })
			.then(res => {
				setList(res.data)
			})
	}, [param])
	useEffect(() => {
		axios.get(`${api}/users`).then(res => {
			setUsers(res.data)
		})
	}, [])
	return (
		<div>
			<SearchPanel param={param} setParam={setParam} users={users} />
			<List list={list} users={users} />
		</div>
	)
}
export default ProjectListScreen
