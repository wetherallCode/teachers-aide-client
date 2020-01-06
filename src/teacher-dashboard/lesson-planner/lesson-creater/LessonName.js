import React from 'react'

const LessonName = ({ lessonName, setLessonName }) => {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr',
				borderBottom: '1px solid var(--blue)',
				paddingBottom: '2%'
			}}>
			<div
				style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '1%' }}>
				<div style={{ marginRight: '3%', fontSize: '160%' }}>Lesson Name</div>
				<input
					type='text'
					style={{
						height: '1.5rem',
						backgroundColor: 'transparent',
						color: 'var(--blue)',
						fontSize: '120%',
						width: '70%'
					}}
					onChange={e => setLessonName(e.target.value)}></input>{' '}
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: '160%'
				}}>
				{lessonName}
			</div>
		</div>
	)
}

export default LessonName
