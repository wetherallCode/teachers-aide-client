/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { periodName } from "../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getAllStudents
// ====================================================

export interface getAllStudents_allStudents {
  __typename: "Student";
  _id: string;
  firstName: string;
  lastName: string;
  desk: number;
  period: periodName;
  teacher: string;
  responsibilityPoints: number;
}

export interface getAllStudents_periodName_enumValues {
  __typename: "__EnumValue";
  name: string;
}

export interface getAllStudents_periodName {
  __typename: "__Type";
  enumValues: getAllStudents_periodName_enumValues[] | null;
}

export interface getAllStudents {
  allStudents: getAllStudents_allStudents[];
  totalStudents: number;
  periodName: getAllStudents_periodName | null;
}
