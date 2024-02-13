import { Links } from './Links'
import PropTypes from 'prop-types'

export const Header = ({ message, headerTitle = 'Unknown logo' }) => {
	// const styles = { backgroundColor: 'teal', display: 'flex', justifyContent: 'space-between', fontSize: '1.5rem' }
	return (
		<header className='header'>
			<h1>{headerTitle.toLowerCase()}</h1>
			<Links message={message} />
		</header>
	)
}

Header.propTypes = {
	message: PropTypes.string,
	headerTitle: PropTypes.string,
}
