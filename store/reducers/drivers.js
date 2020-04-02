import {ADD_OFFSET, REDUCE_OFFSET, SET_DRIVERS} from "../actions/drivers";

const initialState = {
    drivers: [],
    offset: 0
};

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_DRIVERS:
            return {
                ...state,
                drivers: action.drivers,
            };
        case ADD_OFFSET:
            return {
                ...state,
                offset: action.offset + 30,
            };
        case REDUCE_OFFSET:
            if (action.offset > 30) {
                return {
                    ...state,
                    offset: action.offset - 30,
                };
            } else {
                return {
                    ...state,
                    offset: 0,
                };
            }
    }

    return state;
};

