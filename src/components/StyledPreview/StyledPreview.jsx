import React from 'react'
import { FlexWrapper, StyledBox, StyledTitle, StyledWrapper } from './StyledPreview.styled'

export const StyledPreview = () => {
	return (
		<div>
			<StyledWrapper>
				<StyledTitle>Hello styled-components</StyledTitle>
			</StyledWrapper>
			<FlexWrapper>
				<StyledBox $color='red'>
					<span>Hello</span>
				</StyledBox>
				<StyledBox $width='300px' $color='green' />
				<StyledBox />
			</FlexWrapper>
		</div>
	)
}
