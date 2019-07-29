/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { periodName } from "../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: removeStudent
// ====================================================

export interface removeStudent_removeStudent_student {
  __typename: "Student";
  lastName: string;
  firstName: string;
  period: periodName;
}

export interface removeStudent_removeStudent {
  __typename: "RemoveStudentPayLoad";
  student: removeStudent_removeStudent_student;
}

export interface removeStudent {
  removeStudent: removeStudent_removeStudent;
}

export interface removeStudentVariables {
  _id: string;
}
