import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

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
				assignedDate
				dueDate
				readingSections
			}
			assignedTest {
				dueDate
				readingSections
			}
		}
	}
`

const AssignmentCreator = ({
	assignmentList,
	testValues,
	period,
	lessonValues,
	date,
	mulitplePeriodSelect
}) => {
	const [submitStatus, setSubmitStatus] = useState(false)
	const [errorLog, setErrorLog] = useState(null)

	const displayError = error => setErrorLog(error)

	const { grade, lessonName } = lessonValues

	const [createClass, { data }] = useMutation(CREATE_CLASS_PERIOD, {
		onError: displayError,
		onCompleted: data => console.log(data)
	})

	const createClasses = e => {
		e.preventDefault()
		mulitplePeriodSelect.forEach(classPeriod =>
			createClass({
				variables: {
					input: {
						grade: grade,
						assignedLesson: lessonName,
						assignedDate: date,
						period: classPeriod,
						assignedHomework: assignmentList,
						assignedTest: testValues
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
			Create Class Period
		</button>
	)
}

export default AssignmentCreator
