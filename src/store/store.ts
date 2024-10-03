import { configureStore } from '@reduxjs/toolkit';
import {usersApi} from "./middlewares/users";
import usersReducer from "./slices/usersSlice";
const store = configureStore({
    reducer: {
        users: usersReducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(usersApi.middleware)
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
