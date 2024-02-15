import React from 'react'
import s from './RegisterForm.module.css'

export class RegisterForm extends React.Component {
	state = {
		username: '',
		email: '',
		password: '',
		gender: '',
		country: 'ukraine',
		agree: false,
	}

	handleChangeName = e => {
		this.setState({ username: e.target.value })
	}
	handleChangeEmail = e => {
		this.setState({ email: e.target.value })
	}

	//DRY - Don't repeat yourself

	handleChangeInput = e => {
		const { name, value, checked, type } = e.target

		// if (name === 'username') {
		// 	this.setState({ username: value })
		// } else if (name === 'email') {
		// 	this.setState({ email: value })
		// }
		// 2 . Switch case instruction
		// switch (name) {
		// 	case 'username':
		// 		this.setState({ username: value })
		// 		break
		// 	case 'email':
		// 		this.setState({ email: value })
		// 		break
		// 	case 'password':
		// 		this.setState({ password: value })
		// 		break
		// 	case 'country':
		// 		this.setState({ country: value })
		// 		break
		// 	default:
		// 		break
		// }

		// if (name === 'agree') {
		// 	return this.setState({ agree: checked })
		// }

		this.setState({ [name]: type === 'checkbox' ? checked : value })
		// this.setState({ [name]: value })
		console.log('name =>>>>', name)
	}
	handleSubmit = e => {
		e.preventDefault()
		this.props.register(this.state)
	}

	render() {
		// const obj = {
		// 	user: 'Ivan',
		// 	age: 33,
		// }
		// console.log(obj.user)
		// console.log(obj.age)

		// const { user, age } = obj
		// console.log(user)
		// console.log(age)
		// const arr = ['apple', 'banana', 'potato']
		// const [first, , last] = arr
		// console.log(first)
		// console.log(last)
		// const [firstEl, ...other] = arr
		// console.log(firstEl, other)

		const { username, email, password, gender, country, agree } = this.state
		return (
			<div className={s.flex}>
				<form onSubmit={this.handleSubmit} className={s.form}>
					<h2 className={s.title}>Register</h2>
					<label>
						Name:
						<input type='text' name='username' onChange={this.handleChangeInput} value={username} />
					</label>
					<label>
						Email:
						<input type='text' name='email' value={email} onChange={this.handleChangeInput} />
					</label>
					<label>
						Password:
						<input type='password' name='password' value={password} onChange={this.handleChangeInput} />
					</label>
					<div>
						<label>Gender:</label>
						<input onChange={this.handleChangeInput} type='radio' name='gender' value='male' /> Male
						<input onChange={this.handleChangeInput} type='radio' name='gender' value='female' /> Female
					</div>
					<label>
						Country:
						<select name='country' value={country} onChange={this.handleChangeInput}>
							<option value='ukraine'>Ukraine</option>
							<option value='usa'>USA</option>
							<option value='canada'>Canada</option>
						</select>
					</label>
					<div>
						<input name='agree' type='checkbox' checked={agree} onChange={this.handleChangeInput} />I agree with rules
					</div>
					<br />
					<button disabled={!agree} className={s.btn}>
						Register
					</button>
				</form>
			</div>
		)
	}
}
// export const RegisterForm = () => {
// return (
// 	<div className={s.flex}>
// 		<form className={s.form}>
// 			<h2 className={s.title}>Register</h2>
// 			<label>
// 				Name:
// 				<input type='text' />
// 			</label>
// 			<label>
// 				Email:
// 				<input type='text' />
// 			</label>
// 			<label>
// 				Password:
// 				<input type='password' />
// 			</label>
// 			<div>
// 				<label>Gender:</label>
// 				<input type='radio' name='gender' /> Male
// 				<input type='radio' name='gender' /> Female
// 			</div>
// 			<label>
// 				Country:
// 				<select>
// 					<option value='ukraine'>Ukraine</option>
// 					<option value='usa'>USA</option>
// 					<option value='canada'>Canada</option>
// 				</select>
// 			</label>
// 			<br />
// 			<button className={s.btn}>Register</button>
// 		</form>
// 	</div>
// )
// }
