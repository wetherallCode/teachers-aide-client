import React from 'react'

const LivePeriodEnabler = ({ updateLivePeriod, classPeriodInfo, startPolling }) => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<button
				className='whiteButton'
				onClick={() => {
					startPolling(10)
					updateLivePeriod({
						variables: {
							input: {
								period: classPeriodInfo.period,
								assignedDate: classPeriodInfo.assignedDate,
								liveStatus: 'NONE'
							}
						}
					})
				}}>
				Enable Live Period
			</button>
		</div>
	)
}

export default LivePeriodEnabler
