import React, { useState } from 'react'

const EssentialQuestion = ({
	essentialQuestionTypeEnum,
	majorTextStructureEnum,
	essentialQuestionValues,
	setEssentialQuestionValues
}) => {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr',
				borderBottom: '1px solid var(--blue)',
				paddingBottom: '2%'
			}}>
			<div>
				<div
					style={{
						marginRight: '3%',
						fontSize: '160%',
						textAlign: 'center',
						marginBottom: '3%',
						marginTop: '2%'
					}}>
					Essential Question
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						marginBottom: '5%'
					}}>
					<div style={{ marginRight: '3%', fontSize: '160%' }}>Question:</div>
					<input
						type='text'
						style={{
							height: '1.5rem',
							width: '100%',
							backgroundColor: 'transparent',
							color: 'var(--blue)',
							fontSize: '100%'
						}}
						onChange={e =>
							setEssentialQuestionValues({ ...essentialQuestionValues, question: e.target.value })
						}
					/>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						fontSize: '120%',
						marginRight: '1%'
					}}>
					<div
						style={{
							marginRight: '1%'
						}}>
						Question Type:
					</div>
					<select
						style={{
							height: '2rem',
							backgroundColor: 'transparent',
							color: 'var(--blue)',
							fontSize: '100%',
							marginRight: '2%'
						}}
						onChange={e =>
							setEssentialQuestionValues({
								...essentialQuestionValues,
								type: e.target.value.toUpperCase()
							})
						}>
						{essentialQuestionTypeEnum.map(type => (
							<option key={type}>
								{type.substring(0, 1).toUpperCase() + type.substring(1).toLowerCase()}
							</option>
						))}
					</select>
					<div
						style={{
							marginRight: '1%'
						}}>
						Text Structure Type:
					</div>
					<select
						style={{
							height: '2rem',
							backgroundColor: 'transparent',
							color: 'var(--blue)',
							fontSize: '100%'
						}}
						onChange={e =>
							setEssentialQuestionValues({
								...essentialQuestionValues,
								textStructure: e.target.value.toUpperCase()
							})
						}>
						{majorTextStructureEnum.map(type => (
							<option key={type}>
								{type.substring(0, 1).toUpperCase() + type.substring(1).toLowerCase()}
							</option>
						))}
					</select>
				</div>
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						marginBottom: '5%'
					}}>
					<div style={{ marginRight: '5%' }}>Question Type: {essentialQuestionValues.type}</div>
					<div>Question's Structure: {essentialQuestionValues.textStructure}</div>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column-reverse',
						justifyContent: 'center',
						alignItems: 'center'
					}}>
					<div>{essentialQuestionValues.question}</div>
				</div>
			</div>
		</div>
	)
}

export default EssentialQuestion
