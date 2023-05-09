import {createSlice} from "@reduxjs/toolkit";

const someExtraDataSlice = createSlice({
	name: "tweetsAPP",
	initialState: {users: [], page: 1, limit: 3, filter: ""},
	reducers: {
		syncUsers(state, action) {
			action.payload.forEach(user => {
				const existingUserIndex = state.users.findIndex(existingUser => existingUser.id === user.id);
				if (existingUserIndex !== -1) {
					state.users[existingUserIndex] = user;
				} else {
					state.users.push(user);
				}
			});
		},
		syncPage(state, action) {
			state.page = action.payload;
		},
		filterTweets(state, action) {
			state.filter = action.payload;
			state.page = 1;
			state.users = [];
		},
	},
});

export const tweetsReducer = someExtraDataSlice.reducer;
export const {syncUsers, syncPage, filterTweets} = someExtraDataSlice.actions;
