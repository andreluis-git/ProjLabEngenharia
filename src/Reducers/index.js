import { combineReducers } from "redux";
import ContentPageReducer from "../components/ContentPage/Reducers/ContentPageReducer";
import AppBaseReducer from "./AppBaseReducer";

export const Reducers = combineReducers({
    contentPageReducer: ContentPageReducer,
    appBaseReducer: AppBaseReducer
})