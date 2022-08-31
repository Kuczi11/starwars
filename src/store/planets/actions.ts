import { createAction } from '@reduxjs/toolkit';
import { Planet } from 'store/planets/defaultState';

export const fetchPlanet = createAction('planet/fetchPlanet', (query) => ({
  payload: { query },
}));
export const setPlanetSuccess = createAction<Planet>('planet/setPlanetSuccess');
