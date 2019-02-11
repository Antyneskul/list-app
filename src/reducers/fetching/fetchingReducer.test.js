import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from '../../actions/actionTypes';
import fetchingReducer from './fetchingReducer';


describe('FETCHING_REDUCER', () => {
    it('handles action with unknown type', () => {
        expect(fetchingReducer(undefined, {})).toEqual({});
    });

    it('handles action with type FETCH_START', () => {

        const action = {
            type: FETCH_START
        };

        expect(fetchingReducer({}, action)).toEqual({
            pending: true,
            error: undefined
        });
    });

    it('handles action with type FETCH_SUCCESS', () => {

        const action = {
            type: FETCH_SUCCESS
        };

        expect(fetchingReducer({}, action)).toEqual({
            pending: false,
            error: undefined
        });
    });

    it('handles action with type FETCH_FAIL', () => {

        const action = {
            type: FETCH_FAIL,
            error: 'ERROR'
        };

        expect(fetchingReducer({}, action)).toEqual({
            pending: false,
            error: 'ERROR'
        });
    });
});
