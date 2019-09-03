import React from 'react'
import { Route, Link } from 'react-router-dom'
// import AssignmentCreator from '../lesson-planner/AssignmentCreator'
// import LessonCreator from '../lesson-planner/LessonCreator'
import LessonLoader from './LessonLoader'
import ClassManager from './ClassManager'
import ClassManagerDisplay from './ClassManagerDisplay'

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
					to={`${match.url}/ClassManager/A`}
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
					School Day
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
						to={`${url}/lessonLoader`}>
						Lesson Loader
					</Link>
					{/* <Link
						style={{
							color: 'var(--white)',
							textDecoration: 'none',
							fontSize: '110%',
							marginRight: '3%'
						}}
						to={`${url}/classManager`}>
						Class Period Manager
					</Link> */}
				</div>
			</div>
			<Route path={`${path}/lessonLoader`} component={LessonLoader} />

			<div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr' }}>
				<Route path={`${path}/classManager`} component={ClassManager} />
				<Route path={`${path}/classManager/:periods`} component={ClassManagerDisplay} />
			</div>
		</div>
	)
}

export default SchoolDay

// A School Day should have a list of classes for the day
// A way to track absences/resons for leaving the class for all students
// Be apart of the Dashboard?
