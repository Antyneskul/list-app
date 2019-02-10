import { LOAD_CATEGORY, LOAD_CATEGORY_ITEM } from '../actionTypes';

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

export const API_URL = 'https://swapi.co/api';

export const fetchCategory = category => async (dispatch) => {
    try {
        const {results: payload} = await fetch(`${API_URL}/${category}/`)
            .then(response => response.json());

        dispatch(loadCategory({id: category, payload}));
    } catch (e) {
        console.error(e);
    }

};

export const fetchCategoryItem = ({category, name}) => async (dispatch) => {
    try {
        const {results: payload} = await fetch(`${API_URL}/${category}/?search=${name}`)
            .then(response => response.json());
        dispatch(loadCategoryItem({id: category, payload}));
    } catch (e) {
        console.error(e);
    }
};
