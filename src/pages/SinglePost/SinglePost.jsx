import React, { useRef } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { useHttp } from '../../hooks/useHttp'
import { fetchPostsById } from '../../services/api'

export const SinglePost = () => {
	const { postId } = useParams()
	const location = useLocation()
	const gobackRef = useRef(location.state?.from || '/posts')

	const [post] = useHttp(fetchPostsById, postId)
	if (!post) {
		return <h2>Loading...</h2>
	}
	return (
		<div>
			<Link to={gobackRef.current}>Go back</Link>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
			<p>Likes: {post.reactions}</p>
			<Link to='bio'>See bio</Link>
			<Outlet />
		</div>
	)
}
