import React from 'react'
import { Card } from './Card'

export const ChildElement = ({ auto }) => {
	return (
		<div>
			ChildElement
			<Card auto={auto} />
		</div>
	)
}
