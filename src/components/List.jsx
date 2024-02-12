export const List = ({ data, title }) => {
	// console.log(props)
	// const { data, title } = props
	return (
		<div>
			<h2>{title}</h2>
			<ul>
				{/* <li>{props.data[0].title}</li>
				<li>{props.data[1].title}</li>
				<li>{props.data[2].title}</li> */}
				{data.map(item => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</div>
	)
}
