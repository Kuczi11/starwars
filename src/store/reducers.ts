import { combineReducers } from '@reduxjs/toolkit';
import personsReducer from 'store/persons/reducer';
import peopleDataApi from 'store/query';

const rootReducer = combineReducers({
  persons: personsReducer,
});

export default rootReducer;
