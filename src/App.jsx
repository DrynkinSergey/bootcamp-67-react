import { RegisterForm } from './components/RegisterForm/RegisterForm'
import { Employee } from './components/Employees/Employee'
import './index.css'
import { RegisterFormUncontrolled } from './components/RegisterForm/RegisterFormUncontrolled'
const App = () => {
	const handleRegister = data => {
		console.log('Send data...')
		console.log('...')
		setTimeout(() => {
			console.log(data)
			console.log('register is success')
		}, 2000)
	}
	return (
		<>
			<RegisterFormUncontrolled register={handleRegister} />
			{/* <Employee /> */}
		</>
	)
}

export default App
