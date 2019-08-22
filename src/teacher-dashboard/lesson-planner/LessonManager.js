import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Link, Route } from 'react-router-dom'
import LessonInfoScreen from './LessonInfoScreen'

const FIND_ALL_LESSONS_QUERY = gql`
	query findAllLessons {
		findAllLessons {
			lessonName
			_id
			inUnit {
				name
				_id
			}
		}
	}
`
const FIND_UNIT_BY_GRADE = gql`
	query findUnitsByGrade {
		findUnitsByGrade(gradeLevel: EIGHTH) {
			_id
			name
		}
	}
`
const LessonManager = ({ match }) => {
	const { url, path } = match
	console.log(url, path)
	return <LessonManagerNavBar match={match} />
}
const LessonManagerNavBar = ({ match }) => {
	const { loading, data } = useQuery(FIND_UNIT_BY_GRADE, { variables: 'EIGHTH' })
	if (loading) return null
	const { findUnitsByGrade } = data

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 4fr',
				height: '100vh'
			}}>
			<div
				style={{
					backgroundColor: 'var(--darkGrey)',
					color: 'white',
					display: 'flex',
					overflow: 'scroll',
					flexDirection: 'column',
					justifyContent: 'flex-start'
				}}>
				<h2 style={{ textAlign: 'center' }}>Units</h2>

				<div style={{ display: 'flex', flexDirection: 'column' }}>
					{findUnitsByGrade.map(unit => {
						return (
							<Link
								key={unit._id}
								style={{ color: 'white', textDecoration: 'none' }}
								to={`${match.url}/${unit._id}`}>
								<div>{unit.name}</div>
							</Link>
						)
					})}
				</div>
			</div>
			<Route path={`${match.path}/:lessonId`} component={LessonInfoScreen} />
		</div>
	)
}
export default LessonManager
