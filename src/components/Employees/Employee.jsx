import { EmployeesFilter } from './EmployeesFilter'
import { EmployeeList } from './EmployeeList'
import userData from './../../assets/users.json'
import React from 'react'
import { toast } from 'react-toastify'
import { USERS_KEY } from './consts'

export class Employee extends React.Component {
	state = {
		users: userData,
		searchValue: '',
		isAvailable: false,
		isActiveSkill: 'all',
	}

	componentDidMount() {
		const users = JSON.parse(localStorage.getItem(USERS_KEY))
		console.log(users)
		if (users?.length) {
			this.setState({ users })
			toast.success('Users downloaded from ls')
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.users !== this.state.users) {
			localStorage.setItem(USERS_KEY, JSON.stringify(this.state.users))
		}
	}

	handleUpdateUser = id => {
		this.setState(prev => ({
			users: prev.users.map(user =>
				user.id === id ? { ...user, email: 'updatedMail@mail.com.ua', isOpenToWork: true } : user
			),
		}))
	}

	handleChangeActiveSkill = skill => {
		this.setState({ isActiveSkill: skill })
	}

	handleChangeIsAvailable = () => {
		this.setState({ isAvailable: !this.state.isAvailable })
	}

	handleChangeSearchString = value => {
		this.setState({ searchValue: value })
	}

	handleDeleteUser = id => {
		console.log(id)
		this.setState(prev => ({ users: prev.users.filter(user => user.id !== id) }))
	}

	getFilteredData = () => {
		const { users, searchValue, isAvailable, isActiveSkill } = this.state

		return users
			.filter(
				user =>
					user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
					user.email.toLowerCase().includes(searchValue.toLowerCase())
			)
			.filter(user => (isAvailable ? user.isOpenToWork : user))
			.filter(user => (isActiveSkill === 'all' ? user : user.skills.includes(isActiveSkill)))
		// .filter(user => {
		// 	if (isAvailable) {
		// 		return user.isOpenToWork
		// 	} else {
		// 		return user
		// 	}
		// })
	}

	render() {
		const { users, searchValue, isAvailable, isActiveSkill } = this.state
		const filteredUsers = this.getFilteredData() // [...]
		return (
			<>
				<EmployeesFilter
					isActiveSkill={isActiveSkill}
					isAvailable={isAvailable}
					searchValue={searchValue}
					onChangeActiveSkill={this.handleChangeActiveSkill}
					onChangeIsAvailable={this.handleChangeIsAvailable}
					onChangeSearchValue={this.handleChangeSearchString}
				/>
				<EmployeeList onUpdateUser={this.handleUpdateUser} users={filteredUsers} onDeleteUser={this.handleDeleteUser} />
			</>
		)
	}
}

// export const Employee = () => {
// return (
// 	<>
// 		<EmployeesFilter />
// 		<EmployeeList users={userData} />
// 	</>
// )
// }
