import React from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'

export class Counter extends React.Component {
	state = {
		counter: 1,
		step: 1,
	}

	handleChangeStep = e => {
		this.setState({ step: +e.target.value })
	}

	handlePlusClick = () => {
		this.setState(prev => ({ counter: prev.counter + prev.step }))
	}
	handleMinusClick = () => {
		if (this.state.counter !== 0) {
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
