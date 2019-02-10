import { LOAD_CATEGORY, LOAD_CATEGORY_ITEM } from '../actions/actionTypes';
import categoriesReducer from './categoriesReducer';


describe('CATEGORIES_REDUCER', () => {
    it('handles action with unknown type', () => {
        expect(categoriesReducer(undefined, {})).toEqual({});
    });

    it('handles action with type LOAD_CATEGORY', () => {
        const categoryData = [
            {name: 'Alex'}
        ];
        const action = {
            type: LOAD_CATEGORY,
            id: 'people',
            payload: categoryData
        };

        expect(categoriesReducer({}, action)).toEqual({people: categoryData});
    });

    it('handles action with type LOAD_CATEGORY_ITEM', () => {
        const categoryData = [
            {name: 'Alex'}
        ];
        const action = {
            type: LOAD_CATEGORY_ITEM,
            id: 'people',
            payload: categoryData
        };

        expect(categoriesReducer({}, action)).toEqual({people: categoryData});
    });
});
