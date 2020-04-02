import axios from 'axios';


export const SET_RACING = 'SET_RACING';
export const ADD_RACING_OFFSET = 'ADD_RACING_OFFSET';
export const REDUCE_RACING_OFFSET = 'REDUCE_RACING_OFFSET';
export const RESET = 'RESET';

export const fetchRacing = (offset = 0,driver) => {
    return async (dispatch, getState) => {
        let res = await axios.get(`http://ergast.com/api/f1/drivers/${driver}/results.json?limit=30&offset=` + offset);
        if (res.status !== 200) {
            throw new Error('Something went wrong!');
        }
        const data = await res.data.MRData.RaceTable.Races;

        dispatch({
            type: SET_RACING,
            racing: data
        });
    };
};

export const addOffset = (offset) => {
    return {type: ADD_RACING_OFFSET, offset};
};

export const reduceOffset = (offset) => {
    return {type: REDUCE_RACING_OFFSET, offset};
};

export const reset = () => {
    return {type: RESET};
};




