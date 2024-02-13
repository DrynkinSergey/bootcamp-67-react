import PropTypes from 'prop-types'

export const List = ({ data = [], title }) => {
	return (
		<div>
			<h2>{title}</h2>
			<ul>
				{data.map(item => (
					<li key={item.id}>
						{item.title} <button>Delete</button>
					</li>
				))}
			</ul>
		</div>
	)
}

List.propTypes = {
	title: PropTypes.string,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			title: PropTypes.string.isRequired,
		})
	),
}
