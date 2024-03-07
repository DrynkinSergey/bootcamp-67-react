import React from 'react'
import s from './TodoList.module.css'
import { useDispatch, useSelector } from 'react-redux'

import clsx from 'clsx'
import { changeFilter, selectFilter } from '../../redux/filterSlice'
const btns = ['all', 'active', 'completed', 'favorites']
export const Filter = () => {
	const dispatch = useDispatch()
	const filter = useSelector(selectFilter)
	return (
		<div className={s.filter}>
			{btns.map(btn => (
				<button className={clsx(filter === btn && s.active)} onClick={() => dispatch(changeFilter(btn))} key={btn}>
					{btn}
				</button>
			))}
		</div>
	)
}
