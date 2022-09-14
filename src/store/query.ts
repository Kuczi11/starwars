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
    getNextPage: builder.query({
      query: (url: string) => url,
    }),
    getPreviousPage: builder.query({
      query: (url: string) => url,
    }),
  }),
});

export const { useLazyGetPersonByNameQuery } = peopleDataApi;
