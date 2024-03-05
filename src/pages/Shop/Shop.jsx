import React, { useMemo } from 'react'
import { useHttp } from '../../hooks/useHttp'
import { fetchProducts } from '../../services/api'

export const Shop = () => {
	const params = useMemo(() => ({ limit: 6 }), [])
	const [data] = useHttp(fetchProducts, params)

	return (
		<div>
			<ul>
				{data?.map(item => (
					<li key={item.id}>
						<img src={item.thumbnail} alt={item.title} />
						<h2>{item.title}</h2>
						<p>{item.description}</p>
						<p>{item.price}$</p>
						<button>See more</button>
						<button>Add to cart</button>
					</li>
				))}
			</ul>
		</div>
	)
}
