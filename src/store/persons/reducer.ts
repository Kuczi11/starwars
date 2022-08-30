import { createReducer } from '@reduxjs/toolkit';
import initialPersons from 'store/persons/defaultState';
import { setPersonsError, setPersonsSuccess } from 'store/persons/actions';

const personsReducer = createReducer(initialPersons, (builder) => {
  builder.addCase(setPersonsSuccess, (state, action) => {
    state.persons = action.payload;
  });
  builder.addCase(setPersonsError, (state, action) => {
    state.errorMessage = action.payload;
  });
});

export default personsReducer;
