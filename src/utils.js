export const CURRENT_MARKING_PERIOD_ID = '5e372ba155b0ff0024103d15'

export const CurrentGradeCalculator = ({ student, markingPeriod, todaysDate }) => {
	// console.log(student.hasTests.length > 0, student.hasAssignments.length > 0)
	if (student.hasTests.length > 0 && student.hasAssignments.length > 0) {
		const testTotalScoredPoints = student.hasTests
			.filter(test => test.markingPeriod === markingPeriod)
			.map(test => test.score)
			.reduce((acummulator, currentValue) => acummulator + currentValue)
		const testTotalMaxScorePoints = student.hasTests
			.filter(test => test.markingPeriod === markingPeriod && test.dueDate <= todaysDate)
			.map(test => test.maxScore)
			.reduce((acummulator, currentValue) => acummulator + currentValue)
		// const lastScoreOmitted = student.hasTests.filter(test => test.markingPeriod === markingPeriod).map(test=>test.maxScore)
		// const testGrade = parseFloat(
		// 	((testTotalScoredPoints / testTotalMaxScorePoints).toFixed(2) * 35).toFixed(2),
		// 	10
		// )

		const testGrade =
			(Math.round(100 * (testTotalScoredPoints / testTotalMaxScorePoints)) / 100) * 35
		const openEndedTotalScoredPoints = student.hasAssignments
			.filter(
				oeq =>
					oeq.assignmentType === 'OEQ' && oeq.maxScore === 5 && oeq.markingPeriod === markingPeriod
			)
			.map(oeq => oeq.score)
			.reduce((acummulator, currentValue) => acummulator + currentValue)

		const openEndedTotalMaxScorePoints = student.hasAssignments
			.filter(
				oeq =>
					oeq.maxScore === 5 && oeq.markingPeriod === markingPeriod && oeq.dueDate <= todaysDate
			)
			.map(oeq => oeq.maxScore)
			.reduce((acummulator, currentValue) => acummulator + currentValue)

		const openEndedGrade =
			(Math.round(100 * (openEndedTotalScoredPoints / openEndedTotalMaxScorePoints)) / 100) * 50

		const responsibilityPointsGrade = Math.round((100 * student.responsibilityPoints) / 100) * 0.15
		// const responsibilityPointsGrade = Math.round((100 * student.responsibilityPoints) / 100) * 15

		const grade = Math.round(responsibilityPointsGrade + openEndedGrade + testGrade)

		return grade
	} else return 0
}

export const testTotalScoredPoints = ({ student, markingPeriod }) => {
	if (student.hasTests.length > 0) {
		const points = student.hasTests
			.filter(test => test.markingPeriod === markingPeriod)
			.map(test => test.score)
			.reduce((acummulator, currentValue) => acummulator + currentValue)
		return points
	} else return 0
}

export const testTotalMaxScorePoints = ({ student, markingPeriod, todaysDate }) => {
	if (student.hasTests.length > 0) {
		const totalPoints = student.hasTests
			.filter(test => test.markingPeriod === markingPeriod && test.dueDate <= todaysDate)
			.map(test => test.maxScore)
			.reduce((acummulator, currentValue) => acummulator + currentValue)
		return totalPoints
	} else return 0
}

export const openEndedTotalScoredPoints = ({ student, markingPeriod }) => {
	if (student.hasAssignments.filter(assignment => assignment.assignmentType === 'OEQ').length > 0) {
		const totalScoredPoints = student.hasAssignments
			.filter(
				oeq =>
					oeq.assignmentType === 'OEQ' && oeq.maxScore === 5 && oeq.markingPeriod === markingPeriod
			)
			.map(oeq => oeq.score)
			.reduce((acummulator, currentValue) => acummulator + currentValue)
		return totalScoredPoints
	} else return 0
}

export const openEndedTotalMaxScorePoints = ({ student, markingPeriod, todaysDate }) => {
	if (student.hasAssignments.filter(assignment => assignment.assignmentType === 'OEQ').length > 0) {
		const totalMaxScorePoints = student.hasAssignments
			.filter(
				oeq =>
					oeq.maxScore === 5 && oeq.markingPeriod === markingPeriod && oeq.dueDate <= todaysDate
			)
			.map(oeq => oeq.maxScore)
			.reduce((acummulator, currentValue) => acummulator + currentValue)
		return totalMaxScorePoints
	} else return 0
}

// export const getTestGrade = ({ student, markingPeriod, todaysDate }) => {
// 	const testTotalScoredPoints = student.hasTests
// 		.filter(test => test.markingPeriod === markingPeriod)
// 		.map(test => test.score)
// 		.reduce((acummulator, currentValue) => acummulator + currentValue)
// 	const testTotalMaxScorePoints = student.hasTests
// 		.filter(test => test.markingPeriod === markingPeriod && test.dueDate <= todaysDate)
// 		.map(test => test.maxScore)
// 		.reduce((acummulator, currentValue) => acummulator + currentValue)
// 	// const lastScoreOmitted = student.hasTests.filter(test => test.markingPeriod === markingPeriod).map(test=>test.maxScore)
// 	const testGrade = parseFloat(
// 		((testTotalScoredPoints / testTotalMaxScorePoints).toFixed(2) * 35).toFixed(2),
// 		10
// 	)
// 	return testGrade
// }

export const sortByLastName = (a, b) => {
	let lastNameA = a.lastName.toLowerCase()
	let lastNameB = b.lastName.toLowerCase()

	if (lastNameA < lastNameB) {
		return -1
	}
	if (lastNameA > lastNameB) {
		return 1
	}
	return 0
}
