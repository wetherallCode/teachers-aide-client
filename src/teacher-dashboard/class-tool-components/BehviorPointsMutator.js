import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import { FIND_STUDENT_QUERY } from './StudentInfo'

const UPDATE_RESPONSIBILITY_POINTS = gql`
	mutation updateResponsibilityPoints($_id: ID!, $responsibilityPoints: Int!) {
		updateResponsibilityPoints(_id: $_id, responsibilityPoints: $responsibilityPoints) {
			_id
			responsibilityPoints
		}
	}
`

const BehaviorPointsMutator = ({ match, periodName, student }) => {
	const [BehaviorPointsToggle, setBehaviorPointsToggle] = useState(true)

	const { _id, desk } = student

	const [updateResponsibilityPoints] = useMutation(UPDATE_RESPONSIBILITY_POINTS, {
		update(client, { data: { updateResponsibilityPoints } }) {
			const { findStudentByPeriodAndDesk } = client.readQuery({
				query: FIND_STUDENT_QUERY,
				variables: { period: periodName, desk: desk }
			})

			const { responsibilityPoints, __typename } = findStudentByPeriodAndDesk

			client.writeQuery({
				query: gql`
					query updateResponsibilityPointsCacheUpdate($period: periodName!, $desk: Int!) {
						findStudentByPeriodAndDesk(period: $period, desk: $desk) {
							_id
							responsibilityPoints
						}
					}
				`,
				variables: { period: periodName, desk: desk },
				data: {
					findStudentByPeriodAndDesk: { _id: _id, __typename, responsibilityPoints }
				}
			})
		}
	})

	return (
		<div
			style={{
				backgroundColor: 'var(--grey)',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				alignItems: 'center',
				textAlign: 'center',
				overflow: 'scroll'
			}}>
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
				onClick={() => {
					setBehaviorPointsToggle(!BehaviorPointsToggle)
				}}>
				Behavior Points
			</button>
			{BehaviorPointsToggle && (
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gridTemplateRows: '1fr 1fr'
					}}>
					<button
						className='student-info-mutator-blue'
						onClick={() => {
							updateResponsibilityPoints({
								variables: { _id: _id, responsibilityPoints: 1 }
							})
						}}
						onMouseDown={e => {
							e.target.style.backgroundColor = 'var(--white)'
							e.target.style.color = 'var(--blue)'
						}}
						onTouchStart={e => {
							e.target.style.backgroundColor = 'var(--white)'
							e.target.style.color = 'var(--blue)'
						}}
						onMouseUp={e => {
							e.target.style.backgroundColor = 'var(--blue)'
							e.target.style.color = 'var(--white)'
						}}
						onTouchEnd={e => {
							e.target.style.backgroundColor = 'var(--blue)'
							e.target.style.color = 'var(--white)'
						}}>
						+1
					</button>
					<button
						className='student-info-mutator-blue'
						onClick={() => {
							updateResponsibilityPoints({
								variables: { _id: _id, responsibilityPoints: 2 }
							})
						}}
						onMouseDown={e => {
							e.target.style.backgroundColor = 'var(--white)'
							e.target.style.color = 'var(--blue)'
						}}
						onTouchStart={e => {
							e.target.style.backgroundColor = 'var(--white)'
							e.target.style.color = 'var(--blue)'
						}}
						onMouseUp={e => {
							e.target.style.backgroundColor = 'var(--blue)'
							e.target.style.color = 'var(--white)'
						}}
						onTouchEnd={e => {
							e.target.style.backgroundColor = 'var(--blue)'
							e.target.style.color = 'var(--white)'
						}}>
						+2
					</button>
					<button
						className='student-info-mutator-red'
						onClick={() => {
							updateResponsibilityPoints({
								variables: { _id: _id, responsibilityPoints: -1 }
							})
						}}
						onMouseDown={e => {
							e.target.style.backgroundColor = 'var(--white)'
							e.target.style.color = 'var(--red)'
						}}
						onTouchStart={e => {
							e.target.style.backgroundColor = 'var(--white)'
							e.target.style.color = 'var(--red)'
						}}
						onMouseUp={e => {
							e.target.style.backgroundColor = 'var(--red)'
							e.target.style.color = 'var(--white)'
						}}
						onTouchEnd={e => {
							e.target.style.backgroundColor = 'var(--red)'
							e.target.style.color = 'var(--white)'
						}}>
						-1
					</button>
					<button
						className='student-info-mutator-red'
						onClick={() => {
							updateResponsibilityPoints({
								variables: { _id: _id, responsibilityPoints: -2 }
							})
						}}
						onMouseDown={e => {
							e.target.style.backgroundColor = 'var(--white)'
							e.target.style.color = 'var(--red)'
						}}
						onTouchStart={e => {
							e.target.style.backgroundColor = 'var(--white)'
							e.target.style.color = 'var(--red)'
						}}
						onMouseUp={e => {
							e.target.style.backgroundColor = 'var(--red)'
							e.target.style.color = 'var(--white)'
						}}
						onTouchEnd={e => {
							e.target.style.backgroundColor = 'var(--red)'
							e.target.style.color = 'var(--white)'
						}}>
						-2
					</button>
				</div>
			)}
		</div>
	)
}

export default BehaviorPointsMutator
