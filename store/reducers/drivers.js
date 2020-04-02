import {SET_DRIVERS} from "../actions/drivers";


const initialState = {
    drivers: [],
};

export default (state = initialState, action) => {

    switch (action.type) {
        case SET_DRIVERS:
            return {
                drivers: action.drivers,
            };
    }

    return state;
};

