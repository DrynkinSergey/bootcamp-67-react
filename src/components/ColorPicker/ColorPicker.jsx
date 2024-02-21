import React, { useState } from 'react'
import { StyledBackgroundTheme, StyledColorPalette, StyledColor, StyledColorsList } from './ColorPicker.styled'

export const ColorPicker = ({ colors }) => {
	const [currentColor, setCurrentColor] = useState('white')

	const handleChangeColor = color => {
		// console.log(color)
		// this.setState({ currentColor: color })
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

// export class ColorPicker extends React.Component {
// 	state = {
// 		currentColor: 'white',
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		console.log('Update')
// 	}

// 	shouldComponentUpdate(nextProps, nextState) {
// 		return nextState.currentColor !== this.state.currentColor // true || false !
// 	}

// handleChangeColor = color => {
// 	// console.log(color)
// 	this.setState({ currentColor: color })
// }
// 	render() {
// 		const { colors } = this.props
// 		const { currentColor } = this.state
// return (
// 	<StyledBackgroundTheme $bgColor={currentColor}>
// 		<StyledColorPalette>
// 			<h1>Current color: {currentColor}</h1>
// 			<StyledColorsList>
// 				{colors.map(item => (
// 					<StyledColor onClick={() => this.handleChangeColor(item.color)} key={item.id}>
// 						{item.color}
// 					</StyledColor>
// 				))}
// 			</StyledColorsList>
// 		</StyledColorPalette>
// 	</StyledBackgroundTheme>
// )
// 	}
// }
