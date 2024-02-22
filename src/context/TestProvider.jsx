import React, { createContext } from 'react'

export const TestContext = createContext()
export const TestProvider = ({ children }) => {
	return <TestContext.Provider value={{ testValue: 'Test value' }}>{children}</TestContext.Provider>
}
