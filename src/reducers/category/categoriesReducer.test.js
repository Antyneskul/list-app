import { LOAD_CATEGORY, LOAD_CATEGORY_ITEM } from '../../actions/actionTypes';
import categoriesReducer from './categoriesReducer';


describe('CATEGORIES_REDUCER', () => {
    const categoryData = [
        {name: 'Alex'}
    ];

    it('handles action with unknown type', () => {
        expect(categoriesReducer(undefined, {})).toEqual({});
    });

    it('handles action with type LOAD_CATEGORY', () => {

        const action = {
            type: LOAD_CATEGORY,
            id: 'people',
            payload: categoryData
        };

        expect(categoriesReducer({}, action)).toEqual({people: {data: categoryData, loaded: true}});
    });

    it('handles action with type LOAD_CATEGORY_ITEM', () => {

        const action = {
            type: LOAD_CATEGORY_ITEM,
            id: 'people',
            payload: categoryData
        };

        expect(categoriesReducer({}, action)).toEqual({people: {data: categoryData}});
    });
});
