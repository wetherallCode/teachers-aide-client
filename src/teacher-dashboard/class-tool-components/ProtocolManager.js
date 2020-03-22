import React, { useState, useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import { UPDATE_LIVE_PERIOD } from './LivePeriodDisplay'
import { FIND_CLASSPERIOD_FOR_CLASSROOM } from './ClassRoom'

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
				_id
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
	activeProtocol,
	previousLiveStatus
}) => {
	const [socraticQuestion] = activeProtocol
	const [updateLivePeriod] = useMutation(UPDATE_LIVE_PERIOD)
	const [deleteSocraticQuestion] = useMutation(REMOVE_SOCRATIC_QUESTION_PROTOCOL, {
		variables: {
			input: {
				period: period,
				socraticQuestion: socraticQuestion.socraticQuestion,
				assignedDate: date
			}
		},
		refetchQueries: ['FindStudent', 'findClassPeriodForClassRoom']
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
		update(cache, { data: { setIsActive } }) {
			const { findClassPeriod } = cache.readQuery({
				query: FIND_CLASSPERIOD_FOR_CLASSROOM,
				variables: { assignedDate: date, period: period }
			})
			cache.writeQuery({
				query: FIND_CLASSPERIOD_FOR_CLASSROOM,
				variables: { assignedDate: date, period: period },
				data: { findClassPeriod }
			})
			// const { findStudentByPeriodAndDesk } = cache.readQuery({})
			// console.log(findClassPeriod)
		},
		refetchQueries: ['FindStudent']
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
					onClick={() => {
						setIsActive()
						updateLivePeriod({
							variables: {
								input: {
									period: classPeriodInfo.period,
									assignedDate: classPeriodInfo.assignedDate,
									liveStatus: previousLiveStatus
								}
							}
						})
					}}>
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
						updateLivePeriod({
							variables: {
								input: {
									period: classPeriodInfo.period,
									assignedDate: classPeriodInfo.assignedDate,
									liveStatus: previousLiveStatus
								}
							}
						})
					}}>
					Undo Question
				</button>
			</div>
		</div>
	)
}

export default ProtocolManager
