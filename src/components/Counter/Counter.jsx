import React from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'

export class Counter extends React.Component {
	state = {
		counter: 1,
	}

	handlePlusClick = () => {
		// this.state.counter = 2 - НЕ МОЖНА ПИСАТИ ЗМІНУ СТЕЙТУ

		this.setState({ counter: this.state.counter + 1 })
	}
	handleMinusClick = () => {
		if (this.state.counter !== 0) {
			this.setState({ counter: this.state.counter - 1 })
		} else {
			alert('Counter less than 0')
		}
	}
	handleResetClick = event => {
		console.log(event.target.innerHTML)
		event.target.innerHTML = 'Hello base event'
	}

	render() {
		return (
			<FlexContainer>
				<StyledCounter>
					<h1>{this.state.counter}</h1>
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
