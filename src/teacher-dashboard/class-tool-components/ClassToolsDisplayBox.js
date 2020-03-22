import React, { useState, useEffect } from 'react'
import Timer from 'react-compound-timer'
import { useQuery } from '@apollo/react-hooks'

import { CURRENT_MARKING_PERIOD_ID } from '../../utils'
import { GET_CURRENT_MARKING_PERIOD } from '../school-day/ClassPeriodCreator'
import ProtocolDisplay from './ProtocolDisplay'
import LivePeriodDisplay from './LivePeriodDisplay'

const ClassToolsDisplayBox = ({
	selector,
	period,
	classPeriodInfo,
	teacherOptions,
	setTeacherOptions,
	protocolToggle,
	setProtocolToggle,
	eligibleStudentList
}) => {
	const date = new Date().toISOString().substring(0, 10)

	const { data, loading, error } = useQuery(GET_CURRENT_MARKING_PERIOD, {
		variables: { _id: CURRENT_MARKING_PERIOD_ID }
	})
	if (loading) return null
	if (error) console.log(error)

	return (
		<>
			{selector === 0 ? (
				<>
					{classPeriodInfo !== null ? (
						<ProtocolDisplay
							period={period}
							date={date}
							classPeriodInfo={classPeriodInfo}
							markingPeriod={data.findCurrentMarkingPeriod.markingPeriod}
						/>
					) : (
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								fontSize: '2rem'
							}}>
							<div>No Questions</div>
						</div>
					)}
				</>
			) : selector === 1 ? (
				<Timer
					initialTime={0}
					startImmediately={false}
					style={{ display: 'grid', gridTemplateRows: '1fr 2fr' }}>
					{({ start, resume, pause, stop, reset }) => {
						return (
							<div>
								<div
									style={{
										fontSize: '400%',
										height: '4rem',
										backgroundColor: 'var(-white)',
										textAlign: 'center'
									}}>
									<Timer.Minutes />:
									<Timer.Seconds />
								</div>

								<div
									style={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'flex-start',
										marginTop: '3.5%',
										marginBottom: '10px'
									}}>
									<button
										className='whiteButton'
										style={{ width: '15%', height: '2rem', fontSize: '120%' }}
										onClick={start}>
										Start
									</button>
									<button
										className='whiteButton'
										style={{ width: '15%', height: '2rem', fontSize: '120%' }}
										onClick={pause}>
										Pause
									</button>
									<button
										className='whiteButton'
										style={{ width: '15%', height: '2rem', fontSize: '120%' }}
										onClick={resume}>
										Resume
									</button>
									<button
										className='whiteButton'
										style={{ width: '15%', height: '2rem', fontSize: '120%' }}
										onClick={stop}>
										Stop
									</button>
									<button
										className='whiteButton'
										style={{ width: '15%', height: '2rem', fontSize: '120%' }}
										onClick={reset}>
										Reset
									</button>
								</div>
							</div>
						)
					}}
				</Timer>
			) : selector === 2 ? (
				<LivePeriodDisplay classPeriodInfo={classPeriodInfo} />
			) : (
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						backgroundColor: 'var(--white)',
						justifyContent: 'space-evenly',
						alignItems: 'flex-start'
					}}>
					<button className='whiteButton'>Button</button>
					<button className='whiteButton'>Button</button>
					<button className='whiteButton'>Button</button>
					<div
						style={{
							height: 'auto',
							backgroundColor: 'var(--white)',
							width: '90%',
							overflow: 'auto'
						}}>
						button
					</div>
				</div>
			)}
		</>
	)
}

export default ClassToolsDisplayBox
