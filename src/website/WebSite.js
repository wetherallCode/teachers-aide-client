import React from 'react'
// import { Route, Link } from 'react-router-dom'
import TodaysDate from './TodaysDate'
import WebSitePeriodSelector from './WebSitePeriodSelector'
import AgendaItemsNavBar from './AgendaItemsNavBar'
// import StudentToolBar from './StudentToolBar'

const WebSite = () => {
	return (
		<div
			style={{
				backgroundColor: 'var(--grey)'
				// height: '100vh',
				// display: 'grid'
				// gridTemplateRows: '2 10fr 1fr'
			}}>
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
				<div>
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
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr' }}>
				<AgendaItemsNavBar />
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'var(--blue)'
					}}>
					A whole bunch of stuff
				</div>
			</div>

			<div
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
				{/* <TodaysDate date={new Date()} /> */}
			</div>
		</div>
	)
}

export default WebSite
