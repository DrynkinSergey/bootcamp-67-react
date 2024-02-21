import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { USERS_KEY } from './consts'

export const Employee = () => {
	const [users, setUsers] = useState(() => {
		const users = JSON.parse(localStorage.getItem(USERS_KEY))
		if (users?.length) {
			return users
		}
		return userData
	}) // [...] || [userData]
	const [searchValue, setSearchValue] = useState('')
	const [isAvailable, setIsAvailable] = useState(false)
	const [isActiveSkill, setIsActiveSkill] = useState('all')

	useEffect(() => {
		localStorage.setItem(USERS_KEY, JSON.stringify(users))
	}, [users])

	const handleUpdateUser = id => {
		// this.setState(prev => ({
		// 	users: prev.users.map(user =>
		// 		user.id === id ? { ...user, email: 'updatedMail@mail.com.ua', isOpenToWork: true } : user
		// 	),
		// }))
		setUsers(prev =>
			prev.map(user => (user.id === id ? { ...user, email: 'Test@mail.com', isOpenToWork: true } : user))
		)
	}

	const handleChangeActiveSkill = skill => {
		// this.setState({ isActiveSkill: skill })
		setIsActiveSkill(skill)
	}

	const handleChangeIsAvailable = () => {
		// this.setState({ isAvailable: !this.state.isAvailable })
		setIsAvailable(prev => !prev) // true => false ; false => true
	}

	const handleChangeSearchString = value => {
		// this.setState({ searchValue: value })
		setSearchValue(value)
	}

	const handleDeleteUser = id => {
		console.log(id)
		setUsers(prev => prev.filter(user => user.id !== id))
		// this.setState(prev => ({ users: prev.users.filter(user => user.id !== id) }))
	}

	const getFilteredData = () => {
		return users
			.filter(
				user =>
					user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
					user.email.toLowerCase().includes(searchValue.toLowerCase())
			)
			.filter(user => (isAvailable ? user.isOpenToWork : user))
			.filter(user => (isActiveSkill === 'all' ? user : user.skills.includes(isActiveSkill)))
	}

	return (
		<>
			<EmployeesFilter
				isActiveSkill={isActiveSkill}
				isAvailable={isAvailable}
				searchValue={searchValue}
				onChangeActiveSkill={handleChangeActiveSkill}
				onChangeIsAvailable={handleChangeIsAvailable}
				onChangeSearchValue={handleChangeSearchString}
			/>
			<EmployeeList onUpdateUser={handleUpdateUser} users={getFilteredData()} onDeleteUser={handleDeleteUser} />
		</>
	)
}

// export class Employee extends React.Component {
// 	state = {
// 		users: userData,
// 		searchValue: '',
// 		isAvailable: false,
// 		isActiveSkill: 'all',
// 	}

// 	componentDidMount() {
// 		const users = JSON.parse(localStorage.getItem(USERS_KEY))
// 		console.log(users)
// 		if (users?.length) {
// 			this.setState({ users })
// 			toast.success('Users downloaded from ls')
// 		}
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		if (prevState.users !== this.state.users) {
// 			localStorage.setItem(USERS_KEY, JSON.stringify(this.state.users))
// 		}
// 	}

// handleUpdateUser = id => {
// 	this.setState(prev => ({
// 		users: prev.users.map(user =>
// 			user.id === id ? { ...user, email: 'updatedMail@mail.com.ua', isOpenToWork: true } : user
// 		),
// 	}))
// }

// handleChangeActiveSkill = skill => {
// 	this.setState({ isActiveSkill: skill })
// }

// handleChangeIsAvailable = () => {
// 	this.setState({ isAvailable: !this.state.isAvailable })
// }

// handleChangeSearchString = value => {
// 	this.setState({ searchValue: value })
// }

// handleDeleteUser = id => {
// 	console.log(id)
// 	this.setState(prev => ({ users: prev.users.filter(user => user.id !== id) }))
// }

// getFilteredData = () => {
// 	const { users, searchValue, isAvailable, isActiveSkill } = this.state

// 	return users
// 		.filter(
// 			user =>
// 				user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
// 				user.email.toLowerCase().includes(searchValue.toLowerCase())
// 		)
// 		.filter(user => (isAvailable ? user.isOpenToWork : user))
// 		.filter(user => (isActiveSkill === 'all' ? user : user.skills.includes(isActiveSkill)))
// 	// .filter(user => {
// 	// 	if (isAvailable) {
// 	// 		return user.isOpenToWork
// 	// 	} else {
// 	// 		return user
// 	// 	}
// 	// })
// }

// 	render() {
// 		const { users, searchValue, isAvailable, isActiveSkill } = this.state
// 		const filteredUsers = this.getFilteredData() // [...]
// return (
// 	<>
// 		<EmployeesFilter
// 			isActiveSkill={isActiveSkill}
// 			isAvailable={isAvailable}
// 			searchValue={searchValue}
// 			onChangeActiveSkill={this.handleChangeActiveSkill}
// 			onChangeIsAvailable={this.handleChangeIsAvailable}
// 			onChangeSearchValue={this.handleChangeSearchString}
// 		/>
// 		<EmployeeList onUpdateUser={this.handleUpdateUser} users={filteredUsers} onDeleteUser={this.handleDeleteUser} />
// 	</>
// )
// 	}
// }
