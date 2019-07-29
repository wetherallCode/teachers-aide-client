import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { LessonCreator } from './LessonCreator'
import LessonFinderDirectory from './LessonFinderDirectory'
import UnitCreator from './UnitCreator'

const LessonPlanner = ({ match }) => {
	const { url, path } = match
	return (
		<div>
			<div
				style={{
					backgroundColor: 'var(--blue)',
					display: 'grid',
					gridTemplateColumns: '1fr 4fr',
					height: '3rem',
					borderBottom: '3px solid var(--white)',
				}}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						marginLeft: '1rem',
					}}>
					<Link
						style={{
							color: 'var(--white)',
							textDecoration: 'none',
							fontSize: '150%',
						}}
						to={`${url}`}>
						Lesson Planner
					</Link>
				</div>
				<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
					<Link
						style={{
							color: 'var(--white)',
							textDecoration: 'none',
							fontSize: '130%',
							marginRight: '3%',
						}}
						to={`${url}/lessonCreator`}>
						Lesson Creator
					</Link>
					<Link
						style={{
							color: 'var(--white)',
							textDecoration: 'none',
							fontSize: '130%',
							marginRight: '3%',
						}}
						to={`${url}/unitCreator`}>
						Unit Creator
					</Link>
					<Link
						style={{
							color: 'var(--white)',
							textDecoration: 'none',
							fontSize: '130%',
							marginRight: '3%',
						}}
						to={`${url}/lessonFinderDirectory`}>
						Lesson Finder
					</Link>
				</div>
			</div>

			<div>
				<Route path={`${path}lessonCreator`} component={LessonCreator} />
				<Route path={`${path}lessonFinderDirectory`} component={LessonFinderDirectory} />
				<Route path={`${path}unitCreator`} component={UnitCreator} />
			</div>
		</div>
	)
}

export default LessonPlanner
