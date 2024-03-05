import React, { useMemo, useState } from 'react'
import { useHttp } from '../../hooks/useHttp'
import { fetchProducts } from '../../services/api'
import s from './Shop.module.css'
import { cutText } from '../../components/helpers/cutText'
import { useDispatch } from 'react-redux'
import { addToCartThunk } from '../../redux/cart/operations'
export const Shop = () => {
	const [skip, setSkip] = useState(0)
	const limit = 8
	const params = useMemo(() => ({ limit, skip }), [skip])
	const [data] = useHttp(fetchProducts, params)
	const dispatch = useDispatch()

	const pageCount = Math.round(100 / limit)
	console.log(pageCount)

	const nextPage = () => {
		setSkip(prev => prev + limit)
	}
	const prevPage = () => {
		setSkip(prev => prev - limit)
	}
	const handleSelectPage = number => {
		setSkip(number * limit)
	}
	return (
		<div>
			<div>
				<button disabled={skip === 0} onClick={prevPage}>
					prev
				</button>
				{Array(pageCount)
					.fill('')
					.map((_, index) => (
						<button onClick={() => handleSelectPage(index)} key={index}>
							{index + 1}
						</button>
					))}
				<button onClick={nextPage}>next</button>
			</div>
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
								<button onClick={() => dispatch(addToCartThunk({ ...item, count: 1 }))}>Add to cart</button>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
