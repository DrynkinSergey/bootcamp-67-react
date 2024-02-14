import React from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'

export class Counter extends React.Component {
	state = {
		counter: 1,
		step: 1,
	}

	handleChangeStep = e => {
		console.log(e.target.value)
		this.setState({ step: +e.target.value })
	}

	handlePlusClick = () => {
		// this.state.counter = 2 - НЕ МОЖНА ПИСАТИ ЗМІНУ СТЕЙТУ
		// this.setState({ counter: this.state.counter + 1 }, () => {
		// 	console.log(this.state.counter)
		// })
		this.setState(prev => ({ counter: prev.counter + prev.step }))
	}
	handleMinusClick = () => {
		if (this.state.counter !== 0) {
			// this.setState({ counter: this.state.counter - 1 })
			// this.setState({ counter: this.state.counter - 1 })
			// this.setState({ counter: this.state.counter - 1 })

			this.setState(prev => ({ counter: prev.counter - prev.step }))
		} else {
			alert('Counter less than 0')
		}
	}
	handleResetClick = event => {
		this.setState({ counter: 0, step: 1 })
	}

	render() {
		return (
			<FlexContainer>
				<StyledCounter>
					<h1>{this.state.counter}</h1>
					<input type='number' value={this.state.step} onChange={this.handleChangeStep} />
					<Flex>
						<StyledButton onClick={this.handleMinusClick}>minus</StyledButton>
						<StyledButton onClick={this.handleResetClick}>reset</StyledButton>
						<StyledButton onClick={this.handlePlusClick}>plus</StyledButton>
					</Flex>
				</StyledCounter>
			</FlexContainer>
		)
	}
}

// export const Counter = () => {
// 	let counter = 1
// 	const handlePlusClick = () => {
// 		counter += 1
// 		console.log(counter)
// 	}
// 	const handleMinusClick = () => {
// 		alert('Error')
// 		console.log('Minus click was clicked')
// 	}
// 	const handleResetClick = event => {
// 		console.log(event.target.innerHTML)
// 		event.target.innerHTML = 'Hello base event'
// 	}
// return (
// 	<FlexContainer>
// 		<StyledCounter>
// 			<h1>{counter}</h1>
// 			<Flex>
// 				<StyledButton onClick={handleMinusClick}>minus</StyledButton>
// 				<StyledButton onClick={handleResetClick}>reset</StyledButton>
// 				<StyledButton onClick={handlePlusClick}>plus</StyledButton>
// 			</Flex>
// 		</StyledCounter>
// 	</FlexContainer>
// )
// }
