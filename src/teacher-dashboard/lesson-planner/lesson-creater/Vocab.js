import React, { useState } from 'react'

const Vocab = ({ vocabWordList, setVocabWordList, partsOfSpeechEnum }) => {
	const [vocabWord, setVocabWord] = useState({
		word: '',
		partOfSpeech: partsOfSpeechEnum[0],
		definition: ''
	})
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr',
				borderBottom: '1px solid var(--blue)'
			}}>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 5fr'
				}}>
				<button
					style={{ backgroundColor: 'var(--blue)', color: 'var(--white)', fontSize: '100%' }}
					onClick={e => {
						e.preventDefault()
						setVocabWordList(list => [...list, vocabWord])
					}}>
					Add Word
				</button>
				<div>
					<div style={{ marginLeft: '30%', fontSize: '160%' }}>Vocab</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							marginLeft: '1%',
							marginBottom: '5%'
						}}>
						<div style={{ marginRight: '3%', fontSize: '160%' }}>Word:</div>
						<input
							type='text'
							style={{
								height: '1.5rem',
								backgroundColor: 'transparent',
								color: 'var(--blue)',
								fontSize: '120%',
								width: '70%'
							}}
							onChange={e =>
								setVocabWord({
									...vocabWord,
									word: e.target.value
								})
							}
						/>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							marginLeft: '1%',
							marginBottom: '5%'
						}}>
						<div style={{ marginRight: '3%', fontSize: '160%' }}>Definition:</div>
						<input
							type='text'
							style={{
								height: '1.5rem',
								backgroundColor: 'transparent',
								color: 'var(--blue)',
								fontSize: '120%',
								width: '70%'
							}}
							onChange={e =>
								setVocabWord({
									...vocabWord,
									definition: e.target.value
								})
							}
						/>
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							marginLeft: '1%',
							marginBottom: '5%'
						}}>
						<div style={{ marginRight: '3%', fontSize: '160%' }}>Part of Speech:</div>
						<select
							type='text'
							style={{
								height: '2rem',
								backgroundColor: 'transparent',
								color: 'var(--blue)',
								fontSize: '120%',
								width: '40%'
							}}>
							{partsOfSpeechEnum.map(partOfSpeech => (
								<option
									key={partOfSpeech}
									onChange={e => setVocabWord({ ...vocabWord, partOfSpeech: e.target.value })}>
									{partOfSpeech}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>
			<div style={{ scroll: 'auto' }}>
				{vocabWordList.map(word => (
					<div>
						{word.word} - {word.definition}
					</div>
				))}
			</div>
		</div>
	)
}

export default Vocab
