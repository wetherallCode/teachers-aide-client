import React, { useState } from 'react'
import { useToggle } from '../../hooks'

const SmallWebsiteDailyAgendaDisplayVocab = ({ vocab }) => {
	const [isVisible, toggleValue] = useToggle(false)
	return (
		<div>
			<div
				onClick={toggleValue}
				style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '110%' }}>
				Vocab Words
			</div>
			{isVisible && (
				<div style={{ marginLeft: '3%', marginRight: '3%' }}>
					{vocab.map((word, i) => (
						<div key={i} style={{ marginBottom: '2%' }}>
							{word.word}: {word.definition}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default SmallWebsiteDailyAgendaDisplayVocab
