import React, { useState } from 'react'
import { Route } from 'react-router'
import DeskSelector from './DeskSelector'
import ClassRoomTools from './ClassRoomTools'
import StudentInfo from './StudentInfo'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const FIND_CLASSPERIOD_FOR_CLASSROOM = gql`
  query findClassPeriodForClassRoom($assignedDate: Date, $period: periodName) {
    findClassPeriod(assignedDate: $assignedDate, period: $period) {
      _id
      assignedLesson {
        _id
        lessonName
        inUnit {
          name
        }
        warmup
        essentialQuestion {
          question
        }
        readings {
          pages
          sections
        }
        socraticQuestions {
          question
          type
        }
        vocabWords {
          word
          partOfSpeech
          definition
        }
        studyGuideQuestions
      }
      period
      assignedDate
      assignedHomework {
        assignedDate
        dueDate
        assignmentType
        markingPeriod
        readingPages
        readingSections
        maxScore
      }
      assignedTest {
        assignedDate
        assignmentType
        dueDate
        markingPeriod
        maxScore
        readingPages
        readingSections
      }
      assignedProtocols {
        ... on SocraticQuestionProtocolForClassPeriod {
          isActive
          socraticQuestion
          socraticQuestionType
        }
      }
      livePeriod
    }
  }
`

const ClassRoom = ({ match }) => {
  const [presentStudents, setPresentStudents] = useState([])

  const todaysDate = new Date().toISOString().substring(0, 10)
  const { periodName } = match.params

  const { data, loading, error, startPolling, stopPolling } = useQuery(
    FIND_CLASSPERIOD_FOR_CLASSROOM,
    {
      variables: { period: periodName, assignedDate: todaysDate }
      // pollInterval: 10
    }
  )
  if (loading) return null
  if (error) console.log(error)

  const { url } = match

  return (
    <>
      <div
        style={{
          backgroundColor: 'var(--white)',
          display: 'grid',
          gridTemplateRows: '3fr 1fr',
          gridGap: '1px'
          // height: '100vh',
          // overflow: 'scroll'
        }}
      >
        <DeskSelector
          match={match}
          periodName={periodName}
          todaysDate={todaysDate}
          setPresentStudents={setPresentStudents}
        />
        {data.findClassPeriod !== 'undefined' && (
          <ClassRoomTools
            classPeriodInfo={data.findClassPeriod}
            presentStudents={presentStudents}
            period={periodName}
            match={match}
            todaysDate={todaysDate}
            startPolling={startPolling}
            stopPolling={stopPolling}
          />
        )}
      </div>
      <Route
        path={`${url}/:deskNumber`}
        render={props => (
          <StudentInfo
            {...props}
            periodName={periodName}
            todaysDate={todaysDate}
          />
        )}
      />
    </>
  )
}
export default ClassRoom
