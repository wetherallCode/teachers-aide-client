import React from 'react'
import { Route, Link } from 'react-router-dom'
import EssentialQuestion from './EssentialQuestion'

const WebSite = ({ match }) => {
	const { url, path } = match
	return (
		<>
			<header className='Header' style={{ borderBottom: '3px solid var(--white)' }}>
				<Link style={{ padding: '2%' }} to='/'>
					MrWetherall.org
				</Link>
				<div style={{ display: 'flex', alignContent: 'center', justifyContent: 'flex-end' }}>
					<Link style={{ margin: '1%', marginRight: '3%' }} to={`${url}/EssentialQuestion`}>
						Essential Question
					</Link>
				</div>
			</header>
			<div>
				<Route path={`${path}/EssentialQuestion`} component={EssentialQuestion} />
			</div>
		</>
	)
}

export default WebSite
