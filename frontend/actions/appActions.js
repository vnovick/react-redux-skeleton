import { appActionTypes } from 'constants/actionTypes';

export const setState = _ => dispatch => {
        dispatch({
            type: appActionTypes.SET_STATE
        })
};
