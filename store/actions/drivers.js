import axios from 'axios';

export const SET_DRIVERS = 'SET_DRIVERS';

export const fetchDrivers = (offset = null) => {
    return async (dispatch, getState) => {

        let res = await axios.get("http://ergast.com/api/f1/drivers.json?limit=30&offset="+offset);
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
