import { combineReducers } from "redux";
import ContentPageReducer from "../components/ContentPage/Reducers/ContentPageReducer";

export const Reducers = combineReducers({
    contentPageReducer: ContentPageReducer,
})