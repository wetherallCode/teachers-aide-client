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
			<div style={{ fontSize: '120%' }}>
				Current Protocol:{' '}
				{socraticQuestion.__typename === 'SocraticQuestionProtocolForClassPeriod'
					? 'Socratic Question'
					: 'none'}
			</div>
			<div style={{ fontSize: '100', marginTop: '2%' }}>{socraticQuestion.socraticQuestion}</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					width: '30rem',
					marginTop: '3%'
				}}>
				<button
					style={{ width: '10rem', height: '2.5rem', color: 'var(--blue)', fontSize: '1.1rem' }}
					onClick={() => setIsActive()}>
					Question Finished
				</button>
				<button
					style={{
						width: '10rem',
						height: '2.5rem',
						color: 'var(--red)',
						fontSize: '1.1rem'
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
