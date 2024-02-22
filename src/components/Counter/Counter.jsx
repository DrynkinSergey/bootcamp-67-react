import React, { useEffect, useMemo, useState } from 'react'
import { Flex, FlexContainer, StyledButton, StyledCounter } from './Counter.styled'

export const Counter = () => {
	const [counter, setCounter] = useState(1)
	const [step, setStep] = useState(1)

	const calcHardValue = () => {
		console.log('Start calc')
		for (let index = 0; index < 100_000_0000; index++) {}
		console.log('Calc end')
		return 2
	}

	// const result = calcHardValue()
	const result = useMemo(() => calcHardValue(), [])
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
		setCounter(prev => prev - step)
	}
	const handleResetClick = event => {
		setStep(1)
		setCounter(0)
	}
	return (
		<FlexContainer>
			<StyledCounter>
				<h1>{counter}</h1>
				<h2>{result}</h2>
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
