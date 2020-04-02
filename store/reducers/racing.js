import {ADD_RACING_OFFSET, REDUCE_RACING_OFFSET, RESET, SET_RACING} from "../actions/racing";

const initialState = {
    racing: [],
    offset: 0
};

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_RACING:
            return {
                ...state,
                racing: action.racing,
            };
        case ADD_RACING_OFFSET:
            return {
                ...state,
                offset: action.offset + 30,
            };
        case REDUCE_RACING_OFFSET:
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
        case RESET:
            return initialState;
    }
    return state;
};

