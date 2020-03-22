import React, { useState, useEffect } from 'react'

const ProtocolDisplay = ({ protocol }) => {
	const [activeProtocol, setActiveProtocol] = useState(null)
	console.log(activeProtocol)
	useEffect(() => {
		if (protocol.some(protocol => protocol.isActive === true)) {
			const [activeProt] = protocol.filter(protocol => protocol.isActive === true)
			setActiveProtocol(activeProt)
		} else setActiveProtocol(null)
	}, [protocol])
	return (
		<div style={{ fontSize: '200%', paddingLeft: '3%' }}>
			{activeProtocol !== null && <div>{activeProtocol.socraticQuestion}</div>}
		</div>
	)
}

export default ProtocolDisplay
