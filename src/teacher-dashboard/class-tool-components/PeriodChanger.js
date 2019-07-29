import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const PeriodChanger = ({ period }) => {
	return (
		<Link
			style={{ textDecoration: 'none', color: 'var(--blue)' }}
			to='/dashboard/classroom/class-period-selector'>
			<button
				style={{
					height: '3rem',
					width: '30rem',
					backgroundColor: 'var(--white)',
					color: 'var(--blue)',
					marginTop: '3px',
					paddingLeft: '30%',
					paddingRight: '30%',
					fontSize: '170%',
					border: '1px solid black',
					boxShadow: '1px 1px 1px black',
					textShadow: '3px 3px 3px var(--grey)',
					borderRadius: '5px',
				}}>
				Period {period}
			</button>
		</Link>
	)
}

export default PeriodChanger
