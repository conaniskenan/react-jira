/*
 * @Author: hypocrisy
 * @Date: 2021-05-03 18:58:39
 * @LastEditors: hypocrisy
 * @LastEditTime: 2021-05-03 22:09:17
 * @FilePath: /mock/src/screens/project-list/SearchPanel.jsx
 */
import React from 'react'

const SearchPanel = ({ param, setParam, users }) => {
	return (
		<form>
			<div>
				<input
					type='text'
					value={param.name}
					onChange={e => setParam({ ...param, name: e.target.value })}
				/>
				<select
					value={param.personId}
					onChange={e =>
						setParam({ ...param, personId: e.target.value })
					}
				>
					<option value={''}>负责人</option>
					{users.map(user => (
						<option value={user.id} key={user.id}>
							{user.name}
						</option>
					))}
				</select>
			</div>
		</form>
	)
}
export default SearchPanel
