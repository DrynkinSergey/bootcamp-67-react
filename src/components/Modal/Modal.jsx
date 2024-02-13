export const Modal = ({ children, title }) => {
	return (
		<div>
			<h1 className='title'>{title}</h1>
			{children}
		</div>
	)
}
