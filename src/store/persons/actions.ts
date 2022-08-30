import { createAction } from '@reduxjs/toolkit';
import { Person } from 'store/persons/defaultState';

export const fetchPersons = createAction(
  'persons/fetchPersons',
  (query: string) => ({
    payload: {
      query,
    },
  })
);
export const setPersonsSuccess = createAction<Person[]>(
  'persons/setPersonsSuccess'
);
export const setPersonsError = createAction<string>('persons/setPersonsError');
