/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { periodName } from "../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: addStudent
// ====================================================

export interface addStudent_addStudent {
  __typename: "Student";
  _id: string;
  firstName: string;
  lastName: string;
  period: periodName;
  responsibilityPoints: number;
  desk: number;
  teacher: string;
}

export interface addStudent {
  addStudent: addStudent_addStudent;
}

export interface addStudentVariables {
  firstName: string;
  lastName: string;
  period: periodName;
  desk: number;
  responsibilityPoints: number;
  teacher: string;
}
