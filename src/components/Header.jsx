import { Links } from './Links'

export const Header = ({ message, headerTitle = 'Unknown logo' }) => {
	return (
		<header>
			<h1>{headerTitle}</h1>
			<Links message={message} />
			<hr />
		</header>
	)
}
