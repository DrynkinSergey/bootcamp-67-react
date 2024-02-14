import React from 'react'
import { StyledBackgroundTheme, StyledColorPalette, StyledColor, StyledColorsList } from './ColorPicker.styled'

export class ColorPicker extends React.Component {
	state = {
		currentColor: 'white',
	}

	handleChangeColor = color => {
		console.log(color)
		this.setState({ currentColor: color })
	}
	render() {
		const { colors } = this.props
		const { currentColor } = this.state
		return (
			<StyledBackgroundTheme $bgColor={currentColor}>
				<StyledColorPalette>
					<h1>Current color: {currentColor}</h1>
					<StyledColorsList>
						{colors.map(item => (
							<StyledColor onClick={() => this.handleChangeColor(item.color)} key={item.id}>
								{item.color}
							</StyledColor>
						))}
					</StyledColorsList>
				</StyledColorPalette>
			</StyledBackgroundTheme>
		)
	}
}

// export const ColorPicker = ({ colors = [] }) => {
// 	return (
// 		<StyledBackgroundTheme>
// 			<StyledColorPalette>
// 				<StyledColorsList>
// 					{colors.map(item => (
// 						<StyledColor key={item.id}>{item.color}</StyledColor>
// 					))}
// 				</StyledColorsList>
// 			</StyledColorPalette>
// 		</StyledBackgroundTheme>
// 	)
// }
