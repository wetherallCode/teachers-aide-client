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
				<div>
					<div>Completion Grade</div>
					<div>
						<div>Organizer Completed?</div>
						<button onClick={() => setOrganizerGrade(1)}>Yes</button>
						<button onClick={() => setOrganizerGrade(1)}>Reset</button>
						{organizerGrade > 0 ? 'True' : 'False'}
					</div>
					<div>
						<div>Paragraph Completed?</div>
						<button onClick={() => setParagraphGrade(1)}>Yes</button>
						<button onClick={() => setParagraphGrade(1)}>Reset</button>
						{paragraphGrade > 0 ? 'True' : 'False'}
					</div>
				</div>
			)}
		</>
	)
}

export default OEQCompletionStatus
