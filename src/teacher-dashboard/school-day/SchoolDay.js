import React from 'react'
import { Route, Link } from 'react-router-dom'
import LessonLoader from './LessonLoader'
import ClassPeriodNavigation from './ClassPeriodNavigation'
import ClassPeriodManager from './ClassPeriodManager'
import CourseManager from './CourseManager'

const SchoolDay = ({ match }) => {
	const { url, path } = match

	return (
		<div>
			<div
				style={{
					display: 'grid',
					justifyContent: 'center',
					alignItems: 'center',
					gridTemplateColumns: '1fr 3fr ',
					backgroundColor: 'var(--blue)',
					color: 'var(--white)',
					height: '3rem',
					fontSize: '150%',
					borderBottom: '3px solid var(--white)'
				}}>
				<Link
					to={`${match.url}`}
					style={{
						display: 'flex',
						alignItems: 'center',
						height: '100%',
						paddingLeft: '2%',
						color: 'var(--white)',
						textDecoration: 'none',
						fontSize: '110%',
						marginRight: '3%'
					}}>
					Courses
				</Link>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						paddingRight: '1%'
					}}>
					<Link
						style={{
							color: 'var(--white)',
							textDecoration: 'none',
							fontSize: '110%',
							marginRight: '3%'
						}}
						to={`${match.url}/classManager/A_12`}>
						Class Manager
					</Link>
					<Link
						style={{
							color: 'var(--white)',
							textDecoration: 'none',
							fontSize: '110%',
							marginRight: '3%'
						}}
						to={`${url}/courseManager/A_12`}>
						Course Manager
					</Link>
				</div>
			</div>
			{/* <Route path={`${path}`} component={SchoolDayHomePage} /> */}

			<div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr' }}>
				<Route path={`${path}/classManager`} component={ClassPeriodNavigation} />
				<Route path={`${path}/classManager/:periods`} component={ClassPeriodManager} />
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr' }}>
				<Route path={`${path}/courseManager`} component={ClassPeriodNavigation} />
				<Route path={`${path}/courseManager/:periods`} component={CourseManager} />
			</div>
		</div>
	)
}

const SchoolDayHomePage = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '0vh',
				color: 'var(--blue)',
				fontSize: '200%'
			}}>
			<div>Class Manager</div>
		</div>
	)
}

export default SchoolDay

// A School Day should have a list of classes for the day
// A way to track absences/resons for leaving the class for all students
// Be apart of the Dashboard?
