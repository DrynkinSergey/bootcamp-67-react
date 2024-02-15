import s from './RegisterForm.module.css'
export const RegisterFormUncontrolled = ({ register }) => {
	const handleSubmit = e => {
		e.preventDefault()
		const form = e.currentTarget
		const userName = form.elements.userName.value
		const email = form.elements.email.value
		const password = form.elements.password.value
		const gender = form.elements.gender.value
		const country = form.elements.country.value
		const agree = form.elements.agree.checked
		console.log(agree)
		if (!agree) {
			return
		}
		register({ userName, email, password, gender, country })
		localStorage.setItem('data', JSON.stringify({ userName, email, password, gender, country }))
		form.reset()
	}

	return (
		<div className={s.flex}>
			<form onSubmit={handleSubmit} className={s.form}>
				<h2 className={s.title}>Register</h2>
				<label>
					Name:
					<input type='text' name='userName' />
				</label>
				<label>
					Email:
					<input type='text' name='email' />
				</label>
				<label>
					Password:
					<input type='password' name='password' />
				</label>
				<div>
					<label>Gender:</label>
					<input type='radio' value='male' name='gender' /> Male
					<input type='radio' value='female' name='gender' /> Female
				</div>
				<label>
					Country:
					<select name='country'>
						<option value='ukraine'>Ukraine</option>
						<option value='usa'>USA</option>
						<option value='canada'>Canada</option>
					</select>
				</label>
				<br />
				<div>
					<input type='checkbox' name='agree' /> I agree with rules
				</div>
				<button className={s.btn}>Register</button>
				<button type='reset' className={s.btn}>
					Reset
				</button>
			</form>
		</div>
	)
}
