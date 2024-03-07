import React, { useState } from 'react'
import s from './Form.module.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
export const PassInputField = ({ register, errors, label, name, placeholder }) => {
	const [type, setType] = useState('password')

	return (
		<div className={s.inputField}>
			<label htmlFor={name}>{label}</label>
			<input
				id={name}
				placeholder={placeholder}
				{...register(name, {
					required: { message: 'Password is required!', value: true },
					minLength: {
						value: 6,
						message: 'Password must be more than 6 chars!',
					},
					maxLength: {
						value: 20,
						message: 'Password must be less than 20 chars!',
					},
				})}
				type={type}
			/>
			<div onClick={() => setType(type === 'password' ? 'text' : 'password')} className={s.iconBtn}>
				{type === 'password' ? <FaEyeSlash /> : <FaEye />}
			</div>
			{errors[name] && <span>{errors[name].message}</span>}
		</div>
	)
}
