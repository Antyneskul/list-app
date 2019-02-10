import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middlewares = [thunk];

const configureStore = (initialState = {
    categories: {
        people: [],
        planets: [],
        starships: [],
        vehicles: []
    }
}) => createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
);

export default configureStore;
