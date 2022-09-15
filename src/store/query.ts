import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const peopleDataApi = createApi({
  reducerPath: 'peopleDataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    getPersonByName: builder.query({
      query: (name: string) => `https://swapi.dev/api/people/?search=${name}`,
    }),
    getPlanet: builder.query({
      query: (planet: string) => planet,
    }),
    getFilm: builder.query({
      query: (film: string) => film,
    }),
    getNextPage: builder.query({
      query: (url: string) => url,
    }),
    getPreviousPage: builder.query({
      query: (url: string) => url,
    }),
  }),
});

export const {
  useLazyGetPersonByNameQuery,
  useGetPlanetQuery,
  useGetFilmQuery,
} = peopleDataApi;
