import React, { useId } from 'react'

export const Input = ({ label }) => {
	const id = useId()
	return (
		<label htmlFor={id}>
			{label}
			<input id={id} />
		</label>
	)
}
