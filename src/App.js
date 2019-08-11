import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import DashBoardNavigation from './teacher-dashboard/dashboard'
import StudentDashboard from './student-dashboard/StudentDashboard'
import WebSite from './website/WebSite'
// import { ApolloConsumer } from '@apollo/react-hooks'

const App = () => {
	return (
		<div className='App'>
			<Router>
				<Route exact path='/' component={Home} />
				<Route path='/dashboard' component={DashBoardNavigation} />
				<Route path='/students' component={StudentDashboard} />
				<Route path='/website' component={WebSite} />
			</Router>
		</div>
	)
}
//  #383b3d
const Home = () => (
	<>
		<header
			className='Header'
			style={{ textShadow: '2px 2px 8px #474747', borderBottom: '3px solid var(--white)' }}>
			<Link style={{ padding: '2%' }} to='/'>
				MrWetherall.org
			</Link>
			<div style={{ display: 'flex', alignContent: 'center', justifyContent: 'flex-end' }}>
				{/* <Link style={{ margin: '1%', marginRight: '3%' }} to='/website'>
				Class Web Site
			</Link> */}
				<Link style={{ margin: '1%', marginRight: '3%' }} to='/dashboard'>
					Teacher
				</Link>
				{/* <Link style={{ margin: '1%', marginRight: '3%' }} to='/students'>
				Student Login
			</Link> */}
			</div>
		</header>
		<WebSite />
	</>
)
export default App
