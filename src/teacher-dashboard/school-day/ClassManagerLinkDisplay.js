import React from 'react'

const ClassManagerLinkDisplay = ({ display, margin, toggle, state }) => {
	return (
		<div
			style={{ marginRight: `${margin}%` }}
			onMouseOver={e => (e.target.style.color = 'var(--grey)')}
			onMouseOut={e => (e.target.style.color = 'var(--white)')}
			onClick={() => toggle(true)}>
			{display}
		</div>
	)
}

export default ClassManagerLinkDisplay
