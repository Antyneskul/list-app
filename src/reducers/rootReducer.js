import { combineReducers } from 'redux';
import categoriesReducer from './category/categoriesReducer';

export default combineReducers({
    categories: categoriesReducer
});
