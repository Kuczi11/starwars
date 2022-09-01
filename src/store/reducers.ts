import { combineReducers } from '@reduxjs/toolkit';
import personsReducer from 'store/persons/reducer';

const rootReducer = combineReducers({
  persons: personsReducer,
});

export default rootReducer;
