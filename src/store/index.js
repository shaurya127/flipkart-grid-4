import { createStore, combineReducers, applyMiddleware } from "redux";
import { walletReducer } from "./wallet/walletReducer";
import { profileReducer } from "./profile";
import {itemReducer} from './item';
import thunk from "redux-thunk"

export * from './wallet';

const reducers = combineReducers({
  wallet : walletReducer,
  profile: profileReducer,
  item: itemReducer,
})

export const store = createStore(reducers,{},applyMiddleware(thunk));
