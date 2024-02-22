import React, { useContext } from 'react'
import { MyContext } from '../../App'

export const Card = ({ auto }) => {
	// const contextValue = useContext(MyContext)
	// console.log(contextValue)
	return (
		<div>
			<h2>{auto}</h2>
			{/* <h2>{contextValue.film}</h2> */}
		</div>
	)
}
