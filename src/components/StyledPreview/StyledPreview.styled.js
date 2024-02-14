import styled from 'styled-components'

export const FlexWrapper = styled.div`
	display: flex;
	gap: 10px;
`

export const StyledWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
`
export const StyledTitle = styled.h2`
	font-size: 3rem;
	font-weight: bold;
	color: teal;
`
export const StyledBox = styled.div`
	width: ${props => props.$width || '150px'};
	height: ${props => props.$height || '150px'};
	/* display: flex;
	justify-content: center;
	align-items: center; */
	display: grid;
	place-items: center;
	background-color: ${props => props.$color || 'black'};
	&:hover {
		background-color: teal;
	}
	span {
		color: white;
		font-size: 2rem;
	}
`
