import React, { useState } from 'react'
import { Route, Link } from 'react-router-dom'
import TodaysDate from './TodaysDate'
import WebSitePeriodSelector from './WebSitePeriodSelector'
import DailyAgenda from './DailyAgenda'

const WebSite = () => {
	return <WebsiteDisplay />
}

const WebsiteDisplay = ({ match }) => {
	return (
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
			<div
				style={{
					display: 'grid',
					justifyContent: 'center',
					alignItems: 'center',
					gridTemplateColumns: '3fr 1fr',
					backgroundColor: 'var(--blue)',
					color: 'var(--white)',
					height: '3rem',
					fontSize: '150%',
					borderBottom: '3px solid var(--white)'
				}}>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						height: '100%',
						width: '100%',
						paddingLeft: '2%'
					}}>
					<WebSitePeriodSelector />
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						paddingRight: '2%'
					}}>
					<TodaysDate date={new Date()} />
				</div>
			</div>
			<div
				style={{
					backgroundColor: 'var(--white)',
					color: 'var(--blue)'
				}}>
				<Route path='/website/:courseName' component={DailyAgenda} />
			</div>

			{/* <DailyAgenda /> */}

			{/* <div
				style={{
					backgroundColor: 'var(--blue)',
					color: 'var(--white)',
					borderTop: '3px solid var(--white)',
					fontSize: '70%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				<p>Website designed, coded, and maintained by Mr. Wetherall</p>
			</div> */}
		</>
	)
}

export default WebSite
