import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from '../../actions/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                pending: true,
                error: undefined
            };

        case FETCH_SUCCESS:
            return {
                ...state,
                pending: false,
                error: undefined
            };
        case FETCH_FAIL:
            return {
                ...state,
                pending: false,
                error: action.error
            };
        default:
            return state;
    }

};
