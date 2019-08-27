import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useApolloClient } from '@apollo/react-hooks'
import { Link, Route } from 'react-router-dom'
import LessonInfoScreen from './LessonInfoScreen'
import LessonsInUnit from './LessonsInUnit'
import CreateUnit from './CreateUnit'

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
	query findUnitsByGrade($gradeLevel: GradeLevelEnum) {
		findUnitsByGrade(gradeLevel: $gradeLevel) {
			_id
			name
		}
		addUnitMode @client
	}
`

const UnitManager = ({ match, history }) => {
	const { grade } = match.params
	const client = useApolloClient()
	const { loading, data, error } = useQuery(FIND_UNIT_BY_GRADE, {
		variables: { gradeLevel: grade }
	})
	if (loading) return <h1 className='loading'>Loading</h1>
	if (error) console.error(error)

	const { findUnitsByGrade, addUnitMode } = data
	const addUnitToggle = () => {
		client.writeData({ data: { addUnitMode: !addUnitMode } })
	}
	return (
		<div
			style={{
				backgroundColor: 'var(--darkGrey)',
				color: 'white',
				display: 'flex',
				overflow: 'scroll',
				height: '100vh',
				flexDirection: 'column',
				justifyContent: 'flex-start'
			}}>
			<h2
				style={{
					textAlign: 'center',
					color: 'var(--blue)',
					fontSize: '200%',
					textDecoration: 'underline'
				}}>
				Units
			</h2>

			<div style={{ display: 'flex', flexDirection: 'column', marginLeft: '2%' }}>
				{findUnitsByGrade.map(unit => {
					return <LessonsInUnit unit={unit} key={unit._id} match={match} history={history} />
				})}
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					marginLeft: '2%',
					color: 'var(--blue)',
					marginTop: '10%'
				}}>
				{!addUnitMode ? (
					<div
						style={{ textDecoration: 'underline', fontSize: '180%' }}
						onClick={() => addUnitToggle()}>
						Add Unit
					</div>
				) : (
					<CreateUnit grade={grade} addUnitMode={addUnitMode} />
				)}
			</div>
		</div>
	)
}
export default UnitManager
