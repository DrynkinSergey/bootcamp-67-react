import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartThunk } from '../../redux/cart/operations'
import { selectAmount, selectCart } from '../../redux/cart/slice'
import { EmptyCard } from './EmptyCard'
import { ProductCard } from './ProductCard'
import s from './Cart.module.css'
export const Cart = () => {
	const cartItems = useSelector(selectCart)
	const amount = useSelector(selectAmount)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchCartThunk())
	}, [dispatch])

	if (!cartItems.length) return <EmptyCard />

	return (
		<div>
			<h1>Total cart amount: {amount}$ </h1>
			<ul className={s.list}>
				{cartItems.map(item => (
					<ProductCard key={item.id} item={item} />
				))}
			</ul>
		</div>
	)
}
