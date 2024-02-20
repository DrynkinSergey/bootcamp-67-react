import React from 'react'
import { Comment } from 'react-loader-spinner'
import s from './Posts.module.css'
export const Loader = () => {
	return (
		<div className={s.loader}>
			<Comment
				visible={true}
				height='280'
				width='280'
				ariaLabel='comment-loading'
				wrapperStyle={{}}
				wrapperClass='comment-wrapper'
				color='#fff'
				backgroundColor='#F4442E'
			/>
		</div>
	)
}
