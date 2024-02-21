import React, { useEffect, useRef } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

const Modal = ({ children, closeModal }) => {
	useEffect(() => {
		const handleKeyDown = e => {
			console.log(e.key)
			if (e.key === 'Escape') {
				// this.props.closeModal()
				closeModal()
			}
		}
		document.addEventListener('keydown', handleKeyDown)

		return () => {
			console.log('Modal is closed')
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [closeModal])

	const handleBackdropClick = e => {
		if (e.target === e.currentTarget) {
			// this.props.closeModal()
			closeModal()
		}
	}
	return (
		<ModalWrapper onClick={handleBackdropClick}>
			<ModalContent>
				<>
					<h1>Modal</h1>
					<hr />
				</>
				<CloseButton onClick={closeModal}>×</CloseButton>
				{children}
			</ModalContent>
		</ModalWrapper>
	)
}

export default Modal
