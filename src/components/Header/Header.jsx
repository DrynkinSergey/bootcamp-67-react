import React from 'react'
import { StyledButton } from '../Counter/Counter.styled'
import styled from 'styled-components'

export const Header = () => {
	return (
		<StyledHeader>
			<h1>Lifecycles</h1>
			<StyledButton $border='2px solid black' $size='1.5rem'>
				Open modal
			</StyledButton>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 5px 20px;
	font-weight: bold;
	align-items: center;
`
