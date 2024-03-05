import axios from 'axios'

export const fetchProducts = async configParams => {
	const { data } = await axios.get('https://dummyjson.com/products', {
		params: {
			...configParams,
		},
	})
	return data.products
}

// fetchProducts({ page: 1, query: 'cat' })
