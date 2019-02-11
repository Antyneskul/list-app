import { combineReducers } from 'redux';
import categoriesReducer from './category/categoriesReducer';
import fetchingReducer from './fetching/fetchingReducer';

export default combineReducers({
    categories: categoriesReducer,
    fetch: fetchingReducer
});
