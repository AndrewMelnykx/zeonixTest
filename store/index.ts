import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import uiSlice from "./ui/slice";

import { UIInitialState } from "./ui/types";

export interface RootState {
  uiState: UIInitialState;
}

const RootReducer = combineReducers({
  uiState: uiSlice.reducer,
});

const store = configureStore({ reducer: RootReducer });
const UseStoreDispatcher = (): StoreDispatcherTypes => store.dispatch;

export type StoreDispatcherTypes = typeof store.dispatch;

export { UseStoreDispatcher, RootReducer };
export const UseAppSelector = useSelector;
export default store;
