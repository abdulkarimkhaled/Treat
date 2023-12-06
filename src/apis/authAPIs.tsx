// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ApiConstants from './index'
import { key } from '../config/appKeys'
// Define a service using a base URL and expected endpoints

export const AuthApi = createApi({
    //defince which reducer to use
    reducerPath: 'authApiReducer',
    //defince base url of your server
    baseQuery: fetchBaseQuery({ baseUrl: ApiConstants.BASE_URL }),
    //define add params and data to your server call
    endpoints: (builder) => ({


        //add a new post
        postLogin: builder.mutation({
            query: data => ({
                url: ApiConstants.LOGIN,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Apipassword': key,
                    'lang': 'en'
                },
                body: data
            })
        }),

    }),
})


export const {
    usePostLoginMutation,
} = AuthApi

