import React from 'react'

const Readings = ({ lesson }) => {
	return (
		<div
			style={{
				color: 'var(--blue)',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				marginTop: '5%',
				alignItems: 'center',
				overflow: 'scroll'
			}}>
			<h1
				style={{
					textDecoration: 'underline',
					fontSize: '300%'
				}}>
				Today's Assigned Reading
			</h1>
			<div
				style={{
					textAlign: 'center',
					fontSize: '250%',
					marginTop: '2%',
					marginBottom: '20%'
				}}>
				<div>
					Read page {lesson.readings.pages}: {lesson.readings.sections}
				</div>
			</div>
		</div>
	)
}

export default Readings
