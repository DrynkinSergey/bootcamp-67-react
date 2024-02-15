import React from 'react'
import s from './Employee.module.css'
const skilsList = ['all', 'react', 'angular', 'vue']

export const EmployeesFilter = ({
	searchValue,
	isAvailable,
	isActiveSkill,
	onChangeActiveSkill,
	onChangeSearchValue,
	onChangeIsAvailable,
}) => {
	return (
		<div className={s.filtersWrapper}>
			<h1>Filters</h1>
			<div className={s.flex}>
				<input className={s.input} value={searchValue} onChange={e => onChangeSearchValue(e.target.value)} />
				<label>
					<input checked={isAvailable} onChange={onChangeIsAvailable} type='checkbox' />
					<span> isAvailable</span>
				</label>
			</div>
			<div className={s.flex}>
				{skilsList.map(radioButtonName => (
					<label key={radioButtonName}>
						<input
							name='radioButtonName'
							type='radio'
							value={radioButtonName}
							onChange={() => onChangeActiveSkill(radioButtonName)}
							checked={isActiveSkill === radioButtonName}
						/>
						<span> {radioButtonName}</span>
					</label>
				))}
			</div>
		</div>
	)
}
