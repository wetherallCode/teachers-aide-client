import React, { useState } from 'react'
import { Route, Link } from 'react-router-dom'
import TodaysDate from './TodaysDate'
import WebSitePeriodSelector from './WebSitePeriodSelector'
import DailyAgenda from './DailyAgenda'
import SmallWebsiteDisplay from './small-screen/SmallWebsiteDisplay'

const WebSite = () => {
	return <WebsiteDisplay />
}

const WebsiteDisplay = ({ match }) => {
	const [periodSelector, setPeriodSelector] = useState(false)
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
			{window.screen.width > 750 ? (
				<>
					<div
						style={{
							display: 'grid',
							justifyContent: 'center',
							alignItems: 'center',
							gridTemplateColumns: '7fr 3fr',
							backgroundColor: 'var(--blue)',
							color: 'var(--white)',
							height: '3rem',
							fontSize: '140%',
							borderBottom: '3px solid var(--white)'
						}}>
						<div
							style={{
								display: 'flex',
								// justifyContent: 'space-evenly',
								alignItems: 'center',
								// width: '100%',
								paddingLeft: '2%'
							}}>
							<WebSitePeriodSelector
								periodSelector={periodSelector}
								setPeriodSelector={setPeriodSelector}
							/>
						</div>
						{
							<div
								style={{
									display: 'flex',
									justifyContent: 'flex-end',
									paddingRight: '1%'
								}}>
								<TodaysDate date={new Date()} />
							</div>
						}
					</div>
					<div
						style={{
							backgroundColor: 'var(--white)',
							color: 'var(--blue)'
						}}>
						<Route path='/website/:courseName' component={DailyAgenda} />
					</div>
				</>
			) : (
				<SmallWebsiteDisplay />
			)}
		</>
	)
}

export default WebSite
