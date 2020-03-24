import React from 'react'

const Vocab = ({ lesson }) => {
	return (
		<div
			style={{
				color: 'var(--blue)',
				display: 'grid',
				gridTemplateRows: '1fr 6fr',
				borderRight: '3px solid var(--white)'
			}}>
			<div
				style={{
					borderBottom: '3px solid var(--blue)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				<h1
					style={{
						textDecoration: 'underline',
						fontSize: '300%',
						textAlign: 'center'
					}}>
					Vocab
				</h1>
			</div>
			<div
				style={{
					fontSize: '200%',
					// paddingLeft: '3%',
					overflow: 'scroll',
					height: '90vh'
					// marginBottom: '20%'
				}}>
				{lesson.vocabWords.map((word, i) => (
					<div
						key={i}
						style={{
							paddingLeft: '3%',
							height: '10%',
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center'
						}}
						onMouseOver={e => {
							e.target.style.backgroundColor = 'var(--blue)'
							e.target.style.color = 'var(--white)'
						}}
						onMouseOut={e => {
							e.target.style.backgroundColor = 'var(--white)'
							e.target.style.color = 'var(--blue)'
						}}>
						{word.word}: {word.definition}
					</div>
				))}
			</div>
		</div>
	)
}

export default Vocab
