import React, { useEffect, useRef } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

const Modal = ({ children, closeModal }) => {
	// const a = document.querySelector('button')

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
// class Modal extends React.Component {
// 	intervalId = null
// 	timeoutId = null

// 	componentDidMount() {
// 		document.body.style.overflowY = 'hidden'

// 		console.log('Modal is Open')
// 		document.addEventListener('keydown', this.handleKeyDown)

// 		this.timeoutId = setTimeout(() => {
// 			console.log('Hello')
// 		}, 3000)

// 		this.intervalId = setInterval(() => {
// 			console.log(new Date().toLocaleTimeString())
// 		}, 1000)
// 	}
// 	componentWillUnmount() {
// 		// toast.info('Modal is closed')
// 		document.body.style.overflowY = 'auto'

// 		document.removeEventListener('keydown', this.handleKeyDown)
// 		clearInterval(this.intervalId)
// 		clearTimeout(this.timeoutId)
// 	}

// 	handleKeyDown = e => {
// 		console.log(e.key)
// 		if (e.key === 'Escape') {
// 			this.props.closeModal()
// 		}
// 	}

// 	handleBackdropClick = e => {
// 		// this.props.closeModal()
// 		// console.log('TARGET ->>>>> ', e.target)
// 		// console.log('CURRENT TARGET ->>>>>', e.currentTarget)
// 		if (e.target === e.currentTarget) {
// 			this.props.closeModal()
// 		}
// 	}

// 	render() {
// 		return (
// 			<ModalWrapper onClick={this.handleBackdropClick}>
// 				<ModalContent>
// 					<>
// 						<h1>Modal</h1>
// 						<hr />
// 					</>
// 					<CloseButton onClick={this.props.closeModal}>×</CloseButton>
// 					{this.props.children}
// 				</ModalContent>
// 			</ModalWrapper>
// 		)
// 	}
// }

export default Modal
