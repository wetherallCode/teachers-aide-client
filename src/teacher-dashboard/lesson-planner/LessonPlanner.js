import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { LessonCreator } from './LessonCreator'
import LessonManager from './LessonManager'
import UnitCreator from './UnitCreator'
import LessonManagerDisplay from './LessonManagerDisplay'
import { useQuery } from 'react-apollo'

const QUERY_GRADELEVELENUMS = gql`
	query getGradeLevelENUM {
		gradeLevels: __type(name: "GradeLevelEnum") {
			enumValues {
				name
			}
		}
	}
`

const LessonPlanner = ({ match }) => {
	const { url, path } = match

	const { data, loading, error } = useQuery(QUERY_GRADELEVELENUMS)
	if (loading) return <h1 className='loading'>Loading</h1>
	if (error) console.error(error)
	const { gradeLevels } = data

	return (
		<div>
			<div
				style={{
					backgroundColor: 'var(--blue)',
					display: 'grid',
					gridTemplateColumns: '1fr 4fr',
					height: '3rem',
					borderBottom: '3px solid var(--white)'
				}}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						marginLeft: '1rem'
					}}>
					<Link
						style={{
							color: 'var(--white)',
							textDecoration: 'none',
							fontSize: '150%'
						}}
						to={`${url}`}>
						Lesson Manager
					</Link>
				</div>
				<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} />
			</div>

			<div>
				{/* <Route path={`${path}lessonCreator`} component={LessonCreator} /> */}
				<div>
					<Route path={`${path}`} component={LessonManager} />
					<Route path={`${path}/:grade`} component={LessonManager} />
				</div>

				{/* <Route path={`${path}unitCreator`} component={UnitCreator} /> */}
			</div>
		</div>
	)
}

export default LessonPlanner
