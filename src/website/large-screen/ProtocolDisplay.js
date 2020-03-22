import React from 'react'

const ProtocolDisplay = ({ protocol }) => {
	const [activeProtocol] = protocol.filter(protocol => protocol.isActive === true)

	return (
		<div style={{ fontSize: '200%', paddingLeft: '3%' }}>
			{activeProtocol.isActive && <div>{activeProtocol.socraticQuestion}</div>}
		</div>
	)
}

export default ProtocolDisplay
