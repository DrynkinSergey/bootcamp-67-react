import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/userSlice'

export const UserForm = () => {
	const { register, handleSubmit, reset } = useForm()
	const dispatch = useDispatch()
	const submit = data => {
		dispatch(login(data.username))
		reset()
	}
	return (
		<div>
			<h2>Enter your name to login:</h2>
			<form onSubmit={handleSubmit(submit)}>
				<input {...register('username')} type='text' />
				<button>Login</button>
			</form>
		</div>
	)
}

// Створити функцію по зміні туду. Реалізувати додавання автора в туду
// 1. Створити функцію +
// 2. Знайти елемент +
// 3. Пробігти по массиву +
// 4. Знайти по айді, що є в елементі та порівняти з тим що приходить +
// 5. Якщо ми знайшли елемент ...+
// 6. Якщо не знайшли ... +
// 7. Достукатись до автора +
// 8. Передати його на етапі створення туду +

const addTodo = (data, id) => {
	const author = 'Oleh'
	data.map(item => (item.id === id ? { ...item, author } : item))
}
