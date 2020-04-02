import axios from 'axios';

export const SET_DRIVERS = 'SET_DRIVERS';
export const ADD_OFFSET = 'ADD_OFFSET';
export const REDUCE_OFFSET = 'REDUCE_OFFSET';

export const fetchDrivers = (offset = 0) => {
    return async (dispatch, getState) => {

        let res = await axios.get("http://ergast.com/api/f1/drivers.json?limit=30&offset=" + offset);
        if (res.status !== 200) {
            throw new Error('Something went wrong!');
        }
        const data = await res.data.MRData.DriverTable.Drivers;

        dispatch({
            type: SET_DRIVERS,
            drivers: data
        });
    };
};

export const addOffset = (offset) => {
    return {type: ADD_OFFSET, offset};
};

export const reduceOffset = (offset) => {
    return {type: REDUCE_OFFSET, offset};
};
