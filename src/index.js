import ReactDOM from 'react-dom/client'
import App from './App'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ContextProvider } from './context/ContextProvider'
import { TestProvider } from './context/TestProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<ContextProvider>
		<TestProvider>
			<App />
			<ToastContainer autoClose={1500} />
		</TestProvider>
	</ContextProvider>
)
