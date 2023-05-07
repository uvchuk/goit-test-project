import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {REHYDRATE} from "redux-persist";

export const tweetsAPI = createApi({
	reducerPath: "tweetsAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://643d8ea86c30feced8155e77.mockapi.io",
	}),
	extractRehydrationInfo(action, {reducerPath}) {
		if (action.type === REHYDRATE) {
			return action.payload[reducerPath];
		}
	},
	endpoints: builder => ({
		fetchUsers: builder.query({
			query: (page = 1) => `/users?p=${page}&l=3`,
			providesTags: ["Users"],
		}),
		addContact: builder.mutation({
			query: contact => ({url: "/users", method: "POST", body: contact}),
			invalidatesTags: ["Users"],
		}),
		deleteContact: builder.mutation({
			query: id => ({url: `/users/${id}`, method: "DELETE"}),
			invalidatesTags: ["Users"],
		}),
	}),
});

export const {useFetchUsersQuery, useAddContactMutation, useDeleteContactMutation} = tweetsAPI;
