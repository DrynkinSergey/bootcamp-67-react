import { Links } from './Links'
import PropTypes from 'prop-types'

export const Header = ({ message, headerTitle = 'Unknown logo' }) => {
	return (
		<header>
			<h1>{headerTitle.toLowerCase()}</h1>
			<Links message={message} />
			<hr />
		</header>
	)
}

Header.propTypes = {
	message: PropTypes.string,
	headerTitle: PropTypes.string,
}
