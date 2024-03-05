import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<App />
		<ToastContainer autoClose={1500} />
	</BrowserRouter>
)
