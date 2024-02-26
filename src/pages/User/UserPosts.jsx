import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPostsByUserId } from '../../services/api'
import { useHttp } from '../../hooks/useHttp'

const UserPosts = () => {
	const { id } = useParams()
	const [posts] = useHttp(fetchPostsByUserId, id)
	if (!posts) {
		return <h2>Loading posts...</h2>
	}

	return (
		<div>
			<h2>Posts by user</h2>
			<ol>
				{posts.map(post => (
					<li key={post.id}>{post.title}</li>
				))}
			</ol>
		</div>
	)
}

export default UserPosts
