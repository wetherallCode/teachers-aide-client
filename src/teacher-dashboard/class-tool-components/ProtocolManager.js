import React, { useState, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

export const REMOVE_SOCRATIC_QUESTION_PROTOCOL = gql`
	mutation deleteSocraticQuestion($input: DeleteSocraticQuestionProtocolInput) {
		deleteSocraticQuestionProtocol(input: $input) {
			classPeriod {
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

export const SET_SOCRATIC_QUESTION_PROTOCOL_ISACTIVE = gql`
	mutation setSocraticQuestionProtcolIsActive($input: SetSocraticQuestionProtocolIsActiveInput) {
		setSocraticQuestionProtcolIsActive(input: $input) {
			classPeriod {
				assignedProtocols {
					isActive
					... on SocraticQuestionProtocolForClassPeriod {
						socraticQuestion
						socraticQuestionType
					}
				}
			}
			students {
				firstName
				hasProtocols {
					__typename
					isActive
					... on SocraticQuestionProtocol {
						socraticQuestion
					}
				}
			}
		}
	}
`
const ProtocolManager = ({
	protocolToggle,
	period,
	date,
	classPeriodInfo,
	setProtocolToggle,
	protocolQuestionForProtocolManager,
	eligibleStudentList,
	activeProtocol
}) => {
	const [socraticQuestion] = activeProtocol

	const [deleteSocraticQuestion] = useMutation(REMOVE_SOCRATIC_QUESTION_PROTOCOL, {
		variables: {
			input: {
				period: period,
				socraticQuestion: socraticQuestion.socraticQuestion,
				assignedDate: date
			}
		},
		refetchQueries: ['findClassPeriodForClassRoom', 'FindStudent']
	})

	const [setIsActive] = useMutation(SET_SOCRATIC_QUESTION_PROTOCOL_ISACTIVE, {
		variables: {
			input: {
				period: period,
				socraticQuestion: socraticQuestion.socraticQuestion,
				assignedDate: date,
				isActive: false
			}
		},
		refetchQueries: ['findClassPeriodForClassRoom', 'FindStudent']
	})

	return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<div style={{ fontSize: '2rem' }}>Current Protocol: {socraticQuestion.__typename}</div>
			<div style={{ fontSize: '1.5rem' }}>{socraticQuestion.socraticQuestion}</div>
			<div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
				<button
					style={{ width: '5rem', height: '2rem', color: 'var(--blue)' }}
					onClick={() => setIsActive()}>
					Question Finished
				</button>
				<button
					style={{
						width: '5rem',
						height: '2rem',
						color: 'var(--white)',
						backgroundColor: 'var(--white)'
					}}
					onClick={() => {
						deleteSocraticQuestion()
					}}>
					Undo Question
				</button>
			</div>
		</div>
	)
}

export default ProtocolManager
