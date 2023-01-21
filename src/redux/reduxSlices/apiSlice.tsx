import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const starWarsApi = createApi({
  reducerPath: "starWars",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getFilms: builder.query({
      query: () => "/films?format=json",
      providesTags: ["Post"],
    }),
    getFilmById: builder.query({
      query: (episode_id) => `/films/search?q=${episode_id}?format=json`,
    }),
    addNewMovie: builder.mutation({
      query: (initialMovie) => ({
        url: "/my_add_Movie_endpoint",
        method: "POST",
        // the entire post object as the body of the request
        body: initialMovie,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetFilmsQuery, useGetFilmByIdQuery, useAddNewMovieMutation } =
  starWarsApi;
