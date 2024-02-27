import React, { useMemo } from 'react'
import { useHttp } from '../../hooks/useHttp'
import { fetchPosts, fetchPostsByQuery } from '../../services/api'
import { Form } from './Form'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

export const Posts = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const query = searchParams.get('query') || ''
	const location = useLocation()
	const queryParams = useMemo(() => {
		return {
			q: query,
		}
	}, [query])
	const [posts, setPosts] = useHttp(query ? fetchPostsByQuery : fetchPosts, queryParams)
	return (
		<div>
			<Form setSearchParams={setSearchParams} />
			<ul>
				{posts?.map(post => (
					<li key={post.id}>
						{/* posts/21 */}
						<Link state={{ from: location }} to={post.id.toString()}>
							{post.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
