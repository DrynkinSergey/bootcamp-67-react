import React, { useState } from 'react'
import { TodoItem } from './TodoItem'
import { useSelector } from 'react-redux'
import s from './TodoList.module.css'
import { useModal } from '../../hooks/useModal'
import Modal from '../Modal/Modal'
import { EditForm } from './EditForm'
import { selectFilteredData, selectFilteredDataMemo } from '../../redux/todolist/selectors'

export const List = () => {
	const { isOpen, toggle } = useModal()
	const [content, setContent] = useState('')
	const todos = useSelector(selectFilteredDataMemo)

	const handleEditItem = content => {
		toggle()
		setContent(content)
	}

	return (
		<ul className={s.list}>
			{todos.map(todo => (
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
