import React from 'react'
import ClassSelector from './ClassSelector'

const GradeBook = ({ match }) => {
	return (
		<div
			style={{
				display: 'grid',
				justifyContent: 'center',
				alignItems: 'center',
				gridTemplateColumns: '1fr 1fr',
				backgroundColor: 'var(--blue)',
				color: 'var(--white)',
				height: '3rem',
				fontSize: '140%',
				borderBottom: '3px solid var(--white)'
			}}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					width: '100%',
					paddingLeft: '2%'
				}}>
				<ClassSelector match={match}></ClassSelector>
			</div>
			{/* <Link to={`${match.url}/`}></Link> */}
		</div>
	)
}

export default GradeBook
