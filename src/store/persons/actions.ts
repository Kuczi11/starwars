import { createAction } from '@reduxjs/toolkit';
import { Person } from 'store/persons/defaultState';

export const fetchPersons = createAction('persons/fetchPersons', (query) => ({
  payload: { query },
}));
export const setPersonsSuccess = createAction<Person[][]>(
  'persons/setPersonsSuccess'
);
export const setPersonsError = createAction<any>('persons/setPersonsError');
