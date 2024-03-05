import React from 'react'
import s from './ProductCard.module.css'
import { useDispatch } from 'react-redux'
import { decreaseQtyThunk, deleteFromCartThunk, increaseQtyThunk } from '../../redux/cart/operations'
export const ProductCard = ({ item }) => {
	const { id, title, price, thumbnail, count } = item
	const dispatch = useDispatch()

	const handleDecreseCount = () => {
		if (count === 1) {
			return dispatch(deleteFromCartThunk(id))
		}
		dispatch(decreaseQtyThunk(item))
	}

	return (
		<li className={s.card}>
			<img className={s.img} src={thumbnail} alt={title} />
			<p>{title}</p>
			<div>
				<button onClick={handleDecreseCount}>-</button>
				<p>{count}</p>
				<button onClick={() => dispatch(increaseQtyThunk(item))}>+</button>
			</div>
			<p>{price}$</p>
			<p>Total: {price * count}$</p>
			<button onClick={() => dispatch(deleteFromCartThunk(id))}>Remove</button>
		</li>
	)
}
