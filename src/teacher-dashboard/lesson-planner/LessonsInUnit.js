import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useApolloClient } from '@apollo/react-hooks'
import { Link, Redirect } from 'react-router-dom'

const FIND_LESSONS_BY_UNIT = gql`
	query findLessonsByUnit($inUnit: String) {
		findLessonsByUnit(inUnit: $inUnit) {
			lessonName
			inUnit {
				_id
				name
			}
			_id
		}
		createLessonMode @client
		isEditLessonMode @client
	}
`

const LessonsInUnit = ({ unit, match, history }) => {
	const client = useApolloClient()
	const [unitExpander, setUnitExpander] = useState(false)
	const { data, loading, error } = useQuery(FIND_LESSONS_BY_UNIT, {
		variables: { inUnit: unit.name }
	})
	if (loading) return <h1 className='loading'>Loading</h1>
	if (error) console.error(error)

	const { findLessonsByUnit } = data

	return (
		<>
			<div
				style={{
					color: 'var(--white)',
					textDecoration: 'none',
					fontSize: '150%',
					display: 'flex'
				}}
				onClick={() => setUnitExpander(!unitExpander)}>
				<div
					style={{
						background: 'transparent',
						color: 'var(--white)',
						marginRight: '2%',
						marginBottom: '3%'
					}}>
					<div style={{ color: 'var(--blue)' }}>{unitExpander ? '-' : '+'}</div>
				</div>
				<div style={{ color: 'var(--blue)' }}>{unit.name}</div>
			</div>
			{unitExpander && (
				<div>
					{findLessonsByUnit.map((lesson, i) => (
						<div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
							<Link
								style={{
									color: 'var(--blue)',
									marginLeft: '10%',
									marginBottom: '2%',
									textDecoration: 'none'
								}}
								onClick={() => client.writeData({ data: { createLessonMode: false } })}
								to={`${match.url}/${lesson._id}`}>
								{lesson.lessonName}
							</Link>
						</div>
					))}
					<div
						style={{
							color: 'var(--blue)',
							marginLeft: '10%',
							marginBottom: '5%',
							textDecoration: 'underline'
						}}
						onClick={() => {
							client.writeData({ data: { isEditLessonMode: false } })
							client.writeData({ data: { createLessonMode: true } })
						}}>
						Create Lesson
					</div>
				</div>
			)}
		</>
	)
}

export default LessonsInUnit
