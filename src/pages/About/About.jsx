import React, { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const About = () => {
	return (
		<div>
			<h1>About page</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est quam dolorem sequi eligendi doloribus cumque
				doloremque nesciunt reiciendis laborum quo architecto, excepturi, inventore dignissimos? Cumque ipsum dolor quia
				aperiam.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est quam dolorem sequi eligendi doloribus cumque
				doloremque nesciunt reiciendis laborum quo architecto, excepturi, inventore dignissimos? Cumque ipsum dolor quia
				aperiam.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est quam dolorem sequi eligendi doloribus cumque
				doloremque nesciunt reiciendis laborum quo architecto, excepturi, inventore dignissimos? Cumque ipsum dolor quia
				aperiam.
			</p>
			<nav>
				<ul>
					<li>
						<NavLink to='aim'>Aim</NavLink>
					</li>
					<li>
						<NavLink to='company'>Company</NavLink>
					</li>
					<li>
						<NavLink to='team'>Team</NavLink>
					</li>
				</ul>
			</nav>
			<Suspense fallback={<h1>Loading about elements</h1>}>
				<Outlet />
			</Suspense>
		</div>
	)
}

export default About
