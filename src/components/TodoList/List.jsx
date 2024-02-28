import React, { useState } from 'react'
import { TodoItem } from './TodoItem'
import { useSelector } from 'react-redux'
import { selectFilter, selectTodos } from '../../redux/todolist/selectors'
import s from './TodoList.module.css'
import { useModal } from '../../hooks/useModal'
import Modal from '../Modal/Modal'
import { EditForm } from './EditForm'
export const List = () => {
	const { isOpen, toggle } = useModal()
	const [content, setContent] = useState('')
	const todos = useSelector(selectTodos)
	const filter = useSelector(selectFilter)
	const getFilteredData = () => {
		switch (filter) {
			case 'active':
				return todos.filter(item => !item.completed)
			case 'favorites':
				return todos.filter(item => item.favorite)
			case 'completed':
				return todos.filter(item => item.completed)
			default:
				return todos
		}
	}
	const handleEditItem = content => {
		toggle()
		setContent(content)
	}
	const filteredData = getFilteredData()

	return (
		<ul className={s.list}>
			{filteredData.map(todo => (
				<TodoItem handleEditItem={() => handleEditItem(todo)} key={todo.id} {...todo} />
			))}
			{isOpen && (
				<Modal closeModal={toggle}>
					<EditForm content={content} toggle={toggle} />
				</Modal>
			)}
		</ul>
	)
}
