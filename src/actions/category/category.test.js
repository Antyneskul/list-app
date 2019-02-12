import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS, LOAD_CATEGORY, LOAD_CATEGORY_ITEM } from '../actionTypes';
import { API_URL, fetchCategory, fetchCategoryItem, loadCategory, loadCategoryItem } from './category';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


afterEach(() => {
    nock.cleanAll();
});

describe('Category Actions', () => {
    test('should call loadCategory with empty args', () => {
        const action1 = loadCategory({});

        expect(action1).toEqual({
            type: LOAD_CATEGORY,
            id: '',
            payload: []
        });
    });


    test('should call loadCategory with correct args', () => {
        const action1 = loadCategory({id: 'people', payload: [{name: 'Alex'}]});

        expect(action1).toEqual({
            type: LOAD_CATEGORY,
            id: 'people',
            payload: [{name: 'Alex'}]
        });
    });

    test('should call loadCategoryItem with empty args', () => {
        const action1 = loadCategoryItem({});

        expect(action1).toEqual({
            type: LOAD_CATEGORY_ITEM,
            id: '',
            payload: []
        });
    });


    test('should call loadCategoryItem with correct args', () => {
        const action1 = loadCategoryItem({id: 'people', payload: [{name: 'Alex'}]});

        expect(action1).toEqual({
            type: LOAD_CATEGORY_ITEM,
            id: 'people',
            payload: [{name: 'Alex'}]
        });
    });


    test('should call loadCategory from fetchCategory', async () => {
        nock(API_URL)
            .get('/people/')
            .reply(200, {
                    results: [{name: 'Alex'}]

                },
                {
                    'Access-Control-Allow-Origin': '*'
                }
            );

        const store = mockStore({});
        const expectedActions = [
            {
                type: FETCH_START,
                url: 'https://swapi.co/api/people/',

            },
            {
                type: FETCH_SUCCESS
            },
            {
                type: LOAD_CATEGORY,
                id: 'people',
                payload: [{name: 'Alex'}]
            }
        ];

        await store.dispatch(fetchCategory('people'));
        expect(store.getActions()).toEqual(expectedActions);

    });

    test('should call loadCategoryItem from fetchCategoryItem', async () => {
        nock(API_URL)
            .get('/people/?search=Alex')
            .reply(200, {
                    results: [{name: 'Alex'}]

                },
                {
                    'Access-Control-Allow-Origin': '*'
                }
            );

        const store = mockStore({});
        const expectedActions = [
            {
                type: FETCH_START,
                url: 'https://swapi.co/api/people/?search=Alex',
            },
            {
                type: FETCH_SUCCESS
            },
            {
                type: LOAD_CATEGORY_ITEM,
                id: 'people',
                payload: [{name: 'Alex'}]
            }
        ];

        await store.dispatch(fetchCategoryItem({category: 'people', name: 'Alex'}));

        expect(store.getActions()).toEqual(expectedActions);
    });


    test('should call fetchFail from fetchCategory', async () => {
        nock(API_URL)
            .get('/people/')
            .replyWithError('something awful happened');

        const store = mockStore({});
        const expectedActions = [
            {
                type: FETCH_START
            },
            {
                type: FETCH_FAIL,
                error: 'Network request failed'
            }
        ];

        try {
            //
        } catch (e) {
            await store.dispatch(fetchCategory('people'));
            expect(store.getActions()).toEqual(expectedActions);
        }


    });

});





