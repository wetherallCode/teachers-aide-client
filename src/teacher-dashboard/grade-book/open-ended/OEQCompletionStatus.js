import React, { useState, useEffect } from 'react'
import StudentInfoMutatorButton from '../../class-tool-components/StudentInfoMutatorButton'

const OEQCompletionStatus = ({
	organizerGrade,
	setOrganizerGrade,
	paragraphGrade,
	setParagraphGrade,
	assignment
}) => {
	return (
		<>
			{assignment.missing && (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						fontSize: '140%'
					}}>
					<div>Completion Grade</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-evenly',
							marginTop: '5%'
						}}>
						<div style={{ marginRight: '2%', width: '15rem' }}>Organizer Completed?</div>
						{organizerGrade === 1 && (
							<button
								style={{
									backgroundColor: 'var(--blue)',
									color: 'var(--white)',
									width: '10rem',
									fontSize: '100%'
								}}
								onClick={() => setOrganizerGrade(0)}>
								Yes
							</button>
						)}
						{organizerGrade === 0 && (
							<button
								style={{
									backgroundColor: 'var(--red)',
									color: 'var(--white)',
									width: '10rem',
									fontSize: '100%'
								}}
								onClick={() => setOrganizerGrade(1)}>
								No
							</button>
						)}
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-evenly',
							marginTop: '5%'
						}}>
						<div style={{ marginRight: '2%', width: '15rem' }}>Paragraph Completed?</div>
						{paragraphGrade === 1 && (
							<button
								style={{
									backgroundColor: 'var(--blue)',
									color: 'var(--white)',
									width: '10rem',
									fontSize: '100%'
								}}
								onClick={() => setParagraphGrade(0)}>
								Yes
							</button>
						)}
						{paragraphGrade === 0 && (
							<button
								style={{
									backgroundColor: 'var(--red)',
									color: 'var(--white)',
									width: '10rem',
									fontSize: '100%'
								}}
								onClick={() => setParagraphGrade(1)}>
								No
							</button>
						)}
					</div>
				</div>
			)}
		</>
	)
}

export default OEQCompletionStatus
