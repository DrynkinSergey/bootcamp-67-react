import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify'

export const MyContext = createContext()

export const ContextProvider = ({ children }) => {
	const [user, setUser] = useState('Alex')
	const login = username => {
		// if (username !== 'Sergey') {
		// 	return toast.error('Invalid user')
		// }
		setUser(username)
	}
	const logout = () => setUser('')

	const contextValue = { user, login, logout, isLoggedIn: Boolean(user) }
	return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
}
