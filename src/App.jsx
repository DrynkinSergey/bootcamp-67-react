import { Header } from './components/Header'
import { List } from './components/List/List'
import { Modal } from './components/Modal/Modal'
import { User } from './components/User/User'
import { films, goods } from './components/data'
import './index.css'
import userJson from './assets/user.json'

function App() {
	const isOnline = true
	const selectedTab = 'goods'
	const isOpen = false
	const greetings = () => {
		console.log('hello')
	}

	// console.log(0 || 1)
	// console.log('' || 1)

	// console.log(0 ?? 1)
	// console.log('' ?? 1)

	return (
		<div>
			<Header message='Message from app' headerTitle='React' />
			<User user={userJson} />
			{selectedTab === 'films' ? (
				<List data={films} title='Section Films' />
			) : (
				<List data={goods} title='Section Goods' />
			)}
			{/* Умовний рендер
			{isOnline ? 'Online' : 'Offline'}
			{isOpen && <h1>Hello modal</h1>}
			{!isOpen && <h1>Modal is closed</h1>}
			{0 ?? 12 ?? undefined ?? 'Goodbuy'} */}
			{isOpen ? (
				<Modal title='Adv'>
					<h2>Hello</h2>
					<p>Продам холодильник!</p>
					<button>Купити</button>
				</Modal>
			) : (
				<Modal title='Login'>
					<p>login</p>
					<button>Hello</button>
					<input type='text' />
					<h2>dfasfsfd</h2>
					<List data={films} title='Section Films' />
					<Header message='Hello' headerTitle='Modal title' />
				</Modal>
			)}
		</div>
	)
}

export default App
