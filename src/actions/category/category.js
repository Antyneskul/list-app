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

export const fetchStart = () => ({
    type: FETCH_START
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
    dispatch(fetchStart());
    try {
        const {results: payload} = await fetch(`${API_URL}/${category}/`)
            .then(response => response.json());

        dispatch(fetchSuccess());
        dispatch(loadCategory({id: category, payload}));
    } catch (error) {
        dispatch(fetchFail({error}));
    }

};

export const fetchCategoryItem = ({category, name}) => async (dispatch) => {
    dispatch(fetchStart());
    try {
        const {results: payload} = await fetch(`${API_URL}/${category}/?search=${name}`)
            .then(response => response.json());

        dispatch(fetchSuccess());
        dispatch(loadCategoryItem({id: category, payload}));
    } catch (error) {
        dispatch(fetchFail({error}));
    }
};
