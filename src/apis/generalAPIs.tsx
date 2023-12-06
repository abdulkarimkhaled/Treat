// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ApiConstants from './index'
import { key } from '../config/appKeys'

// Define a service using a base URL and expected endpoints

export const GeneralApi = createApi({
    //defince which reducer to use
    reducerPath: 'generalApiReducer',
    //defince base url of your server
    baseQuery: fetchBaseQuery({ baseUrl: ApiConstants.BASE_URL }),
    //define add params and data to your server call
    endpoints: (builder) => ({


        //add a new post
        getDashboard: builder.query({
            query: (token) => ({
                url: ApiConstants.DASHBOARD,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Apipassword': key,
                    'lang': 'en',
                    'Authorization': 'Bearer ' + token
                }
            })
        }),

        getOrders: builder.query({
            query: (data) => ({
                url: ApiConstants.ORDERS,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Apipassword': key,
                    'lang': 'en',
                    'Authorization': 'Bearer ' + data.token
                },
                params: data.params
            })
        }),

        updateOrderStatus: builder.mutation({
            query: (data) => ({
                url: ApiConstants.UPDATE_ORDER,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Apipassword': key,
                    'lang': 'en',
                    'Authorization': 'Bearer ' + data.token
                },
                body: data.body
            })
        }),

        getServices: builder.query({
            query: (data) => ({
                url: ApiConstants.SERVICES,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Apipassword': key,
                    'lang': 'en',
                    'Authorization': 'Bearer ' + data
                }
            })
        }),

        deleteService: builder.mutation({
            query: (data) => ({
                url: ApiConstants.DELETE_SERVICE + data.id,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Apipassword': key,
                    'lang': 'en',
                    'Authorization': 'Bearer ' + data.token
                }
            })
        }),

        getServicesCategories: builder.query({
            query: (data) => ({
                url: ApiConstants.SERVICES_CATEGORIES,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Apipassword': key,
                    'lang': 'en',
                    'Authorization': 'Bearer ' + data
                }
            })
        }),

        updateService: builder.mutation({
            query: (data) => ({
                url: ApiConstants.UPDATE_SERVICE,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Apipassword': key,
                    'lang': 'en',
                    'Authorization': 'Bearer ' + data.token
                },
                body: data.body
            })
        }),


        getNotifications: builder.query({
            query: (data) => ({
                url: ApiConstants.NOTIFICATIONS,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Apipassword': key,
                    'lang': 'en',
                    'Authorization': 'Bearer ' + data
                }
            })
        }),

        readOneNotification: builder.mutation({
            query: (data) => ({
                url: ApiConstants.READ_ONE_NOTIFICATION + data.id,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Apipassword': key,
                    'lang': 'en',
                    'Authorization': 'Bearer ' + data.token
                }
            })
        }),

        readAllNotification: builder.mutation({
            query: (data) => ({
                url: ApiConstants.READ_ALL_NOTIFICATIONS,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Apipassword': key,
                    'lang': 'en',
                    'Authorization': 'Bearer ' + data
                }
            })
        }),
    }),
})


export const {
    useGetDashboardQuery,
    useGetOrdersQuery,
    useGetServicesQuery,
    useDeleteServiceMutation,
    useGetServicesCategoriesQuery,
    useUpdateServiceMutation,
    useGetNotificationsQuery,
    useReadOneNotificationMutation,
    useReadAllNotificationMutation,
    useUpdateOrderStatusMutation
} = GeneralApi

