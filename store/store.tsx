import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feautures/counterSlice";
import { endorsementApi } from "../feautures/endorsementApiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [endorsementApi.reducerPath]: endorsementApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(endorsementApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
