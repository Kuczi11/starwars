import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FilmProps } from 'components/SearchResults/FilmDetails/FilmDetails';
import { Person } from 'components/SearchResults/SearchResults';

export interface PeopleData {
  next: string | null;
  previous: string | null;
  results: Person[];
}

export interface QueryArguments {
  name: string;
  page: number;
}

export const peopleDataApi = createApi({
  reducerPath: 'peopleDataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    getPersonByName: builder.query<PeopleData, QueryArguments>({
      query: ({ name, page = 1 }) =>
        `https://swapi.dev/api/people/?search=${name}&page=${page}`,
    }),
    getPlanet: builder.query({
      query: (planet: string) => planet,
    }),
    getFilm: builder.query<FilmProps, string>({
      query: (film: string) => film,
    }),
  }),
});

export const {
  useLazyGetPersonByNameQuery,
  useGetPlanetQuery,
  useGetFilmQuery,
} = peopleDataApi;
