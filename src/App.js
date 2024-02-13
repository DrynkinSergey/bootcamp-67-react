import { Header } from './components/Header'
import { List } from './components/List'
import { films, goods } from './components/data'

function App() {
	const isOnline = true
	const selectedTab = 'goods'
	const isOpen = false

	// console.log(0 || 1)
	// console.log('' || 1)

	// console.log(0 ?? 1)
	// console.log('' ?? 1)

	return (
		<div>
			<Header message='Message from app' headerTitle='React' />

			{selectedTab === 'films' ? (
				<List data={films} title='Section Films' />
			) : (
				<List data={goods} title='Section Goods' />
			)}

			{/* Умовний рендер */}
			{isOnline ? 'Online' : 'Offline'}
			{isOpen && <h1>Hello modal</h1>}
			{!isOpen && <h1>Modal is closed</h1>}
			{0 ?? 12 ?? undefined ?? 'Goodbuy'}
		</div>
	)
}

export default App
