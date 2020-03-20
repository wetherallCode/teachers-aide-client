import React from 'react'
import ProtocolDisplay from './ProtocolDisplay'

const Protocols = ({ protocol }) => {
	return (
		<div
			style={{
				color: 'var(--blue)',
				display: 'grid',
				gridTemplateRows: '1fr 4fr'
			}}>
			<div>
				<h1
					style={{
						textDecoration: 'underline',
						fontSize: '300%',
						textAlign: 'center'
					}}>
					Protocol
				</h1>
			</div>
			<div>{protocol.length > 0 && <ProtocolDisplay protocol={protocol} />}</div>
		</div>
	)
}

export default Protocols
