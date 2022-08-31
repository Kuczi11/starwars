import { combineReducers } from '@reduxjs/toolkit';
import personsReducer from 'store/persons/reducer';
import planetReducer from 'store/planets/reducer';

const rootReducer = combineReducers({
  persons: personsReducer,
  planet: planetReducer,
});

export default rootReducer;
