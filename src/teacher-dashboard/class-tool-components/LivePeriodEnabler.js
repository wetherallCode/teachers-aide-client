import React from 'react'

const LivePeriodEnabler = ({ updateLivePeriod, classPeriodInfo }) => {
	console.log(classPeriodInfo.period)
	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<button
				className='whiteButton'
				onClick={() =>
					updateLivePeriod({
						variables: {
							input: {
								period: classPeriodInfo.period,
								assignedDate: classPeriodInfo.assignedDate,
								liveStatus: 'NONE'
							}
						}
					})
				}>
				Enable Live Period
			</button>
		</div>
	)
}

export default LivePeriodEnabler
