import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterSlice from './slice/state';
// import profileReducer from './reducers/profileSlice';

// const rootReducer = combineReducers({
//     feature: counterSlice,
//     // Add more reducers as needed
// });
// export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: {
        feature: counterSlice
    }
});

// Infer the type of makeStore
export type AppStore = ReturnType<typeof configureStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']