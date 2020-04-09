import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TodaysDate from '../../website/TodaysDate'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import { FIND_STUDENT_QUERY } from './StudentInfo'
import { CurrentGradeCalculator } from '../../utils'

export const MARK_STUDENT_ABSENT = gql`
  mutation markStudentAbsent($_id: ID!, $date: Date) {
    markStudentAbsent(_id: $_id, date: $date) {
      _id
      firstName
      lastName
      period
      daysAbsent
    }
  }
`
export const UNDO_MARK_STUDENT_ABSENT = gql`
  mutation unduMarkStudentAbsent($_id: ID!, $date: Date) {
    unduMarkStudentAbsent(_id: $_id, date: $date) {
      _id
      firstName
      lastName
      daysAbsent
    }
  }
`

const MARK_STUDENT_LATE = gql`
  mutation markStudentLate($_id: ID!, $date: Date) {
    markStudentLate(_id: $_id, date: $date) {
      _id
      firstName
      lastName
      daysLate
      responsibilityPoints
    }
  }
`

const UNDO_MARK_STUDENT_LATE = gql`
  mutation unduMarkStudentLate($_id: ID!, $date: Date) {
    unduMarkStudentLate(_id: $_id, date: $date) {
      _id
      firstName
      lastName
      daysLate
      responsibilityPoints
    }
  }
`

