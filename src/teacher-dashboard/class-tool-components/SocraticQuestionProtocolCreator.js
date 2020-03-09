import React, { useState, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import { SET_SOCRATIC_QUESTION_PROTOCOL_ISACTIVE } from './ProtocolManager'

export const CREATE_SOCRATIC_QUESTION_PROTOCOL = gql`
	mutation createSocraticQuestionProtocol($input: SocraticQuestionProtocolInput) {
		createSocraticQuestionProtocol(input: $input) {
			classPeriod {
				_id
				assignedProtocols {
					isActive
				}
			}
			students {
				firstName
			}
		}
	}
`

const SocraticQuestionProtocolCreator = ({
	period,
	date,
	markingPeriod,
	classPeriodInfo,
	setProtocolToggle,
	protocolToggle,
	questionInfo,
	eligibleStudentList,
	setErrorDisplay,
	protocolList
}) => {
	const [createSocraticQuestionProtocol, { error }] = useMutation(
		CREATE_SOCRATIC_QUESTION_PROTOCOL,
		{
			variables: {
				input: {
					period: period,
					socraticQuestion: questionInfo.question,
					socraticQuestionType: questionInfo.type,
					readingSections: classPeriodInfo.assignedLesson.readings.sections,
					markingPeriod: markingPeriod,
					assignedDate: date,
					isActive: true
				}
			},
			onError: error => {
				setErrorDisplay(error.message)
			},

			refetchQueries: ['FindStudent', 'findClassPeriodForClassRoom']
		}
	)
	const [setIsActive, { data }] = useMutation(SET_SOCRATIC_QUESTION_PROTOCOL_ISACTIVE, {
		variables: {
			input: {
				period: period,
				socraticQuestion: questionInfo.question,
				assignedDate: date,
				isActive: true
			}
		},
		onCompleted: data => console.log(data),
		refetchQueries: ['findClassPeriodForClassRoom', 'FindStudent']
	})
	const [completedProtocol] = protocolList.filter(protocol => protocol.isActive === false)

	const questionCheck = protocolList.some(
		protocol => protocol.socraticQuestion === questionInfo.question
	)

	return (
		<>
			{!questionCheck && (
				<button
					onClick={() => {
						createSocraticQuestionProtocol()
					}}
					style={{ width: '7rem', height: '2rem', color: 'var(--blue)', fontSize: '110%' }}>
					Create
				</button>
			)}
			{questionCheck && (
				<button
					onClick={() => setIsActive()}
					style={{ width: '7rem', height: '2rem', color: 'var(--blue)', fontSize: '1em' }}>
					Open
				</button>
			)}
		</>
	)
}

export default SocraticQuestionProtocolCreator
