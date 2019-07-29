import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Logout from '../teacher-dashboard/Logout'

const StudentDashboard = ({ match }) => {
	return (
		<div>
			<header className='Header' style={{ borderBottom: '3px solid var(--white)' }}>
				<Link style={{ padding: '2%' }} to='/'>
					MrWetherall.org
				</Link>
				<div style={{ display: 'flex', alignContent: 'center', justifyContent: 'flex-end' }}>
					<Link style={{ margin: '1%' }} to={`${match.url}/logout`}>
						Logout
					</Link>
				</div>
			</header>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',

					background: 'var(--white)',
					color: 'var(--blue)',
				}}>
				<h1 style={{ textDecoration: 'underline' }}>Student Site</h1>
				<br />
				<h1>Still under development</h1>
			</div>
			<Route path={`${match.path}/logout`} component={Logout} />
		</div>
	)
}

export default StudentDashboard
