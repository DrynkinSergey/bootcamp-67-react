import React, { useCallback, useEffect, useRef } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

const Modal = ({ children, closeModal }) => {
	const handleKeyDown = useCallback(
		e => {
			if (e.key === 'Escape') {
				closeModal()
			}
		},
		[closeModal]
	)

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown)

		return () => {
			console.log('Modal is closed')
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [closeModal, handleKeyDown])

	const handleBackdropClick = e => {
		if (e.target === e.currentTarget) {
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
