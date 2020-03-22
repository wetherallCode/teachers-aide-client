import React, { useEffect, useState } from 'react'
import SocraticQuestionPicker from './SocraticQuestionPicker'
import ProtocolManager from './ProtocolManager'

const ProtocolDisplay = ({ classPeriodInfo, period, date, markingPeriod }) => {
	const [previousLiveStatus, setPreviousLiveStatus] = useState(classPeriodInfo.livePeriod)
	const activeProtocol = classPeriodInfo.assignedProtocols.filter(
		protocol => protocol.isActive === true
	)
	useEffect(() => {
		setPreviousLiveStatus(classPeriodInfo.livePeriod)
	}, [])

	console.log('LiveStatus: ' + previousLiveStatus)
	return (
		<>
			{activeProtocol.length !== 0 ? (
				<ProtocolManager
					classPeriodInfo={classPeriodInfo}
					period={period}
					date={date}
					activeProtocol={activeProtocol}
					protocolList={classPeriodInfo.assignedProtocols}
					previousLiveStatus={previousLiveStatus}
				/>
			) : (
				<SocraticQuestionPicker
					classPeriodInfo={classPeriodInfo}
					period={period}
					date={date}
					markingPeriod={markingPeriod}
					activeProtocol={activeProtocol}
					protocolList={classPeriodInfo.assignedProtocols}
				/>
			)}
		</>
	)
}

export default ProtocolDisplay
