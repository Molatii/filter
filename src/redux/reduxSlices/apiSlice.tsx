import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const starWarsApi = createApi({
  reducerPath: "starWars",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api" }),
  endpoints: (builder) => ({
    getFilms: builder.query({
      query: () => "/films?format=json",
    }),
    getFilmById: builder.query({
      query: (episode_id) => `/films/${episode_id}?format=json`,
    }),
  }),
});

export const { useGetFilmsQuery, useGetFilmByIdQuery } = starWarsApi;
