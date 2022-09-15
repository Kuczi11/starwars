import { createReducer } from '@reduxjs/toolkit';
import { changeInput } from 'store/input/actions';
import { initialInputValue } from 'store/input/defaultState';

export const inputReducer = createReducer(initialInputValue, (builder) => {
  builder.addCase(changeInput, (state, action) => {
    state.value = action.payload;
  });
});
