import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

// const REMOVE_CLASS_PERIOD = gql`
// 	mutation removeClassPeriod($_id: ID!) {
// 		removeClassPeriod(_id: $_id) {
// 			classPeriod {
// 				_id
// 			}
// 			removed
// 		}
// 	}
// `

const CREATE_CLASS_PERIOD = gql`
	mutation createClassPeriodWithAssignments($input: ClassPeriodInput) {
		createClassPeriod(input: $input) {
			_id
			grade
			assignedLesson {
				_id
			}
			assignedDate
			assignedHomework {
				assignmentType
			}
		}
	}
`

const AssignmentCreator = ({
	assignmentList,
	period,
	lessonValues,
	date,
	mulitplePeriodSelect,
	fakeClassPeriodSet
}) => {
	console.log(mulitplePeriodSelect, assignmentList)
	const [submitStatus, setSubmitStatus] = useState(false)
	const [errorLog, setErrorLog] = useState(null)

	const displayError = error => setErrorLog(error)

	const { grade, lessonName } = lessonValues

	const [createClass, { data }] = useMutation(CREATE_CLASS_PERIOD, {
		onError: displayError,
		onCompleted: data => console.log(data),
		refetchQueries: ['findClassPeriodForClassManagerDisplay']
	})

	const createClasses = e => {
		e.preventDefault()
		fakeClassPeriodSet.forEach(classPeriod =>
			createClass({
				variables: {
					input: {
						grade: grade,
						assignedLesson: lessonName,
						assignedDate: date,
						period: classPeriod,
						assignedHomework: assignmentList
					}
				}
			})
		)

		setSubmitStatus(true)
	}

	return (
		<button
			style={{
				backgroundColor: 'var(--blue)',
				color: 'var(--white)',
				width: '100%',
				height: '3rem',
				fontSize: '120%'
			}}
			onClick={createClasses}>
			Create Lesson
		</button>
	)
}

export default AssignmentCreator
