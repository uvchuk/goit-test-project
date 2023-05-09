import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const tweetsAPI = createApi({
	reducerPath: "tweetsAPI",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://643d8ea86c30feced8155e77.mockapi.io",
	}),
	endpoints: builder => ({
		fetchUsers: builder.query({
			query: ({page, limit}) => `/users?page=${page}&limit=${limit}`,
			providesTags: ["Users"],
		}),
		followUser: builder.mutation({
			query: ({id, followers, isFollowed}) => ({
				url: `/users/${id}`,
				method: "PUT",
				body: isFollowed ? {followers: followers - 1, isFollowed: false} : {followers: followers + 1, isFollowed: true},
			}),
			invalidatesTags: ["Users"],
		}),
	}),
});

export const {useFetchUsersQuery, useFollowUserMutation} = tweetsAPI;
