import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { gql } from 'apollo-boost'
// import { LessonCreator } from './LessonCreator'
import LessonManager from './UnitManager'
import UnitCreator from './UnitCreator'
import LessonManagerDisplay from './LessonManagerDisplay'
import { useQuery } from 'react-apollo'
import UnitManager from './UnitManager'

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
	const { data, loading, error } = useQuery(QUERY_GRADELEVELENUMS)
	if (loading) return <h1 className='loading'>Loading</h1>
	if (error) console.error(error)
	return (
		<LessonPlannerNavBar
			match={match}
			gradeLevels={data.gradeLevels.enumValues.map(grade => grade.name)}
		/>
	)
}

const LessonPlannerNavBar = ({ match, gradeLevels }) => {
	const { url, path } = match

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
							fontSize: '150%',
							marginLeft: '1%'
						}}
						to={`${url}/${gradeLevels[0]}`}>
						Lesson Manager
					</Link>
				</div>
				<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
					{gradeLevels.map(grade => (
						<Link
							style={{
								color: 'var(--white)',
								textDecoration: 'none',
								fontSize: '150%',
								marginRight: '2%'
							}}
							to={`${url}/${grade}`}
							key={grade}>
							{grade === 'EIGHTH' ? '8th' : grade === 'SEVENTH' ? '7th' : '6th'} Grade
						</Link>
					))}
				</div>
			</div>

			<div>
				{/* <Route path={`${path}lessonCreator`} component={LessonCreator} /> */}
				<div>
					{/* <Route path={`${path}`} component={LessonManager} /> */}
					{/* <Route path={`${path}/:grade`} component={UnitManager} /> */}
				</div>

				{/* <Route path={`${path}unitCreator`} component={UnitCreator} /> */}
			</div>
		</div>
	)
}

export default LessonPlanner
