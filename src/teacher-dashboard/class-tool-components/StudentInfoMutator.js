import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const UPDATE_RESPONSIBILTY_POINTS = gql`
	mutation updateResponsibilityPoints($_id: ID!, $responsibilityPoints: Int!) {
		updateResponsibilityPoints(_id: $_id, responsibilityPoints: $responsibilityPoints) {
			responsibilityPoints
		}
	}
`

const StudentInfoMutator = ({ match, periodName, student }) => {
	const [BehaviorPointsToggle, setBehaviorPointsToggle] = useState(true)

	const { _id } = student

	const [updateResponsibilityPoints] = useMutation(UPDATE_RESPONSIBILTY_POINTS, {
		refetchQueries: ['FindStudent']
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

export default StudentInfoMutator
