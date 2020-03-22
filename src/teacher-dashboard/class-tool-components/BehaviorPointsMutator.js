import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import { FIND_STUDENT_QUERY } from './StudentInfo'
import StudentInfoMutatorButton from './StudentInfoMutatorButton'

const UPDATE_RESPONSIBILITY_POINTS = gql`
	mutation updateResponsibilityPoints($input: UpdateResponsibilityPointsInput) {
		updateResponsibilityPoints(input: $input) {
			_id
			responsibilityPoints
		}
	}
`

const BehaviorPointsMutator = ({
	match,
	periodName,
	student,
	teacherOptions,
	setTeacherOptions
}) => {
	const [pointsButtonToggle, setPointsButtonToggle] = useState(true)
	const { _id, desk, responsibilityPoints } = student
	const [updateResponsibilityPoints] = useMutation(
		UPDATE_RESPONSIBILITY_POINTS,
		{ refetchQueries: ['FindStudent'] }
		// {
		// update(client, { data: { updateResponsibilityPoints } }) {
		// 	const { findStudentByPeriodAndDesk } = client.readQuery({
		// 		query: FIND_STUDENT_QUERY,
		// 		variables: { input: { period: periodName, desk: desk } }
		// 	})
		// 	const { responsibilityPoints, __typename } = findStudentByPeriodAndDesk
		// 	client.writeQuery({
		// 		query: gql`
		// 			query updateResponsibilityPointsCacheUpdate($period: periodName!, $desk: Int!) {
		// 				findStudentByPeriodAndDesk(period: $period, desk: $desk) {
		// 					_id
		// 					responsibilityPoints
		// 				}
		// 			}
		// 		`,
		// 		variables: { period: periodName, desk: desk },
		// 		data: {
		// 			findStudentByPeriodAndDesk: { _id: _id, __typename, responsibilityPoints }
		// 		}
		// 	})
		// }
		// }
	)

	return (
		<>
			{/* {teacherOptions.behaviorPointsToggle && ( */}
			<>
				<button
					style={{
						textDecoration: 'underline',
						width: '70%',
						height: '3rem',
						marginTop: '25px',
						backgroundColor: 'var(--blue)',
						color: 'var(--white)',
						fontSize: '100%',
						fontWeight: 'bolder',
						boxShadow: '1px 1px 2px 1px var(--blue)',
						borderRadius: '5px'
					}}
					onClick={() => setPointsButtonToggle(!pointsButtonToggle)}>
					Behavior Points
				</button>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gridTemplateRows: '1fr 1fr',
						width: '55%',
						gridGap: '15%',
						margin: '5%',
						fontSize: '170%'
					}}>
					{pointsButtonToggle && (
						<>
							<StudentInfoMutatorButton
								mutation={updateResponsibilityPoints}
								variables={{ _id: _id, responsibilityPoints: 1 }}
								buttonDisplay={'+1'}
								buttonColor={'blue'}
							/>
							<StudentInfoMutatorButton
								mutation={updateResponsibilityPoints}
								variables={{ _id: _id, responsibilityPoints: 2 }}
								buttonDisplay={'+2'}
								buttonColor={'blue'}
							/>
							<StudentInfoMutatorButton
								mutation={updateResponsibilityPoints}
								variables={{ _id: _id, responsibilityPoints: -1 }}
								buttonDisplay={'-1'}
								buttonColor={'red'}
							/>
							<StudentInfoMutatorButton
								mutation={updateResponsibilityPoints}
								variables={{ _id: _id, responsibilityPoints: -2 }}
								buttonDisplay={'-2'}
								buttonColor={'red'}
							/>
						</>
					)}
				</div>
			</>
			{/* )} */}
		</>
	)
}

export default BehaviorPointsMutator
