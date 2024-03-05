export const cutText = (str, size = 20) => {
	return str.length > size ? `${str.slice(0, size)}...` : str
}
