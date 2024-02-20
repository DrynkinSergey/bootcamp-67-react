import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com/'

export const fetchPosts = async configParams => {
	const { data } = await axios.get('posts', {
		params: {
			limit: 4,
			skip: 0,
			...configParams,
		},
	})
	console.log(data)
	return data
}
