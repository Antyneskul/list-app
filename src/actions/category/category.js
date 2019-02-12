import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS, LOAD_CATEGORY, LOAD_CATEGORY_ITEM } from '../actionTypes';

export const loadCategory = ({id = '', payload = []}) => ({
    type: LOAD_CATEGORY,
    id,
    payload
});

export const loadCategoryItem = ({id = '', payload = []}) => ({
    type: LOAD_CATEGORY_ITEM,
    id,
    payload
});

export const fetchStart = ({url = ''}) => ({
    type: FETCH_START,
    url
});

export const fetchSuccess = () => ({
    type: FETCH_SUCCESS
});

export const fetchFail = ({error}) => ({
    type: FETCH_FAIL,
    error
});

export const API_URL = 'https://swapi.co/api';

export const fetchCategory = category => async (dispatch) => {
    const url = `${API_URL}/${category}/`;
    dispatch(fetchStart({url}));
    try {
        const response = await fetch(url);

        if (response.status === 200) {
            const {results: payload} = await response.json();

            dispatch(fetchSuccess());
            dispatch(loadCategory({id: category, payload}));
        } else {
            dispatch(fetchFail({error: 'Not Found'}));
        }
    } catch (error) {
        dispatch(fetchFail({error: error.message}));
    }

};

export const fetchCategoryItem = ({category, name}) => async (dispatch) => {
    const url = `${API_URL}/${category}/?search=${name}`;
    dispatch(fetchStart({url}));
    try {
        const response = await fetch(`${API_URL}/${category}/?search=${name}`);

        if (response.status === 200) {
            const {results: payload} = await response.json();

            dispatch(fetchSuccess());
            dispatch(loadCategoryItem({id: category, payload}));
        } else {
            dispatch(fetchFail({error: 'Not Found'}));
        }
    } catch (error) {
        dispatch(fetchFail({error: error.message}));
    }
};
