import React, { useEffect, useMemo, useReducer, useState } from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'
import { counterReducer, initialState } from './reducer'

export const Counter = () => {
	const [state, dispatch] = useReducer(counterReducer, initialState)

	const calcHardValue = () => {
		console.log('Start calc')
		for (let index = 0; index < 100_000_0000; index++) {}
		console.log('Calc end')
		return 2
	}

	// const result = calcHardValue()
	const result = useMemo(() => calcHardValue(), [])

	const handleChangeStep = e => {
		// this.setState({ step: +e.target.value })
		// setStep(+e.target.value)
		dispatch({ type: 'changeStep', payload: +e.target.value })
	}

	const handlePlusClick = () => {
		// setCounter(prev => prev + step)
		dispatch({ type: 'increment' })
	}
	const handleMinusClick = () => {
		// setCounter(prev => prev - step)
		dispatch({ type: 'decrement' })
	}
	const handleResetClick = event => {
		dispatch({ type: 'reset' })
		// setStep(1)
		// setCounter(0)
	}
	return (
		<FlexContainer>
			<StyledCounter>
				<h1>{state.counter}</h1>
				<h2>{result}</h2>
				<input type='number' value={state.step} onChange={handleChangeStep} />
				<Flex>
					<StyledButton onClick={handleMinusClick}>minus</StyledButton>
					<StyledButton onClick={handleResetClick}>reset</StyledButton>
					<StyledButton onClick={handlePlusClick}>plus</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}
