import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com/'

// http://dummyjson.com/posts?limit=4&skip=0&api_key='sd23adsfas1j32fafsdf'
export const fetchPosts = async configParams => {
	const { data } = await axios.get('posts', {
		params: {
			limit: 4,
			skip: 0,
			api_key: 'sd23adsfas1j32fafsdf',
			...configParams,
		},
	})
	return data
}

export const fetchPostsByQuery = async configParams => {
	const { data } = await axios.get('posts2/search', {
		params: {
			limit: 4,
			...configParams,
		},
	})
	return data
}
