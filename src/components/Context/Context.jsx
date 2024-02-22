import React from 'react'
import { ChildElement } from './ChildElement'

export const Context = ({ auto }) => {
	return (
		<div>
			Context
			<ChildElement auto={auto} />
		</div>
	)
}
