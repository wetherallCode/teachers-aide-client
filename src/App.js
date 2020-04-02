import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import DashBoardNavigation from './teacher-dashboard/dashboard'
import StudentDashboard from './student-dashboard/StudentDashboard'
import WebSite from './website/WebSite'

const App = () => {
	// const [screenSize, setScreenSize] = useState(0)
	// useEffect(() => {
	// 	let screenWidth = window.screen.width
	// 	if (screenWidth < 750) {
	// 		setScreenSize()
	// 	} else console.log(false)
	// }, [])

	return (
		<div className='App'>
			{
				<Router>
					<Route exact path='/' component={Home} />
					<Route path='/dashboard' component={DashBoardNavigation} />
					<Route path='/students' component={StudentDashboard} />
					<Route path='/website' component={WebSite} />
				</Router>
			}
		</div>
	)
}

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
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					width: '40rem',
					height: '25rem',
					backgroundColor: 'var(--white)',
					color: 'var(--blue)'
				}}>
				<h1 style={window.screen.width > 750 ? { fontSize: '250%' } : { fontSize: '140%' }}>
					Welcome to Mr. Wetherall's Class
				</h1>
				<Link style={{ color: 'var(--white)', textDecoration: 'none' }} to='/website'>
					<button
						style={
							window.screen.width > 750
								? {
										width: '10rem',
										height: '3rem',
										fontSize: '140%',
										color: 'var(--white)',
										backgroundColor: 'var(--blue)'
								  }
								: {
										width: '7rem',
										height: '2rem',
										fontSize: '80%',
										color: 'var(--white)',
										backgroundColor: 'var(--blue)'
								  }
						}>
						Get Started
					</button>
				</Link>
			</div>
		</div>
	</>
)
export default App
