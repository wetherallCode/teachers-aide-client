import React, { useState, useEffect } from 'react'
import { gql } from 'apollo-boost'
import OEQGrader from './OEQGrader'
import { useQuery } from '@apollo/react-hooks'

const LOOK_UP_CLASS_PERIOD = gql`
	query findClassPeriodForOEQ($period: periodName, $assignedDate: Date) {
		findClassPeriod(period: $period, assignedDate: $assignedDate) {
			assignedLesson {
				essentialQuestion {
					question
					type
					textStructure
				}
			}
		}
	}
`

const OEQGridDisplay = ({ assignment, student }) => {
	const [assignmentScorerToggle, setAssignmentScorerToggle] = useState(false)

	const { loading, error, data } = useQuery(LOOK_UP_CLASS_PERIOD, {
		variables: { period: student.period, assignedDate: assignment.assignedDate }
	})
	if (loading) return null
	if (error) console.error(error)

	return (
		<div>
			<div
				style={
					!assignmentScorerToggle
						? {
								display: 'grid',
								gridTemplateColumns: '1fr 4fr 1fr',
								overflow: 'scroll',
								borderTop: '1px solid var(--blue)',
								fontSize: '120%'
						  }
						: {
								display: 'grid',
								gridTemplateColumns: '1fr 4fr 1fr',
								backgroundColor: 'var(--grey)',
								overflow: 'scroll',
								borderTop: '1px solid var(--blue)',
								fontSize: '120%'
						  }
				}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center'
					}}>
					<div style={{ marginRight: '1%' }}>Pages: </div>
					<div style={{ marginRight: '1%' }}>{assignment.readingPages}</div>
				</div>

				<div
					style={
						!assignmentScorerToggle
							? { display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }
							: { display: 'flex', justifyContent: 'center', alignItems: 'center' }
					}>
					<div style={{ marginRight: '1%' }}>Sections: </div>
					<div style={{ marginRight: '1%' }}>{assignment.readingSections}</div>
				</div>

				<button
					style={{ backgroundColor: 'var(--blue)', color: 'var(--white)', fontSize: '120%' }}
					onClick={() => {
						console.log('click')
						setAssignmentScorerToggle(!assignmentScorerToggle)
					}}>
					Grade
				</button>
			</div>
			{assignmentScorerToggle && (
				<>
					{data.findClassPeriod.assignedLesson.essentialQuestion !== undefined && (
						<OEQGrader
							student={student}
							assignment={assignment}
							essentialQuestion={data.findClassPeriod.assignedLesson.essentialQuestion}
						/>
					)}
				</>
			)}
		</div>
	)
}

export default OEQGridDisplay
