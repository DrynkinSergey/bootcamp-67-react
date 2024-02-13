import PropTypes from 'prop-types'
import s from './List.module.css'
export const List = ({ data = [], title }) => {
	return (
		<div className={s.wrapper}>
			<h2>{title}</h2>
			<ul className={s.list}>
				{data.map((item, idx) => (
					<li className={s.item} key={item.id}>
						<span>{item.title}</span> <button>Delete</button>
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
