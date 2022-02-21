// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface IGetUserId {
  Id: string
}

export interface ISignInUser {
  login: string,
  password: string
}
interface IGetUserResponse {
  id: 143432,
  first_name: "Evgenii",
  second_name: "Galimov",
  display_name: "Barnicle",
  login: "Barnicle",
  avatar: null,
  email: "egalimov95@gmail.com",
  phone: "+79046071582"
}
export interface ISignUpUser {
  first_name: "string",
  second_name: "string",
  login: "string",
  email: "string",
  password: "string",
  phone: "string"
}

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ya-praktikum.tech/api/v2/auth/',
    headers: {
      'Content-Type': 'application/json',
    },

  }),
  endpoints: (builder) => ({
    getUser: builder.query<IGetUserResponse, void>({
      query: () => ({
        url: 'user',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
        }
      }),
    }),
    signUpUser: builder.mutation<ISignUpUser, IGetUserId>({
      query: (data) => ({
        url: `signup`,
        method: 'Post',
        headers: {
          'Accept': 'application/json'
        },
        body: { ...data },
      })
    }),
    signInUser: builder.mutation<string, ISignInUser>({
      query: (data) => ({
        url: 'signin',
        method: 'Post',
        headers: {
          'Accept': 'application/json'
        },
        body: { ...data }

      }),
      transformResponse: (response: { data: string }) => response.data,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserQuery, useSignInUserMutation, useSignUpUserMutation } = authApi