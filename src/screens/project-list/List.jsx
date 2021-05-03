/*
 * @Author: hypocrisy
 * @Date: 2021-05-03 18:58:25
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-03 21:04:46
 * @FilePath: /mock/src/screens/project-list/List.jsx
 */
import React from 'react'
const List = ({ list, users }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>项目名称</th>
					<th>负责人</th>
				</tr>
			</thead>
			<tbody>
				{list.map(project => {
					return (
						<tr key={project.id}>
							<td>{project.name}</td>
							<td>
								{users.find(user => user.id === project.personId)
									?.name || '未知'}
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}
export default List
