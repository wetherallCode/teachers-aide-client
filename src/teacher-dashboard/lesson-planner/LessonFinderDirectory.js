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
		}
	}
`

const LessonFinderDirectory = ({ match }) => {
	const { loading, data } = useQuery(FIND_ALL_LESSONS_QUERY)
	if (loading) return null
	const { findAllLessons } = data
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 4fr',
				height: '100vh',
				overflow: 'scroll',
			}}>
			<div
				style={{
					backgroundColor: 'var(--darkGrey)',
					color: 'white',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-start',
				}}>
				<h2 style={{ textAlign: 'center' }}>Units</h2>

				<ul>
					{findAllLessons.map((lesson) => {
						return (
							<li key={lesson._id}>
								<Link
									style={{ color: 'white', textDecoration: 'none' }}
									to={`${match.url}/${lesson._id}`}>
									{' '}
									{lesson.lessonName}
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
			<Route path={`${match.path}/:lessonId`} component={LessonInfoScreen} />
		</div>
	)
}
export default LessonFinderDirectory
