import { configureStore, Action } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { useDispatch } from "react-redux";

import { voteListReducer } from "../features/voteList";
import { voteWriteReducer } from "../features/voteCreate";

export const rootReducer = combineReducers({
  voteListReducer,
  voteWriteReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk = ThunkAction<void, IRootState, null, Action<string>>;

export default store;
