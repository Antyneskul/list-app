import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loggerMiddleware from './libs/logger/loggerMiddleware';
import rootReducer from './reducers/rootReducer';

const middlewares = [loggerMiddleware, thunk];

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
