import {configureStore} from "@reduxjs/toolkit";
import {tweetsAPI} from "services/API/tweetsAPI";
import {tweetsReducer} from "./slice";

export const store = configureStore({
	reducer: {
		[tweetsAPI.reducerPath]: tweetsAPI.reducer,
		tweetsAPP: tweetsReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActionPaths: [
					"meta.arg",
					"meta.baseQueryMeta.request",
					"meta.baseQueryMeta.response",
					"payload.headers",
					"payload.config",
					"payload.request",
				],
			},
		}).concat(tweetsAPI.middleware),
});