const StudentInfoDisplay = ({ student, periodName, todaysDate }) => {
  const [attendanceToggle, setAttendanceToggle] = useState(false)

  const {
    firstName,
    lastName,
    nickName,
    schoolID,
    responsibilityPoints,
    _id,
    period,
    daysAbsent,
    daysLate,
    desk,
  } = student
  const generalDate = new Date()

  const markingPeriod = 'FOURTH'
  const grade = CurrentGradeCalculator({ student, markingPeriod, todaysDate })

  const [markStudentAbsent] = useMutation(MARK_STUDENT_ABSENT, {
    variables: {
      _id: _id,
      date: todaysDate,
      assignedDate: todaysDate,
      period: period,
    },
    refetchQueries: ['findEligibleStudents', 'FindStudent'],
    // update(client, { data: { markStudentAbsent } }) {
    // 	const { findStudentByPeriodAndDesk } = client.readQuery({
    // 		query: FIND_STUDENT_QUERY,
    // 		variables: { period: periodName, desk: desk }
    // 	})
    // 	const { daysAbsent, __typename } = findStudentByPeriodAndDesk

    // 	client.writeQuery({
    // 		query: gql`
    // 			query markStudentAbsentCacheUpdate($period: periodName!, $desk: Int!) {
    // 				findStudentByPeriodAndDesk(period: $period, desk: $desk) {
    // 					_id
    // 					daysAbsent
    // 				}
    // 			}
    // 		`,
    // 		variables: { period: periodName, desk: desk },
    // 		data: {
    // 			findStudentByPeriodAndDesk: { _id: _id, __typename, daysAbsent }
    // 		}
    // 	})
    // }
  })
  const [unduMarkStudentAbsent] = useMutation(UNDO_MARK_STUDENT_ABSENT, {
    variables: { _id: _id, date: todaysDate },
    refetchQueries: ['findEligibleStudents'],
    update(client, { data: { unduMarkStudentAbsent } }) {
      const { findStudentByPeriodAndDesk } = client.readQuery({
        query: FIND_STUDENT_QUERY,
        variables: { period: periodName, desk: desk },
      })
      const { daysAbsent, __typename } = findStudentByPeriodAndDesk

      client.writeQuery({
        query: gql`
          query unduMarkStudentAbsentCacheUpdate(
            $period: periodName!
            $desk: Int!
          ) {
            findStudentByPeriodAndDesk(period: $period, desk: $desk) {
              _id
              daysAbsent
            }
          }
        `,
        variables: { period: periodName, desk: desk },
        data: {
          findStudentByPeriodAndDesk: { _id: _id, __typename, daysAbsent },
        },
      })
    },
  })
  const [markStudentLate] = useMutation(MARK_STUDENT_LATE, {
    variables: { _id: _id, date: todaysDate },
    update(client, { data: { markStudentLate } }) {
      const { findStudentByPeriodAndDesk } = client.readQuery({
        query: FIND_STUDENT_QUERY,
        variables: { period: periodName, desk: desk },
      })
      const {
        daysLate,
        responsibilityPoints,
        __typename,
      } = findStudentByPeriodAndDesk

      client.writeQuery({
        query: gql`
          query markStudentLateCacheUpdate($period: periodName!, $desk: Int!) {
            findStudentByPeriodAndDesk(period: $period, desk: $desk) {
              _id
              daysLate
              responsibilityPoints
            }
          }
        `,
        variables: { period: periodName, desk: desk },
        data: {
          findStudentByPeriodAndDesk: {
            _id: _id,
            __typename,
            daysLate,
            responsibilityPoints,
          },
        },
      })
    },
  })
  const [unduMarkStudentLate] = useMutation(UNDO_MARK_STUDENT_LATE, {
    variables: { _id: _id, date: todaysDate },
    update(client, { data: { unduMarkStudentLate } }) {
      const { findStudentByPeriodAndDesk } = client.readQuery({
        query: FIND_STUDENT_QUERY,
        variables: { period: periodName, desk: desk },
      })
      const {
        daysLate,
        responsibilityPoints,
        __typename,
      } = findStudentByPeriodAndDesk
      client.writeQuery({
        query: gql`
          query unduMarkStudentLateCacheUpdate(
            $period: periodName!
            $desk: Int!
          ) {
            findStudentByPeriodAndDesk(period: $period, desk: $desk) {
              _id
              daysLate
              responsibilityPoints
            }
          }
        `,
        variables: { period: periodName, desk: desk },
        data: {
          findStudentByPeriodAndDesk: {
            _id: _id,
            __typename,
            daysLate,
            responsibilityPoints,
          },
        },
      })
    },
  })

  return (
    <div
      style={
        daysAbsent !== null && daysAbsent.includes(todaysDate)
          ? {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              paddingTop: '2%',
              backgroundColor: 'var(--red)',
            }
          : {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              paddingTop: '2%',
              backgroundColor: 'var(--blue)',
            }
      }
    >
      <>
        {!attendanceToggle ? (
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
              }}
            >
              <Link to={`/dashboard/roster-profile/student/${_id}`}>
                <div
                  style={{
                    fontSize: '200%',
                    textDecoration: 'underline',
                    color: 'var(--white)',
                  }}
                >
                  {nickName === null || nickName === '' ? firstName : nickName}{' '}
                  {lastName}
                </div>
                <div
                  style={{
                    fontSize: '150%',
                    textDecoration: 'underline',
                    color: 'var(--white)',
                  }}
                >
                  Points: {responsibilityPoints}
                </div>
                <div
                  style={{
                    fontSize: '150%',
                    textDecoration: 'underline',
                    color: 'var(--white)',
                  }}
                >
                  Current Grade: {grade}
                </div>
              </Link>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <button
                style={{
                  fontSize: '130%',
                  textShadow: '3px 3px 3px var(--grey)',
                  borderRadius: '5px',
                  backgroundColor: 'var(--white)',
                  color: 'var(--blue)',
                  height: '3rem',
                  width: '10rem',
                  marginTop: '10%',
                  boxShadow: '1px 1px 1px black',
                }}
                onClick={() => {
                  setAttendanceToggle(true)
                }}
              >
                Attendance
              </button>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateRows: '1fr 2fr',
              alignItems: 'center',
            }}
          >
            <>
              <div style={{ fontSize: '180%' }}>
                {firstName + ' ' + lastName}
              </div>
              <div style={{ fontSize: '130%' }}>
                <TodaysDate date={generalDate}></TodaysDate>
              </div>
            </>
            {daysAbsent !== null && daysAbsent.includes(todaysDate) ? (
              <button
                style={{
                  height: '2rem',
                  fontSize: '120%',
                  textShadow: '3px 3px 3px var(--grey)',
                  color: 'var(--blue)',
                  marginBottom: '10%',
                }}
                onClick={() => {
                  unduMarkStudentAbsent()
                  setAttendanceToggle(false)
                }}
              >
                Undo Absence
              </button>
            ) : (
              <button
                style={{
                  height: '2rem',
                  fontSize: '120%',
                  textShadow: '3px 3px 3px var(--grey)',
                  color: 'var(--blue)',
                  marginBottom: '10%',
                }}
                onClick={() => {
                  markStudentAbsent()
                  setAttendanceToggle(false)
                }}
              >
                Absent
              </button>
            )}
            {daysLate !== null && daysLate.includes(todaysDate) ? (
              <button
                style={{
                  height: '2rem',
                  fontSize: '120%',
                  textShadow: '3px 3px 3px var(--grey)',
                  color: 'var(--blue)',
                  marginBottom: '10%',
                }}
                onClick={() => {
                  unduMarkStudentLate()
                  setAttendanceToggle(false)
                }}
              >
                Undu Lateness
              </button>
            ) : (
              <button
                style={{
                  height: '2rem',
                  fontSize: '120%',
                  textShadow: '3px 3px 3px var(--grey)',
                  color: 'var(--blue)',
                  marginBottom: '10%',
                }}
                onClick={() => {
                  markStudentLate()
                  setAttendanceToggle(false)
                }}
              >
                Late
              </button>
            )}
            <button
              style={{
                height: '2rem',
                fontSize: '120%',
                textShadow: '3px 3px 3px black',
                color: 'var(--white)',
                backgroundColor: 'var(--red)',
                marginBottom: '10%',
              }}
              onClick={() => setAttendanceToggle(!attendanceToggle)}
            >
              Cancel
            </button>
          </div>
        )}
      </>
    </div>
  )
}

export default StudentInfoDisplay
