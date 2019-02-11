import { LOAD_CATEGORY, LOAD_CATEGORY_ITEM } from '../../actions/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case LOAD_CATEGORY:
            return {
                ...state,
                [action.id]: {
                    loaded: true,
                    data: action.payload
                }
            };

        case LOAD_CATEGORY_ITEM:
            return {
                ...state,
                [action.id]: {
                    data: action.payload
                }
            };
        default:
            return state;
    }

};
