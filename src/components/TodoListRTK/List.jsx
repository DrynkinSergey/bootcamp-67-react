import React, { useState } from 'react'
import { TodoItem } from './TodoItem'
import s from './TodoList.module.css'
import { useModal } from '../../hooks/useModal'
import Modal from '../Modal/Modal'
import { EditForm } from './EditForm'
import { useGetTodosQuery } from '../../redux/RTK_Query/todoApi'

export const List = () => {
	const { isOpen, toggle } = useModal()
	const [content, setContent] = useState('')

	const { data, isLoading, isError } = useGetTodosQuery()

	const handleEditItem = content => {
		toggle()
		setContent(content)
	}

	if (isLoading) {
		return <h1>loading...</h1>
	}

	if (isError) {
		return <h1>Error...</h1>
	}
	return (
		<ul className={s.list}>
			{data?.map(todo => (
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
