import { createReducer } from '@reduxjs/toolkit';
import { setPlanetSuccess } from 'store/planets/actions';
import planet from 'store/planets/defaultState';

const planetReducer = createReducer(planet, (builder) => {
  builder.addCase(setPlanetSuccess, (state, action) => {
    state.planet = action.payload;
  });
});

export default planetReducer;
