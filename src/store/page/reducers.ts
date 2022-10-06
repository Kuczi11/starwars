import { createReducer } from '@reduxjs/toolkit';
import { incrementPage, decrementPage } from 'store/page/actions';
import { initialState } from 'store/page/defaultState';

export const pageReducer = createReducer(initialState, (builder) => {
  builder.addCase(incrementPage, (state, action) => {
    state.value += 1;
  });
  builder.addCase(decrementPage, (state, action) => {
    state.value -= 1;
  });
});
