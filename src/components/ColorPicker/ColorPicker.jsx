import React, { useState } from 'react'
import { StyledBackgroundTheme, StyledColorPalette, StyledColor, StyledColorsList } from './ColorPicker.styled'

export const ColorPicker = ({ colors }) => {
	const [currentColor, setCurrentColor] = useState('white')

	const handleChangeColor = color => {
		setCurrentColor(color)
	}
	return (
		<StyledBackgroundTheme $bgColor={currentColor}>
			<StyledColorPalette>
				<h1>Current color: {currentColor}</h1>
				<StyledColorsList>
					{colors.map(item => (
						<StyledColor onClick={() => handleChangeColor(item.color)} key={item.id}>
							{item.color}
						</StyledColor>
					))}
				</StyledColorsList>
			</StyledColorPalette>
		</StyledBackgroundTheme>
	)
}
