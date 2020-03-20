import React from 'react'

const ProtocolDisplay = ({ protocol }) => {
	const [activeProtocol] = protocol
	console.log(activeProtocol)
	return (
		<div style={{ fontSize: '200%', paddingLeft: '3%' }}>
			{activeProtocol.isActive && <div>{activeProtocol.socraticQuestion}</div>}
		</div>
	)
}

export default ProtocolDisplay
