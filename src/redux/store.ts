import  bookSlice  from './features/bookSlice';
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'

const reducers = combineReducers({
    bookSlice
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer: { persistedReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;