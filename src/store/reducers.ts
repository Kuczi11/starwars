import { combineReducers } from '@reduxjs/toolkit';
import personsReducer from 'store/persons/reducer';
import { inputReducer } from 'store/input/reducer';
import { peopleDataApi } from 'store/query';

const rootReducer = combineReducers({
  [peopleDataApi.reducerPath]: peopleDataApi.reducer,
  persons: personsReducer,
  input: inputReducer,
});

export default rootReducer;
