import { Header } from './components/Header'
import { List } from './components/List'

function App() {
	const films = [
		{ id: 5213, title: 'Test' },
		{ id: 2123, title: 'Taxi' },
		{ id: 11231, title: 'Terminator' },
		{ id: 41231, title: 'Dr. House' },
		{ id: 'dsfadsfsf', title: 'Harry Potter' },
	]
	return (
		<div>
			<Header />
			<List data={films} title='Section Films' />
		</div>
	)
}

export default App
