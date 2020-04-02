import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { LOOK_UP_CLASS_PERIOD } from './open-ended/OEQGridDisplay'
import { dateDisplayFormatter } from '../../utils'

const MissingOEQDisplay = ({ assignment, period }) => {
	const { loading, data, error } = useQuery(LOOK_UP_CLASS_PERIOD, {
		variables: { period: period, assignedDate: assignment.assignedDate }
	})
	if (loading) return null
	if (error) console.error(error)
	const { question } = data.findClassPeriod.assignedLesson.essentialQuestion

	const formattedDate = dateDisplayFormatter(assignment.assignedDate)
	return (
		<div style={{ marginLeft: '5%' }}>
			{assignment.assignmentType}: {assignment.readingSections} - Assigned on {formattedDate}:
			<ul>
				<li>
					Read pages: {assignment.readingPages}: {assignment.readingSections} and answer the
					following open ended question:
					<ul>
						<li> {question}</li>
					</ul>
				</li>
			</ul>
		</div>
	)
}

export default MissingOEQDisplay
