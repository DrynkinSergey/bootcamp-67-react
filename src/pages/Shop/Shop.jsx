import React, { useMemo } from 'react'
import { useHttp } from '../../hooks/useHttp'
import { fetchProducts } from '../../services/api'
import s from './Shop.module.css'
import { cutText } from '../../components/helpers/cutText'
export const Shop = () => {
	const params = useMemo(() => ({ limit: 6 }), [])
	const [data] = useHttp(fetchProducts, params)

	return (
		<div>
			<ul className={s.list}>
				{data?.map(item => (
					<li className={s.card} key={item.id}>
						<div className={s.imageWrapper}>
							<img src={item.thumbnail} alt={item.title} />
						</div>
						<div className={s.content}>
							<h2>{item.title}</h2>
							<p>{cutText(item.description, 38)}</p>
							<p>{item.price}$</p>
							<div className={s.actions}>
								<button>See more</button>
								<button>Add to cart</button>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
