import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counter/reducer'
import { devToolsEnhancer } from '@redux-devtools/extension'
import { todoReducer } from './todolist/reducer'

const enhancer = devToolsEnhancer()

const rootReducer = combineReducers({
	counter: counterReducer,
	todos: todoReducer,
})

export const store = createStore(rootReducer, enhancer)
