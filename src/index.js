import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const el = React.createElement('a', { href: '/', id: 'Link' }, 'My first link in react')
// console.log(el)

const elementDiv = React.createElement(
	'div',
	{},
	React.createElement('h1', { class: 'title', id: 1 }, React.createElement('span', {}, 'Hello from h1 and span'))
)

const jsxEl = (
	<div>
		<h1 class='title' id='1'>
			<span>Hello from h1 and span JSX</span>
		</h1>
		<h2>React</h2>
	</div>
)

const Header = () => {
	return (
		<header>
			<div>Header</div>
			<hr />
		</header>
	)
}
const Categories = () => {
	return (
		<ul>
			<li>News</li>
			<li>Cars</li>
			<li>About</li>
			<li>Home</li>
			<li>Life</li>
			<li>Pets</li>
		</ul>
	)
}
const Footer = () => {
	return (
		<footer>
			<h2>&copy; All right reserved 2024</h2>
		</footer>
	)
}

const Page = () => {
	return (
		<div>
			<Header />
			<h1>Hello</h1>
			<Categories />
			<Categories />
			<Categories />
			<Footer />
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
// import App from './App'

// root.render(
// 	<>
// 		<h2>Hello react</h2>
// 		<App />
// 	</>
// )
