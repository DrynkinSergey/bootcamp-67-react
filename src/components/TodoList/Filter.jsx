import React from 'react'
import s from './TodoList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../redux/todolist/actions'
import { selectFilter } from '../../redux/todolist/selectors'
import clsx from 'clsx'
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
