import React, { useEffect, useState } from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'

export const Counter = () => {
	// useState

	// const exampleFn = value => {
	// 	return [
	// 		value,
	// 		() => {
	// 			console.log('hello')
	// 		},
	// 	]
	// }
	// const [name, setName] = exampleFn('Evhen')

	const [counter, setCounter] = useState(1)
	const [step, setStep] = useState(1)

	// Виконається еффект лише один раз, тому що пустий массив залежностей!
	// analog componentDidMount
	useEffect(() => {
		console.log('Hello world')
	}, [])
	// Виконуєть перший раз, а також всі наступні, коли ми чіпаємо змінну з залежностей
	// analog componentDidUpdate
	useEffect(() => {
		console.log('Counter was changed to:', counter)
	}, [counter])

	useEffect(() => {
		console.log('Step was changed to:', step)
	}, [step])

	useEffect(() => {
		console.log(counter + step)
	}, [counter, step])

	const handleChangeStep = e => {
		// this.setState({ step: +e.target.value })
		setStep(+e.target.value)
	}

	const handlePlusClick = () => {
		// this.setState(prev => ({ counter: prev.counter + prev.step }))
		setCounter(prev => prev + step)
	}
	const handleMinusClick = () => {
		// if (this.state.counter !== 0) {
		// 	this.setState(prev => ({ counter: prev.counter - prev.step }))
		// } else {
		// 	alert('Counter less than 0')
		// }
		setCounter(prev => prev - step)
	}
	const handleResetClick = event => {
		// this.setState({ counter: 0, step: 1 })
		setStep(1)
		setCounter(0)
	}
	return (
		<FlexContainer>
			<StyledCounter>
				<h1>{counter}</h1>
				<input type='number' value={step} onChange={handleChangeStep} />
				<Flex>
					<StyledButton onClick={handleMinusClick}>minus</StyledButton>
					<StyledButton onClick={handleResetClick}>reset</StyledButton>
					<StyledButton onClick={handlePlusClick}>plus</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}

// export class Counter extends React.Component {
// 	state = {
// 		counter: 1,
// 		step: 1,
// 	}
// 	componentDidMount() {
// 		console.log('Компонент є на сторінці')
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		if (prevState.counter !== this.state.counter) {
// 			console.log('Counter was updated!')
// 		}
// 		if (prevState.step !== this.state.step) {
// 			console.log('Step was updated!')
// 		}
// 		if (prevState.counter === 4) {
// 			console.log('Counter was 4')
// 		}
// 		if (this.state.counter === 6) {
// 			this.setState({ counter: 1 })
// 		}
// 	}

// handleChangeStep = e => {
// 	this.setState({ step: +e.target.value })
// }

// handlePlusClick = () => {
// 	this.setState(prev => ({ counter: prev.counter + prev.step }))
// }
// handleMinusClick = () => {
// 	if (this.state.counter !== 0) {
// 		this.setState(prev => ({ counter: prev.counter - prev.step }))
// 	} else {
// 		alert('Counter less than 0')
// 	}
// }
// handleResetClick = event => {
// 	this.setState({ counter: 0, step: 1 })
// }

// 	render() {
// return (
// 	<FlexContainer>
// 		<StyledCounter>
// 			<h1>{this.state.counter}</h1>
// 			<input type='number' value={this.state.step} onChange={this.handleChangeStep} />
// 			<Flex>
// 				<StyledButton onClick={this.handleMinusClick}>minus</StyledButton>
// 				<StyledButton onClick={this.handleResetClick}>reset</StyledButton>
// 				<StyledButton onClick={this.handlePlusClick}>plus</StyledButton>
// 			</Flex>
// 		</StyledCounter>
// 	</FlexContainer>
// )
// 	}
// }
