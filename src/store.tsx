import { configureStore } from "@reduxjs/toolkit";
import blueReducer from './slices/BlueSlice'
import redReducer from './slices/RedSlice'


export const store = configureStore({
    reducer: {
        blueClicks: blueReducer,
        redClicks: redReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;