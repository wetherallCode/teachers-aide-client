import React from 'react'

const MultipleClassLoader = ({
	data,
	date,
	lessonValues,
	assignmentList,
	setAssignmentList,
	mulitplePeriodSelect,
	setMulitplePeriodSelect,
	allClassperiods,
	period
}) => {
	const handleChange = e => {
		const eventValue = e.target.value
		const periodIndex = mulitplePeriodSelect.findIndex(i => i === eventValue)

		if (periodIndex > -1) {
			setMulitplePeriodSelect(list => [
				...list.slice(0, periodIndex),
				...list.slice(periodIndex + 1)
			])
		} else {
			setMulitplePeriodSelect(list => [...list, eventValue])
		}
	}

	const revisedClassPeriods = allClassperiods.filter(classPeriod => classPeriod !== period).sort()

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				marginLeft: '2%',
				marginTop: '1%'
			}}>
			<div>Load Classes:</div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
					width: '75%',
					marginRight: '5%'
				}}>
				{revisedClassPeriods.map(classPeriod => (
					<div
						key={classPeriod}
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center'
						}}>
						<div style={{}}>{classPeriod}</div>
						<input type='checkbox' value={classPeriod} onChange={handleChange} />
					</div>
				))}
			</div>
		</div>
	)
}

export default MultipleClassLoader
