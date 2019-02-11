import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import loggerMiddleware from './libs/logger/loggerMiddleware';
import rootReducer from './reducers/rootReducer';

const middlewares = [loggerMiddleware, thunk];

const configureStore = (initialState = {
    categories: {
        people: {
            data: [],
            loaded: false
        },
        planets: {
            data: [],
            loaded: false
        },
        starships: {
            data: [],
            loaded: false
        },
        vehicles: {
            data: [],
            loaded: false
        }
    },
    fetch: {
        pending: false
    }
}) => createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
);

export default configureStore;
