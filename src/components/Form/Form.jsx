import React from 'react'
import { Input } from './Input'
import { useModal } from '../../hooks/useModal'
import Modal from '../Modal/Modal'
import { useWindowSize } from 'react-use'

export const Form = () => {
	const { isOpen, toggle } = useModal()
	const { width, height } = useWindowSize()
	return (
		<div>
			<button onClick={toggle}>Open</button>
			<Input label='Name' />
			<Input label='Email' />
			<Input label='Author' />
			<h1>{width}</h1>
			<h1>{height}</h1>
			{isOpen && (
				<Modal closeModal={toggle}>
					<h2>Form</h2>
				</Modal>
			)}
		</div>
	)
}
